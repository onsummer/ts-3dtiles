import IValidate from "../../../interfaces/IValidate"
import GLTFAlphaMode from "./enum/gltf-alphamode"
import GLTFPbr from "./gltf-pbr"
import GLTFOcclusionTextureInfo from "./gltf-occlusion-texture-info"
import GLTFNormalTextureInfo from "./gltf-normal-texture-info"
import GLTFTextureInfo from "./gltf-texture-info"
import GLTFExtensionBase from "../../ext/gltf-extension-base"

class GLTFMaterial implements IValidate {
  pbrMetallicRoughness?: GLTFPbr
  normalTexture?: GLTFNormalTextureInfo
  occlusionTexture?: GLTFOcclusionTextureInfo
  emissiveTexture?: GLTFTextureInfo
  emissiveFactor?: number[]
  alphaMode?: GLTFAlphaMode
  alphaCutoff?: number
  doubleSided?: boolean
  extensions: Set<GLTFExtensionBase> = new Set()

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
}

export default GLTFMaterial