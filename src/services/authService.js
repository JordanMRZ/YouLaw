import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from './firebase'

/** Roles de ATAV con acceso a YouLaw (profesores). */
const ALLOWED_ROLES = new Set(['Docente'])

export function cedulaToAuthEmail(cedula) {
  return `${cedula}@atav.com`
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

function cedulaFromFirebaseUser(firebaseUser) {
  const email = firebaseUser?.email || ''
  const match = email.match(/^(\d+)@atav\.com$/i)
  return match ? match[1] : null
}

async function loadSessionForCedula(cedula) {
  const snap = await getDoc(doc(db, 'usuarios', cedula))
  if (!snap.exists()) {
    return { ok: false, error: 'Usuario no encontrado en ATAV.' }
  }

  const data = snap.data()
  const rol = data.rol

  if (!ALLOWED_ROLES.has(rol)) {
    return {
      ok: false,
      error: 'YouLaw está disponible solo para docentes. Usa tu cuenta de ATAV con rol Docente.',
    }
  }

  if (data.requiereCambioPassword === true) {
    return {
      ok: false,
      error: 'Debes cambiar tu contraseña en ATAV antes de continuar.',
    }
  }

  const name = data.nombre || 'Usuario'

  return {
    ok: true,
    session: {
      userId: cedula,
      uid: auth.currentUser?.uid ?? null,
      cedula,
      email: data.correo || cedulaToAuthEmail(cedula),
      name,
      role: rol,
      initials: buildInitials(name),
    },
  }
}

export function subscribeAuth(onSession) {
  return onAuthStateChanged(auth, async (firebaseUser) => {
    if (!firebaseUser) {
      onSession(null)
      return
    }

    const cedula = cedulaFromFirebaseUser(firebaseUser)
    if (!cedula) {
      await signOut(auth)
      onSession(null)
      return
    }

    try {
      const result = await loadSessionForCedula(cedula)
      if (!result.ok) {
        await signOut(auth)
        onSession(null)
        return
      }
      onSession(result.session)
    } catch {
      await signOut(auth)
      onSession(null)
    }
  })
}

export async function loginWithCedula(cedula, password) {
  const cedulaLimpia = String(cedula || '').trim()

  if (!cedulaLimpia || !password) {
    return { ok: false, error: 'Debes completar cédula y contraseña.' }
  }

  if (!/^\d+$/.test(cedulaLimpia)) {
    return { ok: false, error: 'La cédula debe contener solo números.' }
  }

  try {
    await signInWithEmailAndPassword(auth, cedulaToAuthEmail(cedulaLimpia), password)
    const result = await loadSessionForCedula(cedulaLimpia)
    if (!result.ok) {
      await signOut(auth)
      return result
    }
    return result
  } catch {
    return { ok: false, error: 'Cédula o contraseña incorrecta.' }
  }
}

export async function logout() {
  await signOut(auth)
}
