import { IGLTFScene } from "src/interfaces/IGLTFObj"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import GLTFPropertyBase from "./gltf-property-base"

class GLTFScene extends GLTFPropertyBase {
  nodes: number[] = []
  name?: string

  constructor() {
    super()
  }
  
  validate() {
    return this.nodes.length > 1
  }

  json() {
    const s = {
      nodes: this.nodes
    }
    writeDefinedProperty(s, 'name', this.name)
    writeExtensionsProperty(s, this.extensions)
    return s
  }

  static fromJson(json: IGLTFScene) {
    const scene = new GLTFScene()
    scene.name = json.name
    scene.nodes = json.nodes
    scene.extras = json.extras
    return scene
  }
}

export default GLTFScene