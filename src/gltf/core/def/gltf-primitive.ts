import ISerializable from "src/interfaces/ISerializable"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import IValidate from "../../../interfaces/IValidate"
import GLTFExtensionBase from "../../ext/gltf-extension-base"
import GLTFPrimitiveMode from "./enum/gltf-primitivemode"
import GLTFPrimitiveAttribute from "./gltf-primitive-attribute"

class GLTFPrimitive implements IValidate, ISerializable {
  attribute: GLTFPrimitiveAttribute = new GLTFPrimitiveAttribute()
  indices?: number
  material?: number
  mode?: GLTFPrimitiveMode = GLTFPrimitiveMode.TRIANGLES
  extensions?: Set<GLTFExtensionBase> = new Set()
  extras?: any

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

  json() {
    const prmt = {
      attribute: this.attribute.json()
    }
    if (this.mode !== GLTFPrimitiveMode.TRIANGLES && this.mode !== undefined) {
      writeDefinedProperty(prmt, 'mode', this.mode)
    }
    writeDefinedProperty(prmt, 'indices', this.indices)
    writeDefinedProperty(prmt, 'material', this.material)
    writeExtensionsProperty(prmt, this.extensions)
    writeDefinedProperty(prmt, 'extras', this.extras)

    return prmt
  }
}

export default GLTFPrimitive