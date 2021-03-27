import IValidate from "../../../typings/IValidate"
import GLTFExtensionBase from "../../ext/gltf-extension-base"

class GLTFScene implements IValidate {
  nodes: number[] = []
  name?: string
  extensions: Set<GLTFExtensionBase> = new Set()
  
  validate() {
    return (this.nodes.length < 1)
  }
}

export default GLTFScene