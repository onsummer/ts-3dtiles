import IValidate from "../../../typings/IValidate"
import { GLTFExtensionBase } from "../../ext"
import { GLTFComponentType } from "./enum"

class GLTFAccessorSparseIndices implements IValidate {
  bufferView: number
  byteOffset: number
  componentType: GLTFComponentType
  extensions: Set<GLTFExtensionBase> = new Set()

  validate() {
    if (
      this.componentType !== GLTFComponentType.UNSIGNED_BYTE &&
      this.componentType !== GLTFComponentType.UNSIGNED_INT &&
      this.componentType !== GLTFComponentType.UNSIGNED_SHORT
    ) {
      return false
    }
    return true
  }
}

export default GLTFAccessorSparseIndices