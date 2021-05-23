import TileHeaderBase from "../tile-header-base"
declare class B3dmHeader extends TileHeaderBase {
  featureTableJSONByteLength: number
  featureTableBinaryByteLength: number
  batchTableJSONByteLength: number
  batchTableBinaryByteLength: number
  constructor()
}
export default B3dmHeader
