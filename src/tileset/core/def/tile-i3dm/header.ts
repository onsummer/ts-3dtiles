import IValidate from "../../../../typings/IValidate"
import TileHeaderBase from "../tile-header-base"

class I3dmHeader extends TileHeaderBase implements IValidate {
  featureTableJSONByteLength: number
  featureTableBinaryByteLength: number
  batchTableJSONByteLength: number
  batchTableBinaryByteLength: number
  gltfFormat: number

  constructor() {
    super()
  }

  validate() {
    if (this.gltfFormat !== 0 && this.gltfFormat !== 1) {
      return false
    }

    return true
  }
}

export default I3dmHeader