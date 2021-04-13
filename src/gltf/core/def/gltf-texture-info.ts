import { ISerializable, IValidate } from "src/interfaces"

class GLTFTextureInfo implements IValidate, ISerializable {
  index: number
  texCoord: number

  constructor(index: number, texCoord: number) {
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
}

export default GLTFTextureInfo