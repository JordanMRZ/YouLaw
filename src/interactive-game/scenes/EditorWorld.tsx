import { Grid, OrbitControls, TransformControls } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useLayoutEffect, useRef, useState, type ComponentRef, type RefObject } from 'react'
import { Box3, Plane, Raycaster, Vector2, Vector3, type Group } from 'three'
import type { Vec3 } from '../data/types'
import {
  canScale,
  editorCamera,
  editorCursor,
  getSelectedPose,
  selectionKey,
  useEditorStore,
} from '../store/editorStore'
import { LevelEnvironment } from '../components/environment/LevelEnvironment'
import {
  EditorChallenge,
  EditorCheckpoint,
  EditorCoin,
  EditorGoal,
  EditorObstacle,
  EditorPlatform,
  EditorStart,
  MotionGhost,
} from './editorVisuals'

type OrbitControlsHandle = ComponentRef<typeof OrbitControls>
type TransformControlsHandle = ComponentRef<typeof TransformControls>
type GizmoInternals = {
  axis: string | null
  getPointer: (event: PointerEvent) => unknown
  pointerHover: (pointer: unknown) => void
}

const _view = new Vector3()

export function EditorWorld() {
  const draft = useEditorStore((s) => s.draft)
  const selected = useEditorStore((s) => s.selected)
  const previewMotion = useEditorStore((s) => s.previewMotion)
  const orbitRef = useRef<OrbitControlsHandle>(null)
  const transformRef = useRef<TransformControlsHandle>(null)
  const camera = useThree((state) => state.camera)
  const focusToken = useEditorStore((s) => s.focusToken)
  const booted = useRef(false)
  const lastFocus = useRef(0)
  const draftId = draft?.id

  useLayoutEffect(() => {
    booted.current = false
    lastFocus.current = 0
  }, [draftId])

  useFrame(() => {
    const orbit = orbitRef.current
    if (orbit) editorCursor.current = [orbit.target.x, orbit.target.y, orbit.target.z]
    camera.getWorldDirection(_view)
    const flat = Math.hypot(_view.x, _view.z) || 1
    editorCamera.forward = [_view.x / flat, 0, _view.z / flat]
    editorCamera.right = [-_view.z / flat, 0, _view.x / flat]
    const current = useEditorStore.getState().draft
    if (!current || !orbit) return
    if (!booted.current) {
      booted.current = true
      const start = current.start
      camera.position.set(start[0] + 14, start[1] + 12, start[2] - 10)
      orbit.target.set(start[0], start[1], start[2] + 6)
      orbit.update()
      editorCursor.current = [start[0], start[1], start[2] + 6]
    }
    if (focusToken !== lastFocus.current) {
      lastFocus.current = focusToken
      const sel = useEditorStore.getState().selected
      const pose = sel ? getSelectedPose(current, sel) : { position: current.start, size: [1, 1, 1] as Vec3 }
      if (!pose) return
      camera.position.set(pose.position[0] + 10, pose.position[1] + 8, pose.position[2] - 12)
      orbit.target.set(pose.position[0], pose.position[1], pose.position[2])
      orbit.update()
    }
  })

  if (!draft) return null
  const selKey = selectionKey(selected)
  const accent = draft.palette.accent

  return (
    <>
      <LevelEnvironment level={draft} />
      <Grid
        args={[220, 220]}
        cellSize={1}
        cellThickness={0.6}
        cellColor="#7aa8b8"
        sectionSize={5}
        sectionThickness={1.1}
        sectionColor="#4d7a8a"
        fadeDistance={90}
        fadeStrength={1}
        position={[0, -0.42, 0]}
      />
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.44, 0]}
        onClick={(event) => {
          if (event.delta > 3) return
          useEditorStore.getState().select(null)
        }}
      >
        <planeGeometry args={[400, 400]} />
        <meshBasicMaterial visible={false} />
      </mesh>
      {draft.platforms.map((platform) => (
        <EditorPlatform
          key={platform.id}
          def={platform}
          accent={accent}
          selected={selKey === selectionKey({ kind: 'platform', id: platform.id })}
          preview={previewMotion}
        />
      ))}
      {draft.challenges.map((challenge, index) => (
        <EditorChallenge key={challenge.id} challenge={challenge} selectedKey={selKey} index={index} />
      ))}
      {draft.obstacles.map((obstacle) => (
        <EditorObstacle
          key={obstacle.id}
          def={obstacle}
          selected={selKey === selectionKey({ kind: 'obstacle', id: obstacle.id })}
          preview={previewMotion}
        />
      ))}
      {draft.coins.map((coin) => (
        <EditorCoin key={coin.id} def={coin} selected={selKey === selectionKey({ kind: 'coin', id: coin.id })} />
      ))}
      {draft.checkpoints.map((checkpoint) => (
        <EditorCheckpoint
          key={checkpoint.id}
          def={checkpoint}
          selected={selKey === selectionKey({ kind: 'checkpoint', id: checkpoint.id })}
        />
      ))}
      <EditorGoal
        position={draft.goal.position}
        size={draft.goal.size}
        selected={selKey === selectionKey({ kind: 'goal', id: 'goal' })}
      />
      <EditorStart position={draft.start} selected={selKey === selectionKey({ kind: 'start', id: 'start' })} />
      {previewMotion &&
        draft.platforms.map((platform) =>
          platform.motion ? <MotionGhost key={`g-${platform.id}`} position={platform.position} motion={platform.motion} /> : null,
        )}
      {previewMotion &&
        draft.obstacles.map((obstacle) =>
          obstacle.motion ? (
            <MotionGhost key={`og-${obstacle.id}`} position={obstacle.position} motion={obstacle.motion} />
          ) : null,
        )}
      <SelectedGizmo controlsRef={transformRef} />
      <DirectDrag orbitRef={orbitRef} controlsRef={transformRef} />
      <OrbitControls
        ref={orbitRef}
        makeDefault
        enableDamping
        dampingFactor={0.12}
        maxPolarAngle={Math.PI * 0.49}
        minDistance={3}
        maxDistance={160}
      />
    </>
  )
}

