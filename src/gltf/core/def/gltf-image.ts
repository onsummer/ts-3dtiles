import { decode } from 'base64-arraybuffer'
import { IGLTFImage } from "src/interfaces/IGLTFObj"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import GLTFPropertyBase from "./gltf-property-base"
import MIME from "./enum/mime"
import { IOBuffer } from 'iobuffer'

class GLTFImage extends GLTFPropertyBase {
  uri?: string
  bufferView?: number
  mimeType?: MIME
  name?: string

  constructor() {
    super()
  }

  get isEncodeWithUri() {
    return this.uri === undefined && this.bufferView !== undefined
  }
  
  get getImageData() {
    if (this.validate() === false) {
      throw new Error('[GLTFImage getImageData()] 当前 image 对象属性有问题，请检查')
    }
    if (this.uri && this.isEncodeWithUri) {
      return decode(this.uri)
    }

    if (this.doc === undefined) {
      throw new Error('')
    } else {
      if (this.doc.buffers.length === 0 || this.doc.bufferViews.length === 0) {
        throw new Error('')
      } else {        
        const bv = this.doc.bufferViews[this.bufferView!]
        const bf = this.doc.buffers[bv.buffer]
        // 有的时候 byteOffset 并不会指明，那么 bufferView 的 buffer 索引即它自己的索引
        const begin = bv.byteOffset === undefined ? this.doc.bufferViews.indexOf(bv) : bv.byteOffset
        const length = bv.byteLength
        const bufferdata = bf.bufferData
        if (bufferdata !== undefined) {
          return new IOBuffer(bufferdata)
          .skip(begin)
          .readBytes(length)
          .buffer
        }
      }
    }
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

  static fromJson(json: IGLTFImage) {
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