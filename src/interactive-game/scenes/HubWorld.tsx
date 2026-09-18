import { useFrame } from '@react-three/fiber'
import { useMemo, useRef, type ReactNode } from 'react'
import { Color, Group, Quaternion, Vector3 } from 'three'
import { WorldLabel } from '../components/WorldLabel'
import {
  PLANET_RADIUS,
  PLANET_SPACING,
  firstLevelOfWorld,
  islandLocalOffset,
  isWorldLocked,
  planetPosition,
} from '../data/hubLayout'
import { LEVELS_PER_WORLD, WORLD_COUNT, worldOrder } from '../data/levels'
import { palettes, worldMeta } from '../data/worlds'
import { PlayerVisual } from '../player/PlayerVisual'
import { useGameStore } from '../store/gameStore'
import { HubCamera } from './HubCamera'
import { ShopStage } from './ShopStage'

export function HubWorld() {
  const selectedLevel = useGameStore((s) => s.selectedLevel)
  const selectedWorld = useGameStore((s) => s.selectedWorld)
  const hubLayer = useGameStore((s) => s.hubLayer)
  const unlocked = useGameStore((s) => s.save.unlockedLevel)
  const equipped = useGameStore((s) => s.save.cosmetics)
  const preview = useGameStore((s) => s.shopPreview)
  const cosmetics = preview ?? equipped
  const shopOpen = useGameStore((s) => s.shopOpen)
  const stars = useGameStore((s) => s.save.levels)

  return (
    <>
      <HubCamera />
      {shopOpen ? (
        <>
          <color attach="background" args={['#1a1420']} />
          <fog attach="fog" args={['#1a1420', 8, 28]} />
          <hemisphereLight args={['#ffe8d2', '#3a2a28', 0.7]} />
          <ambientLight intensity={0.55} />
          <directionalLight position={[4, 8, 6]} intensity={1.2} castShadow />
          <ShopStage />
          <Turntable>
            <PlayerVisual cosmetics={cosmetics} pose="turntable" />
          </Turntable>
        </>
      ) : (
        <>
          <color attach="background" args={['#071018']} />
          <fog attach="fog" args={['#071018', 28, 72]} />
          <hemisphereLight args={['#c9e7ff', '#1a2740', 0.55]} />
          <ambientLight intensity={0.28} />
          <directionalLight position={[8, 14, 10]} intensity={1.55} />
          <pointLight
            position={[planetPosition(selectedWorld)[0], 6, 10]}
            intensity={0.45}
            color="#9ad7ff"
          />
          <Stars />
          {worldOrder.map((world, index) => (
            <Planet
              key={world}
              worldIndex={index}
              world={world}
              focused={selectedWorld === index}
              zoomed={hubLayer === 'world' && selectedWorld === index}
              locked={isWorldLocked(index, unlocked)}
              dimmed={hubLayer === 'world' && selectedWorld !== index}
            />
          ))}
          {hubLayer === 'world' &&
            Array.from({ length: LEVELS_PER_WORLD }, (_, localIndex) => {
              const id = firstLevelOfWorld(selectedWorld) + localIndex
              return (
                <IslandPad
                  key={id}
                  id={id}
                  localIndex={localIndex}
                  worldIndex={selectedWorld}
                  world={worldOrder[selectedWorld]}
                  selected={selectedLevel === id}
                  locked={id > unlocked}
                  starCount={stars[String(id)]?.stars ?? 0}
                />
              )
            })}
        </>
      )}
    </>
  )
}

function Stars() {
  const points = useMemo(
    () =>
      Array.from({ length: 90 }, (_, i) => {
        const seed = i * 17.13
        return {
          key: i,
          position: [
            ((seed * 13) % (PLANET_SPACING * WORLD_COUNT + 28)) - 14,
            ((seed * 7) % 36) - 10,
            -8 - ((seed * 3) % 48),
          ] as [number, number, number],
          scale: 0.04 + ((i * 5) % 7) * 0.012,
        }
      }),
    [],
  )
  return (
    <group>
      {points.map((star) => (
        <mesh key={star.key} position={star.position} scale={star.scale}>
          <sphereGeometry args={[1, 6, 6]} />
          <meshBasicMaterial color="#e8f4ff" />
        </mesh>
      ))}
    </group>
  )
}

