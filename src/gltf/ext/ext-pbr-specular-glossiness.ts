import { GLTFTextureInfo } from "../core"
import GLTFExtensionBase from "./gltf-extension-base"

class ExtPbrSpecularGlossiness extends GLTFExtensionBase {
  _name: string = "KHR_materials_pbrSpecularGlossiness"

  diffuseFactor?: number[]
  specularFactor?: number[]
  glossinessFactor?: number
  diffuseTexture?: GLTFTextureInfo
  specularGlossinessTexture?: GLTFTextureInfo

  get isRequire() {
    return true
  }

  /**
   * @todo
   */
  validate() {
    return true
  }

  /**
   * 
   * @todo
   */
  json() {
    return {}
  }
}

export default ExtPbrSpecularGlossiness