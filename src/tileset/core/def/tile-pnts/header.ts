import TileHeaderBase from "../tile-header-base"

class PntsHeader extends TileHeaderBase {
  featureTableJSONByteLength: number
  featureTableBinaryByteLength: number
  batchTableJSONByteLength: number
  batchTableBinaryByteLength: number
  
  constructor() {
    super()
  }
}

export default PntsHeader