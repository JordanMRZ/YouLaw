import { useLayoutEffect, useMemo } from 'react'
import { CanvasTexture, SRGBColorSpace } from 'three'

const INK: Record<number, string> = {
  1: '#c1121f',
  2: '#c4551a',
  3: '#1b3a4b',
}

/** Número pintado en el piso. No tiene colisión. */
export function VanishCountdown({
  seconds,
  width,
  depth,
  y,
}: {
  seconds: number
  width: number
  depth: number
  y: number
}) {
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 256
    canvas.height = 256
    const ctx = canvas.getContext('2d')
    const tex = new CanvasTexture(canvas)
    if (!ctx) return tex
    ctx.clearRect(0, 0, 256, 256)
    ctx.fillStyle = INK[seconds] ?? '#1b3a4b'
    ctx.font = '700 188px Outfit, Segoe UI, sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(String(seconds), 128, 136)
    tex.colorSpace = SRGBColorSpace
    tex.needsUpdate = true
    return tex
  }, [seconds])

  useLayoutEffect(() => () => texture.dispose(), [texture])

  const size = Math.min(width, depth) * 0.46
  return (
    <mesh rotation={[-Math.PI / 2, Math.PI, 0]} position={[0, y, 0]}>
      <planeGeometry args={[size, size]} />
      <meshBasicMaterial map={texture} transparent depthWrite={false} polygonOffset polygonOffsetFactor={-2} polygonOffsetUnits={-2} />
    </mesh>
  )
}
