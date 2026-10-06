import { create } from 'zustand'
import { DEFAULT_CHECKPOINT_WIDTH, DEFAULT_GOAL_SIZE } from '../data/defaults'
import { clearDraft, peekDraft, saveDraft } from '../data/editorDrafts'
import { getFactoryLevel, unloadLevel } from '../data/levels'
import type {
  ChallengeDef,
  ChallengeType,
  LevelDef,
  ObstacleDef,
  ObstacleKind,
  PlatformDef,
  PlatformKind,
  Vec3,
} from '../data/types'
import { validateLevel } from '../data/validateLevel'
import { useGameStore } from './gameStore'

export type EditorKind = 'platform' | 'challenge' | 'option' | 'obstacle' | 'coin' | 'checkpoint' | 'goal' | 'start'

export type EditorTool = 'translate' | 'scale'

export type AddKit =
  | 'static'
  | 'moving'
  | 'vanishing'
  | 'bounce'
  | 'rotating'
  | 'question'
  | 'barrier'
  | 'hammer'
  | 'fan'
  | 'spinner'
  | 'movingBlock'
  | 'coin'
  | 'checkpoint'
  | 'goal'

export interface EditorSelection {
  kind: EditorKind
  id: string
  optionIndex?: number
}

export const editorCursor: { current: Vec3 } = { current: [0, 2, 8] }
export const editorCamera: { forward: Vec3; right: Vec3 } = { forward: [0, 0, 1], right: [-1, 0, 0] }

let seq = 1
function uid(prefix: string) {
  seq += 1
  return `${prefix}${Date.now().toString(36)}${seq.toString(36)}`
}

function cloneLevel(level: LevelDef): LevelDef {
  return structuredClone(level)
}

function round2(n: number) {
  return Math.round(n * 100) / 100
}

export function snapVec(v: Vec3, snap: number): Vec3 {
  if (snap <= 0) return [round2(v[0]), round2(v[1]), round2(v[2])]
  return [
    Math.round(v[0] / snap) * snap,
    Math.round(v[1] / snap) * snap,
    Math.round(v[2] / snap) * snap,
  ]
}

function spawnAt(): Vec3 {
  const [x, y, z] = editorCursor.current
  return snapVec([x, Math.max(0.4, y), z], 0.5)
}

export function selectionKey(sel: EditorSelection | null) {
  if (!sel) return ''
  return `${sel.kind}:${sel.id}:${sel.optionIndex ?? ''}`
}

export function getSelectedPose(draft: LevelDef, sel: EditorSelection): { position: Vec3; size: Vec3 } | null {
  switch (sel.kind) {
    case 'platform': {
      const p = draft.platforms.find((item) => item.id === sel.id)
      return p ? { position: p.position, size: p.size } : null
    }
    case 'challenge': {
      const c = draft.challenges.find((item) => item.id === sel.id)
      return c ? { position: c.origin, size: c.platformSize ?? [4.5, 0.72, 4.6] } : null
    }
    case 'option': {
      const c = draft.challenges.find((item) => item.id === sel.id)
      const opt = c?.options[sel.optionIndex ?? 0]
      if (!c || !opt) return null
      return {
        position: [c.origin[0] + opt.offset[0], c.origin[1] + opt.offset[1], c.origin[2] + opt.offset[2]],
        size: c.platformSize ?? [4.5, 0.72, 4.6],
      }
    }
    case 'obstacle': {
      const o = draft.obstacles.find((item) => item.id === sel.id)
      return o ? { position: o.position, size: o.size ?? defaultObstacleSize(o.kind) } : null
    }
    case 'coin': {
      const n = draft.coins.find((item) => item.id === sel.id)
      return n ? { position: n.position, size: [0.6, 0.6, 0.6] } : null
    }
    case 'checkpoint': {
      const k = draft.checkpoints.find((item) => item.id === sel.id)
      return k ? { position: k.position, size: [k.width ?? DEFAULT_CHECKPOINT_WIDTH, 3.4, 1.2] } : null
    }
    case 'goal':
      return { position: draft.goal.position, size: draft.goal.size ?? DEFAULT_GOAL_SIZE }
    case 'start':
      return { position: draft.start, size: [1.2, 1.8, 1.2] }
    default:
      return null
  }
}

