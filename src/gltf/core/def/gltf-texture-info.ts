import { IGLTFTextureInfo } from "src/interfaces/IGLTFObj"
import GLTFPropertyBase from "./gltf-property-base"

class GLTFTextureInfo extends GLTFPropertyBase {
  index: number
  texCoord: number

  constructor(index: number, texCoord: number) {
    super()
    this.index = index
    this.texCoord = texCoord
  }

  validate() {
    return (this.index < 0 || this.texCoord < 0)
  }

  json() {
    if (!this.validate()) {
      throw new Error('[GLTFTextureInfo json()] 当前 textureinfo 对象属性不合法，请检查')
    }

    const tinfo = {
      index: this.index,
      texCoord: this.texCoord
    }

    return tinfo
  }

  static readFromJson(json: IGLTFTextureInfo) {
    const textureInfo = new GLTFTextureInfo(json.index, json.texCoord)
    textureInfo.extras = json.extras

    return textureInfo
  }
}

export default GLTFTextureInfo