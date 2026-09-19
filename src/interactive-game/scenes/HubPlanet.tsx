import { useFrame } from '@react-three/fiber'
import { useLayoutEffect, useMemo, useRef } from 'react'
import { Color, DoubleSide, Group } from 'three'
import { WorldLabel } from '../components/WorldLabel'
import { PLANET_RADIUS } from '../data/hubLayout'
import { createPlanetTextures, planetHasRing } from '../data/planetTextures'
import { palettes, worldMeta } from '../data/worlds'
import type { WorldId } from '../data/types'
import { useGameStore } from '../store/gameStore'

export function HubPlanet({
  worldIndex,
  world,
  focused,
  locked,
  dimmed,
}: {
  worldIndex: number
  world: WorldId
  focused: boolean
  locked: boolean
  dimmed: boolean
}) {
  const spin = useRef<Group>(null)
  const clouds = useRef<Group>(null)
  const root = useRef<Group>(null)
  const palette = palettes[world]
  const textures = useMemo(() => createPlanetTextures(world, locked), [world, locked])
  const air = useMemo(() => new Color(locked ? '#64748b' : palette.skyTop), [locked, palette.skyTop])
  const accent = useMemo(() => new Color(locked ? '#94a3b8' : palette.accent), [locked, palette.accent])
  const targetScale = dimmed ? 0.62 : focused ? 1 : 0.84

  useLayoutEffect(() => () => {
    textures.map.dispose()
    textures.clouds.dispose()
    textures.emissive.dispose()
  }, [textures])

  useFrame((_, dt) => {
    if (spin.current) spin.current.rotation.y += dt * (focused ? 0.08 : 0.035)
    if (clouds.current) clouds.current.rotation.y += dt * (focused ? 0.11 : 0.05)
    if (root.current) {
      const next = root.current.scale.x + (targetScale - root.current.scale.x) * (1 - Math.exp(-dt * 3.6))
      root.current.scale.setScalar(next)
    }
  })

  return (
    <group
      ref={root}
      scale={targetScale}
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
      <group ref={spin}>
        <mesh>
          <sphereGeometry args={[PLANET_RADIUS, 64, 64]} />
          <meshStandardMaterial
            map={textures.map}
            roughness={textures.gas ? 0.42 : 0.55}
            metalness={textures.gas ? 0.12 : 0.04}
            emissiveMap={textures.hasLights ? textures.emissive : null}
            emissive={textures.hasLights ? accent : '#000000'}
            emissiveIntensity={textures.hasLights && !locked ? (focused ? 0.85 : 0.45) : 0}
          />
        </mesh>
      </group>
      <group ref={clouds}>
        <mesh>
          <sphereGeometry args={[PLANET_RADIUS * 1.025, 48, 48]} />
          <meshStandardMaterial
            map={textures.clouds}
            transparent
            depthWrite={false}
            roughness={1}
            metalness={0}
          />
        </mesh>
      </group>
      <mesh scale={1.12}>
        <sphereGeometry args={[PLANET_RADIUS, 32, 32]} />
        <meshBasicMaterial color={air} transparent opacity={focused ? 0.2 : 0.11} depthWrite={false} />
      </mesh>
      {planetHasRing(world) && (
        <mesh rotation={[Math.PI / 2.25, 0.12, 0.08]}>
          <ringGeometry args={[PLANET_RADIUS * 1.28, PLANET_RADIUS * 1.82, 72]} />
          <meshStandardMaterial
            color={accent}
            emissive={locked ? '#000000' : accent}
            emissiveIntensity={focused ? 0.22 : 0.08}
            transparent
            opacity={locked ? 0.28 : 0.7}
            side={DoubleSide}
            roughness={0.4}
            metalness={0.25}
          />
        </mesh>
      )}
      {focused && (
        <WorldLabel
          text={worldMeta[world].title}
          position={[0, PLANET_RADIUS + 2.15, 0]}
          width={9.2}
          color={locked ? '#d1d5db' : '#fff6d8'}
        />
      )}
    </group>
  )
}
