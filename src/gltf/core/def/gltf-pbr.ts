import { IGLTFPbr } from "src/interfaces/IGLTFObj"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import GLTFPropertyBase from "./gltf-property-base"
import GLTFTextureInfo from "./gltf-texture-info"

class GLTFPbr extends GLTFPropertyBase {
  baseColorFactor?: [number, number, number, number] = [1, 1, 1, 1]
  baseColorTexture?: GLTFTextureInfo
  metallicFactor?: number
  roughnessFactor?: number
  metallicRoughnessTexture?: GLTFTextureInfo

  constructor() {
    super()
  }

  validate() {
    if (this.baseColorFactor && this.baseColorFactor.every(v => v < 0 || v > 1)) {
      return false
    }
    if (this.roughnessFactor !== undefined) {
      if (this.roughnessFactor > 1 || this.roughnessFactor < 0)
        return false
    }
    if ((this.metallicFactor !== undefined && this.metallicFactor > 1)
      || (this.metallicFactor !== undefined && this.metallicFactor < 0)) {
      return false
    }
    if (this.baseColorTexture?.validate() === false || this.metallicRoughnessTexture?.validate() === false) {
      return false
    }
    return true
  }

  json() {
    if (this.validate() === false) {
      throw new Error('[GLTFPbr json()] 此 pbr 对象属性有误，请检查')
    }

    const pbr = {}

    if (this.baseColorFactor !== undefined && this.baseColorFactor.every(v => v !== 1.0)) {
      writeDefinedProperty(pbr, 'baseColorFactor', this.baseColorFactor)
    }
    writeDefinedProperty(pbr, 'baseColorTexture', this.baseColorTexture !== undefined ? this.baseColorTexture.json() : undefined)
    writeDefinedProperty(pbr, 'metallicFactor', this.metallicFactor && this.metallicFactor === 1 ? undefined : this.metallicFactor)
    writeDefinedProperty(pbr, 'roughnessFactor', this.roughnessFactor && this.roughnessFactor === 1 ? undefined : this.roughnessFactor)
    writeDefinedProperty(pbr, 'metallicRoughnessTexture', this.metallicRoughnessTexture !== undefined ? this.metallicRoughnessTexture.json() : undefined)
    writeExtensionsProperty(pbr, this.extensions)
    writeDefinedProperty(pbr, 'extras', this.extras)

    return pbr
  }

  static readFromJson(json: IGLTFPbr) {
    const pbr = new GLTFPbr()

    pbr.extras = json.extras
    pbr.metallicFactor = json.metallicFactor
    pbr.roughnessFactor = json.roughnessFactor
    pbr.baseColorFactor = json.baseColorFactor
    if (json.baseColorTexture !== undefined) {
      pbr.baseColorTexture = GLTFTextureInfo.readFromJson(json.baseColorTexture)
    }
    if (json.metallicRoughnessTexture !== undefined) {
      pbr.metallicRoughnessTexture = GLTFTextureInfo.readFromJson(json.metallicRoughnessTexture)
    }

    return pbr
  }
}

export default GLTFPbr