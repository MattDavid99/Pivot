import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function Model({ url, onLoaded, shouldRotate }) {
  const groupRef = useRef();
  const gltf = useLoader(GLTFLoader, url, (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
    loader.setDRACOLoader(dracoLoader);
  });

  useEffect(() => {
    if (gltf) {
      const model = gltf.scene;

      const scaleFactor = 0.005;
      model.scale.set(scaleFactor, scaleFactor, scaleFactor);

      // Centering the model
      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      model.position.sub(center);

      const sphere = box.getBoundingSphere(new THREE.Sphere());

      groupRef.current.add(model);

      onLoaded(sphere);

      return () => {
        if (gltf) {
          gltf.scene.traverse((child) => {
            if (child.isMesh) {
              child.geometry.dispose();
              child.material.dispose();
            }
          });
        }
      };
    }
  }, [gltf, onLoaded]);

  useFrame(() => {
    if (groupRef.current && shouldRotate) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return <group ref={groupRef} />;
}

export default function ProductViewer() {
  const [boundingSphere, setBoundingSphere] = useState(null);
  const [shouldRotate, setShouldRotate] = useState(true);
  const cameraRef = useRef();
  const rotationTimeoutRef = useRef();

  const cameraPositionFactor = 0.99;
  const cameraHeight = 0;

  useEffect(() => {
    if (boundingSphere && cameraRef.current) {
      const camera = cameraRef.current;
      const fov = camera.fov * (Math.PI / 180);
      const distance = (boundingSphere.radius / Math.sin(fov / 2)) * cameraPositionFactor;
      const direction = new THREE.Vector3(1, cameraHeight, 1).normalize();
      camera.position.copy(direction.multiplyScalar(distance).add(boundingSphere.center));
      camera.near = distance / 100;
      camera.far = distance * 100;
      camera.lookAt(boundingSphere.center);
      camera.updateProjectionMatrix();
    }
  }, [boundingSphere, cameraPositionFactor, cameraHeight]);

  const handleDragStart = () => {
    setShouldRotate(false);
    clearTimeout(rotationTimeoutRef.current);
  };

  const handleDragEnd = () => {
    rotationTimeoutRef.current = setTimeout(() => {
      setShouldRotate(true);
    }, 5000);
  };

  useEffect(() => {
    return () => clearTimeout(rotationTimeoutRef.current);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <Canvas toneMapping={THREE.LinearToneMapping}>
        <PerspectiveCamera ref={cameraRef} makeDefault fov={60} />

        {/* Adjusted lighting */}
        <ambientLight intensity={1.5} color={0xffffff} />
        <directionalLight intensity={3} position={[3, 3, 5]} color={0xffffff} />
        <directionalLight intensity={3} position={[-3, -3, -5]} color={0xffffff} />

        <Suspense
          fallback={
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="hotpink" />
            </mesh>
          }>
          <Model url="/metal.glb" onLoaded={setBoundingSphere} shouldRotate={shouldRotate} />
        </Suspense>
        <OrbitControls enableDamping={false} enableZoom={true} maxDistance={20} onStart={handleDragStart} onEnd={handleDragEnd} />
      </Canvas>
    </div>
  );
}
