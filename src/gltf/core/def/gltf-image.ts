import IValidate from "../../../typings/IValidate"
import MIME from "./enum/mime"

class GLTFImage implements IValidate {
  validate() {
    if (this.uri && this.bufferView) {
      return false
    }
    if (this.bufferView) {
      if (this.mimeType === undefined) {
        return false
      }
      return true
    }
    return true
  }

  uri?: string
  bufferView?: number
  mimeType?: MIME
  name?: string
}

export default GLTFImage