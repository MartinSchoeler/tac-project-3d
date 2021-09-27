/* eslint-disable import/no-duplicates */

import './App.css'
import React, { Suspense } from 'react'

import { Canvas } from '@react-three/fiber'
import { TileSet } from './components/TileSet'
import { OrbitControls } from '@react-three/drei'

// eslint-disable-next-line no-unused-vars
function randomIntFromInterval () {
  return Math.floor(Math.random() * (2 - 1 + 1) + 1)
}

function App () {
  // TODO: use a function to generate terrain
  const matrix = [
    [{ size: [1, 1, 1], height: 0.5 }, { size: [1, 1, 1], height: 0.8 }, { size: [1, 1, 1], height: 0.7 }],
    [{ size: [1, 1, 1], height: 0.5 }, { size: [1, 1, 1], height: 0.6 }, { size: [1, 1, 1], height: 0.7 }],
    [{ size: [1, 1, 1], height: 0.5 }, { size: [1, 1, 1], height: 0.6 }, { size: [1, 1, 1], height: 0.7 }]
  ]
  return (
    <div id="canvas-container">
      <Canvas>
      <OrbitControls />

        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[2, 1, 8]} />
        <Suspense fallback={null}>
          <TileSet terrainMatrix={matrix} tileSize={1}></TileSet>

        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
