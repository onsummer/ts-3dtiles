import { IGLTFNormalTextureInfo } from "src/interfaces/IGLTFObj"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import GLTFTextureInfo from "./gltf-texture-info"

class GLTFNormalTextureInfo 
extends GLTFTextureInfo  {
  scale: number

  constructor(index: number, texCoord: number, scale: number) {
    super(index, texCoord)
    this.scale = scale
  }

  validate() {
    return true
  }

  json() {
    if (!this.validate()) {
      throw new Error('[GLTFNormalTextureInfo json()] 当前 normal textureinfo 属性不合法，请检查')
    }

    const st = super.json()
    writeDefinedProperty(st, 'scale', this.scale)
    writeExtensionsProperty(st, this.extensions)
    writeDefinedProperty(st, 'extras', this.extras)

    return st
  }

  static fromJson(json: IGLTFNormalTextureInfo) {
    const normalTextureInfo = new GLTFNormalTextureInfo(json.index, json.texCoord, json.scale)
    normalTextureInfo.extras = json.extras
    return normalTextureInfo
  }
}

export default GLTFNormalTextureInfo