import type { ObstacleDef, Vec3 } from '../data/types'

const DEFAULT_BLOW: Vec3 = [1, 0, 0]

export function fanBlowDirection(def: ObstacleDef): Vec3 {
  const raw = def.fanBlow ?? DEFAULT_BLOW
  const len = Math.hypot(raw[0], raw[1], raw[2])
  if (len < 1e-6) return DEFAULT_BLOW
  return [raw[0] / len, raw[1] / len, raw[2] / len]
}

/** Multiplicador de empuje por frame (aspas usan `speed`). */
export function fanWindForce(def: ObstacleDef): number {
  if (typeof def.fanForce === 'number' && Number.isFinite(def.fanForce)) return def.fanForce
  return def.speed ?? 1
}

const BASE_IMPULSE = 0.18

export function fanWindImpulse(def: ObstacleDef): Vec3 {
  const [dx, dy, dz] = fanBlowDirection(def)
  const force = fanWindForce(def)
  const push = BASE_IMPULSE * force
  return [push * dx, push * dy, push * dz]
}
