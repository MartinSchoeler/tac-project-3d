/* eslint-disable import/no-duplicates */

import React from 'react'
import { Tile } from './Tile'

export const TileRow = ({ terrainRow, tileSize, terrainRowIndex }) => {
  let currentLocation = [0, 0, terrainRowIndex]

  const calculateNextPosition = (height) => {
    const returnLocation = [...currentLocation]
    currentLocation = currentLocation.map((axis, index) => index === 0 ? axis + tileSize : index === 2 ? terrainRowIndex : height)
    console.log(currentLocation)
    return returnLocation
  }

  const tileSetComponent = terrainRow.map((terrainTile) => <Tile key position={calculateNextPosition(terrainTile.height)} size={terrainTile.size}/>)
  console.log(tileSetComponent)
  return tileSetComponent
}
