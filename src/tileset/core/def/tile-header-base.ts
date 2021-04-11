import IValidate from "../../../interfaces/IValidate";

class TileHeaderBase implements IValidate {
  magic: string
  version: number
  byteLength: number

  validate() {
    return true
  }
}

export default TileHeaderBase