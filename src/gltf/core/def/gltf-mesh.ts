import ISerializable from "src/interfaces/ISerializable"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import IValidate from "../../../interfaces/IValidate"
import GLTFExtensionBase from "../../ext/gltf-extension-base"
import GLTFPrimitive from "./gltf-primitive"

class GLTFMesh implements IValidate, ISerializable {
  primitives: GLTFPrimitive[] = []
  weights?: number[]
  name?: string
  extensions?: Set<GLTFExtensionBase> = new Set()
  extras?: any
  
  validate() {
    let flag = false
    if (this.primitives.every(primitive => primitive.validate())) {
      flag = true
    }
    return flag
  }

  json() {
    const mesh = {
      primitives: this.primitives.map(prmt => prmt.json())
    }
    writeDefinedProperty(mesh, 'weights', this.weights)
    writeDefinedProperty(mesh, 'name', this.name)
    writeExtensionsProperty(mesh, this.extensions)

    return mesh
  }
}

export default GLTFMesh