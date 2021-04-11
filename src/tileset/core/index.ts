/* tileset root properties */
export { default as Tile } from './def/tile'
export { default as Tileset } from './def/tileset'
export { default as TileBoundingVolume } from './def/tile-bounding-volume'
export { default as TileContent } from './def/tile-content'
export { default as Property } from './def/property'
export { default as Asset } from './def/asset'

/* tile format */
export { default as B3dmHeader } from './def/tile-b3dm/header'
export { default as B3dm } from './def/tile-b3dm'

export { default as I3dmHeader } from './def/tile-i3dm/header'
export { default as I3dm } from './def/tile-i3dm'

export { default as PntsHeader } from './def/tile-pnts/header'
export { default as Pnts } from './def/tile-pnts'

export { default as Cmpt } from './def/tile-cmpt'

// export { default as Vctr } from './def/tile-vctr'

export { default as TileHeaderBase } from './def/tile-header-base'

export * from './def/featuretable'
export * from './def/batchtable'

/* enums */
export { default as TileRefine } from './def/enum/tile-refine'