function SelectedGizmo({ controlsRef }: { controlsRef: RefObject<TransformControlsHandle | null> }) {
  const selected = useEditorStore((s) => s.selected)
  const draft = useEditorStore((s) => s.draft)
  const tool = useEditorStore((s) => s.tool)
  const snap = useEditorStore((s) => s.snap)
  const [target, setTarget] = useState<Group | null>(null)
  const baseSize = useRef<Vec3>([1, 1, 1])
  const dragging = useRef(false)
  const selKey = selectionKey(selected)
  const pose = selected && draft ? getSelectedPose(draft, selected) : null
  const poseKey = pose ? `${pose.position.join(',')}|${pose.size.join(',')}` : ''

  useLayoutEffect(() => {
    if (!target || !pose || dragging.current) return
    target.position.set(pose.position[0], pose.position[1], pose.position[2])
    target.scale.set(1, 1, 1)
    baseSize.current = pose.size
  }, [target, poseKey, selKey])

  if (!selected || !pose || !draft) return null
  const mode = tool === 'scale' && canScale(draft, selected) ? 'scale' : 'translate'

  return (
    <>
      <group key={selKey} ref={setTarget}>
        <mesh raycast={noRaycast}>
          <boxGeometry args={pose.size} />
          <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.2} />
        </mesh>
      </group>
      {target && (
        <TransformControls
          ref={controlsRef}
          key={`${selKey}-${mode}`}
          object={target}
          mode={mode}
          translationSnap={snap || undefined}
          scaleSnap={0.1}
          size={0.9}
          onMouseDown={() => {
            dragging.current = true
            useEditorStore.getState().beginUndo()
          }}
          onObjectChange={() => {
            if (mode !== 'translate') return
            const p = target.position
            useEditorStore.getState().applyWorldTransform([p.x, p.y, p.z], baseSize.current)
          }}
          onMouseUp={() => {
            dragging.current = false
            const size: Vec3 = [
              Math.max(0.2, baseSize.current[0] * target.scale.x),
              Math.max(0.2, baseSize.current[1] * target.scale.y),
              Math.max(0.2, baseSize.current[2] * target.scale.z),
            ]
            target.scale.set(1, 1, 1)
            const p = target.position
            useEditorStore.getState().applyWorldTransform([p.x, p.y, p.z], size)
          }}
        />
      )}
    </>
  )
}

