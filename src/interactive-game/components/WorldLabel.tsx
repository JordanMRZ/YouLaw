import { useLayoutEffect, useMemo } from 'react'
import { CanvasTexture, SRGBColorSpace } from 'three'

const CANVAS_W = 1024
const CANVAS_H = 256

export function WorldLabel({
  text,
  width = 4,
  color = '#ffffff',
  position = [0, 0, 0],
  outline = '#102030',
  plate,
}: {
  text: string
  width?: number
  color?: string
  position?: [number, number, number]
  outline?: string
  plate?: string
}) {
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = CANVAS_W
    canvas.height = CANVAS_H
    const ctx = canvas.getContext('2d')
    if (!ctx) return new CanvasTexture(canvas)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const maxText = plate ? 900 : 960
    let size = text.length > 12 ? 112 : 150
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.lineJoin = 'round'
    do {
      ctx.font = `700 ${size}px Outfit, Segoe UI, sans-serif`
      size -= 4
    } while (ctx.measureText(text).width > maxText && size > 28)
    const textWidth = ctx.measureText(text).width
    if (plate) {
      const padX = 44
      const plateW = Math.min(CANVAS_W - 8, textWidth + padX * 2)
      const plateH = Math.min(CANVAS_H - 8, size * 1.45)
      ctx.fillStyle = plate
      ctx.beginPath()
      ctx.roundRect((CANVAS_W - plateW) / 2, (CANVAS_H - plateH) / 2, plateW, plateH, plateH / 2)
      ctx.fill()
    }
    ctx.lineWidth = plate ? 10 : 16
    ctx.strokeStyle = outline
    ctx.strokeText(text, CANVAS_W / 2, CANVAS_H / 2 + 4)
    ctx.fillStyle = color
    ctx.fillText(text, CANVAS_W / 2, CANVAS_H / 2 + 4)
    const tex = new CanvasTexture(canvas)
    tex.colorSpace = SRGBColorSpace
    tex.anisotropy = 4
    tex.needsUpdate = true
    return tex
  }, [text, color, outline, plate])

  useLayoutEffect(() => () => texture.dispose(), [texture])

  return (
    <sprite position={position} scale={[width, width * (CANVAS_H / CANVAS_W), 1]}>
      <spriteMaterial map={texture} transparent depthWrite={false} />
    </sprite>
  )
}
