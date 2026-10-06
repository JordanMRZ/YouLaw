import { CapsuleCollider, RigidBody, useRapier } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import type { RapierRigidBody } from '@react-three/rapier'
import { Group } from 'three'
import { audio } from '../audio/audioManager'
import type { LevelDef } from '../data/types'
import { GROUND_WIND_SLIDE, GROUND_WIND_TARGET_SPEED } from '../game/fanWind'
import { playerRuntime } from '../game/runtime'
import { useGameStore } from '../store/gameStore'
import { PlayerVisual } from './PlayerVisual'
import { useKeyboard } from './useKeyboard'

const MOVE_SPEED = 10.2
const SPRINT_SPEED = 14.2
const AIR_CONTROL = 0.72
const JUMP_VEL = 12
const JUMP_CUT = 0.5
const RESPAWN_FREEZE_MS = 350
const FOOT_OFFSETS: [number, number][] = [
  [0, 0],
  [0.26, 0],
  [-0.26, 0],
  [0, 0.26],
  [0, -0.26],
]

type PlatformTrack = { handle: number; x: number; y: number; z: number; yaw: number }

function yawOf(q: { y: number; w: number }) {
  return 2 * Math.atan2(q.y, q.w)
}

function wrapAngle(a: number) {
  return Math.atan2(Math.sin(a), Math.cos(a))
}

