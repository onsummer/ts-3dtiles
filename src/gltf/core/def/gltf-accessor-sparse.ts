import { IGLTFAccessorSparse } from "src/interfaces/IGLTFObj"
import GLTFPropertyBase from "./gltf-property-base"
import GLTFAccessorSparseIndices from "./gltf-accessor-sparse-indices"
import GLTFAccessorSparseValues from "./gltf-accessor-sparse-values"

class GLTFAccessorSparse extends GLTFPropertyBase {
  count: number
  indices: GLTFAccessorSparseIndices
  values: GLTFAccessorSparseValues

  constructor() {
    super()
  }
  
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

  static readFromJson(json: IGLTFAccessorSparse) {
    const sparse = new GLTFAccessorSparse()
    sparse.indices = GLTFAccessorSparseIndices.readFromJson(json.indices)
    sparse.values = GLTFAccessorSparseValues.readFromJson(json.values)
    sparse.extras = json.extras

    return sparse
  }
}

export default GLTFAccessorSparse