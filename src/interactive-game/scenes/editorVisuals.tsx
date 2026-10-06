import { useFrame } from '@react-three/fiber'
import { useMemo, useRef, type ReactNode } from 'react'
import type { Group } from 'three'
import { CheckpointFrame, checkpointSensorWidth } from '../components/Checkpoint'
import { GoalFrame } from '../components/Goal'
import { DEFAULT_CHECKPOINT_WIDTH, DEFAULT_GOAL_SIZE } from '../data/defaults'
import { WorldLabel } from '../components/WorldLabel'
import { VanishCountdown } from '../components/platforms/VanishCountdown'
import type {
  ChallengeDef,
  CheckpointDef,
  CoinDef,
  MotionDef,
  ObstacleDef,
  PlatformDef,
  Vec3,
} from '../data/types'
import { PlayerVisual } from '../player/PlayerVisual'
import { fanBlowQuaternion, fanHeightHalf, fanReach, fanSpread } from '../game/fanWind'
import { useGameStore } from '../store/gameStore'
import { selectionKey, useEditorStore } from '../store/editorStore'

function noRaycast() {}

export function Selectable({
  selected: _selected,
  onSelect,
  children,
}: {
  selected: boolean
  onSelect: () => void
  children: ReactNode
}) {
  return (
    <group
      onClick={(event) => {
        event.stopPropagation()
        if (event.delta > 4) return
        onSelect()
      }}
    >
      {children}
    </group>
  )
}

function MotionRoot({
  position,
  motion,
  rotationSpeed = 0,
  preview,
  children,
}: {
  position: Vec3
  motion?: MotionDef | ObstacleDef['motion']
  rotationSpeed?: number
  preview: boolean
  children: ReactNode
}) {
  const group = useRef<Group>(null)
  useFrame((state) => {
    const node = group.current
    if (!node) return
    let x = position[0]
    let y = position[1]
    let z = position[2]
    if (preview && motion) {
      const off = Math.sin(state.clock.elapsedTime * (motion.speed ?? 1) + (motion.phase ?? 0)) * motion.amplitude
      if (motion.axis === 'x') x += off
      else if (motion.axis === 'y') y += off
      else z += off
    }
    node.position.set(x, y, z)
    node.rotation.y = preview && rotationSpeed ? state.clock.elapsedTime * rotationSpeed : 0
  })
  return (
    <group ref={group} position={position}>
      {children}
    </group>
  )
}

export function EditorPlatform({
  def,
  accent,
  selected,
  preview,
}: {
  def: PlatformDef
  accent: string
  selected: boolean
  preview: boolean
}) {
  const kind = def.kind ?? 'static'
  const color = def.color ?? (kind === 'recovery' ? '#7ec8e3' : accent)
  const [w, h, d] = def.size
  return (
    <MotionRoot
      position={def.position}
      motion={def.motion}
      rotationSpeed={kind === 'rotating' ? def.rotationSpeed ?? 0.8 : 0}
      preview={preview}
    >
      <Selectable selected={selected} onSelect={() => useEditorStore.getState().select({ kind: 'platform', id: def.id })}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[w, h, d]} />
          <meshLambertMaterial color={color} transparent={kind === 'recovery'} opacity={kind === 'recovery' ? 0.45 : 1} />
        </mesh>
        {kind !== 'recovery' && (
          <>
            <mesh position={[0, h * 0.52, 0]} receiveShadow>
              <boxGeometry args={[w * 0.96, 0.06, d * 0.96]} />
              <meshLambertMaterial color={kind === 'bounce' ? '#b8ffd9' : '#ffffff'} />
            </mesh>
            <PlatformFeet w={w} h={h} d={d} />
          </>
        )}
        {kind === 'vanishing' && (
          <VanishCountdown seconds={3} width={w} depth={d} y={h * 0.52 + 0.05} />
        )}
        {selected && <SelectionBox size={def.size} />}
      </Selectable>
    </MotionRoot>
  )
}