export function defaultObstacleSize(kind: ObstacleKind): Vec3 {
  if (kind === 'barrier') return [4, 2, 0.85]
  if (kind === 'fan') return [2.4, 2.2, 2.4]
  if (kind === 'movingBlock') return [1.6, 1.6, 1.6]
  if (kind === 'hammer') return [1.2, 3.2, 1.2]
  return [1.6, 1.6, 1.6]
}

export function obstacleUsesSize(kind: ObstacleKind) {
  return kind === 'barrier' || kind === 'movingBlock'
}

export function canScale(draft: LevelDef, sel: EditorSelection) {
  if (sel.kind === 'obstacle') {
    const o = draft.obstacles.find((item) => item.id === sel.id)
    return Boolean(o && obstacleUsesSize(o.kind))
  }
  return sel.kind === 'platform' || sel.kind === 'challenge' || sel.kind === 'goal' || sel.kind === 'checkpoint'
}

const MIN_SIZE = 0.2

function clampVec(value: unknown, min: number): unknown {
  if (!Array.isArray(value)) return value
  return value.map((n) => (typeof n === 'number' && Number.isFinite(n) ? Math.max(min, n) : min))
}

function clampNum(value: unknown, min: number, max = Infinity): unknown {
  if (typeof value !== 'number' || !Number.isFinite(value)) return value
  return Math.min(max, Math.max(min, value))
}

function sanitizePatch(patch: Record<string, unknown>) {
  const next = { ...patch }
  if ('size' in next) next.size = clampVec(next.size, MIN_SIZE)
  if ('platformSize' in next) next.platformSize = clampVec(next.platformSize, MIN_SIZE)
  if ('width' in next) next.width = clampNum(next.width, 1.5, 60)
  if ('timeLimit' in next) next.timeLimit = clampNum(next.timeLimit, 3, 120)
  if ('speed' in next) next.speed = clampNum(next.speed, 0, 20)
  if ('rotationSpeed' in next) next.rotationSpeed = clampNum(next.rotationSpeed, -10, 10)
  if ('fanForce' in next) next.fanForce = clampNum(next.fanForce, 0, 10)
  if ('fanReach' in next) next.fanReach = clampNum(next.fanReach, 0.5, 60)
  if ('fanSpread' in next) next.fanSpread = clampNum(next.fanSpread, 0.5, 30)
  if ('fanHeight' in next) next.fanHeight = clampNum(next.fanHeight, 0.5, 20)
  if (next.motion && typeof next.motion === 'object') {
    const motion = { ...(next.motion as Record<string, unknown>) }
    motion.amplitude = clampNum(motion.amplitude, 0, 60)
    motion.speed = clampNum(motion.speed, 0, 20)
    next.motion = motion
  }
  return next
}

function formatNum(n: number) {
  if (Number.isInteger(n)) return String(n)
  const text = n.toFixed(2).replace(/\.?0+$/, '')
  return text
}

function quoteKey(key: string) {
  return /^[A-Za-z_][A-Za-z0-9_]*$/.test(key) ? key : JSON.stringify(key)
}

export function toTsLiteral(value: unknown, indent = 0): string {
  const pad = '  '.repeat(indent)
  const inner = '  '.repeat(indent + 1)
  if (value === null) return 'null'
  if (typeof value === 'string') return JSON.stringify(value)
  if (typeof value === 'number') return Number.isFinite(value) ? formatNum(value) : '0'
  if (typeof value === 'boolean') return value ? 'true' : 'false'
  if (Array.isArray(value)) {
    if (value.length === 0) return '[]'
    if (value.length <= 4 && value.every((item) => typeof item === 'number')) {
      return `[${value.map((n) => formatNum(n as number)).join(', ')}]`
    }
    return `[\n${value.map((item) => `${inner}${toTsLiteral(item, indent + 1)}`).join(',\n')}\n${pad}]`
  }
  if (typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>).filter(([, item]) => item !== undefined)
    if (entries.length === 0) return '{}'
    return `{\n${entries.map(([key, item]) => `${inner}${quoteKey(key)}: ${toTsLiteral(item, indent + 1)}`).join(',\n')}\n${pad}}`
  }
  return 'undefined'
}

