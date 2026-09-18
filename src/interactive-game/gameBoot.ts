let onCanvasReady: (() => void) | null = null

export function setGameCanvasReadyListener(listener: (() => void) | null) {
  onCanvasReady = listener
}

export function notifyGameCanvasReady() {
  onCanvasReady?.()
}
