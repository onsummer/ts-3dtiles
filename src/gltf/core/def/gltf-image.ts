import IValidate from "../../../typings/IValidate"
import GLTFExtensionBase from "../../ext/gltf-extension-base"
import MIME from "./enum/mime"

class GLTFImage implements IValidate {
  uri?: string
  bufferView?: number
  mimeType?: MIME
  name?: string
  extensions: Set<GLTFExtensionBase> = new Set()

  validate() {
    if (this.uri !== undefined && this.bufferView !== undefined) {
      return false
    }
    if (this.bufferView !== undefined) {
      if (this.mimeType === undefined) {
        return false
      }
      return true
    }
    return true
  }
}

export default GLTFImage