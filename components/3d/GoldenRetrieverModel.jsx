import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function DogModel() {
  const dogRef = useRef();
  
  useFrame((state) => {
    if (dogRef.current) {
      dogRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      dogRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  const goldenColor = new THREE.Color("#D4A574");
  const darkGoldenColor = new THREE.Color("#C8955A");
  const blackColor = new THREE.Color("#222222");
  const darkColor = new THREE.Color("#1a1a1a");
  const rfidColor = new THREE.Color("#007aed");

  return (
    <group ref={dogRef}>
      {/* Cuerpo */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[1.2, 0.8, 1.8]} />
        <meshStandardMaterial color={goldenColor} />
      </mesh>
      
      {/* Cabeza */}
      <mesh position={[0, 1, 0.7]} castShadow>
        <boxGeometry args={[0.7, 0.7, 0.8]} />
        <meshStandardMaterial color={goldenColor} />
      </mesh>
      
      {/* Hocico */}
      <mesh position={[0, 0.8, 1.3]} castShadow>
        <boxGeometry args={[0.4, 0.3, 0.4]} />
        <meshStandardMaterial color={darkGoldenColor} />
      </mesh>
      
      {/* Nariz */}
      <mesh position={[0, 0.8, 1.55]} castShadow>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color={blackColor} />
      </mesh>
      
      {/* Ojos */}
      <mesh position={[-0.15, 1.1, 1.1]} castShadow>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color={darkColor} />
      </mesh>
      <mesh position={[0.15, 1.1, 1.1]} castShadow>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color={darkColor} />
      </mesh>
      
      {/* Orejas */}
      <mesh position={[-0.35, 1.1, 0.5]} rotation={[0, 0, 0.3]} castShadow>
        <boxGeometry args={[0.2, 0.6, 0.1]} />
        <meshStandardMaterial color={darkGoldenColor} />
      </mesh>
      <mesh position={[0.35, 1.1, 0.5]} rotation={[0, 0, -0.3]} castShadow>
        <boxGeometry args={[0.2, 0.6, 0.1]} />
        <meshStandardMaterial color={darkGoldenColor} />
      </mesh>
      
      {/* Patas delanteras */}
      <mesh position={[-0.35, 0, 0.6]} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 1, 16]} />
        <meshStandardMaterial color={goldenColor} />
      </mesh>
      <mesh position={[0.35, 0, 0.6]} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 1, 16]} />
        <meshStandardMaterial color={goldenColor} />
      </mesh>
      
      {/* Patas traseras */}
      <mesh position={[-0.35, 0, -0.6]} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 1, 16]} />
        <meshStandardMaterial color={goldenColor} />
      </mesh>
      <mesh position={[0.35, 0, -0.6]} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 1, 16]} />
        <meshStandardMaterial color={goldenColor} />
      </mesh>
      
      {/* Cola */}
      <mesh position={[0, 0.8, -1]} rotation={[0.5, 0, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.15, 0.8, 16]} />
        <meshStandardMaterial color={goldenColor} />
      </mesh>
      
      {/* Tag RFID en el collar */}
      <mesh position={[0, 0.9, 0.9]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} />
        <meshStandardMaterial color={rfidColor} metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

export default function GoldenRetrieverModel() {
  return (
    <div className="w-full h-full">
      <Canvas 
        shadows 
        camera={{ position: [0, 2, 5], fov: 50 }}
        gl={{ antialias: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-5, 5, 0]} intensity={0.5} color="#00ffd7" />
        
        <DogModel />
        
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
          <planeGeometry args={[10, 10]} />
          <shadowMaterial opacity={0.2} />
        </mesh>
      </Canvas>
    </div>
  );
}