'use client';
import React, { useRef } from 'react';
import { Group, Mesh, Material } from 'three';
import { Environment, useGLTF, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

// Model component
export function Model(props) {
  const group = useRef(null);
  const { nodes, materials } = useGLTF('/molecule1.glb');

  // Add null checks to avoid potential runtime errors
  if (!nodes || !materials) {
    console.error('Failed to load GLTF model or its materials');
    return null;
  }

  return (
    <group ref={group} {...props}>
      <group name="Scene">
        <mesh
          name="Cube"
          geometry={nodes.Cube.geometry}
          material={materials['Material.001']}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/molecule1.glb');

const Molecule1 = () => {
  return (
    <Canvas style={{}}>
      <mesh scale={3}>
        <ambientLight />
        <OrbitControls />
        <Environment preset="studio" />
        <Model />
      </mesh>
    </Canvas>
  );
};

export default Molecule1;
