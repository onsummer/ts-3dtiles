import {
  GLTFAttributeType,
  GLTFComponentType,
  GLTFDocument,
  GLTFMaterial,
  GLTFMesh,
} from "src/gltf/core";
import GLTFVertexBufferObject from "./gltf-vertex-buffer-object";
declare class GLTFPrimitiveBuilder {
  count: number;
  vao: GLTFVertexBufferObject[];
  _mesh?: GLTFMesh;
  _material?: GLTFMaterial;
  constructor(vertexCount: number);
  setPosition(data: Float32Array): boolean;
  setUV0(data: Float32Array): boolean;
  setNormal(data: Float32Array): boolean;
  setIndices(data: Uint8Array | Uint16Array | Uint32Array): void;
  setOther(
    vertexAttributeName: string,
    data: ArrayBuffer,
    dataType: GLTFAttributeType,
    dataValueType: GLTFComponentType
  ): void;
  set mesh(value: GLTFMesh);
  set material(value: GLTFMaterial);
  submit(doc: GLTFDocument): void;
}
export default GLTFPrimitiveBuilder;
