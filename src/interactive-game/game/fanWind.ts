import type { ObstacleDef, Vec3 } from '../data/types'
import { Quaternion, Vector3 } from 'three'

const DEFAULT_BLOW: Vec3 = [1, 0, 0]
const X_AXIS = new Vector3(1, 0, 0)
const _dir = new Vector3()

export function fanBlowDirection(def: ObstacleDef): Vec3 {
  const raw = def.fanBlow ?? DEFAULT_BLOW
  const len = Math.hypot(raw[0], raw[1], raw[2])
  if (len < 1e-6) return DEFAULT_BLOW
  return [raw[0] / len, raw[1] / len, raw[2] / len]
}

/** Quaternion que orienta el eje +X local hacia la dirección del viento (espacio del nivel). */
export function fanBlowQuaternion(def: ObstacleDef): Quaternion {
  const [bx, by, bz] = fanBlowDirection(def)
  _dir.set(bx, by, bz)
  if (_dir.lengthSq() < 1e-6) _dir.set(1, 0, 0)
  else _dir.normalize()
  const q = new Quaternion()
  q.setFromUnitVectors(X_AXIS, _dir)
  return q
}

/** Multiplicador de empuje por frame (aspas usan `speed`). */
export function fanWindForce(def: ObstacleDef): number {
  if (typeof def.fanForce === 'number' && Number.isFinite(def.fanForce)) return def.fanForce
  return def.speed ?? 1
}

const BASE_IMPULSE = 0.18

/** Escala al deslizar en suelo (multiplica fanWindImpulse × dt en Player). */
export const GROUND_WIND_SLIDE = 58

export const DEFAULT_FAN_REACH = 8
export const DEFAULT_FAN_SPREAD = 5.5
export const DEFAULT_FAN_HEIGHT = 2.8

/** @deprecated Usar fanReach; se mantiene como respaldo. */
export function fanRadius(def: ObstacleDef): number {
  return fanReach(def)
}

export function fanReach(def: ObstacleDef): number {
  if (typeof def.fanReach === 'number' && Number.isFinite(def.fanReach) && def.fanReach > 0) {
    return def.fanReach
  }
  if (typeof def.fanRadius === 'number' && Number.isFinite(def.fanRadius) && def.fanRadius > 0) {
    return Math.max(def.fanRadius, 4)
  }
  return DEFAULT_FAN_REACH
}

export function fanSpread(def: ObstacleDef): number {
  const value = def.fanSpread
  return typeof value === 'number' && Number.isFinite(value) && value > 0 ? value : DEFAULT_FAN_SPREAD
}

export function fanHeightHalf(def: ObstacleDef): number {
  const value = def.fanHeight
  return typeof value === 'number' && Number.isFinite(value) && value > 0 ? value : DEFAULT_FAN_HEIGHT
}

/** Túnel de viento: sale del ventilador solo hacia adelante (fanBlow). */
export function isInFanWindZone(
  def: ObstacleDef,
  px: number,
  py: number,
  pz: number,
  feetBelowCenter = 0,
): boolean {
  const [bx, by, bz] = fanBlowDirection(def)
  const ox = px - def.position[0]
  const oy = py - def.position[1] - feetBelowCenter
  const oz = pz - def.position[2]

  if (Math.abs(oy) > fanHeightHalf(def)) return false

  const along = ox * bx + oy * by + oz * bz
  const reach = fanReach(def)
  const start = -0.45
  if (along < start || along > reach) return false

  const spread = fanSpread(def)
  const horizLen = Math.hypot(bx, bz)

  if (horizLen < 0.2) {
    if (Math.hypot(ox, oz) > spread) return false
  } else {
    const horizCross = Math.abs(ox * bz - oz * bx)
    if (horizCross > spread) return false
  }

  return true
}

/** Aprox. pies respecto al centro del capsule (mejor detección en suelo). */
export const FAN_ZONE_FEET_OFFSET = 0.78

export function fanWindImpulse(def: ObstacleDef): Vec3 {
  const [dx, dy, dz] = fanBlowDirection(def)
  const force = fanWindForce(def)
  const push = BASE_IMPULSE * force
  return [push * dx, push * dy, push * dz]
}
