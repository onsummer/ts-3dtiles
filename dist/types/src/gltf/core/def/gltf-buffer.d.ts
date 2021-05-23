import { IGLTFBuffer } from "src/interfaces/IGLTFObj"
import GLTFPropertyBase from "./gltf-property-base"
declare class GLTFBuffer extends GLTFPropertyBase {
  byteLength: number
  uri?: string
  bufferData?: ArrayBuffer
  constructor()
  /** @deprecated */
  get url(): string | undefined
  validate(): boolean
  json(): {
    byteLength: number
  }
  static fromJson(json: IGLTFBuffer): GLTFBuffer
}
export default GLTFBuffer
