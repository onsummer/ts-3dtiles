import { decode } from 'base64-arraybuffer'
import { IGLTFBuffer } from "src/interfaces/IGLTFObj"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import GLTFPropertyBase from "./gltf-property-base"

function isDataUrl(str: string) {
  return str.startsWith('data:')
}

class GLTFBuffer extends GLTFPropertyBase {
  byteLength: number = 0
  uri?: string
  bufferData?: ArrayBuffer

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

  static fromJson(json: IGLTFBuffer) {
    const bf = new GLTFBuffer()
    bf.uri = json.uri
    if (bf.uri && isDataUrl(bf.uri)) {
      bf.bufferData = decode(bf.uri.substr(bf.uri.indexOf(',') + 1))
    }
    bf.byteLength = json.byteLength
    bf.extras = json.extras
    // extensions 单独处理
    return bf
  }
}

export default GLTFBuffer