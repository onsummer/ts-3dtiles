import ISerializable from "src/interfaces/ISerializable"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import IValidate from "../../../interfaces/IValidate"
import { GLTFExtensionBase } from "../../ext"
import GLTFCameraType from "./enum/gltf-cameratype"
import GLTFOrthographicCamera from "./gltf-orthographic-camera"
import GLTFPerspectiveCamera from "./gltf-perspective-camera"

class GLTFCamera implements IValidate, ISerializable {
  orthographic?: GLTFOrthographicCamera
  perspective?: GLTFPerspectiveCamera
  type: GLTFCameraType
  name?: string
  extensions?: Set<GLTFExtensionBase> = new Set()
  extras?: any

  validate() {
    if (this.orthographic !== undefined && this.perspective !== undefined) {
      return false
    }
    return true
  }

  json() {
    if (!this.validate()) {
      throw new Error('[GLTFCamera json()] 当前 camera 对象属性不合法，请检查')
    }

    const camera = {
      type: this.type
    }

    writeDefinedProperty(camera, 'name', this.name)
    writeDefinedProperty(camera, 'perspective', this.perspective ? this.perspective.json() : undefined)
    writeDefinedProperty(camera, 'orthographic', this.orthographic ? this.orthographic.json() : undefined)
    writeExtensionsProperty(camera, this.extensions)
    writeDefinedProperty(camera, 'extras', this.extras)

    return camera
  }
}

export default GLTFCamera