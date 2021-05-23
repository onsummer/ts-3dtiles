import { IGLTFPrimitiveAttribute } from "src/interfaces/IGLTFObj"
import ISerializable from "src/interfaces/ISerializable"
import IValidate from "../../../interfaces/IValidate"
declare class GLTFPrimitiveAttribute implements IValidate, ISerializable {
  position: number
  uv0?: number
  uv1?: number
  color0?: number
  normal?: number
  tangent?: number
  joints0?: number
  weights0?: number
  /** 3rd */
  _batchid?: number
  static fromJson(json: IGLTFPrimitiveAttribute): GLTFPrimitiveAttribute
  validate(): boolean
  json(): {
    POSITION: number
  }
}
export default GLTFPrimitiveAttribute
