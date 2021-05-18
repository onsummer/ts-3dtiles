import { IOBuffer } from "iobuffer"
import {
  GLTFAttributeType,
  GLTFComponentType,
  GLTFDocument,
  GLTFMesh,
  GLTFNode
} from "src/gltf/core"
import GLTFVertexBufferObject from "./gltf-vertex-buffer-object"

class GLTFPrimitiveBuilder {
  count: number
  vao: GLTFVertexBufferObject[] = []
  _mesh?: GLTFMesh

  constructor(vertexCount: number) {
    if (!Number.isInteger(vertexCount) || vertexCount <= 0) {
      throw new Error(`[GLTFPrimitive ctor] vertexCount: ${vertexCount} 不正确`)
    }
    this.count = vertexCount
  }

  // 规定 position、uv0、normal 必须是 f32

  setPosition(data: Float32Array) {
    if (data.length !== this.count) {
      return false
    }

    const positionVBO = new GLTFVertexBufferObject({
      name: "uv0",
      data: data,
      elementType: GLTFAttributeType.VEC3
    })
    this.vao.push(positionVBO)
    return true
  }

  setUV0(data: Float32Array) {
    if (data.length !== this.count) {
      return false
    }

    const uvVBO = new GLTFVertexBufferObject({
      name: "uv0",
      data: data,
      elementType: GLTFAttributeType.VEC2
    })
    this.vao.push(uvVBO)
    return true
  }

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
  ) {
    const vbo = new GLTFVertexBufferObject({
      name: vertexAttributeName,
      data: data,
      dataType: dataType
    })
    this.vao.push(vbo)
  }

  set mesh(value: GLTFMesh) {
    this._mesh = value
  }

  submit(doc: GLTFDocument) {
    let meshDef: GLTFMesh
    let nodeDef: GLTFNode
    if (this._mesh === undefined) {
      meshDef = GLTFMesh.fromJson({
        primitives: []
      })
      doc.meshes.push(meshDef)
      nodeDef = GLTFNode.fromJson({
        children: [],
        mesh: doc.meshes.length - 1
      })
      doc.nodes.push(nodeDef)
    } else {
      meshDef = this._mesh
      // nodeDef = doc.nodes.find(node => /* 找到对应mesh的node */)
    }

    // 创建 accessor 和 bufferView，同时推入 data 到 buffer[0]
    this.vao.map((vbo) => {})

    /* material 阶段 todo */
  }
}

export default GLTFPrimitiveBuilder
