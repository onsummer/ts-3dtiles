import readGLB from "./read-glb"
import readGLTF from "./read-gltf"

class GLTFReadAction {
  constructor() {
    
  }

  read(callback: () => void) {
    callback()
  }
}

export default GLTFReadAction

export {
  readGLTF
  readGLB
}