'use client';
import React from 'react';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';

// Model component
export function Model(props) {
  const { nodes, materials } = useGLTF('/compressed.glb');

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Icosphere__0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.003, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.294}
      />
      <instancedMesh
        args={[
          nodes['Icosphere|Icosphere001|Dupli|_Material001_0'].geometry,
          materials.PaletteMaterial001,
          2612,
        ]}
        instanceMatrix={
          nodes['Icosphere|Icosphere001|Dupli|_Material001_0'].instanceMatrix
        }
      />
    </group>
  );
}

useGLTF.preload('/compressed.glb');

const CompressedMolecule = () => {
  return (
    <Canvas style={{}}>
      <mesh scale={1.5}>
        <ambientLight />
        <OrbitControls />
        <Environment preset="studio" />
        <Model />
      </mesh>
    </Canvas>
  );
};

export default CompressedMolecule;