export function exportLevelTs(level: LevelDef) {
  return `import type { LevelDef } from '../types'\n\nexport function createLevel${level.id}(): LevelDef {\n  return ${toTsLiteral(level, 1)}\n}\n`
}

let messageTimer: number | null = null

type ClipKind = Exclude<EditorKind, 'option'>

type EditorClipboard = { kind: ClipKind; item: Record<string, unknown> } | null

interface EditorState {
  levelId: number
  draft: LevelDef | null
  selected: EditorSelection | null
  tool: EditorTool
  snap: number
  previewMotion: boolean
  focusToken: number
  undoStack: string[]
  redoStack: string[]
  message: string | null
  dirty: boolean
  clipboard: EditorClipboard
  openEditor: (levelId: number) => void
  leaveEditor: () => void
  switchLevel: (levelId: number) => void
  select: (sel: EditorSelection | null) => void
  setTool: (tool: EditorTool) => void
  setSnap: (snap: number) => void
  setPreviewMotion: (value: boolean) => void
  focusSelected: () => void
  beginUndo: (group?: string) => void
  undo: () => void
  redo: () => void
  applyWorldTransform: (position: Vec3, size: Vec3) => void
  nudgeSelected: (delta: Vec3) => void
  patchSelected: (patch: Record<string, unknown>) => void
  copySelected: () => void
  pasteClipboard: () => void
  addKit: (kind: AddKit) => void
  deleteSelected: () => void
  resetToCode: () => void
  playtest: () => void
  exportJson: () => Promise<void>
  exportTs: () => Promise<void>
}

function showMessage(set: (partial: Partial<EditorState>) => void, text: string) {
  if (messageTimer) window.clearTimeout(messageTimer)
  set({ message: text })
  messageTimer = window.setTimeout(() => {
    set({ message: null })
  }, 2200)
}

const UNDO_LIMIT = 40
const UNDO_GROUP_MS = 900
const undoGroup: { key: string | null; at: number } = { key: null, at: 0 }

let persistTimer: number | null = null

function cancelPersist() {
  if (persistTimer) {
    window.clearTimeout(persistTimer)
    persistTimer = null
  }
}

function persist(levelId: number, draft: LevelDef) {
  cancelPersist()
  saveDraft(levelId, draft)
}

function persistSoon(getDraft: () => { levelId: number; draft: LevelDef | null }) {
  if (persistTimer) window.clearTimeout(persistTimer)
  persistTimer = window.setTimeout(() => {
    persistTimer = null
    const { levelId, draft } = getDraft()
    if (draft) saveDraft(levelId, draft)
  }, 350)
}

function keepSelection(draft: LevelDef, sel: EditorSelection | null) {
  return sel && getSelectedPose(draft, sel) ? sel : null
}

