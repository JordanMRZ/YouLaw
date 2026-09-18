<script setup>
import { computed, nextTick, ref, watch } from 'vue'
import { navigation } from './data/mockData'
import { useLearningProgress } from './composables/useLearningProgress'
import Sidebar from './components/layout/Sidebar.vue'
import TopBar from './components/layout/TopBar.vue'
import ExerciseModal from './components/lessons/ExerciseModal.vue'
import LessonPreparation from './components/lessons/LessonPreparation.vue'
import DiagnosticAssessment from './components/lessons/DiagnosticAssessment.vue'
import LessonComplete from './components/lessons/LessonComplete.vue'
import SettingsModal from './components/layout/SettingsModal.vue'
import DashboardView from './views/DashboardView.vue'
import LessonsView from './views/LessonsView.vue'
import AchievementsView from './views/AchievementsView.vue'
import InitialAssessmentView from './views/InitialAssessmentView.vue'
import LoginView from './views/LoginView.vue'
import { useDiagnosticAssessment } from './composables/useDiagnosticAssessment'
import { useAuth } from './composables/useAuth'
import { clearAllLocalData } from './services/localStorage'

const { isAuthenticated, user, logout } = useAuth()

const activeSection = ref('Inicio')
const currentFlow = ref('dashboard')
const showSettings = ref(false)
const isDarkMode = ref(localStorage.getItem('youlaw-dark-mode') === 'true')
const maxLives = 3
const lifeShake = ref(false)
const {
  totalXp,
  lives,
  isLivesLocked,
  lockRemainingSeconds,
  selectedLesson,
  selectedAnswer,
  answerStatus,
  exerciseIndex,
  currentExercise,
  exerciseCount,
  lessons: learningLessons,
  setLearningLevel,
  lessonSummary,
  openLesson,
  startLesson,
  selectAnswer,
  nextExercise,
  closeLesson,
  clearLessonSummary,
  resetLearningProgress,
} = useLearningProgress()
const {
  currentQuestion,
  questionNumber,
  currentLevel,
  levelLabel,
  categoryScores,
  selectedAnswer: diagnosticSelectedAnswer,
  answerStatus: diagnosticAnswerStatus,
  correctAnswers,
  progress,
  isComplete,
  diagnosticCompleted,
  englishLevel,
  diagnosticScore,
  start: startDiagnosticTest,
  answer: answerDiagnostic,
  next: nextDiagnostic,
  reset: resetDiagnostic,
  cancelPendingAdvance,
  setLevelForTesting,
} = useDiagnosticAssessment()
const diagnosticReady = computed(() => diagnosticCompleted.value === true
  && ['A1', 'A2', 'B1', 'B2', 'C1'].includes(englishLevel.value)
  && Number.isFinite(diagnosticScore.value))

function navigate(section) {
  activeSection.value = section
}

function startLevelCheck() {
  startDiagnosticTest()
  currentFlow.value = 'diagnostic'
}

function beginDiagnostic() {
  startDiagnosticTest()
}

function openDashboardLesson(lesson) {
  if (!diagnosticReady.value) {
    startLevelCheck()
    return
  }
  openLesson(lesson)
  currentFlow.value = 'lessonPreparation'
}

function openLibraryLesson(lesson) {
  if (!diagnosticReady.value) {
    startLevelCheck()
    return
  }
  openLesson(lesson)
  startLesson()
  currentFlow.value = 'lesson'
}

function handleLessonAnswer(option) {
  const result = selectAnswer(option, currentExercise.value.correctAnswer)
  if (result === 'lost-life' || result === 'blocked') {
    lifeShake.value = true
    window.setTimeout(() => {
      lifeShake.value = false
    }, 450)
  }

  if (result !== 'locked') {
    window.setTimeout(() => {
      nextExercise()
    }, 220)
  }
}

function continueFromDiagnostic() {
  currentFlow.value = 'dashboard'
  nextTick(() => document.getElementById('learning-path')?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
}

function closeFlow() {
  cancelPendingAdvance()
  closeLesson()
  clearLessonSummary()
  currentFlow.value = 'dashboard'
}

function resetAllProgress() {
  clearAllLocalData()
  window.location.reload()
}

function handleLogout() {
  logout()
  showSettings.value = false
  activeSection.value = 'Inicio'
  currentFlow.value = 'dashboard'
}

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('youlaw-dark-mode', String(isDarkMode.value))
}

