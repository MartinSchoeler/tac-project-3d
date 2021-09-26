/* eslint-disable import/no-duplicates */

import './App.css'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { TileSet } from './components/TileSet'
import { OrbitControls } from '@react-three/drei'

// eslint-disable-next-line no-unused-vars
function randomIntFromInterval () {
  return Math.floor(Math.random() * (2 - 1 + 1) + 1)
}

function App () {
  const matrix = [
    [{ size: [1, 1, 1] }, { size: [1, 1, 1] }, { size: [1, 1, 1] }],
    [{ size: [1, 1, 1] }, { size: [1, 1, 1] }, { size: [1, 1, 1] }],
    [{ size: [1, 1, 1] }, { size: [1, 1, 1] }, { size: [1, 1, 1] }]
  ]
  return (
    <div id="canvas-container">
      <Canvas>
      <OrbitControls />

        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[2, 1, 8]} />
        <TileSet terrainMatrix={matrix} tileSize={1}></TileSet>
      </Canvas>
    </div>
  )
}

export default App
