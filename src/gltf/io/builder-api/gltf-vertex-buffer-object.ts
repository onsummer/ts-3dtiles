import {
  GLTFAttributeType,
  GLTFComponentType,
  GLTFPrimitive,
} from "src/gltf/core";

class GLTFVertexBufferObject {
  name: string;
  data: ArrayBuffer;
  elementType: GLTFAttributeType;
  valueType: GLTFComponentType;

  constructor(options: {
    name: string;
    data: ArrayBuffer;
    elementType: GLTFAttributeType;
    valueType: GLTFComponentType;
  }) {
    this.name = options.name;
    this.data = options.data;
    this.elementType = options.elementType;
  }
}

export default GLTFVertexBufferObject;
