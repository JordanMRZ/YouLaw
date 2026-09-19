import { Canvas } from '@react-three/fiber'
import { Suspense, useCallback, useRef, useState } from 'react'
import { Color } from 'three'
import { CanvasErrorBoundary } from './components/CanvasErrorBoundary'
import { EditorWorld } from './scenes/EditorWorld'
import { GameSession } from './scenes/GameSession'
import { HubWorld } from './scenes/HubWorld'
import { useEditorStore } from './store/editorStore'
import { useGameStore } from './store/gameStore'
import { notifyGameCanvasReady } from './gameBoot'
import { Overlay } from './ui/Overlay'

export default function App() {
  const phase = useGameStore((s) => s.phase)
  const inHub = phase === 'hub'
  const inEditor = phase === 'editor'
  const editorLevelId = useEditorStore((s) => s.levelId)
  const [canvasKey, setCanvasKey] = useState(0)
  const recovering = useRef(false)

  const remountCanvas = useCallback(() => {
    if (recovering.current) return
    recovering.current = true
    setCanvasKey((value) => value + 1)
    window.setTimeout(() => {
      recovering.current = false
    }, 400)
  }, [])

  return (
    <div className="game-shell">
      <CanvasErrorBoundary onReset={remountCanvas}>
        <Canvas
          key={canvasKey}
          shadows
          dpr={[1, 1.5]}
          camera={{ position: [0, 2.4, 18.5], fov: 42, near: 0.1, far: 320 }}
          gl={{ antialias: true, powerPreference: 'default', alpha: false, failIfMajorPerformanceCaveat: false }}
          onCreated={({ scene, gl }) => {
            scene.background = new Color('#071018')
            gl.setClearColor('#071018')
            const canvas = gl.domElement
            const width = Math.max(1, canvas.clientWidth)
            const height = Math.max(1, canvas.clientHeight)
            gl.setSize(width, height, false)
            gl.setViewport(0, 0, width, height)
            gl.setScissor(0, 0, width, height)
            canvas.addEventListener('webglcontextlost', (event) => {
              event.preventDefault()
              remountCanvas()
            })
            notifyGameCanvasReady()
          }}
        >
          {inHub ? (
            <HubWorld />
          ) : inEditor ? (
            <Suspense fallback={null}>
              <EditorWorld key={editorLevelId} />
            </Suspense>
          ) : (
            <Suspense fallback={null}>
              <GameSession />
            </Suspense>
          )}
        </Canvas>
      </CanvasErrorBoundary>
      <Overlay />
    </div>
  )
}
