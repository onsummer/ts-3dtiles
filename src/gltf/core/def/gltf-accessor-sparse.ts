import { ISerializable, IValidate } from "src/interfaces"
import GLTFAccessorSparseIndices from "./gltf-accessor-sparse-indices"
import GLTFAccessorSparseValues from "./gltf-accessor-sparse-values"


class GLTFAccessorSparse implements IValidate, ISerializable {
  count: number
  indices: GLTFAccessorSparseIndices
  values: GLTFAccessorSparseValues

  validate() {
    return this.count > 0 && this.values.validate() && this.indices.validate()
  }

  json() {
    if (!this.validate()) {
      throw new Error('[GLTFAccessorSparse json()] 此 sparse 对象属性不合法，请检查属性')
    }

    const spr = {
      count: this.count,
      indices: this.indices.json(),
      values: this.values.json()
    }

    return spr
  }
}

export default GLTFAccessorSparse