import { GLTFAttributeType, GLTFComponentType, GLTFVertexAttributeType } from "src/gltf/core";
import { getAttributeTypeElementCount } from "src/gltf/core/def/enum/gltf-attribute-type";
import { getComponentTypeByteSize } from "src/gltf/core/def/enum/gltf-component-type";

class GLTFVertexBuffer {
  type: GLTFVertexAttributeType = GLTFVertexAttributeType.POSITION
  buffer: ArrayBuffer
  numberType: GLTFComponentType = GLTFComponentType.FLOAT
  elementType: GLTFAttributeType = GLTFAttributeType.VEC3

  /**
   * 计算顶点数量
   */
  get count() {
    const cmpSize = getComponentTypeByteSize(this.numberType)
    const numSize = getAttributeTypeElementCount(this.elementType)
    if (this.buffer.byteLength % cmpSize * numSize !== 0) {
      throw new Error('[GLTFVertexBuffer count] 数据与类型不匹配，请检查')
    }
    return this.buffer.byteLength / (cmpSize * numSize)
  }
}

export default GLTFVertexBuffer