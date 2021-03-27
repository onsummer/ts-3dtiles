import GLTFPrimitive from "./gltf-primitive"

class GLTFMesh {
  primitives: GLTFPrimitive[] = []
  weights?: number[]
  name?: string
}

export default GLTFMesh