/**
 * Progreso del módulo Didáctico en la cuenta.
 * Se guarda en `usuarios/{cedula}.youlawDidactic` porque esa es la ruta que la sesión ya puede leer.
 * localStorage sigue siendo la caché del dispositivo; al entrar se fusiona con la nube.
 */
import { deleteField, doc, getDoc, runTransaction, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from './firebase'
import { activeProgressUserId, getActiveGameSaveKey } from './progressScope'
import {
  hydrateSave,
  isFreshSave,
  mergeSaves,
  setGameSaveCloudListener,
  writeLocalGameSave,
} from '../interactive-game/data/storage.ts'

const USERS_COLLECTION = 'usuarios'
const SAVE_FIELD = 'youlawDidactic'
const UPDATED_FIELD = 'youlawDidacticUpdatedAt'

let pushEpoch = 0
let pushTimer = 0
let pendingSave = null

function progressRef() {
  const cedula = activeProgressUserId.value
  if (!cedula) return null
  return doc(db, USERS_COLLECTION, String(cedula))
}

function plainSave(save) {
  return JSON.parse(JSON.stringify(save))
}

function fingerprint(save) {
  if (!save) return ''
  return JSON.stringify({
    unlockedLevel: save.unlockedLevel,
    xp: save.xp,
    wallet: save.wallet,
    owned: [...save.owned].sort(),
    levels: save.levels,
    settings: save.settings,
    cosmetics: save.cosmetics,
    totals: save.totals,
  })
}

function readLocalSave() {
  const key = getActiveGameSaveKey()
  if (!key) return null
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return null
    return hydrateSave(JSON.parse(raw))
  } catch {
    return null
  }
}

export async function pushDidacticSave(save) {
  const epoch = pushEpoch
  const hydrated = hydrateSave(save)
  const ref = progressRef()
  if (!ref || !hydrated || epoch !== pushEpoch) return hydrated

  await runTransaction(db, async (tx) => {
    if (epoch !== pushEpoch) return
    const snap = await tx.get(ref)
    const remote = snap.exists() ? hydrateSave(snap.data()?.[SAVE_FIELD]) : null
    const merged = mergeSaves(hydrated, remote)
    if (isFreshSave(merged) && !remote) return
    tx.set(ref, {
      [SAVE_FIELD]: plainSave(merged),
      [UPDATED_FIELD]: serverTimestamp(),
    }, { merge: true })
  })
  return hydrated
}

function scheduleDidacticPush(save) {
  pendingSave = save
  window.clearTimeout(pushTimer)
  const epoch = pushEpoch
  pushTimer = window.setTimeout(() => {
    if (epoch !== pushEpoch) return
    const payload = pendingSave
    pendingSave = null
    pushDidacticSave(payload).catch((error) => {
      console.warn('No se pudo guardar el progreso didáctico en la cuenta.', error)
    })
  }, 600)
}

setGameSaveCloudListener(scheduleDidacticPush)

let syncQueue = Promise.resolve(null)

async function syncOnce() {
  const ref = progressRef()
  if (!ref) return null

  try {
    const local = readLocalSave()
    const snap = await getDoc(ref)
    const remote = snap.exists() ? hydrateSave(snap.data()?.[SAVE_FIELD]) : null
    if (!local && !remote) return null

    const merged = mergeSaves(local, remote)
    writeLocalGameSave(merged)

    if (fingerprint(remote) !== fingerprint(merged)) {
      await pushDidacticSave(merged)
    }
    return merged
  } catch (error) {
    console.warn('No se pudo sincronizar el progreso didáctico.', error)
    return readLocalSave()
  }
}

/**
 * Descarga la partida de la cuenta, la fusiona con la de este navegador
 * y deja el resultado en localStorage para que el juego lo cargue.
 */
export function syncDidacticSaveWithAccount() {
  const run = syncQueue.then(() => syncOnce(), () => syncOnce())
  syncQueue = run.then((value) => value, () => null)
  return run
}

/** Si la partida en memoria no coincide con la cuenta, recarga el juego. */
export async function refreshMountedDidacticGame() {
  const { useGameStore } = await import('../interactive-game/store/gameStore.ts')
  const inMemory = useGameStore.getState().save
  const local = readLocalSave()
  if (!local || fingerprint(inMemory) === fingerprint(local)) return
  useGameStore.getState().reloadSaveFromStorage()
}

export async function clearDidacticProgressFromAccount() {
  pushEpoch += 1
  window.clearTimeout(pushTimer)
  pendingSave = null
  const ref = progressRef()
  if (!ref) return
  await setDoc(ref, {
    [SAVE_FIELD]: deleteField(),
    [UPDATED_FIELD]: deleteField(),
  }, { merge: true })
}
