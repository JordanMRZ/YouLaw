import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { useState } from 'react'
import { DEFAULT_CHECKPOINT_WIDTH } from '../data/defaults'
import type { CheckpointDef } from '../data/types'
import { useGameStore } from '../store/gameStore'
import { WorldLabel } from './WorldLabel'

export function checkpointSensorWidth(width: number) {
  return Math.max(1, Math.min(width - 1, 12))
}

export function CheckpointFrame({ width }: { width: number }) {
  return (
    <>
      <mesh position={[-(width * 0.38), 0.2, 0]}>
        <boxGeometry args={[0.28, 3.4, 0.28]} />
        <meshLambertMaterial color="#1f6f8b" />
      </mesh>
      <mesh position={[width * 0.38, 0.2, 0]}>
        <boxGeometry args={[0.28, 3.4, 0.28]} />
        <meshLambertMaterial color="#1f6f8b" />
      </mesh>
      <mesh position={[0, 1.7, 0]}>
        <boxGeometry args={[width * 0.72, 0.28, 0.28]} />
        <meshLambertMaterial color="#ffd166" />
      </mesh>
      <WorldLabel text="CHECKPOINT" position={[0, 2.2, 0.2]} width={Math.min(5.2, width * 0.6)} color="#ffd166" />
    </>
  )
}

export function CheckpointGate({ def }: { def: CheckpointDef }) {
  const [locked, setLocked] = useState(false)
  const width = def.width ?? DEFAULT_CHECKPOINT_WIDTH
  return (
    <group position={def.position}>
      <RigidBody
        type="fixed"
        colliders="cuboid"
        sensor
        onIntersectionEnter={({ other }) => {
          if (locked || other.rigidBodyObject?.name !== 'player') return
          setLocked(true)
          useGameStore.getState().setCheckpoint([def.position[0], def.position[1] + 0.8, def.position[2]])
          useGameStore.getState().spawnBurst('checkpoint', def.position)
        }}
      >
        <mesh>
          <boxGeometry args={[checkpointSensorWidth(width), 3.2, 0.6]} />
          <meshLambertMaterial color="#3ee0b3" transparent opacity={0.18} />
        </mesh>
      </RigidBody>
      <CheckpointFrame width={width} />
      {locked && (
        <RigidBody type="fixed" position={[0, 1.1, -0.85]} colliders={false} userData={{ ignoreCamera: true }}>
          <CuboidCollider args={[(width * 0.96) / 2, 1.3, 0.22]} />
        </RigidBody>
      )}
    </group>
  )
}
