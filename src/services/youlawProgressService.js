/**
 * Capa de progreso YouLaw por usuario (hoy localStorage; mañana Firestore `bilinguismo_progreso/{uid}`).
 */
import {
  clearDiagnosticProgress,
  clearProgress,
  getDiagnosticProgress,
  getProgress,
  saveDiagnosticProgress,
  saveProgress,
} from './localStorage'
import { activeProgressUserId } from './progressScope'

export function requireProgressUserId() {
  const id = activeProgressUserId.value
  if (!id) throw new Error('No hay usuario activo para guardar progreso.')
  return id
}

export function loadLessonProgress() {
  return getProgress()
}

export function patchLessonProgress(patch) {
  saveProgress(patch)
}

export function loadDiagnosticState() {
  return getDiagnosticProgress()
}

export function saveDiagnosticState(payload) {
  saveDiagnosticProgress(payload)
}

export function clearLessonProgressForActiveUser() {
  clearProgress()
}

export function clearDiagnosticForActiveUser() {
  clearDiagnosticProgress()
}

/** Contrato futuro Firestore (sin implementar aún). */
export async function syncProgressFromRemote(_userId) {
  return loadLessonProgress()
}

export async function pushProgressToRemote(_userId, _payload) {
  patchLessonProgress(_payload)
}
