import { IGLTFMaterial } from "src/interfaces/IGLTFObj"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import GLTFPropertyBase from "./gltf-property-base"
import { GLTFAlphaMode } from "./enum"
import { GLTFAlphaModeValues } from "./enum/gltf-alphamode"
import GLTFNormalTextureInfo from "./gltf-normal-texture-info"
import GLTFOcclusionTextureInfo from "./gltf-occlusion-texture-info"
import GLTFPbr from "./gltf-pbr"
import GLTFTextureInfo from "./gltf-texture-info"

class GLTFMaterial extends GLTFPropertyBase {
  name?: string
  pbrMetallicRoughness?: GLTFPbr
  normalTexture?: GLTFNormalTextureInfo
  occlusionTexture?: GLTFOcclusionTextureInfo
  emissiveTexture?: GLTFTextureInfo
  emissiveFactor?: [number, number, number] = [0, 0, 0]
  alphaMode?: GLTFAlphaMode = GLTFAlphaMode.OPAQUE
  alphaCutoff?: number = 0.5
  doubleSided?: boolean = false

  constructor() {
    super()
  }
  
  validate() {
    if (this.pbrMetallicRoughness?.validate() === false) {
      return false
    }
    if (this.normalTexture?.validate() === false) {
      return false
    }
    if (this.occlusionTexture?.validate() === false) {
      return false
    }
    if (this.alphaMode === GLTFAlphaMode.MASK && this.alphaCutoff === undefined) {
      return false
    }
    if (this.emissiveFactor?.every(v => v < 0 || v > 1)) {
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

  static readFromJson(json: IGLTFMaterial) {
    const mtl = new GLTFMaterial()
    mtl.name = json.name
    if (json.pbrMetallicRoughness !== undefined) {
      mtl.pbrMetallicRoughness = GLTFPbr.readFromJson(json.pbrMetallicRoughness)
    }
    if (json.normalTexture !== undefined) {
      mtl.normalTexture = GLTFNormalTextureInfo.readFromJson(json.normalTexture)
    }
    if (json.emissiveTexture !== undefined) {
      mtl.emissiveTexture = GLTFTextureInfo.readFromJson(json.emissiveTexture)
    }
    if (json.alphaMode !== undefined && GLTFAlphaModeValues.includes(json.alphaMode)) {
      mtl.alphaMode = json.alphaMode as GLTFAlphaMode
    }
    mtl.doubleSided = json.doubleSided
    mtl.emissiveFactor = json.emissiveFactor
    mtl.alphaCutoff = json.alphaCutoff
    mtl.extras = json.extras
    return mtl
  }
}

export default GLTFMaterial