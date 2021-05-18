import { IOBuffer } from "iobuffer"
import { GLTFAttributeType, GLTFComponentType } from "src/gltf/core"

class GLTFPrimitiveBuilder {
  count: number
  vao: GLTFVertexBufferObject[] = []

  constructor(vertexCount: number) {
    if (!Number.isInteger(vertexCount) || vertexCount <= 0) {
      throw new Error(`[GLTFPrimitive ctor] vertexCount: ${vertexCount} 不正确`)
    }
    this.count = vertexCount
  }

  // 规定 position、uv0、normal 必须是 f32

  setPosition(data: Float32Array) {}

  setUV0(data: Float32Array) {}

  setNormal(data: Float32Array) {
    if (data.length !== this.count) {
      return false
    }

    const normalVBO = new GLTFVertexBufferObject({
      name: "normal",
      data: data,
      elementType: GLTFAttributeType.VEC3
    })
    this.vao.push(normalVBO)
    return true
  }

  setOther(
    vertexAttributeName: string,
    data: IOBuffer,
    dataType: GLTFAttributeType,
    dataValueType: GLTFComponentType
  ) {}
}

export default GLTFPrimitiveBuilder
