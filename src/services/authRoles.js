const ALLOWED_ROLES = new Set(['docente', 'director'])

export function normalizeAtavRole(rol) {
  return String(rol || '').trim()
}

export function isYouLawAllowedRole(rol) {
  const key = normalizeAtavRole(rol).toLowerCase()
  return ALLOWED_ROLES.has(key)
}

/** Editor del juego 3D: solo directores. */
export function canUseGameEditor(rol) {
  return normalizeAtavRole(rol).toLowerCase() === 'director'
}

export function youLawAccessDeniedMessage() {
  return 'YouLaw está disponible para docentes y directores con cuenta ATAV.'
}
