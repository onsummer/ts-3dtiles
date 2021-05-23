import { GLTFAttributeType, GLTFComponentType, GLTFVertexAttributeType } from "src/gltf/core"
declare class GLTFVertexBuffer {
  type: GLTFVertexAttributeType
  buffer: ArrayBuffer
  numberType: GLTFComponentType
  elementType: GLTFAttributeType
  /**
   * 计算顶点数量
   */
  get count(): number
}
export default GLTFVertexBuffer
