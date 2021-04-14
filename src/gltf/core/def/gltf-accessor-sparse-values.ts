import { IGLTFAccessorSparseValues } from "src/interfaces/IGLTFObj"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import GLTFPropertyBase from "./gltf-property-base"

class GLTFAccessorSparseValues extends GLTFPropertyBase {
  bufferView: number
  byteOffset?: number

  constructor() {
    super()
  }
  
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

  static readFromJson(json: IGLTFAccessorSparseValues) {
    const vals = new GLTFAccessorSparseValues()

    vals.bufferView = json.bufferView
    vals.byteOffset = json.byteOffset
    vals.extras = json.extras

    return vals
  }
}

export default GLTFAccessorSparseValues