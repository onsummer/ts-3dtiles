import { GLTFExtensionBase } from "src/gltf/ext"
import { ISerializable, IValidate } from "src/interfaces"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import { GLTFComponentType } from "./enum"

class GLTFAccessorSparseIndices implements IValidate, ISerializable {
  bufferView: number
  byteOffset: number
  componentType: GLTFComponentType
  extensions?: Set<GLTFExtensionBase> = new Set()
  extras?: any

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
}

export default GLTFAccessorSparseIndices