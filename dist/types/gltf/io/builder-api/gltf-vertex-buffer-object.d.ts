import { GLTFAttributeType, GLTFComponentType } from "src/gltf/core";
declare class GLTFVertexBufferObject {
  name: string;
  data: ArrayBuffer;
  elementType: GLTFAttributeType;
  valueType: GLTFComponentType;
  constructor(options: {
    name: string;
    data: ArrayBuffer;
    elementType: GLTFAttributeType;
    valueType: GLTFComponentType;
  });
  getTypedArray():
    | Int8Array
    | Uint8Array
    | Int16Array
    | Uint16Array
    | Uint32Array
    | Float32Array;
}
export default GLTFVertexBufferObject;
