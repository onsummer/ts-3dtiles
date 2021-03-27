import GLTFAlphaMode from "./enum/gltf-alphamode"
import GLTFPbr from "./gltf-pbr"
import GLTFTextureInfo from "./gltf-texture-info"

class GLTFMaterial {
  pbrMetallicRoughness?: GLTFPbr
  normalTexture?: GLTFTextureInfo
  occlusionTexture?: GLTFTextureInfo
  emissiveTexture?: GLTFTextureInfo
  emissiveFactor?: number[]
  alphaMode?: GLTFAlphaMode
  alphaCutoff?: number
  doubleSided?: boolean
} 

export default GLTFMaterial