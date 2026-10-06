import { defaultCosmetics, starterOwned } from './shop'
import type { Cosmetics, GlassesStyle, LevelRecord, PackStyle, SaveAdapter, SaveData, Settings } from './types'

import { getActiveGameSaveKey } from '../../services/progressScope.js'

function storageKey() {
  return getActiveGameSaveKey()
}

export { defaultCosmetics } from './shop'

export const defaultSettings: Settings = {
  sfx: 0.85,
  music: 0.35,
  muted: false,
}

function migrateCosmetics(raw: Record<string, unknown>): Cosmetics {
  const glassesRaw = raw.glasses
  const packRaw = raw.backpack
  const glasses: GlassesStyle =
    glassesRaw === true || glassesRaw === 'square'
      ? 'square'
      : glassesRaw === 'round' || glassesRaw === 'sun' || glassesRaw === 'none'
        ? glassesRaw
        : defaultCosmetics.glasses
  const backpack: PackStyle =
    packRaw === true || packRaw === 'pack'
      ? 'pack'
      : packRaw === 'satchel' || packRaw === 'none'
        ? packRaw
        : defaultCosmetics.backpack
  return {
    ...defaultCosmetics,
    ...(raw as Partial<Cosmetics>),
    glasses,
    backpack,
  }
}

export function createDefaultSave(): SaveData {
  return {
    unlockedLevel: 1,
    xp: 0,
    wallet: 24,
    owned: [...starterOwned],
    levels: {},
    settings: { ...defaultSettings },
    cosmetics: { ...defaultCosmetics },
    totals: { time: 0, mistakes: 0, bestStreak: 0, stars: 0 },
  }
}

export function hydrateSave(raw: unknown): SaveData | null {
  if (!raw || typeof raw !== 'object') return null
  try {
    const parsed = raw as Partial<SaveData> & { cosmetics?: Partial<Cosmetics> }
    const base = createDefaultSave()
    return {
      ...base,
      ...parsed,
      unlockedLevel: typeof parsed.unlockedLevel === 'number' ? parsed.unlockedLevel : base.unlockedLevel,
      xp: typeof parsed.xp === 'number' ? parsed.xp : base.xp,
      wallet: typeof parsed.wallet === 'number' ? parsed.wallet : base.wallet,
      owned: Array.isArray(parsed.owned) ? Array.from(new Set([...starterOwned, ...parsed.owned])) : base.owned,
      settings: { ...defaultSettings, ...parsed.settings },
      cosmetics: migrateCosmetics((parsed.cosmetics ?? {}) as Record<string, unknown>),
      totals: { ...base.totals, ...parsed.totals },
      levels: parsed.levels && typeof parsed.levels === 'object' ? parsed.levels : {},
      savedAt: typeof parsed.savedAt === 'number' ? parsed.savedAt : undefined,
    }
  } catch {
    return null
  }
}

function betterLevel(a?: LevelRecord, b?: LevelRecord): LevelRecord | undefined {
  if (!a) return b
  if (!b) return a
  if (Boolean(a.completed) !== Boolean(b.completed)) return a.completed ? a : b
  if ((a.stars || 0) !== (b.stars || 0)) return (a.stars || 0) > (b.stars || 0) ? a : b
  if ((a.bestAccuracy || 0) !== (b.bestAccuracy || 0)) return a.bestAccuracy > b.bestAccuracy ? a : b
  const aTime = a.bestTime > 0 ? a.bestTime : Number.POSITIVE_INFINITY
  const bTime = b.bestTime > 0 ? b.bestTime : Number.POSITIVE_INFINITY
  if (aTime !== bTime) return aTime < bTime ? a : b
  return a
}

export function isFreshSave(save: SaveData): boolean {
  const fresh = createDefaultSave()
  const extraOwned = save.owned.filter((id) => !fresh.owned.includes(id))
  return save.unlockedLevel <= 1
    && save.xp <= 0
    && Object.keys(save.levels).length === 0
    && save.wallet === fresh.wallet
    && extraOwned.length === 0
    && !save.savedAt
}

/** Une dos partidas sin perder niveles, monedas ni objetos desbloqueados. */
export function mergeSaves(local: SaveData | null, remote: SaveData | null): SaveData {
  if (!local && !remote) return createDefaultSave()
  if (!remote) return local as SaveData
  if (!local || isFreshSave(local)) return remote
  if (isFreshSave(remote)) return local

  const levels: Record<string, LevelRecord> = {}
  for (const id of new Set([...Object.keys(local.levels), ...Object.keys(remote.levels)])) {
    const best = betterLevel(local.levels[id], remote.levels[id])
    if (best) levels[id] = best
  }

  const preferRemoteLook = (remote.savedAt ?? 0) > (local.savedAt ?? 0)
  return {
    unlockedLevel: Math.max(local.unlockedLevel, remote.unlockedLevel),
    xp: Math.max(local.xp, remote.xp),
    wallet: Math.max(local.wallet, remote.wallet),
    owned: Array.from(new Set([...local.owned, ...remote.owned])),
    levels,
    settings: preferRemoteLook ? remote.settings : local.settings,
    cosmetics: preferRemoteLook ? remote.cosmetics : local.cosmetics,
    totals: {
      time: Math.max(local.totals.time, remote.totals.time),
      mistakes: Math.max(local.totals.mistakes, remote.totals.mistakes),
      bestStreak: Math.max(local.totals.bestStreak, remote.totals.bestStreak),
      stars: Math.max(local.totals.stars, remote.totals.stars),
    },
    savedAt: Math.max(local.savedAt ?? 0, remote.savedAt ?? 0) || undefined,
  }
}

export const localStorageAdapter: SaveAdapter = {
  load() {
    try {
      const key = storageKey()
      if (!key) return null
      const raw = localStorage.getItem(key)
      if (!raw) return null
      return hydrateSave(JSON.parse(raw))
    } catch {
      return null
    }
  },
  save(data) {
    const key = storageKey()
    if (!key) return
    localStorage.setItem(key, JSON.stringify(data))
  },
}

let adapter: SaveAdapter = localStorageAdapter

export function setSaveAdapter(next: SaveAdapter) {
  adapter = next
}

export function getSaveAdapter(): SaveAdapter {
  return adapter
}

export function loadSave(): SaveData {
  return adapter.load() ?? createDefaultSave()
}

let notifyCloud = true
let cloudListener: ((data: SaveData) => void) | null = null

export function setGameSaveCloudListener(listener: ((data: SaveData) => void) | null) {
  cloudListener = listener
}

export function writeLocalGameSave(data: SaveData) {
  notifyCloud = false
  localStorageAdapter.save(data)
  notifyCloud = true
}

export function persistSave(data: SaveData) {
  const stamped: SaveData = { ...data, savedAt: Date.now() }
  adapter.save(stamped)
  if (notifyCloud) cloudListener?.(stamped)
}
