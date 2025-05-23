/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 code-logo.glb --transform --keepmeshes 
Files: code-logo.glb [5.34KB] > code-logo-transformed.glb [3.13KB] (41%)
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { Responsive } from '../../../constructor/Responsive'
import { useFrame } from '@react-three/fiber'
import { useResponsive } from '../../../customHooks/useResponsive'

export function CodeLogo({ modal }) {
  const logo = useRef()
  const { nodes } = useGLTF('/logos/code-logo-transformed.glb')

  useFrame(({ clock }) => {
    const ticks = clock.getElapsedTime()

    logo.current.rotation.z = ticks / -2.5
  })

  const responsiveData = new Responsive();
  responsiveData.desktopSize = 2;
  responsiveData.desktopPositionX = 7;
  responsiveData.desktopPositionY = -3
  responsiveData.desktopPositionZ = -15;

  responsiveData.mobileSize = 1;
  responsiveData.mobilePositionX = 0;
  responsiveData.mobilePositionY = -3
  responsiveData.mobilePositionZ = -15;

  const { size, positionX, positionY, positionZ } = useResponsive(responsiveData);


  let loadedTexture = useTexture("/textures/purple_08_matCap.png")
  let loadedTextureTwo = useTexture("/textures/blue_09_matCap.png")

  return (
    <>
      {
        modal ? ( // if logo is displayed in modal
          <group
            ref={logo}
            position={[0, 0, 0]}
            rotation={[1.5708, 0, 3.14159]}
            scale={1.5}
          >
            <mesh geometry={nodes['circle-ring'].geometry} scale={[15, 8, 15]}>
              <meshMatcapMaterial matcap={loadedTextureTwo} />
            </mesh>
            <mesh geometry={nodes.Text.geometry} >
              <meshMatcapMaterial matcap={loadedTexture} />
            </mesh>
          </group>
        ) : ( //else if logo is displayed on main screen
          <group
            ref={logo}
            position={[positionX, positionY, positionZ]}
            rotation={[1.5708, 0, 3.14159]}
            scale={size}
          >
            <mesh geometry={nodes['circle-ring'].geometry} scale={[15, 8, 15]}>
              <meshMatcapMaterial matcap={loadedTextureTwo} />
            </mesh>
            <mesh geometry={nodes.Text.geometry} >
              <meshMatcapMaterial matcap={loadedTexture} />
            </mesh>
          </group>
        )
      }
    </>
  )
}

useGLTF.preload('/logos/code-logo-transformed.glb')
