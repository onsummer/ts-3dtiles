import IValidate from "../../../typings/IValidate"
import GLTFExtensionBase from "../../ext/gltf-extension-base"

class GLTFBuffer implements IValidate {
  byteLength: number = 0
  uri?: string
  /** @deprecated */
  url?: string
  extensions: Set<GLTFExtensionBase> = new Set()

  validate() {
    if (this.byteLength < 0) {
      return false
    }
    return true
  }
}

export default GLTFBuffer