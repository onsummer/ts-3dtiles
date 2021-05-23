import { GLTFTextureInfo } from "../../core"
import GLTFExtensionBase from "../gltf-extension-base"
declare class ExtPbrSpecularGlossiness extends GLTFExtensionBase {
  _name: string
  diffuseFactor?: number[]
  specularFactor?: number[]
  glossinessFactor?: number
  diffuseTexture?: GLTFTextureInfo
  specularGlossinessTexture?: GLTFTextureInfo
  required?: boolean
  used?: boolean
  validate(): boolean
  json(): {}
}
export default ExtPbrSpecularGlossiness
