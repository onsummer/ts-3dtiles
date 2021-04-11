import IValidate from "../../../interfaces/IValidate";
import { GLTFExtensionBase } from "../../ext";

class GLTFSkin implements IValidate {
  inverseBindMatrices?: number
  skeleton?: number
  name?: string
  joints: number[]
  extensions?: Set<GLTFExtensionBase> = new Set()
  extras?: Object

  validate() {
    return !(this.joints.length < 1)
  }
}

export default GLTFSkin