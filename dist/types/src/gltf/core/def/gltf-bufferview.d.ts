import { IGLTFBufferView } from "src/interfaces/IGLTFObj"
import GLTFPropertyBase from "./gltf-property-base"
import GLTFBufferViewTarget from "./enum/gltf-bufferview-target"
declare class GLTFBufferView extends GLTFPropertyBase {
  buffer: number
  byteLength: number
  byteOffset?: number
  byteStride?: number
  target?: GLTFBufferViewTarget
  constructor()
  validate(): boolean
  json(): {
    buffer: number
    byteLength: number
  }
  static fromJson(json: IGLTFBufferView): GLTFBufferView
}
export default GLTFBufferView