function Planet({
  worldIndex,
  world,
  focused,
  zoomed,
  locked,
  dimmed,
}: {
  worldIndex: number
  world: (typeof worldOrder)[number]
  focused: boolean
  zoomed: boolean
  locked: boolean
  dimmed: boolean
}) {
  const ref = useRef<Group>(null)
  const palette = palettes[world]
  const title = worldMeta[world].title
  const position = planetPosition(worldIndex)
  const color = useMemo(() => new Color(locked ? '#4b5563' : palette.ground), [locked, palette.ground])
  const accent = useMemo(() => new Color(locked ? '#6b7280' : palette.accent), [locked, palette.accent])

  useFrame((_, dt) => {
    if (!ref.current) return
    ref.current.rotation.y += dt * (focused ? 0.18 : 0.08)
  })

  return (
    <group
      position={position}
      scale={dimmed ? 0.72 : focused || zoomed ? 1 : 0.88}
      onClick={(event) => {
        event.stopPropagation()
        const store = useGameStore.getState()
        if (store.hubLayer === 'world') return
        if (store.selectedWorld === worldIndex) {
          store.enterSelectedWorld()
          return
        }
        store.setSelectedWorld(worldIndex)
      }}
      onPointerOver={() => {
        document.body.style.cursor = locked && focused ? 'not-allowed' : 'pointer'
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'default'
      }}
    >
      <group ref={ref}>
        <mesh>
          <sphereGeometry args={[PLANET_RADIUS, 32, 32]} />
          <meshStandardMaterial
            color={color}
            roughness={0.62}
            metalness={0.08}
            emissive={focused && !locked ? accent : '#000000'}
            emissiveIntensity={focused && !locked ? 0.18 : 0}
          />
        </mesh>
        <mesh scale={1.035}>
          <sphereGeometry args={[PLANET_RADIUS, 24, 24]} />
          <meshBasicMaterial
            color={locked ? '#9ca3af' : palette.water}
            transparent
            opacity={focused ? 0.16 : 0.08}
            depthWrite={false}
          />
        </mesh>
        <mesh position={[0, PLANET_RADIUS * 0.82, 0]} scale={[0.42, 0.18, 0.42]}>
          <sphereGeometry args={[PLANET_RADIUS, 16, 16]} />
          <meshLambertMaterial color={locked ? '#9aa3ad' : '#f4fbff'} />
        </mesh>
      </group>
      {focused && !zoomed && (
        <mesh rotation={[Math.PI / 2.4, 0, 0]}>
          <torusGeometry args={[PLANET_RADIUS + 0.55, 0.06, 10, 48]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.7} />
        </mesh>
      )}
      {!zoomed && (
        <WorldLabel
          text={locked ? `${title}` : title}
          position={[0, PLANET_RADIUS + 1.35, 0]}
          width={focused ? 8.4 : 6.6}
          color={locked ? '#d1d5db' : '#fff6d8'}
        />
      )}
    </group>
  )
}

function IslandPad({
  id,
  localIndex,
  worldIndex,
  world,
  selected,
  locked,
  starCount,
}: {
  id: number
  localIndex: number
  worldIndex: number
  world: (typeof worldOrder)[number]
  selected: boolean
  locked: boolean
  starCount: number
}) {
  const bob = useRef<Group>(null)
  const [px, py, pz] = planetPosition(worldIndex)
  const offset = islandLocalOffset(localIndex)
  const quaternion = useMemo(() => {
    const q = new Quaternion()
    q.setFromUnitVectors(new Vector3(0, 1, 0), new Vector3(...offset).normalize())
    return q
  }, [offset])
  const color = palettes[world].accent

  useFrame((state) => {
    if (!bob.current) return
    bob.current.position.y = (selected && !locked ? 0.12 : 0) + Math.sin(state.clock.elapsedTime * 1.8 + id) * 0.04
  })

  return (
    <group position={[px + offset[0], py + offset[1], pz + offset[2]]} quaternion={quaternion}>
      <group
        ref={bob}
        onClick={(event) => {
          event.stopPropagation()
          if (locked) return
          useGameStore.getState().setSelectedLevel(id)
        }}
        onPointerOver={() => {
          document.body.style.cursor = locked ? 'not-allowed' : 'pointer'
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'default'
        }}
      >
        <mesh>
          <cylinderGeometry args={[1.05, 1.22, 0.4, 14]} />
          <meshLambertMaterial color={locked ? '#6b7280' : '#6b4a32'} />
        </mesh>
        <mesh position={[0, 0.22, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[1.12, 18]} />
          <meshLambertMaterial color={locked ? '#9aa3ad' : color} />
        </mesh>
        {selected && !locked && (
          <mesh position={[0, 0.06, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1.28, 0.06, 8, 24]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        )}
        <WorldLabel
          text={locked ? 'X' : String(localIndex + 1).padStart(2, '0')}
          position={[0, 1.15, 0]}
          width={2.1}
        />
        {!locked && (
          <WorldLabel
            text={`${'★'.repeat(starCount)}${'☆'.repeat(Math.max(0, 5 - starCount))}`}
            position={[0, 0.62, 0.7]}
            width={2.4}
            color="#ffd166"
          />
        )}
      </group>
    </group>
  )
}

function Turntable({ children }: { children: ReactNode }) {
  const ref = useRef<Group>(null)
  const drag = useRef({ on: false, last: 0, yaw: 0 })

  useFrame(() => {
    if (!ref.current) return
    ref.current.rotation.y = drag.current.yaw
  })

  return (
    <group
      ref={ref}
      position={[0, 0.18, -1.5]}
      scale={1.2}
      onPointerDown={(event) => {
        event.stopPropagation()
        drag.current.on = true
        drag.current.last = event.clientX
      }}
      onPointerUp={() => {
        drag.current.on = false
      }}
      onPointerLeave={() => {
        drag.current.on = false
      }}
      onPointerMove={(event) => {
        if (!drag.current.on) return
        drag.current.yaw += (event.clientX - drag.current.last) * 0.012
        drag.current.last = event.clientX
      }}
    >
      {children}
      <mesh position={[0, 0.85, 0]} visible={false}>
        <cylinderGeometry args={[0.95, 0.95, 1.9, 12]} />
        <meshBasicMaterial />
      </mesh>
    </group>
  )
}
