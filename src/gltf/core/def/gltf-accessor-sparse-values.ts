import { GLTFExtensionBase } from "src/gltf/ext"
import { ISerializable, IValidate } from "src/interfaces"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"

class GLTFAccessorSparseValues implements IValidate, ISerializable {
  bufferView: number
  byteOffset?: number
  extensions?: Set<GLTFExtensionBase> = new Set()
  extras?: any

  validate() {
    return !(this.byteOffset! < 0)
  }

  json() {
    if (!this.validate()) {
      throw new Error('[GLTFAccessorSparseValues json()] 此 accessor.sparse.values 的属性不合法，请检查')
    }

    const v = {
      bufferView: this.bufferView
    }

    writeDefinedProperty(v, 'byteOffset', this.byteOffset)
    writeExtensionsProperty(v, this.extensions)
    writeDefinedProperty(v, 'extras', this.extras)

    return v
  }
}

export default GLTFAccessorSparseValues