import { GLTFExtensionBase } from "src/gltf/ext"
import { ISerializable, IValidate } from "src/interfaces"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import { GLTFAlphaMode } from "./enum"
import GLTFNormalTextureInfo from "./gltf-normal-texture-info"
import GLTFOcclusionTextureInfo from "./gltf-occlusion-texture-info"
import GLTFPbr from "./gltf-pbr"
import GLTFTextureInfo from "./gltf-texture-info"

class GLTFMaterial implements IValidate, ISerializable {
  name?: string
  pbrMetallicRoughness?: GLTFPbr
  normalTexture?: GLTFNormalTextureInfo
  occlusionTexture?: GLTFOcclusionTextureInfo
  emissiveTexture?: GLTFTextureInfo
  emissiveFactor?: number[] = [0, 0, 0]
  alphaMode?: GLTFAlphaMode = GLTFAlphaMode.OPAQUE
  alphaCutoff?: number = 0.5
  doubleSided?: boolean = false
  extensions?: Set<GLTFExtensionBase> = new Set()
  extras?: any

  validate() {
    if (this.pbrMetallicRoughness!.validate() === false) {
      return false
    }
    if (this.normalTexture!.validate() === false) {
      return false
    }
    if (this.occlusionTexture!.validate() === false) {
      return false
    }
    if (this.alphaMode === GLTFAlphaMode.MASK && this.alphaCutoff === undefined) {
      return false
    }
    if (this.emissiveFactor!.length !== 3) {
      return false
    }
    return true
  }

  json() {
    if (!this.validate()) {
      throw new Error('[GLTFMaterial json()] 此 material 对象的属性不合法，请检查')
    }

    const m = {}

    writeDefinedProperty(m, 'name', this.name)
    writeDefinedProperty(m, 'pbrMetallicRoughness', this.pbrMetallicRoughness !== undefined ? this.pbrMetallicRoughness.json() : undefined)
    writeDefinedProperty(m, 'normalTexture', this.normalTexture !== undefined ? this.normalTexture.json() : undefined)
    writeDefinedProperty(m, 'emissiveTexture', this.emissiveTexture !== undefined ? this.emissiveTexture.json() : undefined)
    writeDefinedProperty(m, 'emissiveFactor', this.emissiveFactor)
    writeDefinedProperty(m, 'alphaMode', this.alphaMode !== undefined && this.alphaMode !== GLTFAlphaMode.OPAQUE ? this.alphaMode : undefined)
    writeDefinedProperty(m, 'alphaCutoff', this.alphaCutoff !== 0.5 && this.alphaCutoff !== undefined ? this.alphaCutoff : undefined)
    writeDefinedProperty(m, 'alphaCutoff', this.doubleSided !== false && this.doubleSided !== undefined ? this.doubleSided : undefined)
    writeExtensionsProperty(m, this.extensions)
    writeDefinedProperty(m, 'extras', this.extras)
    
    return m
  }
}

export default GLTFMaterial