export function Player({ level }: { level: LevelDef }) {
  const bodyRef = useRef<RapierRigidBody>(null)
  const visualRef = useRef<Group>(null)
  const keys = useKeyboard()
  const { world, rapier } = useRapier()
  const footRay = useMemo(() => new rapier.Ray({ x: 0, y: 0, z: 0 }, { x: 0, y: -1, z: 0 }), [rapier])
  const coyote = useRef(0)
  const jumpBuffer = useRef(0)
  const spaceWasDown = useRef(false)
  const jumpHeld = useRef(false)
  const frozenUntil = useRef(0)
  const platformTrack = useRef<PlatformTrack | null>(null)
  const sprintUntil = useRef(0)
  const sprintReady = useRef(0)
  const wasGrounded = useRef(false)
  const landUntil = useRef(0)
  const cosmetics = useGameStore((s) => s.save.cosmetics)

  useEffect(() => {
    playerRuntime.respawn = () => {
      const body = bodyRef.current
      if (!body) return
      const cp = useGameStore.getState().lastCheckpoint
      body.setTranslation({ x: cp[0], y: cp[1], z: cp[2] }, true)
      body.setLinvel({ x: 0, y: 0, z: 0 }, true)
      const now = performance.now()
      playerRuntime.invulnerableUntil = now + 2200
      frozenUntil.current = now + RESPAWN_FREEZE_MS
      jumpBuffer.current = 0
      jumpHeld.current = false
      platformTrack.current = null
      playerRuntime.yaw = 0
    }
    playerRuntime.applyImpulse = (x, y, z) => {
      bodyRef.current?.applyImpulse({ x, y, z }, true)
    }
    playerRuntime.bounce = (strength) => {
      const body = bodyRef.current
      if (!body) return
      const v = body.linvel()
      body.setLinvel({ x: v.x, y: strength, z: v.z }, true)
    }
    return () => {
      playerRuntime.ready = false
    }
  }, [])

  useFrame((_, dt) => {
    const body = bodyRef.current
    if (!body) return
    const phase = useGameStore.getState().phase
    const origin = body.translation()
    const vel = body.linvel()
    playerRuntime.position.set(origin.x, origin.y, origin.z)
    playerRuntime.velocity.set(vel.x, vel.y, vel.z)
    playerRuntime.ready = true

    if (visualRef.current) visualRef.current.rotation.y = playerRuntime.yaw

    if (phase === 'results' || phase === 'credits') {
      playerRuntime.anim = 'victory'
      playerRuntime.windForce.set(0, 0, 0)
      body.setLinvel({ x: 0, y: vel.y, z: 0 }, true)
      return
    }
    if (phase !== 'play') {
      playerRuntime.anim = 'idle'
      playerRuntime.windForce.set(0, 0, 0)
      body.setLinvel({ x: 0, y: 0, z: 0 }, true)
      return
    }

    const windX = playerRuntime.windForce.x
    const windY = playerRuntime.windForce.y
    const windZ = playerRuntime.windForce.z
    playerRuntime.windForce.set(0, 0, 0)

    let hit: ReturnType<typeof world.castRay> = null
    for (const [fx, fz] of FOOT_OFFSETS) {
      footRay.origin = { x: origin.x + fx, y: origin.y + 0.35, z: origin.z + fz }
      const footHit = world.castRay(footRay, 0.55, false, undefined, undefined, undefined, body, (collider) => !collider.isSensor())
      if (footHit && (!hit || footHit.timeOfImpact < hit.timeOfImpact)) hit = footHit
    }
    const grounded = hit !== null && hit.timeOfImpact < 0.5
    playerRuntime.grounded = grounded
    playerRuntime.platformVelocity.set(0, 0, 0)
    const parent = hit?.collider.parent()
    if (grounded && parent?.isKinematic() && dt > 0) {
      const t = parent.translation()
      const yaw = yawOf(parent.rotation())
      const last = platformTrack.current
      if (last && last.handle === parent.handle) {
        const spin = wrapAngle(yaw - last.yaw) / dt
        const rx = origin.x - t.x
        const rz = origin.z - t.z
        playerRuntime.platformVelocity.set(
          (t.x - last.x) / dt + spin * rz,
          (t.y - last.y) / dt,
          (t.z - last.z) / dt - spin * rx,
        )
      }
      platformTrack.current = { handle: parent.handle, x: t.x, y: t.y, z: t.z, yaw }
    } else {
      platformTrack.current = null
    }

    if (grounded) coyote.current = 0.12
    else coyote.current = Math.max(0, coyote.current - dt)

    const k = keys.current
    const spaceDown = k.has('Space')
    if (spaceDown && !spaceWasDown.current) jumpBuffer.current = 0.12
    else jumpBuffer.current = Math.max(0, jumpBuffer.current - dt)
    spaceWasDown.current = spaceDown

    const nowMs = performance.now()
    const stunned = nowMs < frozenUntil.current
    const now = nowMs / 1000
    if ((k.has('ShiftLeft') || k.has('ShiftRight')) && grounded && now > sprintReady.current && !stunned) {
      sprintUntil.current = now + 1.15
      sprintReady.current = now + 3.1
    }
    const sprinting = now < sprintUntil.current
    const speed = sprinting ? SPRINT_SPEED : MOVE_SPEED

    let ix = 0
    let iz = 0
    if (!stunned) {
      if (k.has('KeyW') || k.has('ArrowUp')) iz += 1
      if (k.has('KeyS') || k.has('ArrowDown')) {
        if (origin.z > useGameStore.getState().minZ + 0.15) iz -= 0.4
      }
      if (k.has('KeyA') || k.has('ArrowLeft')) ix += 1
      if (k.has('KeyD') || k.has('ArrowRight')) ix -= 1
      if (level.autoRun) iz = Math.max(iz, 1)
    }

    const len = Math.hypot(ix, iz)
    if (len > 1) {
      ix /= len
      iz /= len
    }

    const control = grounded ? 1 : AIR_CONTROL
    let targetX = ix * speed * control + playerRuntime.platformVelocity.x
    let targetZ = iz * speed * control + playerRuntime.platformVelocity.z

    const windActive = Math.hypot(windX, windZ) > 1e-5 || Math.abs(windY) > 1e-5
    if (windActive && grounded) {
      const wMag = Math.hypot(windX, windZ)
      if (wMag > 1e-5) {
        const push = GROUND_WIND_TARGET_SPEED * Math.min(2.2, wMag * 40)
        targetX += (windX / wMag) * push
        targetZ += (windZ / wMag) * push
      }
    }

    let nextX = vel.x + (targetX - vel.x) * Math.min(1, dt * 12)
    let nextZ = vel.z + (targetZ - vel.z) * Math.min(1, dt * 12)
    let nextY = vel.y
    if (grounded && playerRuntime.platformVelocity.y < 0) nextY = Math.min(nextY, playerRuntime.platformVelocity.y)

    if (windActive) {
      if (grounded) {
        const tx = origin.x + windX * GROUND_WIND_SLIDE * dt * 0.25
        const ty = origin.y + windY * GROUND_WIND_SLIDE * dt * 0.25
        const tz = origin.z + windZ * GROUND_WIND_SLIDE * dt * 0.25
        body.setTranslation({ x: tx, y: ty, z: tz }, true)
        nextY += windY * 6
      } else {
        nextX += windX * 12
        nextZ += windZ * 12
        nextY += windY * 8
      }
    }

    if (!stunned && jumpBuffer.current > 0 && coyote.current > 0) {
      nextY = JUMP_VEL + Math.max(0, playerRuntime.platformVelocity.y)
      coyote.current = 0
      jumpBuffer.current = 0
      jumpHeld.current = true
      platformTrack.current = null
      audio.play('jump')
      playerRuntime.anim = 'jump'
    } else if (jumpHeld.current && (!spaceDown || nextY <= 0)) {
      if (!spaceDown && nextY > 0) nextY *= JUMP_CUT
      jumpHeld.current = false
    }

    body.setLinvel({ x: nextX, y: nextY, z: nextZ }, true)

    const minZ = useGameStore.getState().minZ
    const after = body.translation()
    if (after.z < minZ) {
      body.setTranslation({ x: after.x, y: after.y, z: minZ }, true)
      const lockedVel = body.linvel()
      if (lockedVel.z < 0) body.setLinvel({ x: lockedVel.x, y: lockedVel.y, z: 0 }, true)
    }

    const face = Math.atan2(ix * 0.45, 1)
    playerRuntime.yaw += (face - playerRuntime.yaw) * Math.min(1, dt * 8)

    if (!grounded && vel.y < -1.2) playerRuntime.anim = 'fall'
    else if (!grounded && vel.y > 0.8) playerRuntime.anim = 'jump'
    else if (grounded && !wasGrounded.current) {
      landUntil.current = now + 0.16
      audio.play('land')
      playerRuntime.anim = 'land'
    } else if (now < landUntil.current) playerRuntime.anim = 'land'
    else if (grounded && (Math.hypot(nextX, nextZ) > 1.4 || level.autoRun)) playerRuntime.anim = 'run'
    else playerRuntime.anim = 'idle'

    wasGrounded.current = grounded
  })

  return (
    <RigidBody
      ref={bodyRef}
      name="player"
      position={level.start}
      colliders={false}
      lockRotations
      friction={0}
      restitution={0}
      linearDamping={0.08}
      ccd
      canSleep={false}
      userData={{ player: true }}
    >
      <CapsuleCollider args={[0.46, 0.36]} position={[0, 0.82, 0]} />
      <group ref={visualRef}>
        <PlayerVisual cosmetics={cosmetics} />
      </group>
    </RigidBody>
  )
}
