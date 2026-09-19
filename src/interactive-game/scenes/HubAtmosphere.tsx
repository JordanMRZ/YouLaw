import { useFrame } from '@react-three/fiber'
import { useLayoutEffect, useMemo, useRef } from 'react'
import { Color, Group } from 'three'
import { WorldLabel } from '../components/WorldLabel'
import { createPlanetTextures } from '../data/planetTextures'
import { palettes } from '../data/worlds'
import type { WorldId } from '../data/types'
import { useGameStore } from '../store/gameStore'

export function islandAtmosphereOffset(localIndex: number): [number, number, number] {
  const t = (localIndex - 2) / 2
  return [t * 7.2, 1.35 + Math.cos(t * 1.35) * 0.45, -1.1 + Math.abs(t) * 1.35]
}

export function HubLevelIsland({
  id,
  localIndex,
  world,
  selected,
  locked,
  starCount,
}: {
  id: number
  localIndex: number
  world: WorldId
  selected: boolean
  locked: boolean
  starCount: number
}) {
  const bob = useRef<Group>(null)
  const palette = palettes[world]
  const ground = locked ? '#6b7280' : palette.ground
  const accent = locked ? '#9ca3af' : palette.accent
  const water = locked ? '#64748b' : palette.water
  const rock = locked ? '#57534e' : '#6b5344'

  useFrame((state) => {
    if (!bob.current) return
    const lift = selected && !locked ? 0.22 : 0
    bob.current.position.y = lift + Math.sin(state.clock.elapsedTime * 1.15 + id) * 0.08
    bob.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.25 + id) * 0.04
  })

  return (
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
      <mesh position={[0, -0.55, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.1, 24]} />
        <meshBasicMaterial color="#061018" transparent opacity={0.28} depthWrite={false} />
      </mesh>
      <mesh>
        <cylinderGeometry args={[1.35, 1.7, 0.7, 10]} />
        <meshStandardMaterial color={rock} roughness={0.92} />
      </mesh>
      <mesh position={[0, 0.28, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.42, 22]} />
        <meshStandardMaterial color={ground} roughness={0.78} />
      </mesh>
      <mesh position={[0, 0.18, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.42, 1.62, 22]} />
        <meshStandardMaterial color={water} roughness={0.28} metalness={0.2} />
      </mesh>
      {selected && !locked && (
        <mesh position={[0, 0.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.78, 1.92, 28]} />
          <meshBasicMaterial color="#ffd166" transparent opacity={0.9} />
        </mesh>
      )}
      <IslandDecor world={world} locked={locked} accent={accent} ground={ground} />
      <WorldLabel
        text={locked ? 'X' : String(localIndex + 1).padStart(2, '0')}
        position={[0, 2.15, 0]}
        width={2.4}
      />
      {!locked && (
        <WorldLabel
          text={`${'★'.repeat(starCount)}${'☆'.repeat(Math.max(0, 5 - starCount))}`}
          position={[0, 0.72, 1.35]}
          width={2.6}
          color="#ffd166"
        />
      )}
    </group>
  )
}

