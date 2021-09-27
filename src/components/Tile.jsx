/* eslint-disable import/no-duplicates */
import * as THREE from 'three'
import { Box } from '@react-three/drei'
import texture from '../textures/Bricks/BIGBRICKS.png'

import React from 'react'
import { useLoader } from '@react-three/fiber'

// eslint-disable-next-line react/prop-types
export const Tile = ({ size, position }) => {
  const loaderTexture = useLoader(THREE.TextureLoader, texture)

  return <Box args={size} position={position}>
        <boxBufferGeometry attach="geometry" />
        <meshBasicMaterial attach="material" map={loaderTexture} />

  </Box>
}
