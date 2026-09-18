import { computed, ref } from 'vue'
import { diagnosticQuestions, levelOrder } from '../data/diagnosticData'
import { getDiagnosticProgress, saveDiagnosticProgress } from '../services/localStorage'

const questionLimit = 20

export function calculateEnglishLevel({ correctAnswers, totalQuestions }) {
  const score = correctAnswers / totalQuestions
  if (score >= 0.9) return 'C1'
  if (score >= 0.8) return 'B2'
  if (score >= 0.67) return 'B1'
  if (score >= 0.34) return 'A2'
  return 'A1'
}

export function useDiagnosticAssessment() {
  const currentQuestion = ref(null)
  const questionNumber = ref(0)
  const currentLevel = ref('A1')
  const selectedAnswer = ref(null)
  const answerStatus = ref(null)
  const correctAnswers = ref(0)
  const correctStreak = ref(0)
  const usedQuestionIds = ref([])
  const isComplete = ref(false)
  const savedProgress = getDiagnosticProgress()
  const diagnosticCompleted = ref(savedProgress.diagnosticCompleted)
  const englishLevel = ref(savedProgress.englishLevel)
  const diagnosticScore = ref(savedProgress.diagnosticScore)
  const diagnosticDate = ref(savedProgress.diagnosticDate)
  const diagnosticResults = ref(savedProgress.diagnosticResults)
  let advanceTimer = null
  let lastCorrectOptionIndex = -1

  const progress = computed(() => (questionNumber.value / questionLimit) * 100)
  const levelLabel = computed(() => `${currentLevel.value} · ${currentLevel.value === 'A1' ? 'Beginner' : currentLevel.value === 'A2' ? 'Elementary' : currentLevel.value === 'B1' ? 'Intermediate' : currentLevel.value === 'B2' ? 'Upper Intermediate' : 'Advanced'}`)
  const categoryScores = computed(() => {
    const categories = ['vocabulary', 'grammar', 'comprehension']
    return categories.map((category) => {
      const results = (diagnosticResults.value || []).filter((result) => result.category === category)
      const score = results.length ? Math.round((results.filter((result) => result.correct).length / results.length) * 100) : 0
      return { category, score }
    })
  })

  function shuffleOptions(question) {
    const options = [...question.options]
    let correctOptionIndex = -1

    do {
      for (let index = options.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1))
        ;[options[index], options[randomIndex]] = [options[randomIndex], options[index]]
      }
      correctOptionIndex = options.indexOf(question.correctAnswer)
    } while (options.length > 1 && correctOptionIndex === lastCorrectOptionIndex)

    lastCorrectOptionIndex = correctOptionIndex
    return { ...question, options }
  }

  function chooseNextQuestion() {
    const available = diagnosticQuestions.filter((question) => !usedQuestionIds.value.includes(question.id))
    const targetIndex = levelOrder.indexOf(currentLevel.value)
    const ranked = [...available].sort((first, second) => {
      const firstDistance = Math.abs(levelOrder.indexOf(first.level) - targetIndex)
      const secondDistance = Math.abs(levelOrder.indexOf(second.level) - targetIndex)
      return firstDistance - secondDistance
    })

    currentQuestion.value = shuffleOptions(ranked[0])
    usedQuestionIds.value.push(ranked[0].id)
  }

  function start() {
    questionNumber.value = 1
    currentLevel.value = 'A1'
    selectedAnswer.value = null
    answerStatus.value = null
    correctAnswers.value = 0
    correctStreak.value = 0
    usedQuestionIds.value = []
    lastCorrectOptionIndex = -1
    isComplete.value = false
    diagnosticResults.value = []
    chooseNextQuestion()
  }

  function prepare() {
    currentQuestion.value = null
    questionNumber.value = 0
    selectedAnswer.value = null
    answerStatus.value = null
    correctAnswers.value = 0
    correctStreak.value = 0
    usedQuestionIds.value = []
    lastCorrectOptionIndex = -1
    isComplete.value = false
    currentLevel.value = 'A1'
  }

  function answer(answer) {
    if (answerStatus.value || !currentQuestion.value) return
    selectedAnswer.value = answer
    const isCorrect = answer === currentQuestion.value.correctAnswer
    answerStatus.value = isCorrect ? 'correct' : 'incorrect'
    diagnosticResults.value.push({ questionId: currentQuestion.value.id, category: currentQuestion.value.category, level: currentQuestion.value.level, correct: isCorrect })

    if (isCorrect) {
      correctAnswers.value += 1
      correctStreak.value += 1
      if (correctStreak.value >= 2) {
        const nextLevel = Math.min(levelOrder.indexOf(currentLevel.value) + 1, levelOrder.length - 1)
        currentLevel.value = levelOrder[nextLevel]
        correctStreak.value = 0
      }
    } else {
      const previousLevel = Math.max(levelOrder.indexOf(currentLevel.value) - 1, 0)
      currentLevel.value = levelOrder[previousLevel]
      correctStreak.value = 0
    }

    advanceTimer = window.setTimeout(() => {
      advanceTimer = null
      next()
    }, 650)
  }

  function next() {
    if (!answerStatus.value) return
    if (questionNumber.value >= questionLimit) {
      isComplete.value = true
      englishLevel.value = calculateEnglishLevel({ correctAnswers: correctAnswers.value, totalQuestions: questionLimit })
      currentLevel.value = englishLevel.value
      diagnosticScore.value = Math.round((correctAnswers.value / questionLimit) * 100)
      diagnosticDate.value = new Date().toISOString()
      diagnosticCompleted.value = true
      saveDiagnosticProgress({ englishLevel: englishLevel.value, diagnosticScore: diagnosticScore.value, diagnosticResults: diagnosticResults.value })
      return
    }
    questionNumber.value += 1
    selectedAnswer.value = null
    answerStatus.value = null
    chooseNextQuestion()
  }

  function reset() {
    if (advanceTimer) window.clearTimeout(advanceTimer)
    advanceTimer = null
    currentQuestion.value = null
    questionNumber.value = 0
    currentLevel.value = 'A1'
    selectedAnswer.value = null
    answerStatus.value = null
    correctAnswers.value = 0
    correctStreak.value = 0
    usedQuestionIds.value = []
    lastCorrectOptionIndex = -1
    isComplete.value = false
    diagnosticCompleted.value = false
    englishLevel.value = null
    diagnosticScore.value = null
    diagnosticDate.value = null
    diagnosticResults.value = null
  }

  function cancelPendingAdvance() {
    if (advanceTimer) window.clearTimeout(advanceTimer)
    advanceTimer = null
  }

  function setLevelForTesting(level) {
    if (!levelOrder.includes(level)) return
    cancelPendingAdvance()
    currentQuestion.value = null
    questionNumber.value = 0
    currentLevel.value = level
    selectedAnswer.value = null
    answerStatus.value = null
    correctAnswers.value = questionLimit
    correctStreak.value = 0
    usedQuestionIds.value = []
    isComplete.value = false
    englishLevel.value = level
    diagnosticScore.value = 100
    diagnosticDate.value = new Date().toISOString()
    diagnosticCompleted.value = true
    diagnosticResults.value = Array.from({ length: questionLimit }, (_, index) => ({ questionId: index + 1, category: 'testing', level, correct: true }))
    saveDiagnosticProgress({ englishLevel: level, diagnosticScore: 100, diagnosticResults: diagnosticResults.value })
  }

  return { currentQuestion, questionNumber, currentLevel, levelLabel, categoryScores, selectedAnswer, answerStatus, correctAnswers, progress, isComplete, diagnosticCompleted, englishLevel, diagnosticScore, diagnosticDate, diagnosticResults, prepare, start, answer, next, reset, cancelPendingAdvance, setLevelForTesting }
}
