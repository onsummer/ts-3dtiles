import { ISerializable, IValidate } from "src/interfaces"
declare class GLTFPerspectiveCamera implements IValidate, ISerializable {
  yfov: number
  znear: number
  zfar?: number
  aspectRatio?: number
  validate(): boolean
  json(): {
    yfov: number
    znear: number
  }
}
export default GLTFPerspectiveCamera
