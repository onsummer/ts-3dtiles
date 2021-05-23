import { GLTFAttributeType, GLTFComponentType } from "src/gltf/core";

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
    this.valueType = options.valueType;
  }

  getTypedArray() {
    switch (this.valueType) {
      case GLTFComponentType.BYTE:
        return new Int8Array(this.data);
      case GLTFComponentType.UNSIGNED_BYTE:
        return new Uint8Array(this.data);
      case GLTFComponentType.SHORT:
        return new Int16Array(this.data);
      case GLTFComponentType.UNSIGNED_SHORT:
        return new Uint16Array(this.data);
      case GLTFComponentType.UNSIGNED_INT:
        return new Uint32Array(this.data);
      case GLTFComponentType.FLOAT:
        return new Float32Array(this.data);
    }
  }
}

export default GLTFVertexBufferObject;
