import { useFrame } from '@react-three/fiber'
import { useMemo, useRef, type ReactNode } from 'react'
import { Group } from 'three'
import {
  PLANET_SPACING,
  firstLevelOfWorld,
  isWorldLocked,
  planetPosition,
} from '../data/hubLayout'
import { LEVELS_PER_WORLD, WORLD_COUNT, worldOrder } from '../data/levels'
import { PlayerVisual } from '../player/PlayerVisual'
import { useGameStore } from '../store/gameStore'
import { HubLevelIsland, islandAtmosphereOffset, WorldAtmosphere } from './HubAtmosphere'
import { HubCamera } from './HubCamera'
import { HubPlanet } from './HubPlanet'
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
  const world = worldOrder[selectedWorld] ?? 'training'
  const inAtmosphere = hubLayer === 'world' && Boolean(world)

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
      ) : inAtmosphere ? (
        <group position={planetPosition(selectedWorld)}>
          <WorldAtmosphere world={world} />
          {Array.from({ length: LEVELS_PER_WORLD }, (_, localIndex) => {
            const id = firstLevelOfWorld(selectedWorld) + localIndex
            return (
              <group key={id} position={islandAtmosphereOffset(localIndex)}>
                <HubLevelIsland
                  id={id}
                  localIndex={localIndex}
                  world={world}
                  selected={selectedLevel === id}
                  locked={id > unlocked}
                  starCount={stars[String(id)]?.stars ?? 0}
                />
              </group>
            )
          })}
        </group>
      ) : (
        <>
          <color attach="background" args={['#071018']} />
          <fog attach="fog" args={['#071018', 36, 92]} />
          <hemisphereLight args={['#c9e7ff', '#1a2740', 0.62]} />
          <ambientLight intensity={0.32} />
          <directionalLight position={[12, 18, 14]} intensity={1.7} />
          <pointLight
            position={[planetPosition(selectedWorld)[0], 6, 12]}
            intensity={0.45}
            color="#9ad7ff"
          />
          <Stars />
          {worldOrder.map((item, index) => (
            <group key={item} position={planetPosition(index)}>
              <HubPlanet
                worldIndex={index}
                world={item}
                focused={selectedWorld === index}
                locked={isWorldLocked(index, unlocked)}
                dimmed={false}
              />
            </group>
          ))}
        </>
      )}
    </>
  )
}

function Stars() {
  const points = useMemo(
    () =>
      Array.from({ length: 140 }, (_, i) => {
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