export const useEditorStore = create<EditorState>((set, get) => ({
  levelId: 1,
  draft: null,
  selected: null,
  tool: 'translate',
  snap: 0.5,
  previewMotion: true,
  focusToken: 0,
  undoStack: [],
  redoStack: [],
  message: null,
  dirty: false,
  clipboard: null,

  openEditor: (levelId) => {
    const stored = peekDraft(levelId)
    const draft = stored ? cloneLevel(stored) : cloneLevel(getFactoryLevel(levelId))
    editorCursor.current = [...draft.start]
    const firstQuestion = draft.challenges[0]
    set({
      levelId,
      draft,
      selected: firstQuestion ? { kind: 'challenge', id: firstQuestion.id } : null,
      tool: 'translate',
      undoStack: [],
      redoStack: [],
      dirty: stored !== null,
      focusToken: get().focusToken + 1,
      previewMotion: true,
      message: stored ? 'Borrador local' : firstQuestion ? 'Edita la pregunta a la derecha' : null,
    })
    useGameStore.setState({
      phase: 'editor',
      selectedLevel: levelId,
      levelId,
      shopOpen: false,
      settingsOpen: false,
    })
  },

  leaveEditor: () => {
    const { draft, levelId, dirty } = get()
    if (draft && dirty) persist(levelId, draft)
    useGameStore.setState({ phase: 'hub', editorReturn: false, shopOpen: false })
  },

  switchLevel: (nextId) => {
    if (nextId === get().levelId) return
    const { draft, levelId, dirty } = get()
    if (draft && dirty) persist(levelId, draft)
    get().openEditor(nextId)
  },

  select: (sel) => set({ selected: sel }),
  setTool: (tool) => set({ tool }),
  setSnap: (snap) => set({ snap }),
  setPreviewMotion: (value) => set({ previewMotion: value }),
  focusSelected: () => set({ focusToken: get().focusToken + 1 }),

  beginUndo: (group) => {
    const { draft, undoStack } = get()
    if (!draft) return
    const now = performance.now()
    const sameGroup = group != null && group === undoGroup.key && now - undoGroup.at < UNDO_GROUP_MS
    undoGroup.key = group ?? null
    undoGroup.at = now
    if (sameGroup) return
    const snap = JSON.stringify(draft)
    if (undoStack[undoStack.length - 1] === snap) return
    set({ undoStack: [...undoStack, snap].slice(-UNDO_LIMIT), redoStack: [] })
  },

  undo: () => {
    const { undoStack, redoStack, draft: current, levelId } = get()
    if (undoStack.length === 0 || !current) {
      showMessage(set, 'Nada que deshacer')
      return
    }
    const draft = JSON.parse(undoStack[undoStack.length - 1]) as LevelDef
    undoGroup.key = null
    persist(levelId, draft)
    set({
      draft,
      undoStack: undoStack.slice(0, -1),
      redoStack: [...redoStack, JSON.stringify(current)].slice(-UNDO_LIMIT),
      dirty: true,
      selected: keepSelection(draft, get().selected),
    })
    showMessage(set, 'Deshecho')
  },

  redo: () => {
    const { undoStack, redoStack, draft: current, levelId } = get()
    if (redoStack.length === 0 || !current) {
      showMessage(set, 'Nada que rehacer')
      return
    }
    const draft = JSON.parse(redoStack[redoStack.length - 1]) as LevelDef
    undoGroup.key = null
    persist(levelId, draft)
    set({
      draft,
      redoStack: redoStack.slice(0, -1),
      undoStack: [...undoStack, JSON.stringify(current)].slice(-UNDO_LIMIT),
      dirty: true,
      selected: keepSelection(draft, get().selected),
    })
    showMessage(set, 'Rehecho')
  },

  applyWorldTransform: (position, size) => {
    const { draft, selected, snap, levelId } = get()
    if (!draft || !selected) return
    const next = cloneLevel(draft)
    const pos = snapVec(position, snap)
    const before = getSelectedPose(draft, selected)?.size
    const resized = !before || before.some((n, i) => Math.abs(n - size[i]) > 1e-3)
    const sz: Vec3 = [
      Math.max(0.5, snap === 0 ? round2(size[0]) : Math.max(snap, Math.round(size[0] / snap) * snap)),
      Math.max(0.2, snap === 0 ? round2(size[1]) : Math.max(0.2, Math.round(size[1] / snap) * snap)),
      Math.max(0.5, snap === 0 ? round2(size[2]) : Math.max(snap, Math.round(size[2] / snap) * snap)),
    ]
    switch (selected.kind) {
      case 'platform': {
        const p = next.platforms.find((item) => item.id === selected.id)
        if (!p) return
        p.position = pos
        if (resized) p.size = sz
        break
      }
      case 'challenge': {
        const c = next.challenges.find((item) => item.id === selected.id)
        if (!c) return
        c.origin = pos
        if (resized) c.platformSize = sz
        break
      }
      case 'option': {
        const c = next.challenges.find((item) => item.id === selected.id)
        const opt = c?.options[selected.optionIndex ?? 0]
        if (!c || !opt) return
        opt.offset = snapVec([pos[0] - c.origin[0], pos[1] - c.origin[1], pos[2] - c.origin[2]], snap)
        break
      }
      case 'obstacle': {
        const o = next.obstacles.find((item) => item.id === selected.id)
        if (!o) return
        o.position = pos
        if (resized && obstacleUsesSize(o.kind)) o.size = sz
        break
      }
      case 'coin': {
        const n = next.coins.find((item) => item.id === selected.id)
        if (!n) return
        n.position = pos
        break
      }
      case 'checkpoint': {
        const k = next.checkpoints.find((item) => item.id === selected.id)
        if (!k) return
        k.position = pos
        if (resized) k.width = Math.max(1.5, sz[0])
        break
      }
      case 'goal':
        next.goal.position = pos
        if (resized) next.goal.size = sz
        break
      case 'start':
        next.start = pos
        break
      default:
        return
    }
    set({ draft: next, dirty: true })
    persistSoon(() => get())
  },

  nudgeSelected: (delta) => {
    const { draft, selected, snap } = get()
    if (!draft || !selected) return
    const pose = getSelectedPose(draft, selected)
    if (!pose) return
    const step = snap > 0 ? snap : 0.25
    get().beginUndo(`nudge:${selectionKey(selected)}`)
    get().applyWorldTransform(
      [pose.position[0] + delta[0] * step, pose.position[1] + delta[1] * step, pose.position[2] + delta[2] * step],
      pose.size,
    )
  },

  patchSelected: (rawPatch) => {
    const { draft, selected } = get()
    if (!draft || !selected) return
    const patch = sanitizePatch(rawPatch)
    get().beginUndo(`${selectionKey(selected)}|${Object.keys(patch).sort().join(',')}`)
    const next = cloneLevel(draft)
    switch (selected.kind) {
      case 'platform': {
        const p = next.platforms.find((item) => item.id === selected.id)
        if (!p) return
        Object.assign(p, patch)
        break
      }
      case 'challenge': {
        const c = next.challenges.find((item) => item.id === selected.id)
        if (!c) return
        Object.assign(c, patch)
        break
      }
      case 'option': {
        const c = next.challenges.find((item) => item.id === selected.id)
        const opt = c?.options[selected.optionIndex ?? 0]
        if (!c || !opt) return
        const challengeKeys = [
          'sentence',
          'type',
          'correctAnswer',
          'options',
          'timeLimit',
          'hideSentence',
          'audioText',
          'explanation',
          'origin',
          'platformSize',
        ]
        if (Object.keys(patch).some((key) => challengeKeys.includes(key))) {
          Object.assign(c, patch)
        } else {
          const prevWord = opt.word
          Object.assign(opt, patch)
          if (typeof patch.word === 'string' && c.correctAnswer === prevWord) {
            c.correctAnswer = patch.word
          }
        }
        break
      }
      case 'obstacle': {
        const o = next.obstacles.find((item) => item.id === selected.id)
        if (!o) return
        Object.assign(o, patch)
        break
      }
      case 'coin': {
        const n = next.coins.find((item) => item.id === selected.id)
        if (!n) return
        Object.assign(n, patch)
        break
      }
      case 'checkpoint': {
        const k = next.checkpoints.find((item) => item.id === selected.id)
        if (!k) return
        Object.assign(k, patch)
        break
      }
      case 'goal':
        next.goal = { ...next.goal, ...patch }
        break
      case 'start':
        if (Array.isArray(patch.position)) next.start = patch.position as Vec3
        break
      default:
        return
    }
    set({ draft: next, dirty: true })
    persistSoon(() => get())
  },

  copySelected: () => {
    const { draft, selected } = get()
    if (!draft || !selected) return
    const kind: ClipKind = selected.kind === 'option' ? 'challenge' : selected.kind
    let item: object | undefined
    switch (kind) {
      case 'platform':
        item = draft.platforms.find((entry) => entry.id === selected.id)
        break
      case 'challenge':
        item = draft.challenges.find((entry) => entry.id === selected.id)
        break
      case 'coin':
        item = draft.coins.find((entry) => entry.id === selected.id)
        break
      case 'obstacle':
        item = draft.obstacles.find((entry) => entry.id === selected.id)
        break
      case 'checkpoint':
        item = draft.checkpoints.find((entry) => entry.id === selected.id)
        break
      case 'goal':
        item = draft.goal
        break
      case 'start':
        item = { position: draft.start }
        break
    }
    if (!item) {
      showMessage(set, 'No se puede copiar este tipo')
      return
    }
    set({ clipboard: { kind, item: structuredClone(item) as Record<string, unknown> } })
    showMessage(set, kind === 'challenge' ? 'Pregunta copiada' : 'Elemento copiado')
  },

  pasteClipboard: () => {
    const { draft, clipboard, levelId } = get()
    if (!draft || !clipboard) {
      showMessage(set, 'Nada que pegar')
      return
    }
    get().beginUndo()
    const next = cloneLevel(draft)
    const offset: Vec3 = [1.5, 0.8, 2]
    let selected: EditorSelection | null = null
    const cloned: unknown = structuredClone(clipboard.item)
    switch (clipboard.kind) {
      case 'challenge': {
        const challenge = cloned as ChallengeDef
        challenge.id = uid('q')
        challenge.origin = [challenge.origin[0], challenge.origin[1], challenge.origin[2] + 12]
        next.challenges.push(challenge)
        selected = { kind: 'challenge', id: challenge.id }
        break
      }
      case 'platform': {
        const platform = cloned as PlatformDef
        platform.id = uid('p')
        platform.position = [
          platform.position[0] + offset[0],
          platform.position[1] + offset[1],
          platform.position[2] + offset[2],
        ]
        next.platforms.push(platform)
        selected = { kind: 'platform', id: platform.id }
        break
      }
      case 'coin': {
        const coin = cloned as { id: string; position: Vec3 }
        coin.id = uid('n')
        coin.position = [coin.position[0] + offset[0], coin.position[1] + offset[1], coin.position[2] + offset[2]]
        next.coins.push(coin)
        selected = { kind: 'coin', id: coin.id }
        break
      }
      case 'obstacle': {
        const obstacle = cloned as ObstacleDef
        obstacle.id = uid('o')
        obstacle.position = [
          obstacle.position[0] + offset[0],
          obstacle.position[1] + offset[1],
          obstacle.position[2] + offset[2],
        ]
        next.obstacles.push(obstacle)
        selected = { kind: 'obstacle', id: obstacle.id }
        break
      }
      case 'checkpoint': {
        const checkpoint = cloned as { id: string; position: Vec3; width?: number }
        checkpoint.id = uid('k')
        checkpoint.position = [
          checkpoint.position[0] + offset[0],
          checkpoint.position[1] + offset[1],
          checkpoint.position[2] + offset[2],
        ]
        next.checkpoints.push(checkpoint)
        selected = { kind: 'checkpoint', id: checkpoint.id }
        break
      }
      case 'goal': {
        const goal = cloned as { position: Vec3; size?: Vec3 }
        goal.position = [goal.position[0] + offset[0], goal.position[1] + offset[1], goal.position[2] + offset[2]]
        next.goal = { ...next.goal, ...goal }
        selected = { kind: 'goal', id: 'goal' }
        break
      }
      case 'start': {
        const start = cloned as { position: Vec3 }
        start.position = [start.position[0] + offset[0], start.position[1] + offset[1], start.position[2] + offset[2]]
        next.start = start.position
        selected = { kind: 'start', id: 'start' }
        break
      }
      default:
        break
    }
    persist(levelId, next)
    set({ draft: next, selected, dirty: true, focusToken: get().focusToken + 1 })
    showMessage(set, 'Pegado')
  },

  addKit: (kind) => {
    const { draft, levelId } = get()
    if (!draft) return
    get().beginUndo()
    const next = cloneLevel(draft)
    const at = spawnAt()
    let selected: EditorSelection | null = null
    if (kind === 'static' || kind === 'moving' || kind === 'vanishing' || kind === 'bounce' || kind === 'rotating') {
      const platform: PlatformDef = {
        id: uid('p'),
        kind,
        position: at,
        size: [8, 0.8, 8],
        color: colorForPlatform(kind),
      }
      if (kind === 'moving') platform.motion = { axis: 'x', amplitude: 3, speed: 1.2, phase: 0 }
      if (kind === 'rotating') platform.rotationSpeed = 0.6
      next.platforms.push(platform)
      selected = { kind: 'platform', id: platform.id }
    } else if (kind === 'question') {
      const challenge: ChallengeDef = {
        id: uid('q'),
        type: 'grammar',
        origin: at,
        options: [
          { word: 'optionA', offset: [-5.5, 0, 0] },
          { word: 'optionB', offset: [0, 0, 0] },
          { word: 'optionC', offset: [5.5, 0, 0] },
        ],
        correctAnswer: 'optionB',
        platformSize: [4.5, 0.72, 4.6],
        sentence: 'She ___ the lesson yesterday.',
        timeLimit: 15,
      }
      next.challenges.push(challenge)
      selected = { kind: 'challenge', id: challenge.id }
    } else if (kind === 'barrier' || kind === 'hammer' || kind === 'fan' || kind === 'spinner' || kind === 'movingBlock') {
      const obstacle: ObstacleDef = {
        id: uid('o'),
        kind,
        position: [at[0], at[1] + (kind === 'barrier' ? 1 : 1.4), at[2]],
        size: defaultObstacleSize(kind),
        speed: kind === 'barrier' ? undefined : 1.2,
      }
      if (kind === 'fan') {
        obstacle.fanBlow = [1, 0, 0]
        obstacle.fanForce = 1
        obstacle.fanReach = 8
        obstacle.fanSpread = 5.5
        obstacle.fanHeight = 2.8
      }
      if (kind === 'movingBlock') {
        obstacle.motion = { axis: 'x', amplitude: 3.2, speed: 1.2, phase: 0 }
      }
      next.obstacles.push(obstacle)
      selected = { kind: 'obstacle', id: obstacle.id }
    } else if (kind === 'coin') {
      const coin = { id: uid('n'), position: [at[0], at[1] + 1.2, at[2]] as Vec3 }
      next.coins.push(coin)
      selected = { kind: 'coin', id: coin.id }
    } else if (kind === 'checkpoint') {
      const checkpoint = { id: uid('k'), position: at, width: 8 }
      next.checkpoints.push(checkpoint)
      selected = { kind: 'checkpoint', id: checkpoint.id }
    } else if (kind === 'goal') {
      next.goal.position = at
      selected = { kind: 'goal', id: 'goal' }
    }
    persist(levelId, next)
    set({
      draft: next,
      selected,
      dirty: true,
      focusToken: selected ? get().focusToken + 1 : get().focusToken,
    })
    showMessage(set, kind === 'question' ? 'Pregunta añadida · edítala a la derecha' : 'Añadido')
  },

  deleteSelected: () => {
    const { draft, selected, levelId } = get()
    if (!draft || !selected) return
    if (selected.kind === 'goal' || selected.kind === 'start') {
      showMessage(set, 'No se puede borrar')
      return
    }
    if (selected.kind === 'option') {
      const challenge = draft.challenges.find((item) => item.id === selected.id)
      if (!challenge) return
      if (challenge.options.length <= 2) {
        showMessage(set, 'Mínimo 2 respuestas · selecciona la pregunta para borrarla entera')
        return
      }
      get().beginUndo()
      const next = cloneLevel(draft)
      const c = next.challenges.find((item) => item.id === selected.id)!
      const [removed] = c.options.splice(selected.optionIndex ?? 0, 1)
      const lostCorrect = removed?.word === c.correctAnswer
      if (lostCorrect) c.correctAnswer = c.options[0].word
      persist(levelId, next)
      set({ draft: next, selected: { kind: 'challenge', id: c.id }, dirty: true })
      showMessage(set, lostCorrect ? 'Respuesta borrada · revisa cuál es la correcta' : 'Respuesta borrada')
      return
    }
    get().beginUndo()
    const next = cloneLevel(draft)
    if (selected.kind === 'platform') next.platforms = next.platforms.filter((item) => item.id !== selected.id)
    if (selected.kind === 'challenge') next.challenges = next.challenges.filter((item) => item.id !== selected.id)
    if (selected.kind === 'obstacle') next.obstacles = next.obstacles.filter((item) => item.id !== selected.id)
    if (selected.kind === 'coin') next.coins = next.coins.filter((item) => item.id !== selected.id)
    if (selected.kind === 'checkpoint') next.checkpoints = next.checkpoints.filter((item) => item.id !== selected.id)
    persist(levelId, next)
    set({ draft: next, selected: null, dirty: true })
  },

  resetToCode: () => {
    const { levelId } = get()
    cancelPersist()
    clearDraft(levelId)
    unloadLevel(levelId)
    const draft = cloneLevel(getFactoryLevel(levelId))
    editorCursor.current = [...draft.start]
    set({ draft, selected: null, undoStack: [], redoStack: [], dirty: false })
    showMessage(set, 'Restablecido al código')
  },

  playtest: () => {
    const { draft, levelId } = get()
    if (!draft || blockOnErrors(draft, 'probar')) return
    persist(levelId, draft)
    unloadLevel(levelId)
    useGameStore.getState().startLevel(levelId, { fromEditor: true })
  },

  exportJson: async () => {
    const { draft } = get()
    if (!draft || blockOnErrors(draft, 'exportar')) return
    persist(get().levelId, draft)
    await copyText(set, JSON.stringify(draft, null, 2), 'JSON copiado')
  },

  exportTs: async () => {
    const { draft } = get()
    if (!draft || blockOnErrors(draft, 'exportar')) return
    persist(get().levelId, draft)
    await copyText(set, exportLevelTs(draft), 'TypeScript copiado')
  },

}))

