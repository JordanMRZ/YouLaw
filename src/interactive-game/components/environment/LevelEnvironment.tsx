import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { BackSide, Color, InstancedMesh, Object3D } from 'three'
import type { LevelDef } from '../../data/types'

const dummy = new Object3D()

export function LevelEnvironment({ level }: { level: LevelDef }) {
  const { palette } = level
  return (
    <>
      <color attach="background" args={[palette.skyBottom]} />
      <fog attach="fog" args={[palette.fog, 28, 150]} />
      <hemisphereLight args={[palette.skyTop, palette.ground, 0.85]} />
      <ambientLight intensity={0.45} />
      <directionalLight
        position={[18, 28, 8]}
        intensity={1.35}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={2}
        shadow-camera-far={80}
        shadow-camera-left={-28}
        shadow-camera-right={28}
        shadow-camera-top={28}
        shadow-camera-bottom={-28}
      />
      <SkyDome top={palette.skyTop} bottom={palette.skyBottom} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5.6, 70]} receiveShadow>
        <planeGeometry args={[220, 260]} />
        <meshLambertMaterial color={palette.water} transparent opacity={0.72} />
      </mesh>
      <Clouds />
      <DistantLand color={palette.ground} />
      {(level.world === 'training' || level.world === 'school-path' || level.world === 'international') && (
        <TreeField color={palette.ground} />
      )}
    </>
  )
}

function SkyDome({ top, bottom }: { top: string; bottom: string }) {
  const uniforms = useMemo(
    () => ({
      topColor: { value: new Color(top) },
      bottomColor: { value: new Color(bottom) },
    }),
    [top, bottom],
  )
  return (
    <mesh>
      <sphereGeometry args={[170, 20, 12]} />
      <shaderMaterial
        side={BackSide}
        uniforms={uniforms}
        vertexShader={`varying vec3 vPos; void main(){ vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`}
        fragmentShader={`uniform vec3 topColor; uniform vec3 bottomColor; varying vec3 vPos; void main(){ float h = normalize(vPos).y * 0.5 + 0.5; gl_FragColor = vec4(mix(bottomColor, topColor, smoothstep(0.2, 0.9, h)), 1.0); }`}
        depthWrite={false}
      />
    </mesh>
  )
}

const CLOUD_PUFFS: [number, number, number, number][] = [
  [0, 0, 0, 1.25],
  [1.35, -0.2, 0.2, 0.95],
  [-1.3, -0.25, 0.1, 0.9],
  [0.45, 0.55, -0.15, 0.82],
  [-0.55, 0.4, 0.3, 0.7],
  [2.3, -0.4, 0, 0.6],
  [-2.2, -0.45, -0.1, 0.55],
]
const CLOUD_COUNT = 11
const CLOUD_SPAN = 140

function Clouds() {
  const mesh = useRef<InstancedMesh>(null)
  const clouds = useMemo(
    () =>
      Array.from({ length: CLOUD_COUNT }, (_, i) => ({
        x: (i % 2 === 0 ? -1 : 1) * (20 + ((i * 7) % 4) * 6),
        y: 13 + ((i * 5) % 4) * 2.6,
        z: -10 + i * 18,
        s: 2 + ((i * 3) % 4) * 0.45,
        speed: 0.35 + (i % 3) * 0.15,
      })),
    [],
  )
  useFrame((state) => {
    if (!mesh.current) return
    const t = state.clock.elapsedTime
    let index = 0
    for (const cloud of clouds) {
      const cx = ((((cloud.x + t * cloud.speed + CLOUD_SPAN / 2) % CLOUD_SPAN) + CLOUD_SPAN) % CLOUD_SPAN) - CLOUD_SPAN / 2
      for (const [px, py, pz, r] of CLOUD_PUFFS) {
        dummy.position.set(cx + px * cloud.s, cloud.y + py * cloud.s, cloud.z + pz * cloud.s)
        dummy.scale.set(r * cloud.s, r * cloud.s * 0.72, r * cloud.s * 0.85)
        dummy.updateMatrix()
        mesh.current.setMatrixAt(index++, dummy.matrix)
      }
    }
    mesh.current.instanceMatrix.needsUpdate = true
  })
  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, CLOUD_COUNT * CLOUD_PUFFS.length]} frustumCulled={false}>
      <icosahedronGeometry args={[1, 2]} />
      <meshLambertMaterial color="#ffffff" emissive="#dce8f5" emissiveIntensity={0.55} />
    </instancedMesh>
  )
}

function DistantLand({ color }: { color: string }) {
  return (
    <group>
      <mesh position={[-28, -1, 40]} castShadow>
        <coneGeometry args={[8, 16, 5]} />
        <meshLambertMaterial color={color} />
      </mesh>
      <mesh position={[32, -0.5, 70]} castShadow>
        <coneGeometry args={[10, 20, 5]} />
        <meshLambertMaterial color={color} />
      </mesh>
      <mesh position={[-18, -2, 110]} castShadow>
        <coneGeometry args={[7, 14, 5]} />
        <meshLambertMaterial color={color} />
      </mesh>
    </group>
  )
}

function TreeField({ color }: { color: string }) {
  const positions = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        x: (i % 2 === 0 ? -14 : 14) - (i % 3) * 1.5,
        z: 8 + i * 9,
        s: 0.8 + (i % 4) * 0.15,
      })),
    [],
  )
  return (
    <group>
      {positions.map((p, i) => (
        <group key={i} position={[p.x, 0, p.z]} scale={p.s}>
          <mesh position={[0, 0.7, 0]} castShadow>
            <cylinderGeometry args={[0.18, 0.24, 1.4, 6]} />
            <meshLambertMaterial color="#6b4226" />
          </mesh>
          <mesh position={[0, 1.7, 0]} castShadow>
            <coneGeometry args={[1.05, 1.8, 7]} />
            <meshLambertMaterial color={color} />
          </mesh>
        </group>
      ))}
    </group>
  )
}
