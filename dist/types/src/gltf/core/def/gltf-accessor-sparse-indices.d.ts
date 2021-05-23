import { IGLTFAccessorSparseIndices } from "src/interfaces/IGLTFObj"
import GLTFPropertyBase from "./gltf-property-base"
import { GLTFComponentType } from "./enum"
declare class GLTFAccessorSparseIndices extends GLTFPropertyBase {
  bufferView: number
  byteOffset: number
  componentType: GLTFComponentType
  constructor()
  validate(): boolean
  json(): {
    bufferView: number
    byteOffset: number
    componentType: GLTFComponentType
  }
  static readFromJson(json: IGLTFAccessorSparseIndices): GLTFAccessorSparseIndices
}
export default GLTFAccessorSparseIndices
