import { TileHeaderBase } from "../.."

class VctrHeader extends TileHeaderBase {
  featureTableJSONByteLength: number
  featureTableBinaryByteLength: number
  batchTableJSONByteLength: number
  batchTableBinaryByteLength: number

  polygonIndicesByteLength: number
  polygonPositionsByteLength: number
  polylinePositionsByteLength: number
  pointPositionsByteLength: number

  /**
   *
   */
  constructor() {
    super()
  }
}

export default VctrHeader