import ISerializable from "src/interfaces/ISerializable"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import IValidate from "../../../interfaces/IValidate"
import GLTFExtensionBase from "../../ext/gltf-extension-base"

class GLTFScene implements IValidate, ISerializable {
  nodes: number[] = []
  name?: string
  extensions: Set<GLTFExtensionBase> = new Set()
  
  validate() {
    return (this.nodes.length < 1)
  }

  json() {
    const s = {
      nodes: this.nodes
    }
    writeDefinedProperty(s, 'name', this.name)
    writeExtensionsProperty(s, this.extensions)
    return s
  }
}

export default GLTFScene