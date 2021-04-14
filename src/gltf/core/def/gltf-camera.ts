import { IGLTFCamera } from "src/interfaces/IGLTFObj"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import GLTFPropertyBase from "./gltf-property-base"
import GLTFCameraType, { GLTFCameraTypeValues } from "./enum/gltf-cameratype"
import GLTFOrthographicCamera from "./gltf-orthographic-camera"
import GLTFPerspectiveCamera from "./gltf-perspective-camera"

class GLTFCamera extends GLTFPropertyBase {
  orthographic?: GLTFOrthographicCamera
  perspective?: GLTFPerspectiveCamera
  type: GLTFCameraType
  name?: string

  constructor() {
    super()
  }
  
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

  static readFromJson(json: IGLTFCamera) {
    const camera = new GLTFCamera()
    camera.name = json.name
    if (GLTFCameraTypeValues.includes(json.type)) {
      camera.type = json.type as GLTFCameraType
    }
    let hasCamera = false
    if (json.perspective !== undefined) {
      camera.perspective = new GLTFPerspectiveCamera()
      camera.perspective.yfov = json.perspective.yfov
      camera.perspective.znear = json.perspective.znear
      camera.perspective.aspectRatio = json.perspective.aspectRatio
      camera.perspective.zfar = json.perspective.zfar
      hasCamera = true
    }
    if (json.orthographic !== undefined) {
      if (hasCamera) {
        throw new Error('[GLTFCamera.readFromJson()] 已经有一个 perspective 相机了')
      }
      camera.orthographic = new GLTFOrthographicCamera()
      camera.orthographic.xmag = json.orthographic.xmag
      camera.orthographic.ymag = json.orthographic.ymag
      camera.orthographic.zfar = json.orthographic.zfar
      camera.orthographic.znear = json.orthographic.znear
    }
    camera.extras = json.extras

    return camera
  }
}

export default GLTFCamera