export function EditorChallenge({
  challenge,
  selectedKey,
  index,
}: {
  challenge: ChallengeDef
  selectedKey: string
  index: number
}) {
  const size = challenge.platformSize ?? [4.5, 0.72, 4.6]
  const selectedHere =
    selectedKey === selectionKey({ kind: 'challenge', id: challenge.id }) ||
    selectedKey.startsWith(`option:${challenge.id}:`)
  return (
    <group>
      <group
        position={challenge.origin}
        onClick={(event) => {
          event.stopPropagation()
          if (event.delta > 4) return
          useEditorStore.getState().select({ kind: 'challenge', id: challenge.id })
        }}
      >
        <mesh position={[0, 1.1, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 2.2, 8]} />
          <meshLambertMaterial color="#c9a227" />
        </mesh>
        <mesh position={[0, 2.28, 0]}>
          <boxGeometry args={[1.6, 0.7, 0.12]} />
          <meshLambertMaterial color={selectedHere ? '#ffd166' : '#e76f51'} />
        </mesh>
        <WorldLabel text={`P${index + 1}`} position={[0, 2.3, 0.12]} width={2.2} color="#102030" outline="#ffd166" />
        <WorldLabel
          text={challenge.sentence ?? 'Pregunta'}
          position={[0, 3.15, 0]}
          width={Math.min(16, 7 + (challenge.sentence?.length ?? 0) * 0.14)}
          color="#fff6d8"
        />
      </group>
      {challenge.options.map((option, optionIndex) => {
        const correct = option.word === challenge.correctAnswer
        const selected = selectedKey === selectionKey({ kind: 'option', id: challenge.id, optionIndex })
        const body = selected ? '#3d6d9a' : correct ? '#1f6f4a' : '#2c4c6e'
        const top = selected ? '#fff1b8' : correct ? '#b8ffd9' : '#f4fbff'
        return (
          <group
            key={`${challenge.id}-${optionIndex}`}
            position={[
              challenge.origin[0] + option.offset[0],
              challenge.origin[1] + option.offset[1],
              challenge.origin[2] + option.offset[2],
            ]}
            onClick={(event) => {
              event.stopPropagation()
              if (event.delta > 4) return
              useEditorStore.getState().select({ kind: 'option', id: challenge.id, optionIndex })
            }}
          >
            <mesh castShadow receiveShadow>
              <boxGeometry args={size} />
              <meshLambertMaterial color={body} />
            </mesh>
            <mesh position={[0, size[1] * 0.52, 0]} receiveShadow>
              <boxGeometry args={[size[0] * 0.96, 0.07, size[2] * 0.96]} />
              <meshLambertMaterial color={top} />
            </mesh>
            <PlatformFeet w={size[0]} h={size[1]} d={size[2]} />
            <WorldLabel
              text={option.word}
              position={[0, size[1] * 0.5 + 1.05, 0]}
              width={option.word.length > 10 ? 5.6 : 4.2}
              color={correct ? '#b8ffd9' : '#ffffff'}
              plate="rgba(16, 32, 48, 0.62)"
            />
            {correct && <WorldLabel text="CORRECTA" position={[0, size[1] * 0.5 + 1.8, 0]} width={3.2} color="#b8ffd9" />}
            {selected && <SelectionBox size={size} />}
          </group>
        )
      })}
    </group>
  )
}

export function EditorObstacle({
  def,
  selected,
  preview,
}: {
  def: ObstacleDef
  selected: boolean
  preview: boolean
}) {
  return (
    <MotionRoot position={def.position} motion={def.motion} preview={preview}>
      <Selectable selected={selected} onSelect={() => useEditorStore.getState().select({ kind: 'obstacle', id: def.id })}>
        {def.kind === 'barrier' ? (
          <BarrierVisual def={def} />
        ) : def.kind === 'hammer' ? (
          <HammerVisual def={def} preview={preview} />
        ) : def.kind === 'fan' ? (
          <FanVisual def={def} preview={preview} />
        ) : def.kind === 'spinner' ? (
          <SpinnerVisual def={def} preview={preview} />
        ) : (
          <mesh castShadow>
            <boxGeometry args={def.size ?? [1.6, 1.6, 1.6]} />
            <meshLambertMaterial color="#bc6c25" />
          </mesh>
        )}
        {selected && <SelectionBox size={def.size ?? sizeForObstacle(def)} />}
      </Selectable>
    </MotionRoot>
  )
}

function BarrierVisual({ def }: { def: ObstacleDef }) {
  const size = def.size ?? [2.2, 1, 0.7]
  return (
    <group>
      <mesh castShadow>
        <boxGeometry args={size} />
        <meshLambertMaterial color={def.color ?? '#d64545'} />
      </mesh>
      <mesh position={[0, size[1] * 0.52, 0]}>
        <boxGeometry args={[size[0], 0.08, size[2] + 0.08]} />
        <meshLambertMaterial color="#ffd166" />
      </mesh>
    </group>
  )
}

