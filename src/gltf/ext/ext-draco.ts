import { GLTFPrimitiveAttribute } from "../core"
import GLTFExtensionBase from "./gltf-extension-base"


class ExtDraco extends GLTFExtensionBase {
  _name: string = "KHR_draco_mesh_compression"
  bufferView: number
  attributes: GLTFPrimitiveAttribute

  get isRequire() {
    return true
  }

  constructor(options: {
    bufferView: number,
    attributes: GLTFPrimitiveAttribute
  }) {
    super()
    this.bufferView = options.bufferView
    this.attributes = options.attributes
  }

  validate() {
    return Number.isInteger(this.bufferView)
  }

  /**
   * @todo
   */
  json() {
    return {
      name: this._name,
      bufferView: this.bufferView,
      attributes: this.attributes.json()
    }
  }
}

export default ExtDraco