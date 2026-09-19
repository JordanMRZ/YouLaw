import { LEVELS_PER_WORLD, WORLD_COUNT } from './levels'

export type HubLayer = 'galaxy' | 'world'

export const PLANET_SPACING = 20
export const PLANET_RADIUS = 5

export function planetPosition(worldIndex: number): [number, number, number] {
  return [worldIndex * PLANET_SPACING, 0, 0]
}

export function worldIndexForLevel(levelId: number) {
  return Math.min(WORLD_COUNT - 1, Math.max(0, Math.floor((levelId - 1) / LEVELS_PER_WORLD)))
}

export function firstLevelOfWorld(worldIndex: number) {
  return worldIndex * LEVELS_PER_WORLD + 1
}

export function lastLevelOfWorld(worldIndex: number) {
  return (worldIndex + 1) * LEVELS_PER_WORLD
}

export function isWorldLocked(worldIndex: number, unlockedLevel: number) {
  return firstLevelOfWorld(worldIndex) > unlockedLevel
}

export function clampWorldIndex(index: number) {
  return Math.min(WORLD_COUNT - 1, Math.max(0, index))
}

/** Offset from planet center onto the camera-facing hemisphere. */
export function islandLocalOffset(localIndex: number, radius = PLANET_RADIUS): [number, number, number] {
  const yaw = ((localIndex - 2) / 2) * 0.78
  const pitch = 0.36
  const r = radius + 0.55
  return [
    Math.sin(yaw) * Math.cos(pitch) * r,
    Math.sin(pitch) * r,
    Math.cos(yaw) * Math.cos(pitch) * r,
  ]
}