function HammerVisual({ def, preview }: { def: ObstacleDef; preview: boolean }) {
  const arm = useRef<Group>(null)
  const speed = def.speed ?? 1.1
  useFrame((state) => {
    if (!arm.current) return
    arm.current.rotation.x = preview ? Math.sin(state.clock.elapsedTime * speed) * 1.25 : -0.4
  })
  return (
    <group ref={arm}>
      <mesh position={[0, 0.9, 0]}>
        <boxGeometry args={[0.3, 1.2, 0.3]} />
        <meshLambertMaterial color="#6c584c" />
      </mesh>
      <mesh position={[0, -1.15, 0]} castShadow>
        <boxGeometry args={[1.4, 0.7, 0.7]} />
        <meshLambertMaterial color="#bc4749" />
      </mesh>
    </group>
  )
}

function FanVisual({ def, preview }: { def: ObstacleDef; preview: boolean }) {
  const blades = useRef<Group>(null)
  const speed = def.speed ?? 1
  const blow = def.fanBlow ?? ([1, 0, 0] as const)
  const arrowQuat = useMemo(() => fanBlowQuaternion(def), [blow[0], blow[1], blow[2]])
  const reach = fanReach(def)
  const spread = fanSpread(def)
  const height = fanHeightHalf(def)
  useFrame((state) => {
    if (!blades.current) return
    blades.current.rotation.z = preview ? state.clock.elapsedTime * speed * 6 : 0.4
  })
  return (
    <group>
      <group ref={blades}>
        <mesh>
          <boxGeometry args={[2.6, 0.12, 0.36]} />
          <meshLambertMaterial color="#4cc9f0" />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[2.6, 0.12, 0.36]} />
          <meshLambertMaterial color="#90e0ef" />
        </mesh>
      </group>
      <group quaternion={arrowQuat}>
        <mesh position={[reach / 2, 0, 0]} raycast={noRaycast}>
          <boxGeometry args={[reach, height * 2, spread * 2]} />
          <meshBasicMaterial color="#9ad7ff" transparent opacity={0.12} depthWrite={false} wireframe />
        </mesh>
        <mesh position={[reach / 2, 0, 0]} raycast={noRaycast}>
          <boxGeometry args={[reach, height * 2, spread * 2]} />
          <meshBasicMaterial color="#ffd166" transparent opacity={0.06} depthWrite={false} />
        </mesh>
      </group>
      <group position={[0, 0.35, 0]} quaternion={arrowQuat}>
        <mesh position={[0.75, 0, 0]}>
          <boxGeometry args={[1.5, 0.08, 0.08]} />
          <meshLambertMaterial color="#ffd166" />
        </mesh>
        <mesh position={[1.55, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <coneGeometry args={[0.18, 0.35, 8]} />
          <meshLambertMaterial color="#ffd166" />
        </mesh>
      </group>
    </group>
  )
}

function SpinnerVisual({ def, preview }: { def: ObstacleDef; preview: boolean }) {
  const bar = useRef<Group>(null)
  const speed = def.speed ?? 1.4
  useFrame((state) => {
    if (!bar.current) return
    bar.current.rotation.y = preview ? state.clock.elapsedTime * speed : 0.35
  })
  return (
    <group ref={bar}>
      <mesh castShadow>
        <boxGeometry args={[4.4, 0.28, 0.36]} />
        <meshLambertMaterial color="#e76f51" />
      </mesh>
    </group>
  )
}

export function EditorCoin({ def, selected }: { def: CoinDef; selected: boolean }) {
  const spin = useRef<Group>(null)
  useFrame((_, dt) => {
    if (spin.current) spin.current.rotation.y += dt * 2.4
  })
  return (
    <group
      position={def.position}
      onClick={(event) => {
        event.stopPropagation()
        if (event.delta > 4) return
        useEditorStore.getState().select({ kind: 'coin', id: def.id })
      }}
    >
      <group ref={spin}>
        <mesh castShadow>
          <cylinderGeometry args={[0.32, 0.32, 0.08, 16]} />
          <meshLambertMaterial color="#ffd166" />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.01]}>
          <torusGeometry args={[0.18, 0.04, 8, 12]} />
          <meshLambertMaterial color="#f4a261" />
        </mesh>
      </group>
      {selected && <SelectionBox size={[0.8, 0.8, 0.8]} />}
    </group>
  )
}

