import { IGLTFSampler } from "src/interfaces/IGLTFObj"
import GLTFPropertyBase from "./gltf-property-base"
import GLTFFilter from "./enum/gltf-filter"
import GLTFWrapMode from "./enum/gltf-wrapmode"
declare class GLTFSampler extends GLTFPropertyBase {
  magFilter?: GLTFFilter
  minFilter?: GLTFFilter
  wrapS?: GLTFWrapMode
  wrapT?: GLTFWrapMode
  name?: string
  constructor()
  validate(): boolean
  json(): {}
  static fromJson(json: IGLTFSampler): GLTFSampler
}
export default GLTFSampler
