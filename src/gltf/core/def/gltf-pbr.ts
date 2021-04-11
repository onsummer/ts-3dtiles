import IValidate from "../../../interfaces/IValidate";
import GLTFExtensionBase from "../../ext/gltf-extension-base";
import GLTFTextureInfo from "./gltf-texture-info";

class GLTFPbr implements IValidate {
  baseColorFactor?: number[]
  baseColorTexture?: GLTFTextureInfo
  metallicFactor?: number
  roughnessFactor?: number
  metallicRoughnessTexture?: GLTFTextureInfo
  extensions: Set<GLTFExtensionBase> = new Set()

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
}

export default GLTFPbr