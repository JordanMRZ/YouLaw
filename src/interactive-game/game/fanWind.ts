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

export const DEFAULT_FAN_RADIUS = 3.4
export const DEFAULT_FAN_HEIGHT = 2.8

export function fanRadius(def: ObstacleDef): number {
  const value = def.fanRadius
  return typeof value === 'number' && Number.isFinite(value) && value > 0 ? value : DEFAULT_FAN_RADIUS
}

export function fanHeightHalf(def: ObstacleDef): number {
  const value = def.fanHeight
  return typeof value === 'number' && Number.isFinite(value) && value > 0 ? value : DEFAULT_FAN_HEIGHT
}

export function isInFanWindZone(def: ObstacleDef, px: number, py: number, pz: number): boolean {
  const dx = px - def.position[0]
  const dz = pz - def.position[2]
  const dy = py - def.position[1]
  return Math.hypot(dx, dz) < fanRadius(def) && dy > -fanHeightHalf(def) && dy < fanHeightHalf(def)
}

export function fanWindImpulse(def: ObstacleDef): Vec3 {
  const [dx, dy, dz] = fanBlowDirection(def)
  const force = fanWindForce(def)
  const push = BASE_IMPULSE * force
  return [push * dx, push * dy, push * dz]
}
