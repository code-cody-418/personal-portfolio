/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: xenadus (https://sketchfab.com/xenadus)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/react-logo-76174ceeba96487f9863f974636f641e
title: React logo
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Responsive } from '../../../constructor/Responsive'
import { useResponsive } from '../../../customHooks/useResponsive'

export default function ReactLogo({ ...props }) {
  const logo = useRef()
  const { nodes, materials } = useGLTF('/react_logo.glb')

  useFrame(({ clock }) => {
    const ticks = clock.getElapsedTime()

    logo.current.rotation.y = ticks / 2
  })

  const responsiveData = new Responsive();
  responsiveData.desktopSize = 0.6;
  responsiveData.desktopPositionX = 7;
  responsiveData.desktopPositionY = -6
  responsiveData.desktopPositionZ = -15;

  responsiveData.mobileSize = 0.5;
  responsiveData.mobilePositionX = 0;
  responsiveData.mobilePositionY = -2
  responsiveData.mobilePositionZ = -15;

  const { size, positionX, positionY, positionZ } = useResponsive(responsiveData);

  return (
    <group
      ref={logo}
      position={[positionX  , positionY, positionZ]}
      rotation={[0, -1.570796, 1.5]}
      scale={size}>
      <mesh geometry={nodes['React-Logo_Material002_0'].geometry} material={materials['Material.002']} />
    </group>
  )
}

useGLTF.preload('/react_logo.glb')