function blockOnErrors(draft: LevelDef, action: string) {
  const error = validateLevel(draft).find((issue) => issue.severity === 'error')
  if (!error) return false
  const store = useEditorStore.getState()
  store.select(error.target)
  store.focusSelected()
  showMessage(useEditorStore.setState, `No se puede ${action}: ${error.text}`)
  return true
}

async function copyText(set: (partial: Partial<EditorState>) => void, text: string, done: string) {
  try {
    await navigator.clipboard.writeText(text)
    showMessage(set, done)
  } catch {
    showMessage(set, 'El navegador no dejó copiar al portapapeles')
  }
}

function colorForPlatform(kind: PlatformKind) {
  if (kind === 'moving') return '#7ec8e3'
  if (kind === 'vanishing') return '#c9a0dc'
  if (kind === 'bounce') return '#88d498'
  if (kind === 'rotating') return '#f4a261'
  return '#6fa8dc'
}

export function patchMotion(
  current: PlatformDef['motion'] | ObstacleDef['motion'] | undefined,
  field: string,
  value: number | string,
) {
  const base = current ?? { axis: 'x' as const, amplitude: 3, speed: 1.2, phase: 0 }
  return { ...base, [field]: value }
}

export const CHALLENGE_TYPES: ChallengeType[] = ['grammar', 'vocabulary', 'listening', 'context']
export const PLATFORM_KINDS: PlatformKind[] = ['static', 'moving', 'vanishing', 'rotating', 'bounce', 'recovery']
export const OBSTACLE_KINDS: ObstacleKind[] = ['barrier', 'hammer', 'fan', 'spinner', 'movingBlock']
