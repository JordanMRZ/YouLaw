import { createRoot, type Root } from 'react-dom/client'
import App from './App'
import './index.css'

let root: Root | null = null

export function mountInteractiveGame(container: HTMLElement) {
  root = createRoot(container)
  root.render(<App />)
  return () => {
    root?.unmount()
    root = null
  }
}
