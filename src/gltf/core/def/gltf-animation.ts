import IValidate from "../../../typings/IValidate"
import { GLTFExtensionBase } from "../../ext"
import GLTFAnimationChannel from "./gltf-animation-channel"
import GLTFAnimationSampler from "./gltf-animation-sampler"

class GLTFAnimation implements IValidate {
  channels: GLTFAnimationChannel[]
  samplers: GLTFAnimationSampler[]
  name?: string
  extensions: Set<GLTFExtensionBase> = new Set() 

  validate() {
    if (this.channels!.length < 1 || this.samplers!.length < 1) {
      return false
    }
    return true
  }
}

export default GLTFAnimation