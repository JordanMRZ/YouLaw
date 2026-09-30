import type { CefrLevel } from './data/worlds'

export type GameUserContext = {
  userId: string | null
  role: string | null
  canOpenEditor: boolean
  englishLevel: CefrLevel | null
}

let context: GameUserContext = {
  userId: null,
  role: null,
  canOpenEditor: false,
  englishLevel: null,
}

export function setGameUserContext(next: Partial<GameUserContext>) {
  context = { ...context, ...next }
}

export function getGameUserContext() {
  return context
}

export function canOpenGameEditor() {
  return context.canOpenEditor
}
