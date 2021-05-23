import { IGLTFAccessorSparse } from "src/interfaces/IGLTFObj"
import GLTFPropertyBase from "./gltf-property-base"
import GLTFAccessorSparseIndices from "./gltf-accessor-sparse-indices"
import GLTFAccessorSparseValues from "./gltf-accessor-sparse-values"
declare class GLTFAccessorSparse extends GLTFPropertyBase {
  count: number
  indices: GLTFAccessorSparseIndices
  values: GLTFAccessorSparseValues
  constructor()
  validate(): boolean
  json(): {
    count: number
    indices: {
      bufferView: number
      byteOffset: number
      componentType: import("./enum/gltf-component-type").default
    }
    values: {
      bufferView: number
    }
  }
  static readFromJson(json: IGLTFAccessorSparse): GLTFAccessorSparse
}
export default GLTFAccessorSparse
