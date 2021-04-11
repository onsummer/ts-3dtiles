import IValidate from "../../../interfaces/IValidate"
import GLTFExtensionBase from "../../ext/gltf-extension-base"

class GLTFNode implements IValidate {
  children: number[] = []
  mesh?: number
  rotation?: number[]
  translation?: number[]
  weights?: number[]
  name?: string
  skin?: number
  camera?: number
  matrix?: number[]
  scale?: number[]
  extensions: Set<GLTFExtensionBase> = new Set()

  constructor(options: {
    children?: number[]
    mesh?: number
    rotation?: number[]
    translation?: number[]
    weights?: number[]
    name?: string
    skin?: number
    camera?: number
    matrix?: number[]
    scale?: number[]
  }) {
    this.mesh = options.mesh
    this.camera = options.camera
    this.scale = options.scale
    this.skin = options.skin
    this.matrix = options.matrix
    this.translation = options.translation
    this.rotation = options.rotation
    this.name = options.name
    this.weights = options.weights
  }

  private validateTransforms() {
    let flag = true
    if (this.matrix !== undefined) {
      if (this.rotation !== undefined || this.scale !== undefined || this.translation !== undefined) {
        flag = false
      }
    }
    if (this.matrix!.length !== 16) {
      flag = false
    }
    if (this.scale!.length !== 3) {
      flag = false
    }
    if (this.translation!.length !== 3) {
      flag = false
    }

    if (this.rotation!.length !== 4) {
      flag = false
    } else {
      flag = this.rotation!.every(r => r > 1 || r < -1)
    }

    return flag
  }

  validate() {
    if (this.validateTransforms()) {
      return false
    }
    if (this.weights!.length < 1) {
      return false
    } else if (this.weights !== undefined && this.mesh === undefined) {
      return false
    }
    if (this.skin !== undefined && this.mesh === undefined) {
      return false
    }

    if (this.children!.length < 1) {
      return false
    }
    return true
  }
}

export default GLTFNode