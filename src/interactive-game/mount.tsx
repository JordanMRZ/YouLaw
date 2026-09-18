import { createRoot, type Root } from 'react-dom/client'
import App from './App'
import './index.css'
import { getGameUserContext, setGameUserContext, type GameUserContext } from './userContext'
import { useGameStore } from './store/gameStore'

let root: Root | null = null

function applyGameUserContext(userContext: Partial<GameUserContext>) {
  const prevId = getGameUserContext().userId
  setGameUserContext(userContext)
  const store = useGameStore.getState()
  store.setCanOpenEditor(Boolean(userContext.canOpenEditor))
  if (userContext.userId != null && userContext.userId !== prevId) {
    store.reloadSaveFromStorage()
  }
}

export function mountInteractiveGame(container: HTMLElement, userContext?: Partial<GameUserContext>) {
  if (userContext) applyGameUserContext(userContext)
  root = createRoot(container)
  root.render(<App />)
  return () => {
    root?.unmount()
    root = null
  }
}

export function updateInteractiveGameUser(userContext: Partial<GameUserContext>) {
  applyGameUserContext(userContext)
}
