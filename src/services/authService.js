import { demoUsers } from '../data/mockUsers'

const SESSION_KEY = 'youlaw_auth_session'
const REGISTERED_USERS_KEY = 'youlaw_mock_registered_users'

function readRegisteredUsers() {
  try {
    const parsed = JSON.parse(localStorage.getItem(REGISTERED_USERS_KEY) || '[]')
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function writeRegisteredUsers(users) {
  localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(users))
}

function allUsers() {
  const registered = readRegisteredUsers()
  const demoIds = new Set(demoUsers.map((user) => user.id))
  const extra = registered.filter((user) => !demoIds.has(user.id))
  return [...demoUsers, ...extra]
}

function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase()
}

function buildInitials(name) {
  const parts = String(name || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
  if (!parts.length) return 'YL'
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
}

export function getSession() {
  try {
    const session = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null')
    if (!session?.userId) return null
    const user = allUsers().find((entry) => entry.id === session.userId)
    if (!user) {
      localStorage.removeItem(SESSION_KEY)
      return null
    }
    return {
      userId: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      initials: user.initials || buildInitials(user.name),
    }
  } catch {
    return null
  }
}

export function login(email, password) {
  const normalizedEmail = normalizeEmail(email)
  const user = allUsers().find((entry) => normalizeEmail(entry.email) === normalizedEmail)
  if (!user || user.password !== password) {
    return { ok: false, error: 'Correo o contraseña incorrectos.' }
  }
  const session = {
    userId: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    initials: user.initials || buildInitials(user.name),
  }
  localStorage.setItem(SESSION_KEY, JSON.stringify(session))
  return { ok: true, session }
}

export function register({ name, email, password, role }) {
  const trimmedName = String(name || '').trim()
  const normalizedEmail = normalizeEmail(email)
  const trimmedPassword = String(password || '')

  if (!trimmedName || !normalizedEmail || trimmedPassword.length < 6) {
    return { ok: false, error: 'Completa nombre, correo válido y contraseña (mín. 6 caracteres).' }
  }

  if (allUsers().some((entry) => normalizeEmail(entry.email) === normalizedEmail)) {
    return { ok: false, error: 'Ya existe una cuenta con ese correo.' }
  }

  const user = {
    id: `user-${Date.now()}`,
    email: normalizedEmail,
    password: trimmedPassword,
    name: trimmedName,
    role: role || 'Estudiante',
    initials: buildInitials(trimmedName),
  }

  const registered = readRegisteredUsers()
  registered.push(user)
  writeRegisteredUsers(registered)

  const session = {
    userId: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    initials: user.initials,
  }
  localStorage.setItem(SESSION_KEY, JSON.stringify(session))
  return { ok: true, session }
}

export function logout() {
  localStorage.removeItem(SESSION_KEY)
}

export function listDemoAccounts() {
  return demoUsers.map(({ email, password, name, role }) => ({ email, password, name, role }))
}
