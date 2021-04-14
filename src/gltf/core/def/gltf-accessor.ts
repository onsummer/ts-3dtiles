import { IGLTFAccessor } from "src/interfaces/IGLTFObj"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import GLTFPropertyBase from "./gltf-property-base"
import { GLTFAttributeType, GLTFComponentType } from "./enum"
import { GLTFAttributeTypeValues } from "./enum/gltf-attribute-type"
import { GLTFComponentTypeValues } from "./enum/gltf-component-type"
import GLTFAccessorSparse from "./gltf-accessor-sparse"

class GLTFAccessor extends GLTFPropertyBase {
  componentType: GLTFComponentType
  count: number
  type: GLTFAttributeType
  max?: number[]
  min?: number[]
  sparse?: GLTFAccessorSparse
  name?: string
  normalized?: boolean
  bufferView?: number
  byteOffset?: number

  constructor() {
    super()
  }
  
  validate() {
    /** byteOffset 和 bufferView 必须同时存在 */
    if (this.byteOffset !== undefined && this.bufferView !== undefined) {
      return true
    }
    return false
  }

  json() {
    if (!this.validate()) {
      throw new Error('[GLTFAccessor json()] 当前 accessor 属性不合法，请检查')
    }

    const acc = {
      componentType: this.componentType,
      type: this.type,
      count: this.count,
    }

    writeDefinedProperty(acc, 'max', this.max)
    writeDefinedProperty(acc, 'min', this.min)
    writeDefinedProperty(acc, 'name', this.name)
    writeDefinedProperty(acc, 'normalized', this.normalized)
    writeDefinedProperty(acc, 'sparse', this.sparse !== undefined ? this.sparse.json() : undefined)
    writeDefinedProperty(acc, 'bufferView', this.bufferView)
    writeDefinedProperty(acc, 'byteOffset', this.byteOffset)
    writeExtensionsProperty(acc, this.extensions)
    writeDefinedProperty(acc, 'extras', this.extras)
    
    return acc
  }

  static readFromJson(json: IGLTFAccessor) {
    const acc = new GLTFAccessor()
    if (GLTFComponentTypeValues.includes(json.componentType)) {
      acc.componentType = json.componentType as GLTFComponentType
    } else {
      throw new Error('[GLTFAccessor.readFromJson()] 属性 componentType 非法')
    }
    acc.count = json.count
    if (GLTFAttributeTypeValues.includes(json.type)) {
      acc.type = json['type'] as GLTFAttributeType
    } else {
      throw new Error('[readGLTF() readAccessors()] 属性 type 非法')
    }
    acc.max = json.max
    acc.min = json.min
    if (json.sparse !== undefined) {
      acc.sparse = GLTFAccessorSparse.readFromJson(json.sparse)
    }
    acc.normalized = json.normalized
    acc.bufferView = json.bufferView
    acc.byteOffset = json.byteOffset
    acc.name = json.name
    acc.extras = json.extras
    return acc
  }
}

export default GLTFAccessor