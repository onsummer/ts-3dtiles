import { GLTFPrimitiveAttribute } from "../../core"
import GLTFExtensionBase from "../gltf-extension-base"

class ExtDraco extends GLTFExtensionBase {
  _name: string = "KHR_draco_mesh_compression"
  bufferView: number
  attributes: GLTFPrimitiveAttribute
  /** 若只提供了 draco 压缩的部分，则必须指明在 required 列表中 */
  required?: boolean
  /** 若 draco 压缩的和原始数据都提供了，则只需指明在 used 列表中 */
  used?: boolean

  constructor() {
    super()
  }

  validate() {
    return Number.isInteger(this.bufferView) && this.bufferView > 0
  }

  json() {
    return {
      bufferView: this.bufferView,
      attributes: this.attributes.json()
    }
  }
}

export default ExtDraco