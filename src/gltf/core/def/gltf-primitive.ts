import IValidate from "../../../typings/IValidate"
import GLTFExtensionBase from "../../ext/gltf-extension-base"
import GLTFPrimitiveMode from "./enum/gltf-primitivemode"
import GLTFPrimitiveAttribute from "./gltf-primitive-attribute"

class GLTFPrimitive implements IValidate {
  attribute: GLTFPrimitiveAttribute
  indices?: number
  material?: number
  mode?: GLTFPrimitiveMode
  extensions: Set<GLTFExtensionBase> = new Set()
  
  constructor(options: {
    attribute: {
      position: number,
      [propName: string]: any
    },
    indices?: number,
    material?: number,
    mode?: GLTFPrimitiveMode
  }) {
    this.attribute = new GLTFPrimitiveAttribute({
      position: options.attribute.position,
      st1: options.attribute['st1'],
      normal: options.attribute['normal']
    })
    this.indices = options.indices
    this.material = options.material
    if (options.mode! !== GLTFPrimitiveMode.TRIANGLES) {
      this.mode = options.mode
    }
  }

  validate() {
    if (this.attribute.validate() === false) {
      return false
    }
    if (this.indices! < 0) {
      return false
    }
    if (this.material! < 0) {
      return false
    }
    return true
  }
}

export default GLTFPrimitive