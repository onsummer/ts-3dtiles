import TileHeaderBase from "../tile-header-base";

class B3dmHeader extends TileHeaderBase {
  featureTableJSONByteLength: number
  featureTableBinaryByteLength: number
  batchTableJSONByteLength: number
  batchTableBinaryByteLength: number

  constructor() {
    super()
  }
}

export default B3dmHeader