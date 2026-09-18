export type GameUserContext = {
  userId: string | null
  role: string | null
  canOpenEditor: boolean
}

let context: GameUserContext = {
  userId: null,
  role: null,
  canOpenEditor: false,
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
