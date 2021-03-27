import GLTFPrimitiveAttribute from "../core/def/gltf-primitive-attribute";
import GLTFExtensionBase from "./gltf-extension-base";

class ExtDraco extends GLTFExtensionBase {
  readonly name = "KHR_draco_mesh_compression"
  bufferView: number
  attributes: GLTFPrimitiveAttribute

  get isRequire() {
    return true
  }

  // constructor(options: IExtDracoConstructionParam) {
  //   this.bufferView = options.bufferView
  //   this.attributes = options.attributes
  // }

  validate() {
    return Number.isInteger(this.bufferView)
  }
}

export default ExtDraco