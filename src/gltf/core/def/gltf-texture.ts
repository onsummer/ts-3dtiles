import IValidate from "../../../interfaces/IValidate"
import GLTFExtensionBase from "../../ext/gltf-extension-base"

class GLTFTexture implements IValidate {
  sampler?: number
  source?: number
  name?: string
  extensions: Set<GLTFExtensionBase> = new Set()

  validate = () => true
}

export default GLTFTexture