import { TileHeaderBase } from "../.."
declare class VctrHeader extends TileHeaderBase {
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
  constructor()
}
export default VctrHeader
