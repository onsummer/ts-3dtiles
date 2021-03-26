import GLTFPrimitive from "./gltf-primitive";

class GLTFPrimitiveAttribute {
  position: number
  st1?: number
  normal?: number
  
  constructor(options: {
    position: number,
    st1?: number,
    normal?: number
  }) {
    this.position = options.position
    this.st1 = options.st1
    this.normal = options.normal
  }
}

export default GLTFPrimitiveAttribute