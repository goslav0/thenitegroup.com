// @ts-nocheck
"use client";
import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Center, Environment } from "@react-three/drei";
import * as THREE from "three";

function NiteLogo({ isDragging, rotationGroupRef }) {
  const { scene } = useGLTF("/models/nitelogo.glb");
  const modelRef = useRef();

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.frustumCulled = false;
          child.material = new THREE.MeshStandardMaterial({
            color: "#ffffff",
            metalness: 1,
            roughness: 0.1,
          });
        }
      });
    }
  }, [scene]);

  useFrame((state, delta) => {
    // 1. Delikatny stały obrót modelu
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.3;
    }

    // 2. Płynny powrót grupy do pozycji [0,0,0] gdy użytkownik puści myszkę
    if (!isDragging && rotationGroupRef.current) {
      rotationGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        rotationGroupRef.current.rotation.x,
        0,
        0.05
      );
      rotationGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        rotationGroupRef.current.rotation.y,
        0,
        0.05
      );
    }
  });

  return <primitive ref={modelRef} object={scene} scale={1.8} />;
}

export default function HeroVisual() {
  const [mounted, setMounted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const rotationGroupRef = useRef();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[500px] md:h-[700px] bg-black" />;

  return (
    <div className="w-full h-[500px] md:h-[700px] bg-black overflow-hidden relative">
      <Canvas 
        dpr={[1, 2]} 
        camera={{ position: [0, 0, 15], fov: 25 }}
        onPointerDown={() => setIsDragging(true)}
        onPointerUp={() => setIsDragging(false)}
        onPointerLeave={() => setIsDragging(false)}
      >
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={1.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
        
        <Suspense fallback={null}>
          <Center>
            <group 
              ref={rotationGroupRef}
              onPointerMove={(e) => {
                if (e.buttons === 1) {
                  rotationGroupRef.current.rotation.y += e.movementX * 0.01;
                  rotationGroupRef.current.rotation.x += e.movementY * 0.01;
                }
              }}
            >
              <NiteLogo isDragging={isDragging} rotationGroupRef={rotationGroupRef} />
              
              {/* Hitbox do łapania myszki */}
              <mesh visible={false}>
                <sphereGeometry args={[6, 16, 16]} />
                <meshBasicMaterial transparent opacity={0} />
              </mesh>
            </group>
          </Center>
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/nitelogo.glb");