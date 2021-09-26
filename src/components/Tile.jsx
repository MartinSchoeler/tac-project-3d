/* eslint-disable import/no-duplicates */
import React from 'react'

// eslint-disable-next-line react/prop-types
export const Tile = ({ size, position }) => {
  return <mesh position={position}>
    <boxGeometry args={size}/>
    <meshStandardMaterial color={'#' + Math.floor(Math.random() * 16777215).toString(16)} />
  </mesh>
}
