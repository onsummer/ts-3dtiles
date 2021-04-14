import { IGLTFMesh } from "src/interfaces/IGLTFObj"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import GLTFPropertyBase from "./gltf-property-base"
import GLTFPrimitive from "./gltf-primitive"

class GLTFMesh extends GLTFPropertyBase {
  primitives: GLTFPrimitive[] = []
  weights?: number[]
  name?: string
  
  constructor() {
    super()
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

  static readFromJson(json: IGLTFMesh) {
    const mesh = new GLTFMesh()
    mesh.name = json.name
    mesh.primitives = json.primitives.map(priJson => GLTFPrimitive.readFromJson(priJson))
    mesh.weights = json.weights
    mesh.extras = json.extras
    return mesh
  }
}

export default GLTFMesh