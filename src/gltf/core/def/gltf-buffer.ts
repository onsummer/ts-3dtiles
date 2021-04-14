import { IGLTFBuffer } from "src/interfaces/IGLTFObj"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import GLTFPropertyBase from "./gltf-property-base"

class GLTFBuffer extends GLTFPropertyBase {
  byteLength: number = 0
  uri?: string

  constructor() {
    super()
  }
  
  /** @deprecated */
  get url() {
    return this.uri
  }

  validate() {
    return this.byteLength > 0
  }

  json() {
    const bf = {
      byteLength: this.byteLength
    }
    writeDefinedProperty(bf, 'uri', this.uri)
    writeExtensionsProperty(bf, this.extensions)
    writeDefinedProperty(bf, 'extras', this.extras)

    return bf
  }

  static readFromJson(json: IGLTFBuffer) {
    const bf = new GLTFBuffer()
    bf.uri = json.uri
    bf.byteLength = json.byteLength
    bf.extras = json.extras
    // extensions 单独处理
    return bf
  }
}

export default GLTFBuffer