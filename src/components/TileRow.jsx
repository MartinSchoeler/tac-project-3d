/* eslint-disable import/no-duplicates */

import React from 'react'
import { Tile } from './Tile'

export const TileRow = ({ terrainRow, tileSize, terrainRowIndex }) => {
  let currentLocation = [0, 0, 0]

  const calculateNextPosition = () => {
    const returnLocation = [...currentLocation]
    currentLocation = currentLocation.map((axis, index) => index === 2 ? axis + tileSize : index === 0 ? terrainRowIndex : 0)
    console.log(currentLocation)
    return returnLocation
  }

  const tileSetComponent = terrainRow.map((terrainTile) => <Tile key position={calculateNextPosition()} size={terrainTile.size}/>)
  console.log(tileSetComponent)
  return tileSetComponent
}
