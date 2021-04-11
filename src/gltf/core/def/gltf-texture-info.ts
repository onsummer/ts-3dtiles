import IValidate from "../../../interfaces/IValidate";

class GLTFTextureInfo implements IValidate {
  index: number
  texCoord: number

  constructor(index: number, texCoord: number) {
    this.index = index
    this.texCoord = texCoord
  }

  validate() {
    return (this.index < 0 || this.texCoord < 0)
  }
}

export default GLTFTextureInfo