function applyTestingLevel(level) {
  setLevelForTesting(level)
  setLearningLevel(level)
  activeSection.value = 'Inicio'
  currentFlow.value = 'dashboard'
  showSettings.value = false
}

function advanceToLevel(level) {
  setLevelForTesting(level)
  setLearningLevel(level)
  currentFlow.value = 'dashboard'
}

function scrollToLearningPath() {
  nextTick(() => document.getElementById('learning-path')?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
}

watch(isComplete, (complete) => {
  if (complete) currentFlow.value = 'diagnosticResult'
})

watch(englishLevel, (level) => {
  if (level) setLearningLevel(level)
}, { immediate: true })

watch(lessonSummary, (summary) => {
  if (summary) currentFlow.value = 'lessonComplete'
})
</script>

<template>
  <LoginView v-if="!isAuthenticated" />
  <div v-else class="app-shell" :class="{ 'dark-mode': isDarkMode }">
    <Sidebar :active-section="activeSection" :navigation="navigation" :user="user" @navigate="navigate" @settings="showSettings = true" @logout="handleLogout" />
    <main class="main-content">
      <TopBar :show-lives="diagnosticReady" :lives="lives" :max-lives="maxLives" :life-shake="lifeShake" :is-locked="isLivesLocked" :lock-remaining-seconds="lockRemainingSeconds" />
      <InitialAssessmentView v-if="!diagnosticReady" :on-start-diagnostic="startLevelCheck" @reset="resetAllProgress" />
      <DashboardView v-else-if="activeSection === 'Inicio'" :lessons="learningLessons" :total-xp="totalXp" :diagnostic-completed="diagnosticReady" :english-level="englishLevel" :diagnostic-score="diagnosticScore" :lives="lives" :max-lives="maxLives" @select-lesson="openDashboardLesson" @show-lessons="navigate('Lecciones')" @start-diagnostic="startLevelCheck" @start-learning="scrollToLearningPath" @reassess="startLevelCheck" />
      <LessonsView v-else-if="activeSection === 'Lecciones'" :lessons="learningLessons" @select-lesson="openLibraryLesson" />
      <AchievementsView v-else />
    </main>
    <LessonPreparation v-if="selectedLesson && currentFlow === 'lessonPreparation'" :lesson="selectedLesson" @begin-lesson="startLesson(); currentFlow = 'lesson'" @close="closeFlow" />
    <DiagnosticAssessment v-else-if="currentFlow === 'diagnostic' || currentFlow === 'diagnosticResult'" :question="currentQuestion" :question-number="questionNumber" :question-count="20" :progress="progress" :level-label="levelLabel" :current-level="currentLevel" :selected-answer="diagnosticSelectedAnswer" :answer-status="diagnosticAnswerStatus" :is-complete="isComplete" :correct-answers="correctAnswers" :category-scores="categoryScores" @answer="answerDiagnostic" @next="nextDiagnostic" @start="beginDiagnostic" @continue="continueFromDiagnostic" @close="closeFlow" />
    <ExerciseModal v-else-if="selectedLesson && currentFlow === 'lesson'" :lesson="selectedLesson" :exercise="currentExercise" :exercise-index="exerciseIndex" :exercise-count="exerciseCount" :selected-answer="selectedAnswer" :answer-status="answerStatus" :is-locked="isLivesLocked" :lock-remaining-seconds="lockRemainingSeconds" @answer="handleLessonAnswer" @next="nextExercise" @close="closeFlow" />
    <LessonComplete v-else-if="currentFlow === 'lessonComplete'" :summary="lessonSummary" @advance-level="advanceToLevel" @close="closeFlow" />
    <SettingsModal v-if="showSettings" :dark-mode="isDarkMode" :user-email="user?.email" @close="showSettings = false" @toggle-dark-mode="toggleDarkMode" @set-testing-level="applyTestingLevel" @reset="resetAllProgress" @logout="handleLogout" />
  </div>
</template>
