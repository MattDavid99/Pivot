import React, { useRef, useEffect, useState, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'

const Model = ({
  url,
  position,
  playAnimation,
  setModelCurrentPosition,
  resetPositions,
  setCurrentAnimationTime,
}) => {
  const { scene, animations } = useGLTF(url, true)
  const modelRef = useRef(null)
  const { actions } = useAnimations(animations, scene)

  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => {
        action.paused = !playAnimation
        playAnimation && action.play()
      })
    }
  }, [actions, playAnimation])

  useFrame(() => {
    setCurrentAnimationTime(actions?.ArmatureAction?.time)
    if (actions?.ArmatureAction?.time <= 1 && playAnimation) {
      Object.values(actions).forEach((action) => {
        action.time = 2
      })
      resetPositions()
      modelRef.current.position.set(position)
    }
    if (actions?.ArmatureAction?.time > 4 && playAnimation) {
      modelRef.current.position.lerp(
        new THREE.Vector3(position.x, -2.2, position.z),
        0.005
      )
      setModelCurrentPosition(modelRef.current.position)
    }
  })

  return <primitive ref={modelRef} object={scene} position={position} />
}

const SmoothCamera = ({
  playAnimation,
  setAnimating,
  cameraCurrentPosition,
  setCameraCurrentPosition,
  currentAnimationTime,
  cameraRef,
}) => {
  const { camera } = useThree()
  const notPlayAnimationPosition = new THREE.Vector3(-3, 2, 6)
  const [animateCamera, setAnimateCamera] = useState(false)

  useFrame(() => {
    const targetPosition = playAnimation
      ? cameraCurrentPosition
      : notPlayAnimationPosition
    const distance = camera.position.distanceTo(targetPosition)

    console.log(cameraRef)
    cameraRef.current.style.pointerEvents = playAnimation ? 'none' : 'unset'
    cameraRef.current.parentNode.parentNode.style.touchAction = playAnimation
      ? 'auto'
      : 'none'

    if (playAnimation && !animateCamera && currentAnimationTime > 4) {
      setCameraCurrentPosition(
        cameraCurrentPosition.lerp(
          new THREE.Vector3(
            0,
            0,
            cameraRef.current.clientWidth < 500 ? 7.5 : 5.5
          ),
          0.005
        )
      )
      camera.position.z = cameraCurrentPosition.z
    } else if (playAnimation && !animateCamera && currentAnimationTime <= 4) {
      camera.position.z = cameraCurrentPosition.z
    }

    if (animateCamera && distance > 0.1) {
      camera.position.lerp(targetPosition, 0.1)
      camera.lookAt(0, 0, 0)
    } else {
      setAnimating(false)
      setAnimateCamera(false)
    }
  })

  useEffect(() => {
    setAnimateCamera(true)
    setAnimating(true)
  }, [playAnimation])

  return null
}

export default function ProductViewer({
  playAnimation,
  setPlayAnimation,
  canClick3dBtn,
}) {
  const cameraRef = useRef()
  const cameraInitialPosition = new THREE.Vector3(0, 0, 7)
  const [cameraCurrentPosition, setCameraCurrentPosition] = useState(
    cameraInitialPosition
  )
  const modelInitialPosition = new THREE.Vector3(0, -3, 0)
  const [modelCurrentPosition, setModelCurrentPosition] =
    useState(modelInitialPosition)
  const [currentAnimationTime, setCurrentAnimationTime] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [cursorStyle, setCursorStyle] = useState('cursor-grab')
  const [interactionTimer, setInteractionTimer] = useState(null)

  const handleMouseDown = () => {
    resetTimer()
    setCursorStyle('cursor-grabbing')
  }

  const handleMouseUp = () => {
    resetTimer()
    setCursorStyle('cursor-grab')
  }

  const resetTimer = () => {
    if (interactionTimer) clearTimeout(interactionTimer)
    setInteractionTimer(setTimeout(() => setPlayAnimation(true), 8000))
  }

  const resetPositions = () => {
    setCameraCurrentPosition(cameraInitialPosition)
    setModelCurrentPosition(modelInitialPosition)
  }

  useEffect(() => {
    !playAnimation && resetTimer()
    return () => interactionTimer && clearTimeout(interactionTimer)
  }, [playAnimation])

  return (
    <div
      className={`${!playAnimation ? cursorStyle : ''}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={{ width: '100%', height: '100%', backgroundColor: 'white' }}
    >
      <Canvas
        ref={cameraRef}
        toneMapping={THREE.LinearToneMapping}
        camera={{ position: cameraInitialPosition, fov: 50 }}
      >
        <SmoothCamera
          playAnimation={playAnimation}
          animating={animating}
          setAnimating={setAnimating}
          cameraCurrentPosition={cameraCurrentPosition}
          setCameraCurrentPosition={setCameraCurrentPosition}
          currentAnimationTime={currentAnimationTime}
          cameraRef={cameraRef}
        />
        <ambientLight intensity={1.5} color={0xffffff} />
        <directionalLight intensity={3} position={[3, 3, 5]} color={0xffffff} />
        <directionalLight
          intensity={3}
          position={[-3, -3, -5]}
          color={0xffffff}
        />
        <Suspense
          fallback={
            <mesh>
              <boxGeometry args={[0, 0, 0]} />
              <meshBasicMaterial color="white" />
            </mesh>
          }
        >
          <Model
            url="/metal.glb"
            position={modelCurrentPosition}
            setModelCurrentPosition={setModelCurrentPosition}
            playAnimation={playAnimation}
            resetPositions={resetPositions}
            setCurrentAnimationTime={setCurrentAnimationTime}
          />
        </Suspense>
        <mesh>
          <boxGeometry args={[20, 20, 20]} />
          <meshBasicMaterial
            color={0xffffff}
            side={THREE.BackSide}
            toneMapped={false}
          />
        </mesh>
        <OrbitControls
          enabled={!animating && !playAnimation}
          enableDamping={false}
          enableZoom={true}
          maxDistance={20}
        />
      </Canvas>
    </div>
  )
}
