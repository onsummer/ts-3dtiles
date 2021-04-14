import { IGLTFAccessorSparseIndices } from "src/interfaces/IGLTFObj"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import GLTFPropertyBase from "./gltf-property-base"
import { GLTFComponentType } from "./enum"
import { GLTFComponentTypeValues } from "./enum/gltf-component-type"

class GLTFAccessorSparseIndices extends GLTFPropertyBase {
  bufferView: number
  byteOffset: number
  componentType: GLTFComponentType

  constructor() {
    super()
  }
  
  validate() {
    if (
      this.componentType !== GLTFComponentType.UNSIGNED_BYTE &&
      this.componentType !== GLTFComponentType.UNSIGNED_INT &&
      this.componentType !== GLTFComponentType.UNSIGNED_SHORT
    ) {
      return false
    }
    return true
  }

  json() {
    if (!this.validate()) {
      throw new Error('[GLTFAccessorSparseIndices json()] 此 accessor.sparse.indices 的属性不合法，请检查')
    }

    const i = {
      bufferView: this.bufferView,
      byteOffset: this.byteOffset,
      componentType: this.componentType,
    }

    writeExtensionsProperty(i, this.extensions)
    writeDefinedProperty(i, 'extras', this.extras)

    return i
  }

  static readFromJson(json: IGLTFAccessorSparseIndices) {
    const accSparseIndices = new GLTFAccessorSparseIndices()

    accSparseIndices.extras = json.extras
    accSparseIndices.bufferView = json.bufferView
    accSparseIndices.byteOffset = json.byteOffset
    if (GLTFComponentTypeValues.includes(json.componentType)) {
      accSparseIndices.componentType = json.componentType as GLTFComponentType
    }

    return accSparseIndices
  }
}

export default GLTFAccessorSparseIndices