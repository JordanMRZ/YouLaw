import { ref } from 'vue'

/** Cédula ATAV / userId activo para claves de progreso locales (luego Firestore por mismo id). */
export const activeProgressUserId = ref(null)

const LEGACY_LESSON_KEY = 'youlaw_progress'
const LEGACY_GAME_KEY = 'word-bridge-3d-save-v1'

export function lessonProgressKey(userId) {
  return `youlaw_progress_v4_${userId}`
}

export function gameSaveKey(userId) {
  return `word-bridge-3d-save-v1_${userId}`
}

export function getActiveLessonProgressKey() {
  const id = activeProgressUserId.value
  return id ? lessonProgressKey(id) : null
}

export function getActiveGameSaveKey() {
  const id = activeProgressUserId.value
  return id ? gameSaveKey(id) : null
}

function migrateLegacyLessonProgress(userId) {
  const key = lessonProgressKey(userId)
  if (localStorage.getItem(key)) return
  const legacy = localStorage.getItem(LEGACY_LESSON_KEY)
  if (legacy) localStorage.setItem(key, legacy)
}

function migrateLegacyGameSave(userId) {
  const key = gameSaveKey(userId)
  if (localStorage.getItem(key)) return
  const legacy = localStorage.getItem(LEGACY_GAME_KEY)
  if (legacy) localStorage.setItem(key, legacy)
}

export function setActiveProgressUser(userId) {
  const next = userId ? String(userId) : null
  if (next) {
    migrateLegacyLessonProgress(next)
    migrateLegacyGameSave(next)
  }
  activeProgressUserId.value = next
}