function IslandDecor({
  world,
  locked,
  accent,
  ground,
}: {
  world: WorldId
  locked: boolean
  accent: string
  ground: string
}) {
  if (locked) return null
  if (world === 'training' || world === 'mountain' || world === 'sky') {
    return (
      <>
        <Pine position={[-0.55, 0.55, 0.15]} />
        <Pine position={[0.48, 0.5, -0.28]} scale={0.78} />
        <Pine position={[0.1, 0.48, 0.55]} scale={0.62} />
      </>
    )
  }
  if (world === 'school-path' || world === 'international') {
    return (
      <>
        <mesh position={[0.2, 0.72, -0.15]}>
          <boxGeometry args={[0.7, 0.55, 0.55]} />
          <meshStandardMaterial color={accent} roughness={0.6} />
        </mesh>
        <mesh position={[0.2, 1.08, -0.15]} rotation={[0, Math.PI / 4, 0]}>
          <coneGeometry args={[0.52, 0.38, 4]} />
          <meshStandardMaterial color="#b45309" />
        </mesh>
      </>
    )
  }
  if (world === 'industrial' || world === 'chaos') {
    return (
      <>
        <mesh position={[-0.4, 0.85, 0]}>
          <cylinderGeometry args={[0.12, 0.16, 1.1, 8]} />
          <meshStandardMaterial color="#44403c" metalness={0.4} roughness={0.45} />
        </mesh>
        <mesh position={[0.35, 0.7, 0.2]}>
          <boxGeometry args={[0.5, 0.7, 0.5]} />
          <meshStandardMaterial color={ground} roughness={0.7} />
        </mesh>
      </>
    )
  }
  if (world === 'neon') {
    return (
      <>
        <mesh position={[-0.4, 0.95, 0.1]}>
          <boxGeometry args={[0.18, 1.2, 0.18]} />
          <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={1.2} />
        </mesh>
        <mesh position={[0.35, 0.75, -0.2]}>
          <boxGeometry args={[0.28, 0.8, 0.28]} />
          <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.8} />
        </mesh>
      </>
    )
  }
  if (world === 'time') {
    return (
      <>
        <mesh position={[0, 1.05, 0]}>
          <octahedronGeometry args={[0.38, 0]} />
          <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.5} roughness={0.2} />
        </mesh>
        <mesh position={[-0.55, 0.7, 0.2]} scale={0.6}>
          <octahedronGeometry args={[0.38, 0]} />
          <meshStandardMaterial color={accent} transparent opacity={0.8} />
        </mesh>
      </>
    )
  }
  return (
    <mesh position={[0, 0.7, 0]} rotation={[0, 0.4, 0]}>
      <torusGeometry args={[0.55, 0.08, 8, 24]} />
      <meshStandardMaterial color={accent} metalness={0.5} roughness={0.3} />
    </mesh>
  )
}

function Pine({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  return (
    <group position={position} scale={scale}>
      <mesh>
        <cylinderGeometry args={[0.07, 0.1, 0.35, 6]} />
        <meshStandardMaterial color="#6b3f2a" />
      </mesh>
      <mesh position={[0, 0.42, 0]}>
        <coneGeometry args={[0.32, 0.7, 7]} />
        <meshStandardMaterial color="#166534" />
      </mesh>
    </group>
  )
}

export function WorldAtmosphere({ world }: { world: WorldId }) {
  const palette = palettes[world]
  const sky = useMemo(() => new Color(palette.skyTop), [palette.skyTop])
  const fog = useMemo(() => new Color(palette.fog), [palette.fog])
  const ground = useMemo(() => new Color(palette.ground), [palette.ground])
  const textures = useMemo(() => createPlanetTextures(world, false), [world])
  const clouds = useRef<Group>(null)

  useLayoutEffect(() => () => {
    textures.map.dispose()
    textures.clouds.dispose()
    textures.emissive.dispose()
  }, [textures])

  useFrame((_, dt) => {
    if (clouds.current) clouds.current.rotation.y += dt * 0.04
  })

  return (
    <>
      <color attach="background" args={[palette.skyBottom]} />
      <fog attach="fog" args={[palette.fog, 18, 56]} />
      <hemisphereLight args={[sky, ground, 0.85]} />
      <ambientLight intensity={0.45} />
      <directionalLight position={[8, 14, 6]} intensity={1.35} color={palette.ambient} />
      <mesh position={[0, -22, -8]}>
        <sphereGeometry args={[20, 64, 64]} />
        <meshStandardMaterial map={textures.map} roughness={0.7} metalness={0.05} />
      </mesh>
      <mesh position={[0, -22, -8]} scale={1.04}>
        <sphereGeometry args={[20, 32, 32]} />
        <meshBasicMaterial color={fog} transparent opacity={0.18} depthWrite={false} />
      </mesh>
      <group ref={clouds}>
        {[-10, -4, 3, 9].map((x, i) => (
          <mesh key={x} position={[x, 6.5 + (i % 2), -6 - Math.abs(x) * 0.2]} scale={[2.8, 0.7, 1.6]}>
            <sphereGeometry args={[1.1, 12, 10]} />
            <meshStandardMaterial color="#ffffff" transparent opacity={0.35} depthWrite={false} />
          </mesh>
        ))}
      </group>
    </>
  )
}
