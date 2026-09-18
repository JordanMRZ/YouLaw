const progressKey = 'youlaw_progress'
const legacyKeys = ['youlaw-learning-progress']

const defaultProgress = {
  schemaVersion: 4,
  diagnosticCompleted: false,
  englishLevel: null,
  diagnosticScore: null,
  diagnosticDate: null,
  diagnosticResults: null,
  xp: 340,
  streak: 5,
  lives: 3,
  lockUntil: null,
  lessonProgress: {},
  achievements: [],
  mistakes: [],
  completedLessons: [],
}

function readRawProgress() {
  try {
    return JSON.parse(localStorage.getItem(progressKey) || '{}')
  } catch {
    return {}
  }
}

function hasValidCompletedDiagnostic(progress) {
  return progress.schemaVersion === 4
    && progress.diagnosticCompleted === true
    && ['A1', 'A2', 'B1', 'B2', 'C1'].includes(progress.englishLevel)
    && typeof progress.diagnosticDate === 'string'
    && Array.isArray(progress.diagnosticResults)
    && progress.diagnosticResults.length >= 20
    && typeof progress.diagnosticScore === 'number'
}

export function getProgress() {
  const raw = readRawProgress()
  const merged = { ...defaultProgress, ...raw, schemaVersion: raw.schemaVersion || 0 }
  const completed = hasValidCompletedDiagnostic(merged)

  return {
    ...merged,
    diagnosticCompleted: completed,
    englishLevel: completed ? merged.englishLevel : null,
    diagnosticScore: completed ? merged.diagnosticScore : null,
    diagnosticDate: completed ? merged.diagnosticDate : null,
    diagnosticResults: completed ? merged.diagnosticResults : null,
  }
}

export function saveProgress(progress) {
  localStorage.setItem(progressKey, JSON.stringify({ ...getProgress(), schemaVersion: 4, ...progress }))
}

export function getDiagnosticProgress() {
  const progress = getProgress()
  return {
    diagnosticCompleted: progress.diagnosticCompleted,
    englishLevel: progress.englishLevel,
    diagnosticScore: progress.diagnosticScore,
    diagnosticDate: progress.diagnosticDate,
    diagnosticResults: progress.diagnosticResults,
  }
}

export function saveDiagnosticProgress({ englishLevel, diagnosticScore, diagnosticResults }) {
  saveProgress({
    diagnosticCompleted: true,
    englishLevel,
    diagnosticScore,
    diagnosticResults,
    diagnosticDate: new Date().toISOString(),
  })
}

export function clearDiagnosticProgress() {
  saveProgress({
    diagnosticCompleted: false,
    englishLevel: null,
    diagnosticScore: null,
    diagnosticDate: null,
    diagnosticResults: null,
  })
}

export function clearProgress() {
  localStorage.removeItem(progressKey)
  legacyKeys.forEach((key) => localStorage.removeItem(key))
}

export function clearAllLocalData() {
  localStorage.clear()
  sessionStorage.clear()
}

export { progressKey, defaultProgress }