export function EditorCheckpoint({ def, selected }: { def: CheckpointDef; selected: boolean }) {
  const width = def.width ?? DEFAULT_CHECKPOINT_WIDTH
  return (
    <group
      position={def.position}
      onClick={(event) => {
        event.stopPropagation()
        if (event.delta > 4) return
        useEditorStore.getState().select({ kind: 'checkpoint', id: def.id })
      }}
    >
      <mesh>
        <boxGeometry args={[checkpointSensorWidth(width), 3.2, 0.6]} />
        <meshLambertMaterial color="#3ee0b3" transparent opacity={0.18} />
      </mesh>
      <CheckpointFrame width={width} />
      {selected && <SelectionBox size={[width, 3.4, 1.2]} />}
    </group>
  )
}

export function EditorGoal({
  position,
  size = DEFAULT_GOAL_SIZE,
  selected,
}: {
  position: Vec3
  size?: Vec3
  selected: boolean
}) {
  return (
    <group
      position={position}
      onClick={(event) => {
        event.stopPropagation()
        if (event.delta > 4) return
        useEditorStore.getState().select({ kind: 'goal', id: 'goal' })
      }}
    >
      <mesh>
        <boxGeometry args={size} />
        <meshLambertMaterial color="#ffd166" transparent opacity={0.16} />
      </mesh>
      <GoalFrame size={size} />
      {selected && <SelectionBox size={size} />}
    </group>
  )
}

export function EditorStart({ position, selected }: { position: Vec3; selected: boolean }) {
  const cosmetics = useGameStore((s) => s.save.cosmetics)
  return (
    <group
      position={position}
      onClick={(event) => {
        event.stopPropagation()
        if (event.delta > 4) return
        useEditorStore.getState().select({ kind: 'start', id: 'start' })
      }}
    >
      <PlayerVisual cosmetics={cosmetics} pose="idle" />
      <WorldLabel text="INICIO" position={[0, 2.45, 0]} width={3.4} color="#9ae6ff" />
      {selected && <SelectionBox size={[1.4, 2.2, 1.4]} />}
    </group>
  )
}

function PlatformFeet({ w, h, d }: { w: number; h: number; d: number }) {
  const ox = Math.max(0.28, w * 0.42)
  const oz = Math.max(0.28, d * 0.42)
  const y = -h / 2 - 0.18
  const spots: Vec3[] = [
    [-ox, y, -oz],
    [ox, y, -oz],
    [-ox, y, oz],
    [ox, y, oz],
  ]
  return (
    <>
      {spots.map((spot, i) => (
        <mesh key={i} position={spot} castShadow>
          <cylinderGeometry args={[0.14, 0.18, 0.36, 8]} />
          <meshLambertMaterial color="#d9c2a0" />
        </mesh>
      ))}
    </>
  )
}

function SelectionBox({ size }: { size: Vec3 }) {
  return (
    <mesh raycast={noRaycast}>
      <boxGeometry args={[size[0] + 0.16, size[1] + 0.16, size[2] + 0.16]} />
      <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.75} />
    </mesh>
  )
}

function sizeForObstacle(def: ObstacleDef): Vec3 {
  if (def.kind === 'barrier') return def.size ?? [4, 2, 0.85]
  if (def.kind === 'fan') return [2.6, 2.2, 2.6]
  if (def.kind === 'hammer') return [1.4, 3.2, 1.4]
  if (def.kind === 'spinner') return [4.4, 0.5, 4.4]
  return def.size ?? [1.6, 1.6, 1.6]
}

export function MotionGhost({ position, motion }: { position: Vec3; motion: MotionDef | NonNullable<ObstacleDef['motion']> }) {
  const amp = motion.amplitude
  const size: Vec3 =
    motion.axis === 'x' ? [amp * 2, 0.08, 0.08] : motion.axis === 'y' ? [0.08, amp * 2, 0.08] : [0.08, 0.08, amp * 2]
  return (
    <mesh position={position} raycast={noRaycast}>
      <boxGeometry args={size} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.28} />
    </mesh>
  )
}