function noRaycast() {}

function DirectDrag({
  orbitRef,
  controlsRef,
}: {
  orbitRef: RefObject<OrbitControlsHandle | null>
  controlsRef: RefObject<TransformControlsHandle | null>
}) {
  const gl = useThree((state) => state.gl)
  const camera = useThree((state) => state.camera)
  const connected = useThree((state) => state.events.connected) as HTMLElement | undefined

  useEffect(() => {
    const el = connected ?? gl.domElement
    const raycaster = new Raycaster()
    const ndc = new Vector2()
    const plane = new Plane()
    const hit = new Vector3()
    const box = new Box3()
    const center = new Vector3()
    const extent = new Vector3()
    let drag: {
      pointerId: number
      sx: number
      sy: number
      offsetX: number
      offsetZ: number
      y: number
      size: Vec3
      active: boolean
    } | null = null

    const aim = (event: PointerEvent) => {
      const rect = gl.domElement.getBoundingClientRect()
      ndc.set(((event.clientX - rect.left) / rect.width) * 2 - 1, -((event.clientY - rect.top) / rect.height) * 2 + 1)
      raycaster.setFromCamera(ndc, camera)
    }

    const release = () => {
      drag = null
      if (orbitRef.current) orbitRef.current.enabled = true
      gl.domElement.style.cursor = ''
    }

    const onDown = (event: PointerEvent) => {
      if (event.button !== 0) return
      const store = useEditorStore.getState()
      if (store.tool !== 'translate' || !store.draft || !store.selected) return
      const gizmo = controlsRef.current as unknown as GizmoInternals | null
      if (gizmo) {
        gizmo.pointerHover(gizmo.getPointer(event))
        if (gizmo.axis) return
      }
      const pose = getSelectedPose(store.draft, store.selected)
      if (!pose) return
      aim(event)
      center.set(pose.position[0], pose.position[1], pose.position[2])
      extent.set(pose.size[0] + 0.3, pose.size[1] + 0.3, pose.size[2] + 0.3)
      box.setFromCenterAndSize(center, extent)
      if (!raycaster.ray.intersectBox(box, hit)) return
      plane.set(UP, -hit.y)
      drag = {
        pointerId: event.pointerId,
        sx: event.clientX,
        sy: event.clientY,
        offsetX: pose.position[0] - hit.x,
        offsetZ: pose.position[2] - hit.z,
        y: pose.position[1],
        size: pose.size,
        active: false,
      }
      if (orbitRef.current) orbitRef.current.enabled = false
    }

    const onMove = (event: PointerEvent) => {
      if (!drag || event.pointerId !== drag.pointerId) return
      if (!drag.active) {
        if (Math.hypot(event.clientX - drag.sx, event.clientY - drag.sy) < 4) return
        drag.active = true
        useEditorStore.getState().beginUndo()
        gl.domElement.style.cursor = 'grabbing'
      }
      aim(event)
      if (!raycaster.ray.intersectPlane(plane, hit)) return
      useEditorStore.getState().applyWorldTransform([hit.x + drag.offsetX, drag.y, hit.z + drag.offsetZ], drag.size)
    }

    const onUp = (event: PointerEvent) => {
      if (drag && event.pointerId === drag.pointerId) release()
    }

    el.addEventListener('pointerdown', onDown, { capture: true })
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    window.addEventListener('pointercancel', onUp)
    return () => {
      el.removeEventListener('pointerdown', onDown, { capture: true })
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointercancel', onUp)
      release()
    }
  }, [gl, camera, connected, orbitRef, controlsRef])

  return null
}

const UP = new Vector3(0, 1, 0)
