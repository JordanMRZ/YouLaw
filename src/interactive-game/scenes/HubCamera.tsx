import { useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'
import { PLANET_RADIUS, planetPosition } from '../data/hubLayout'
import { useGameStore } from '../store/gameStore'

const shopPos = new Vector3(-0.42, 1.12, 1.88)
const shopLook = new Vector3(0.06, 0.9, -1.5)
const pos = new Vector3()
const look = new Vector3()

export function HubCamera() {
  const shopOpen = useGameStore((s) => s.shopOpen)
  const hubLayer = useGameStore((s) => s.hubLayer)
  const selectedWorld = useGameStore((s) => s.selectedWorld)

  useFrame(({ camera }) => {
    const [px, py, pz] = planetPosition(selectedWorld)
    if (shopOpen) {
      pos.copy(shopPos)
      look.copy(shopLook)
    } else if (hubLayer === 'world') {
      pos.set(px, py + PLANET_RADIUS * 0.55, pz + PLANET_RADIUS + 7.4)
      look.set(px, py + PLANET_RADIUS * 0.22, pz + PLANET_RADIUS * 0.2)
    } else {
      pos.set(px, py + 1.15, pz + 12.8)
      look.set(px, py + 0.15, pz)
    }
    camera.position.lerp(pos, 0.085)
    camera.lookAt(look)
  })
  return null
}
