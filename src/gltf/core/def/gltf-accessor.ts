import GLTFAttributeType from "./enum/gltf-attribute-type"
import GLTFComponentType from "./enum/gltf-component-type"

class GLTFAccessor {
  componentType: GLTFComponentType
  count: number
  type: GLTFAttributeType

  constructor(options: {
    componentType: GLTFComponentType
    count: number
    type: GLTFAttributeType
  }) {
    this.componentType = options.componentType
    this.count = options.count
    this.type = options.type
  }
}

export default GLTFAccessor