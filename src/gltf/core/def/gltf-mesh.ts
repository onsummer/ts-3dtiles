import IValidate from "../../../typings/IValidate"
import GLTFExtensionBase from "../../ext/gltf-extension-base"
import GLTFPrimitive from "./gltf-primitive"

class GLTFMesh implements IValidate {
  primitives: GLTFPrimitive[] = []
  weights?: number[]
  name?: string
  extensions: Set<GLTFExtensionBase> = new Set()

  validate() {
    let flag = false
    if (this.primitives.every(primitive => primitive.validate())) {
      flag = true
    }
    return flag
  }
}

export default GLTFMesh