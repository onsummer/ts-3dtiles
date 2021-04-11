import ISerializable from "src/interfaces/ISerializable"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import IValidate from "../../../interfaces/IValidate"
import GLTFExtensionBase from "../../ext/gltf-extension-base"
import MIME from "./enum/mime"

class GLTFImage implements IValidate, ISerializable {
  uri?: string
  bufferView?: number
  mimeType?: MIME
  name?: string
  extensions?: Set<GLTFExtensionBase> = new Set()
  extras?: any

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

  json() {
    const img = {}
    writeDefinedProperty(img, 'name', this.name)
    writeDefinedProperty(img, 'bufferView', this.bufferView)
    writeDefinedProperty(img, 'uri', this.uri)
    writeDefinedProperty(img, 'mimeType', this.mimeType)
    writeExtensionsProperty(img, this.extensions)
    writeDefinedProperty(img, 'extras', this.extras)

    return img
  }
}

export default GLTFImage