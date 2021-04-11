import IValidate from "../../../interfaces/IValidate";
import { GLTFExtensionBase } from "../../ext";

class GLTFAccessorSparseValues implements IValidate {
  bufferView: number
  byteOffset?: number
  extensions: Set<GLTFExtensionBase> = new Set()

  validate() {
    return !(this.byteOffset! < 0)
  }
}

export default GLTFAccessorSparseValues