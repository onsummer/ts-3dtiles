import { IGLTFImage } from "src/interfaces/IGLTFObj"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import GLTFPropertyBase from "./gltf-property-base"
import MIME from "./enum/mime"

class GLTFImage extends GLTFPropertyBase {
  uri?: string
  bufferView?: number
  mimeType?: MIME
  name?: string

  constructor() {
    super()
  }
  
  validate() {
    if (this.uri !== undefined && this.bufferView !== undefined) {
      return false
    }
    if (this.bufferView !== undefined) {
      if (this.mimeType === undefined) {
        return false
      }
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

  static readFromJson(json: IGLTFImage) {
    const img = new GLTFImage()
    img.name = json.name
    img.bufferView = json.bufferView
    if (json.mimeType !== undefined) {
      if (json.mimeType in MIME) {
        img.mimeType = json.mimeType as MIME
      } else {
        throw new Error('[GLTFImage.readFromJson()] 不支持的 mime 类型')
      }
    }
    img.extras = json.extras
    return img
  }
}

export default GLTFImage