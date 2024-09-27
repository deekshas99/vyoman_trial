'use client';
import React, { useRef } from 'react';
import {
  useGLTF,
  useAnimations,
  Environment,
  OrbitControls,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

// Model component
export function Model(props) {
  const group = useRef(null);
  const { nodes, materials, animations } = useGLTF('/mol2.glb');
  const { actions } = useAnimations(animations, group);

  return (
    <group ref={group} {...props} dispose={null}>
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

useGLTF.preload('/mol2.glb');

const Molecule3 = () => {
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

export default Molecule3;
