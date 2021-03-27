import IValidate from "../../../typings/IValidate"
import { GLTFExtensionBase } from "../../ext"
import GLTFCameraType from "./enum/gltf-cameratype"
import GLTFOrthographicCamera from "./gltf-orthographic-camera"
import GLTFPerspectiveCamera from "./gltf-perspective-camera"

class GLTFCamera implements IValidate {
  orthographic?: GLTFOrthographicCamera
  perspective?: GLTFPerspectiveCamera
  type: GLTFCameraType
  name?: string
  extensions: Set<GLTFExtensionBase> = new Set()

  constructor(options: {
    orthographic?: GLTFOrthographicCamera
    perspective?: GLTFPerspectiveCamera
    type: GLTFCameraType
    name?: string
  }) {
    this.orthographic = options.orthographic
    this.perspective = options.perspective
    this.type = options.type
    this.name = options.name
  }

  validate() {
    if (this.orthographic !== undefined && this.perspective !== undefined) {
      return false
    }
    return true
  }
}

export default GLTFCamera