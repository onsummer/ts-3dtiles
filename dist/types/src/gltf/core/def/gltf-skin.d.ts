import { IGLTFSkin } from "src/interfaces/IGLTFObj"
import GLTFPropertyBase from "./gltf-property-base"
declare class GLTFSkin extends GLTFPropertyBase {
  inverseBindMatrices?: number
  skeleton?: number
  name?: string
  joints: number[]
  constructor()
  validate(): boolean
  json(): {}
  static fromJson(json: IGLTFSkin): GLTFSkin
}
export default GLTFSkin
