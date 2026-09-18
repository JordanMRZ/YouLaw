import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { exercises, lessonExercisesById, lessonsByLevel } from '../data/mockData'
import { getProgress, saveProgress } from '../services/localStorage'
import { activeProgressUserId } from '../services/progressScope'

const levelRank = { A1: 0, A2: 1, B1: 2, B2: 3, C1: 4 }
const lifeLockDurationMs = 2 * 60 * 1000

export function useLearningProgress() {
  const totalXp = ref(340)
  const learningLevel = ref('A1')
  const lives = ref(3)
  const lockUntil = ref(null)
  const lockRemainingSeconds = ref(0)
  const selectedLesson = ref(null)
  const selectedAnswer = ref(null)
  const answerStatus = ref(null)
  const exerciseIndex = ref(0)
  const exerciseOrder = ref([])
  const wrongReviewQueue = ref([])
  const completedLessons = ref([])
  const lessonSummary = ref(null)
  const activeExercises = ref([])
  let lastCorrectOptionIndex = -1
  const lessons = computed(() => lessonsByLevel[learningLevel.value] || lessonsByLevel.A1)
  const availableExercises = computed(() => {
    const lessonExercises = selectedLesson.value ? lessonExercisesById[selectedLesson.value.id] : null
    return lessonExercises || exercises.filter((exercise) => exercise.difficulty === learningLevel.value)
  })
  const exerciseCount = computed(() => activeExercises.value.length)
  const currentExercise = computed(() => {
    const order = exerciseOrder.value.length ? exerciseOrder.value : activeExercises.value.map((_, index) => index)
    const index = order[exerciseIndex.value % order.length] ?? 0
    return activeExercises.value[index] ?? activeExercises.value[0]
  })
  const isLivesLocked = computed(() => Boolean(lockUntil.value) && Date.now() < Number(lockUntil.value))

  function syncLockState() {
    if (!lockUntil.value) {
      lockRemainingSeconds.value = 0
      return
    }

    const remainingMs = Number(lockUntil.value) - Date.now()
    if (remainingMs <= 0) {
      lives.value = 3
      lockUntil.value = null
      lockRemainingSeconds.value = 0
      saveProgress({ lives: lives.value, lockUntil: null })
      return
    }

    lockRemainingSeconds.value = Math.ceil(remainingMs / 1000)
  }

  let lockTimer = null

  function loadFromStorage() {
    const savedProgress = getProgress()
    totalXp.value = Number(savedProgress.xp ?? 340)
    learningLevel.value = savedProgress.englishLevel || 'A1'
    lives.value = Number(savedProgress.lives ?? 3)
    lockUntil.value = savedProgress.lockUntil || null
    completedLessons.value = savedProgress.completedLessons || []
    syncLockState()
  }

  watch(activeProgressUserId, (userId) => {
    if (userId) loadFromStorage()
  }, { immediate: true })

  onMounted(() => {
    syncLockState()
    lockTimer = window.setInterval(syncLockState, 1000)
  })

  onBeforeUnmount(() => {
    if (lockTimer) window.clearInterval(lockTimer)
  })

  function prepareExerciseSet() {
    activeExercises.value = availableExercises.value.map((exercise) => {
      const options = [...exercise.options]
      let correctOptionIndex = -1

      do {
        for (let index = options.length - 1; index > 0; index -= 1) {
          const randomIndex = Math.floor(Math.random() * (index + 1))
          ;[options[index], options[randomIndex]] = [options[randomIndex], options[index]]
        }
        correctOptionIndex = options.indexOf(exercise.correctAnswer)
      } while (options.length > 1 && correctOptionIndex === lastCorrectOptionIndex)

      lastCorrectOptionIndex = correctOptionIndex
      return { ...exercise, options }
    })
  }

  function openLesson(lesson) {
    if (lesson.state === 'locked' || isLivesLocked.value) return

    selectedLesson.value = lesson
    lessonSummary.value = null
    selectedAnswer.value = null
    answerStatus.value = null
    prepareExerciseSet()
    exerciseOrder.value = activeExercises.value.map((_, index) => index)
    wrongReviewQueue.value = []
    exerciseIndex.value = 0
  }

  function startLesson() {
    selectedAnswer.value = null
    answerStatus.value = null
    exerciseOrder.value = activeExercises.value.map((_, index) => index)
    wrongReviewQueue.value = []
    exerciseIndex.value = 0
  }

  function setLearningLevel(level) {
    if (level && levelRank[level] !== undefined) learningLevel.value = level
  }

  function selectAnswer(answer, correctAnswer) {
    if (answerStatus.value === 'correct' || isLivesLocked.value) return 'locked'

    selectedAnswer.value = answer
    const isCorrect = answer === correctAnswer
    answerStatus.value = isCorrect ? 'correct' : 'incorrect'

    if (isCorrect) {
      totalXp.value += 10
      saveProgress({ xp: totalXp.value, lives: lives.value, lockUntil: lockUntil.value })
      return 'correct'
    }

    lives.value = Math.max(0, lives.value - 1)
    if (lives.value === 0) {
      lockUntil.value = Date.now() + lifeLockDurationMs
      lockRemainingSeconds.value = Math.ceil(lifeLockDurationMs / 1000)
    }

    saveProgress({ xp: totalXp.value, lives: lives.value, lockUntil: lockUntil.value })
    return lives.value === 0 ? 'blocked' : 'lost-life'
  }

  function nextExercise() {
    if (!answerStatus.value) return

    const currentPosition = exerciseOrder.value[exerciseIndex.value]
    if (answerStatus.value === 'incorrect' && currentPosition !== undefined && !wrongReviewQueue.value.includes(currentPosition)) {
      wrongReviewQueue.value.push(currentPosition)
    }

    if (exerciseIndex.value >= exerciseOrder.value.length - 1) {
      if (wrongReviewQueue.value.length) {
        exerciseOrder.value = [...wrongReviewQueue.value]
        wrongReviewQueue.value = []
        exerciseIndex.value = 0
        selectedAnswer.value = null
        answerStatus.value = null
        return
      }

      if (!completedLessons.value.includes(selectedLesson.value.id)) completedLessons.value.push(selectedLesson.value.id)
      selectedLesson.value.state = 'done'
      const currentLessonIndex = lessons.value.findIndex((lesson) => lesson.id === selectedLesson.value.id)
      const nextLesson = lessons.value[currentLessonIndex + 1]
      if (nextLesson && nextLesson.state === 'locked') nextLesson.state = 'current'
      totalXp.value += 20
      saveProgress({ xp: totalXp.value, completedLessons: completedLessons.value, lives: lives.value, lockUntil: lockUntil.value })
      const completedA1 = selectedLesson.value.level === 'A1' && currentLessonIndex === lessons.value.length - 1
      lessonSummary.value = { title: selectedLesson.value.title, xp: 20, nextLevel: completedA1 ? 'A2' : null }
      selectedLesson.value = null
      return
    }

    exerciseIndex.value += 1
    selectedAnswer.value = null
    answerStatus.value = null
  }

  function closeLesson() {
    selectedLesson.value = null
  }

  function clearLessonSummary() {
    lessonSummary.value = null
  }

  function resetLearningProgress() {
    totalXp.value = 340
    learningLevel.value = 'A1'
    lives.value = 3
    lockUntil.value = null
    lockRemainingSeconds.value = 0
    completedLessons.value = []
    Object.values(lessonsByLevel).forEach((levelLessons) => {
      levelLessons.forEach((lesson, index) => { lesson.state = index === 0 ? 'current' : 'locked' })
    })
    selectedLesson.value = null
    selectedAnswer.value = null
    answerStatus.value = null
    exerciseOrder.value = []
    activeExercises.value = []
    lastCorrectOptionIndex = -1
    wrongReviewQueue.value = []
    exerciseIndex.value = 0
    lessonSummary.value = null
    saveProgress({ xp: totalXp.value, lives: lives.value, lockUntil: null, completedLessons: completedLessons.value })
  }

  return {
    totalXp,
    learningLevel,
    lives,
    lockUntil,
    lockRemainingSeconds,
    isLivesLocked,
    selectedLesson,
    selectedAnswer,
    answerStatus,
    exerciseIndex,
    currentExercise,
    exerciseCount,
    lessons,
    completedLessons,
    lessonSummary,
    openLesson,
    startLesson,
    setLearningLevel,
    selectAnswer,
    nextExercise,
    closeLesson,
    clearLessonSummary,
    resetLearningProgress,
    syncLockState,
  }
}
