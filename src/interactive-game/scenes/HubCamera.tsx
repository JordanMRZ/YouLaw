import { useFrame } from '@react-three/fiber'
import { MathUtils, Vector3 } from 'three'
import { planetPosition } from '../data/hubLayout'
import { useGameStore } from '../store/gameStore'

const shopPos = new Vector3(-0.42, 1.12, 1.88)
const shopLook = new Vector3(0.06, 0.9, -1.5)
const targetPos = new Vector3()
const targetLook = new Vector3()
const lookCurrent = new Vector3(0, 0.2, 0)
let lookReady = false

export function HubCamera() {
  const shopOpen = useGameStore((s) => s.shopOpen)
  const hubLayer = useGameStore((s) => s.hubLayer)
  const selectedWorld = useGameStore((s) => s.selectedWorld)

  useFrame(({ camera }, dt) => {
    const [px, py, pz] = planetPosition(selectedWorld)
    if (shopOpen) {
      targetPos.copy(shopPos)
      targetLook.copy(shopLook)
    } else if (hubLayer === 'world') {
      targetPos.set(px, py + 4.8, pz + 13.5)
      targetLook.set(px, py + 1.55, pz - 0.8)
    } else {
      targetPos.set(px, py + 2.4, pz + 18.5)
      targetLook.set(px, py + 0.2, pz)
    }

    if (!lookReady) {
      camera.position.copy(targetPos)
      lookCurrent.copy(targetLook)
      lookReady = true
    }

    const lambda = shopOpen ? 7.5 : hubLayer === 'world' ? 2.8 : 2.6
    const t = 1 - Math.exp(-dt * lambda)
    camera.position.lerp(targetPos, t)
    lookCurrent.lerp(targetLook, t)
    camera.lookAt(lookCurrent)
    camera.fov = MathUtils.lerp(camera.fov, shopOpen ? 46 : hubLayer === 'world' ? 46 : 42, t)
    camera.updateProjectionMatrix()
  })
  return null
}
