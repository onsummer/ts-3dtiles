import IValidate from "../../../interfaces/IValidate"
import GLTFExtensionBase from "../../ext/gltf-extension-base"

class GLTFBufferView implements IValidate {
  buffer: number = 0
  byteLength: number = 0
  byteOffset?: number = 0
  extensions: Set<GLTFExtensionBase> = new Set()

  validate() {
    if (this.buffer < 0) {
      return false
    }
    if (this.byteLength < 0) {
      return false
    }
    if (this.byteOffset! < 0) {
      return false
    }
    return true
  }
}



export default GLTFBufferView