import IValidate from "../../../typings/IValidate"
import GLTFAccessorSparseIndices from "./gltf-accessor-sparse-indices"
import GLTFAccessorSparseValues from "./gltf-accessor-sparse-values"

class GLTFAccessorSparse implements IValidate {
  count: number
  indices: GLTFAccessorSparseIndices
  values: GLTFAccessorSparseValues

  validate() {
    return this.values.validate() && this.indices.validate()
  }
}

export default GLTFAccessorSparse