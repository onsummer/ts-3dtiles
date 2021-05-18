import { GLTFAttributeType } from "src/gltf/core"

class GLTFVertexBufferObject {
  name: string
  data: Float32Array
  elementType: GLTFAttributeType

  constructor(options: { name: string; data: Float32Array; elementType: GLTFAttributeType }) {
    this.name = options.name
    this.data = options.data
    this.elementType = options.elementType
  }
}

export default GLTFVertexBufferObject
