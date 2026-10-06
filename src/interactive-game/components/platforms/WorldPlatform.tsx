import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'
import { useMemo, useRef, useState } from 'react'
import type { RapierRigidBody } from '@react-three/rapier'
import { Euler, Quaternion } from 'three'
import type { PlatformDef } from '../../data/types'
import { playerRuntime } from '../../game/runtime'
import { useGameStore } from '../../store/gameStore'
import { VanishCountdown } from './VanishCountdown'

const VANISH_SECONDS = 3
const VANISH_MS = VANISH_SECONDS * 1000

const quat = new Quaternion()
const euler = new Euler()

export function WorldPlatform({ def, accent }: { def: PlatformDef; accent: string }) {
  const kind = def.kind ?? 'static'
  const color = def.color ?? accent
  const [w, h, d] = def.size
  const [vanished, setVanished] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(VANISH_SECONDS)
  const shownSeconds = useRef(VANISH_SECONDS)
  const hiding = useRef(false)
  const touching = useRef(false)
  const vanishAt = useRef(0)

  function paintSeconds(next: number) {
    if (shownSeconds.current === next) return
    shownSeconds.current = next
    setSecondsLeft(next)
  }
  const body = useRef<RapierRigidBody>(null)
  const origin = useMemo(() => ({ x: def.position[0], y: def.position[1], z: def.position[2] }), [def.position])

  useFrame((state) => {
    const rb = body.current
    if (!rb) return
    const t = state.clock.elapsedTime
    if (kind === 'moving' && def.motion) {
      const { axis, amplitude, speed, phase = 0 } = def.motion
      const off = Math.sin(t * speed + phase) * amplitude
      rb.setNextKinematicTranslation({
        x: origin.x + (axis === 'x' ? off : 0),
        y: origin.y + (axis === 'y' ? off : 0),
        z: origin.z + (axis === 'z' ? off : 0),
      })
    }
    if (kind === 'rotating') {
      euler.set(0, t * (def.rotationSpeed ?? 0.8), 0)
      quat.setFromEuler(euler)
      rb.setNextKinematicRotation(quat)
    }
    if (kind === 'vanishing' && touching.current && vanishAt.current > 0 && !hiding.current) {
      const leftMs = vanishAt.current - performance.now()
      if (leftMs <= 0) {
        hiding.current = true
        setVanished(true)
        window.setTimeout(() => {
          hiding.current = false
          touching.current = false
          vanishAt.current = 0
          setVanished(false)
          paintSeconds(VANISH_SECONDS)
        }, 2600)
      } else {
        paintSeconds(Math.max(1, Math.ceil(leftMs / 1000)))
      }
    }
  })

  if (vanished) return null

  const type = kind === 'moving' || kind === 'rotating' ? 'kinematicPosition' : 'fixed'
  const isRecovery = kind === 'recovery'

  return (
    <RigidBody
      ref={body}
      type={type}
      position={def.position}
      colliders={false}
      friction={isRecovery ? 0.2 : 1.4}
      restitution={kind === 'bounce' ? 1.35 : 0}
      sensor={isRecovery}
      onIntersectionEnter={({ other }) => {
        if (!isRecovery || other.rigidBodyObject?.name !== 'player') return
        playerRuntime.respawn()
      }}
      onCollisionEnter={({ other }) => {
        if (other.rigidBodyObject?.name !== 'player') return
        if (kind === 'bounce') playerRuntime.bounce(13.5)
        if (kind === 'vanishing' && !touching.current && !hiding.current) {
          touching.current = true
          vanishAt.current = performance.now() + VANISH_MS
          paintSeconds(VANISH_SECONDS)
        }
      }}
      onCollisionExit={({ other }) => {
        if (other.rigidBodyObject?.name !== 'player') return
        if (kind === 'vanishing' && !hiding.current) {
          touching.current = false
          vanishAt.current = 0
          paintSeconds(VANISH_SECONDS)
        }
      }}
    >
      <CuboidCollider args={[w / 2, h / 2, d / 2]} />
      <mesh castShadow receiveShadow>
        <boxGeometry args={[w, h, d]} />
        <meshLambertMaterial color={isRecovery ? '#7ec8e3' : color} transparent={isRecovery} opacity={isRecovery ? 0.55 : 1} />
      </mesh>
      {!isRecovery && (
        <mesh position={[0, h * 0.52, 0]} receiveShadow>
          <boxGeometry args={[w * 0.96, 0.06, d * 0.96]} />
          <meshLambertMaterial color="#ffffff" />
        </mesh>
      )}

      {kind === 'vanishing' && !vanished && (
        <VanishCountdown seconds={secondsLeft} width={w} depth={d} y={h * 0.52 + 0.05} />
      )}
    </RigidBody>
  )
}

export function KillPlane() {
  const cooled = useRef(0)
  useFrame(() => {
    if (playerRuntime.position.y < -8 && performance.now() > cooled.current) {
      cooled.current = performance.now() + 900
      const phase = useGameStore.getState().phase
      if (phase !== 'play') return
      if (performance.now() < playerRuntime.invulnerableUntil) {
        playerRuntime.respawn()
        return
      }
      const alive = useGameStore.getState().loseLife('fall')
      if (alive) playerRuntime.respawn()
    }
  })
  return null
}
