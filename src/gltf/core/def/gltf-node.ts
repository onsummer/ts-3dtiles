import GLTFFid from "./gltf-fid"

class GLTFNode {
  children?: GLTFFid[]
  mesh?: GLTFFid
  rotation?: number[]
  translation?: number[]
  weights?: number[]
  name?: string
  skin?: number
  camera?: GLTFFid
  matrix?: number
  scale?: number

  constructor(options: {
    children?: number[]
    mesh?: number
    rotation?: number[]
    translation?: number[]
    weights?: number[]
    name?: string
    skin?: number
    camera?: number
    matrix?: number
    scale?: number
  }) {
    if ('mesh' in options) {
      this.mesh = GLTFFid.fromNumber(options.mesh!)
    }
  }
}

export default GLTFNode