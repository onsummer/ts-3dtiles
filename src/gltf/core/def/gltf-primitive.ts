import { IGLTFPrimitive } from "src/interfaces/IGLTFObj"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import GLTFPropertyBase from "./gltf-property-base"
import GLTFPrimitiveMode, { GLTFPrimitiveModeValues } from "./enum/gltf-primitivemode"
import GLTFPrimitiveAttribute from "./gltf-primitive-attribute"

class GLTFPrimitive extends GLTFPropertyBase {

  attributes: GLTFPrimitiveAttribute = new GLTFPrimitiveAttribute()
  indices?: number
  material?: number
  mode?: GLTFPrimitiveMode = GLTFPrimitiveMode.TRIANGLES

  constructor() {
    super()
  }
  
  validate() {
    if (this.attributes.validate() === false) {
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
      attribute: this.attributes.json()
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

  static readFromJson(json: IGLTFPrimitive) {
    const prmt = new GLTFPrimitive()
    prmt.indices = json.indices
    prmt.material = json.material
    if (json.mode !== undefined && json.mode !== 4) {
      if (GLTFPrimitiveModeValues.includes(json.mode)) {
        prmt.mode = json.mode as GLTFPrimitiveMode
      } else {
        throw new Error(`[GLTFPrimitive.readFromJson()] mode：${json.mode} 不合法，请检查`)
      }
    }
    prmt.attributes = GLTFPrimitiveAttribute.readFromJson(json.attributes)
    return prmt
  }
}

export default GLTFPrimitive