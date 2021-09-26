/* eslint-disable import/no-duplicates */

import React from 'react'
import { TileRow } from './TileRow'

export const TileSet = ({ terrainMatrix, tileSize }) => {
  const tileSetComponent = terrainMatrix.map((terrainRow, index) => { return <TileRow tileSize={tileSize} terrainRow={terrainRow} terrainRowIndex={index} key={index}></TileRow> })
  console.log(tileSetComponent)
  return tileSetComponent
}
