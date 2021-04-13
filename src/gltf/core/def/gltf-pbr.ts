import { GLTFExtensionBase } from "src/gltf/ext"
import { ISerializable, IValidate } from "src/interfaces"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import GLTFTextureInfo from "./gltf-texture-info"

class GLTFPbr implements IValidate, ISerializable {
  baseColorFactor?: number[] = [1, 1, 1, 1]
  baseColorTexture?: GLTFTextureInfo
  metallicFactor?: number
  roughnessFactor?: number
  metallicRoughnessTexture?: GLTFTextureInfo
  extensions?: Set<GLTFExtensionBase> = new Set()
  extras?: any

  validate() {
    if (this.baseColorFactor!.length !== 4 || this.baseColorFactor!.every(v => v < 0 || v > 1)) {
      return false
    }
    if (this.roughnessFactor! > 1 || this.roughnessFactor! < 0) {
      return false
    }
    if (this.metallicFactor! > 1 || this.metallicFactor! < 0) {
      return false
    }
    if (this.baseColorTexture!.validate() === false || this.metallicRoughnessTexture!.validate() === false) {
      return false
    }
    return true
  }

  json() {
    if (!this.validate()) {
      throw new Error('[GLTFPbr json()] 此 pbr 对象属性有误，请检查')
    }

    const pbr = {}

    writeDefinedProperty(pbr, 'baseColorFactor', this.baseColorFactor)
    writeDefinedProperty(pbr, 'baseColorTexture', this.baseColorTexture !== undefined ? this.baseColorTexture.json() : undefined)
    writeDefinedProperty(pbr, 'metallicFactor', this.metallicFactor)
    writeDefinedProperty(pbr, 'roughnessFactor', this.roughnessFactor)
    writeDefinedProperty(pbr, 'metallicRoughnessTexture', this.metallicRoughnessTexture !== undefined ? this.metallicRoughnessTexture.json() : undefined)
    writeExtensionsProperty(pbr, this.extensions)
    writeDefinedProperty(pbr, 'extras', this.extras)

    return pbr
  }
}

export default GLTFPbr