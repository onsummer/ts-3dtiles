import { IGLTFMesh } from "src/interfaces/IGLTFObj"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import GLTFPropertyBase from "./gltf-property-base"
import GLTFPrimitive from "./gltf-primitive"
import { GLTFDocument } from ".."

class GLTFMesh extends GLTFPropertyBase {
  primitives: GLTFPrimitive[] = []
  weights?: number[]
  name?: string
  
  constructor() {
    super()
  }
  
  set doc(value: GLTFDocument) {
    this._doc = value
    this.primitives.forEach(p => p.doc = value)
  }

  validate() {
    let flag = false
    if (this.primitives.every(primitive => primitive.validate())) {
      flag = true
    }
    return flag
  }

  json() {
    const mesh = {
      primitives: this.primitives.map(prmt => prmt.json())
    }
    writeDefinedProperty(mesh, 'weights', this.weights)
    writeDefinedProperty(mesh, 'name', this.name)
    writeExtensionsProperty(mesh, this.extensions)

    return mesh
  }

  static fromJson(json: IGLTFMesh) {
    const mesh = new GLTFMesh()
    mesh.name = json.name
    mesh.primitives = json.primitives.map(priJson => GLTFPrimitive.fromJson(priJson))
    mesh.weights = json.weights
    mesh.extras = json.extras
    return mesh
  }
}

export default GLTFMesh