import { CanvasTexture, SRGBColorSpace } from 'three'
import { palettes } from './worlds'
import type { WorldId } from './types'

type Theme = {
  waterLevel: number
  ice: number
  gas: boolean
  lights: boolean
  warp: number
}

const themes: Record<WorldId, Theme> = {
  training: { waterLevel: 0.46, ice: 0.16, gas: false, lights: false, warp: 1 },
  'school-path': { waterLevel: 0.34, ice: 0.04, gas: false, lights: false, warp: 1.15 },
  time: { waterLevel: 0.2, ice: 0, gas: true, lights: false, warp: 3.4 },
  industrial: { waterLevel: 0.28, ice: 0, gas: false, lights: true, warp: 1.4 },
  neon: { waterLevel: 0.4, ice: 0, gas: false, lights: true, warp: 1.25 },
  mountain: { waterLevel: 0.38, ice: 0.28, gas: false, lights: false, warp: 1.6 },
  sky: { waterLevel: 0.22, ice: 0.06, gas: true, lights: false, warp: 2.6 },
  chaos: { waterLevel: 0.22, ice: 0, gas: false, lights: true, warp: 1.8 },
  international: { waterLevel: 0.48, ice: 0.14, gas: false, lights: true, warp: 1 },
  bridge: { waterLevel: 0.58, ice: 0.05, gas: false, lights: false, warp: 0.85 },
}

function fade(t: number) {
  return t * t * (3 - 2 * t)
}

function hash2(ix: number, iy: number, seed: number) {
  const n = Math.sin(ix * 127.1 + iy * 311.7 + seed * 74.7) * 43758.5453
  return n - Math.floor(n)
}

function valueNoise(x: number, y: number, seed: number) {
  const x0 = Math.floor(x)
  const y0 = Math.floor(y)
  const fx = fade(x - x0)
  const fy = fade(y - y0)
  const v00 = hash2(x0, y0, seed)
  const v10 = hash2(x0 + 1, y0, seed)
  const v01 = hash2(x0, y0 + 1, seed)
  const v11 = hash2(x0 + 1, y0 + 1, seed)
  return v00 * (1 - fx) * (1 - fy) + v10 * fx * (1 - fy) + v01 * (1 - fx) * fy + v11 * fx * fy
}

function fbm(x: number, y: number, seed: number, octaves = 5) {
  let sum = 0
  let amp = 0.5
  let freq = 1
  for (let i = 0; i < octaves; i += 1) {
    sum += amp * valueNoise(x * freq, y * freq, seed + i * 19)
    amp *= 0.5
    freq *= 2.05
  }
  return sum
}

function hexToRgb(hex: string): [number, number, number] {
  const n = hex.replace('#', '')
  const v = Number.parseInt(n, 16)
  return [(v >> 16) & 255, (v >> 8) & 255, v & 255]
}

function mix(a: [number, number, number], b: [number, number, number], t: number): [number, number, number] {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]
}

function grayscale(rgb: [number, number, number], amount: number): [number, number, number] {
  const g = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11
  return mix(rgb, [g, g, g], amount)
}

function makeTexture(draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void, w = 512, h = 256) {
  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext('2d')
  if (!ctx) return new CanvasTexture(canvas)
  draw(ctx, w, h)
  const tex = new CanvasTexture(canvas)
  tex.colorSpace = SRGBColorSpace
  tex.anisotropy = 8
  tex.needsUpdate = true
  return tex
}

export function createPlanetTextures(world: WorldId, locked: boolean) {
  const palette = palettes[world]
  const theme = themes[world]
  const seed = world.length * 13 + world.charCodeAt(0)
  const ocean = hexToRgb(palette.water)
  const land = hexToRgb(palette.ground)
  const high = hexToRgb(palette.accent)
  const ice: [number, number, number] = [236, 244, 255]
  const deep = mix(ocean, [8, 24, 40], 0.35)

  const map = makeTexture((ctx, w, h) => {
    const img = ctx.createImageData(w, h)
    for (let y = 0; y < h; y += 1) {
      for (let x = 0; x < w; x += 1) {
        const u = x / w
        const v = y / h
        const lat = v * 2 - 1
        const nx = u * 6 * theme.warp
        const ny = v * 3.2 * (theme.gas ? 6 : 1)
        const n = fbm(nx + seed, ny, seed)
        const ridges = Math.abs(fbm(nx * 1.6, ny * 1.6, seed + 9) - 0.5) * 2
        let color: [number, number, number]
        if (theme.gas) {
          const band = 0.5 + Math.sin(v * Math.PI * 10 + n * 3) * 0.28 + n * 0.2
          color = mix(mix(ocean, land, 0.35), high, fade(Math.min(1, Math.max(0, band))))
        } else if (n < theme.waterLevel) {
          const depth = n / Math.max(0.001, theme.waterLevel)
          color = mix(deep, ocean, fade(depth))
        } else {
          const elev = (n - theme.waterLevel) / (1 - theme.waterLevel)
          color = mix(land, high, fade(Math.min(1, elev * 1.4 + ridges * 0.25)))
          if (elev > 0.72) color = mix(color, ice, (elev - 0.72) / 0.28)
        }
        const polar = Math.max(0, Math.abs(lat) - (1 - theme.ice))
        if (polar > 0) color = mix(color, ice, Math.min(1, polar * 4))
        if (locked) color = grayscale(color, 0.82)
        const i = (y * w + x) * 4
        img.data[i] = color[0]
        img.data[i + 1] = color[1]
        img.data[i + 2] = color[2]
        img.data[i + 3] = 255
      }
    }
    ctx.putImageData(img, 0, 0)
  })

  const clouds = makeTexture((ctx, w, h) => {
    const img = ctx.createImageData(w, h)
    for (let y = 0; y < h; y += 1) {
      for (let x = 0; x < w; x += 1) {
        const n = fbm((x / w) * 8, (y / h) * 4, seed + 40, 4)
        const alpha = Math.max(0, (n - 0.52) / 0.48) * (locked ? 70 : 150)
        const i = (y * w + x) * 4
        img.data[i] = 255
        img.data[i + 1] = 255
        img.data[i + 2] = 255
        img.data[i + 3] = alpha
      }
    }
    ctx.putImageData(img, 0, 0)
  })

  const emissive = makeTexture((ctx, w, h) => {
    const img = ctx.createImageData(w, h)
    const glow = hexToRgb(palette.accent)
    for (let y = 0; y < h; y += 1) {
      for (let x = 0; x < w; x += 1) {
        const u = x / w
        const v = y / h
        const n = fbm(u * 7, v * 3.5, seed)
        const city = fbm(u * 28, v * 14, seed + 70, 3)
        const onLand = n > theme.waterLevel + 0.04
        const spark = theme.lights && onLand && city > 0.62 ? (city - 0.62) / 0.38 : 0
        const lava = world === 'chaos' && onLand && fbm(u * 10, v * 5, seed + 90) > 0.58 ? 0.8 : 0
        const t = Math.min(1, spark * 1.4 + lava)
        const i = (y * w + x) * 4
        img.data[i] = glow[0] * t
        img.data[i + 1] = glow[1] * t
        img.data[i + 2] = glow[2] * t
        img.data[i + 3] = 255
      }
    }
    ctx.putImageData(img, 0, 0)
  })

  return { map, clouds, emissive, hasLights: theme.lights, gas: theme.gas }
}

export function planetHasRing(world: WorldId) {
  return world === 'time' || world === 'sky' || world === 'bridge' || world === 'neon'
}
