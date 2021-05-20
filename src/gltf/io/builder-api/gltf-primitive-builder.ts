import {
  GLTFAccessor,
  GLTFAttributeType,
  GLTFBufferView,
  GLTFComponentType,
  GLTFDocument,
  GLTFMaterial,
  GLTFMesh,
  GLTFNode,
  GLTFPrimitive,
} from "src/gltf/core";
import { getAttributeTypeElementCount } from "src/gltf/core/def/enum/gltf-attribute-type";
import { getComponentTypeByteSize } from "src/gltf/core/def/enum/gltf-component-type";
import GLTFVertexBufferObject from "./gltf-vertex-buffer-object";

function contact(b1: ArrayBuffer, b2: ArrayBuffer) {
  if (Buffer) {
    const mergedBuffer = Buffer.concat([
      new Uint8Array(b1),
      new Uint8Array(b2),
    ]);
    return mergedBuffer.buffer;
  } else {
    const totalLength = b1.byteLength + b2.byteLength;
    const mergedBuffer = new Uint8Array(totalLength);
    mergedBuffer.set(new Uint8Array(b1), 0);
    const offset = mergedBuffer.byteLength;
    mergedBuffer.set(new Uint8Array(b2), offset);
    return mergedBuffer.buffer;
  }
}

function setAttribute(
  prmt: GLTFPrimitive,
  name: string,
  accessorIndex: number
) {
  const attrs = prmt.attributes;
  switch (name) {
    case "position":
      attrs.position = accessorIndex;
      break;
    case "uv0":
      attrs.uv0 = accessorIndex;
      break;
    case "uv1":
      attrs.uv1 = accessorIndex;
      break;
    case "normal":
      attrs.normal = accessorIndex;
      break;
    case "_batchid":
      attrs._batchid = accessorIndex;
      break;
    case "tangent":
      attrs.tangent = accessorIndex;
      break;
    case "color0":
      attrs.color0 = accessorIndex;
      break;
    case "weights0":
      attrs.weights0 = accessorIndex;
      break;
    case "joints0":
      attrs.joints0 = accessorIndex;
      break;
    default:
      break;
  }
}

class GLTFPrimitiveBuilder {
  count: number;
  vao: GLTFVertexBufferObject[] = [];
  _mesh?: GLTFMesh;
  _material?: GLTFMaterial;

  constructor(vertexCount: number) {
    if (!Number.isInteger(vertexCount) || vertexCount <= 0) {
      throw new Error(
        `[GLTFPrimitive ctor] vertexCount: ${vertexCount} 不正确`
      );
    }
    this.count = vertexCount;
  }

  // 规定 position、uv0、normal 必须是 f32

  setPosition(data: Float32Array) {
    if (data.length !== this.count) {
      return false;
    }

    const positionVBO = new GLTFVertexBufferObject({
      name: "uv0",
      data: data.buffer,
      elementType: GLTFAttributeType.VEC3,
      valueType: GLTFComponentType.FLOAT,
    });
    this.vao.push(positionVBO);
    return true;
  }

  setUV0(data: Float32Array) {
    if (data.length !== this.count) {
      return false;
    }

    const uvVBO = new GLTFVertexBufferObject({
      name: "uv0",
      data: data.buffer,
      elementType: GLTFAttributeType.VEC2,
      valueType: GLTFComponentType.FLOAT,
    });
    this.vao.push(uvVBO);
    return true;
  }

  setNormal(data: Float32Array) {
    if (data.length !== this.count) {
      return false;
    }

    const normalVBO = new GLTFVertexBufferObject({
      name: "normal",
      data: data.buffer,
      elementType: GLTFAttributeType.VEC3,
      valueType: GLTFComponentType.FLOAT,
    });
    this.vao.push(normalVBO);
    return true;
  }

  setOther(
    vertexAttributeName: string,
    data: ArrayBuffer,
    dataType: GLTFAttributeType,
    dataValueType: GLTFComponentType
  ) {
    const vbo = new GLTFVertexBufferObject({
      name: vertexAttributeName,
      data: data,
      elementType: dataType,
      valueType: dataValueType,
    });
    this.vao.push(vbo);
  }

  set mesh(value: GLTFMesh) {
    this._mesh = value;
  }

  set material(value: GLTFMaterial) {
    this._material = value;
  }

  submit(doc: GLTFDocument) {
    let meshDef: GLTFMesh;
    let nodeDef: GLTFNode | undefined;

    const prmt = GLTFPrimitive.fromJson({
      attributes: {
        POSITION: -1,
      },
      mode: 4,
    });

    // 若没定义 mesh
    if (this._mesh === undefined) {
      // 创建新的 mesh 和 node 并顺次推入 doc 中
      meshDef = GLTFMesh.fromJson({
        primitives: [],
      });
      doc.meshes.push(meshDef);
      nodeDef = GLTFNode.fromJson({
        children: [],
        mesh: doc.meshes.length - 1,
      });
      doc.nodes.push(nodeDef);
    } else {
      meshDef = this._mesh;
      // 步骤1 计算 mesh 的索引号
      let meshIdx = -1;
      if (meshDef.doc !== undefined) {
        let tempId = meshDef.doc.meshes.indexOf(meshDef);
        if (tempId !== -1) {
          meshIdx = tempId;
        } else {
          meshIdx = meshDef.doc.meshes.push(meshDef) - 1;
        }
      } else {
        meshIdx = doc.meshes.push(meshDef) - 1;
      }
      // 步骤2 遍历所有 node，查找对应的 node，若无，创建新的 node
      doc.nodes.forEach((node) => {
        if (node.mesh !== undefined && node.mesh === meshIdx) {
          nodeDef = node;
        }
      });
      if (nodeDef === undefined) {
        nodeDef = GLTFNode.fromJson({
          children: [],
          mesh: meshIdx,
        });
        doc.nodes.push(nodeDef);
      }
    }

    meshDef.primitives.push(prmt);

    // 创建 accessor 和 bufferView，同时推入 data 到 buffer[0]
    this.vao.forEach((vbo) => {
      const bufferView = GLTFBufferView.fromJson({
        buffer: 0,
        byteLength: vbo.data.byteLength,
      });
      const bvIdx = doc.bufferViews.push(bufferView) - 1;
      const accessor = GLTFAccessor.fromJson({
        componentType: vbo.valueType,
        count:
          vbo.data.byteLength /
          (getComponentTypeByteSize(vbo.valueType) *
            getAttributeTypeElementCount(vbo.elementType)),
        type: vbo.elementType,
        bufferView: bvIdx,
      });
      const accIdx = doc.accessors.push(accessor) - 1;
      setAttribute(prmt, vbo.name, accIdx);

      const bufferZero = doc.buffers[0];
      let bufferZeroData =
        bufferZero.bufferData === undefined
          ? new ArrayBuffer(0)
          : bufferZero.bufferData;
      bufferZero.bufferData = contact(bufferZeroData, vbo.data);
    });

    /* material 阶段 todo */
    if (this._material !== undefined) {
      // 获取 material 的索引
      if (doc.materials !== undefined) {
        const tempIdx = doc.materials.indexOf(this._material);
        if (tempIdx !== -1) {
          prmt.material = tempIdx;
        } else {
          prmt.material = doc.materials.push(this._material) - 1;
        }
      } else {
        doc.materials = [];
        prmt.material = doc.materials.push(this._material) - 1;
      }

      // 写入 image ?
    }
  }
}

export default GLTFPrimitiveBuilder;
