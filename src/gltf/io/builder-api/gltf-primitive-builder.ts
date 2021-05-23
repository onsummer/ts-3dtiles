import {
  GLTFAccessor,
  GLTFAttributeType,
  GLTFBuffer,
  GLTFBufferView,
  GLTFComponentType,
  GLTFDocument,
  GLTFMaterial,
  GLTFMesh,
  GLTFNode,
  GLTFPrimitive,
  GLTFScene,
} from "src/gltf/core";
import { getAttributeTypeElementCount } from "src/gltf/core/def/enum/gltf-attribute-type";
import { getComponentTypeByteSize } from "src/gltf/core/def/enum/gltf-component-type";
import { strideArrayMinMax } from "src/utils/array-minmax";
import GLTFVertexBufferObject from "./gltf-vertex-buffer-object";

function contact(b1: ArrayBuffer, b2: ArrayBuffer) {
  if (globalThis.constructor.name === "Object") {
    // nodejs
    const mergedBuffer = Buffer.concat([
      new Uint8Array(b1),
      new Uint8Array(b2),
    ]);
    return mergedBuffer.buffer;
  } else {
    const totalLength = b1.byteLength + b2.byteLength;
    const mergedBuffer = new Uint8Array(totalLength);
    mergedBuffer.set(new Uint8Array(b1), 0);
    mergedBuffer.set(new Uint8Array(b2), b1.byteLength);
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
    if (data.length / 3 !== this.count) {
      return false;
    }

    const positionVBO = new GLTFVertexBufferObject({
      name: "position",
      data: data.buffer,
      elementType: GLTFAttributeType.VEC3,
      valueType: GLTFComponentType.FLOAT,
    });
    this.vao.push(positionVBO);
    return true;
  }

  setUV0(data: Float32Array) {
    if (data.length / 2 !== this.count) {
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
    if (data.length / 3 !== this.count) {
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

  setIndices(data: Uint8Array | Uint16Array | Uint32Array) {
    console.log(data);
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
    let nodeIndex: number = -1;
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
        matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      });
      nodeIndex = doc.nodes.push(nodeDef) - 1;
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
      doc.nodes.forEach((node, index) => {
        if (node.mesh !== undefined && node.mesh === meshIdx) {
          nodeDef = node;
          nodeIndex = index;
        }
      });
      if (nodeDef === undefined) {
        nodeDef = GLTFNode.fromJson({
          children: [],
          mesh: meshIdx,
          matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        });
        nodeIndex = doc.nodes.push(nodeDef) - 1;
      }
    }

    meshDef.primitives.push(prmt);
    const scene = GLTFScene.fromJson({
      nodes: [nodeIndex],
    });
    doc.scenes.push(scene);

    // 创建 accessor 和 bufferView，同时推入 data 到 buffer[0]
    this.vao.forEach((vbo, index, originArr) => {
      const bufferView = GLTFBufferView.fromJson({
        buffer: 0,
        byteLength: vbo.data.byteLength,
        byteOffset: index === 0 ? 0 : originArr[index - 1].data.byteLength,
      });
      const bvIdx = doc.bufferViews.push(bufferView) - 1;
      const valueType = getComponentTypeByteSize(vbo.valueType);
      const elementType = getAttributeTypeElementCount(vbo.elementType);

      const dataTypedArray = vbo.getTypedArray();
      const accessor = GLTFAccessor.fromJson({
        componentType: vbo.valueType,
        count: vbo.data.byteLength / (valueType * elementType),
        type: vbo.elementType,
        bufferView: bvIdx,
        byteOffset: 0,
        max: strideArrayMinMax(dataTypedArray, elementType, true),
        min: strideArrayMinMax(dataTypedArray, elementType, false),
      });
      const accIdx = doc.accessors.push(accessor) - 1;
      setAttribute(prmt, vbo.name, accIdx);

      let bufferZero = doc.buffers[0];
      if (bufferZero === undefined) {
        bufferZero = GLTFBuffer.fromJson({
          byteLength: 0,
        });
        doc.buffers.push(bufferZero);
      }
      let bufferZeroData =
        bufferZero.bufferData === undefined
          ? new ArrayBuffer(0)
          : bufferZero.bufferData;
      bufferZero.bufferData = contact(bufferZeroData, vbo.data);
      bufferZero.byteLength += vbo.data.byteLength;
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
