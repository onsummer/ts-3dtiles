import IValidate from "../../../interfaces/IValidate"
import { GLTFExtensionBase } from "../../ext"
import GLTFAnimationChannelTarget from "./gltf-animation-channel-target"

class GLTFAnimationChannel implements IValidate {
  sampler: number
  target: GLTFAnimationChannelTarget
  extensions: Set<GLTFExtensionBase> = new Set()

  validate() {
    return this.target.validate()
  } 
}

export default GLTFAnimationChannel