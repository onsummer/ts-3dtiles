import IValidate from "../../../interfaces/IValidate"
import GLTFExtensionBase from "../../ext/gltf-extension-base"
import GLTFAttributeType from "./enum/gltf-attribute-type"
import GLTFComponentType from "./enum/gltf-component-type"

class GLTFAccessor implements IValidate {
  componentType: GLTFComponentType
  count: number
  type: GLTFAttributeType
  max?: number[]
  min?: number[]
  sparse?: any
  name?: string
  normalized?: boolean
  bufferView?: number
  byteOffset?: number

  extensions: Set<GLTFExtensionBase> = new Set()

  constructor(options: {
    componentType: GLTFComponentType
    count: number
    type: GLTFAttributeType
  }) {
    this.componentType = options.componentType
    this.count = options.count
    this.type = options.type
  }

  validate() {
    /** byteOffset 和 bufferView 必须同时存在 */
    if (this.byteOffset !== undefined && this.bufferView !== undefined) {
      return true
    }
    return false
  }
}

export default GLTFAccessor