import { Sparkles } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { useRef } from 'react'
import { DEFAULT_GOAL_SIZE } from '../data/defaults'
import type { Vec3 } from '../data/types'
import { playerRuntime } from '../game/runtime'
import { useGameStore } from '../store/gameStore'
import { WorldLabel } from './WorldLabel'

export function GoalFrame({ size }: { size: Vec3 }) {
  const [w, h] = size
  return (
    <>
      <mesh position={[-(w / 2 - 0.2), h * 0.095, 0]} castShadow>
        <boxGeometry args={[0.5, h + 0.2, 0.5]} />
        <meshLambertMaterial color="#f4a261" />
      </mesh>
      <mesh position={[w / 2 - 0.2, h * 0.095, 0]} castShadow>
        <boxGeometry args={[0.5, h + 0.2, 0.5]} />
        <meshLambertMaterial color="#f4a261" />
      </mesh>
      <mesh position={[0, h * 0.595, 0]} castShadow>
        <boxGeometry args={[w + 0.2, 0.7, 0.6]} />
        <meshLambertMaterial color="#e76f51" />
      </mesh>
      <WorldLabel text="META" position={[0, h * 0.62, 0.45]} width={Math.min(4.4, w * 0.6)} color="#fff7e6" />
      <Sparkles count={18} scale={[w * 0.75, h * 0.7, 2]} size={4} speed={0.4} color="#ffd166" />
    </>
  )
}

export function GoalArch({ position, size = DEFAULT_GOAL_SIZE }: { position: Vec3; size?: Vec3 }) {
  const used = useRef(false)
  return (
    <group position={position}>
      <RigidBody
        type="fixed"
        sensor
        colliders="cuboid"
        onIntersectionEnter={({ other }) => {
          if (used.current || other.rigidBodyObject?.name !== 'player') return
          used.current = true
          playerRuntime.anim = 'victory'
          useGameStore.getState().spawnBurst('goal', position)
          useGameStore.getState().finishLevel()
        }}
      >
        <mesh>
          <boxGeometry args={size} />
          <meshLambertMaterial color="#ffd166" transparent opacity={0.16} />
        </mesh>
      </RigidBody>
      <GoalFrame size={size} />
    </group>
  )
}
