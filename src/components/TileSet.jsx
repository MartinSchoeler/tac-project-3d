/* eslint-disable import/no-duplicates */

import React from 'react'
import { TileRow } from './TileRow'

export const TileSet = ({ terrainMatrix, tileSize }) => {
  console.log('matrix', terrainMatrix)
  const tileSetComponent = terrainMatrix.map((terrainRow, index) => { console.log(terrainRow); return <TileRow tileSize={tileSize} terrainRow={terrainRow} terrainRowIndex={index} key={index}></TileRow> })
  console.log(tileSetComponent)
  return tileSetComponent
}
