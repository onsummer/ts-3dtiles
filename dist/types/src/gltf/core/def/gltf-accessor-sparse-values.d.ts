import { IGLTFAccessorSparseValues } from "src/interfaces/IGLTFObj"
import GLTFPropertyBase from "./gltf-property-base"
declare class GLTFAccessorSparseValues extends GLTFPropertyBase {
  bufferView: number
  byteOffset?: number
  constructor()
  validate(): boolean
  json(): {
    bufferView: number
  }
  static readFromJson(json: IGLTFAccessorSparseValues): GLTFAccessorSparseValues
}
export default GLTFAccessorSparseValues
