import { GLTFExtensionBase } from "src/gltf/ext"
import { ISerializable, IValidate } from "src/interfaces"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import { GLTFAttributeType, GLTFComponentType } from "./enum"
import GLTFAccessorSparse from "./gltf-accessor-sparse"


class GLTFAccessor implements IValidate, ISerializable {
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

  extensions?: Set<GLTFExtensionBase> = new Set()
  extras?: any

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
}

export default GLTFAccessor