import { IGLTFNode } from "src/interfaces/IGLTFObj"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import GLTFPropertyBase from "./gltf-property-base"

function validateTransforms(nd: GLTFNode) {
  let flag = true
  if (nd.matrix !== undefined) {
    if (nd.rotation !== undefined || nd.scale !== undefined || nd.translation !== undefined) {
      flag = false
    }
  } else if (nd.rotation === undefined && nd.scale === undefined && nd.translation === undefined) {
    flag = false
  }

  if (nd.rotation) {
    flag = nd.rotation.every(r => r > 1 || r < -1)
  }

  return flag
}

class GLTFNode extends GLTFPropertyBase {
  children: number[] = []
  mesh?: number
  rotation?: [number, number, number, number]
  translation?: [number, number, number]
  weights?: number[]
  name?: string
  skin?: number
  camera?: number
  matrix?: [
    number, number, number, number,
    number, number, number, number,
    number, number, number, number,
    number, number, number, number
  ]
  scale?: [number, number, number]

  constructor() {
    super()
  }

  getMesh() {
    if (this.doc === undefined) {
      return null
    }
    if (this.mesh === undefined) {
      return null
    } else if (this.doc.meshes.length < this.mesh) {
      return null
    }
    
    return this.doc.meshes[this.mesh]
  }

  validate() {
    if (!validateTransforms(this)) {
      return false
    }
    if (this.weights && this.weights.length < 1) {
      return false
    } else if (this.weights !== undefined && this.mesh === undefined) {
      return false
    }
    if (this.skin !== undefined && this.mesh === undefined) {
      return false
    }

    if (this.children && this.children.length > 1) {
      if (new Set(this.children).size !== this.children.length)
        return false
    }
    return true
  }

  json() {
    if (!this.validate()) {
      throw new Error('[GLTFNode json()] 当前 node 属性不合法，请检查属性')
    }

    const n = {}

    writeDefinedProperty(n, 'mesh', this.mesh)
    writeDefinedProperty(n, 'rotation', this.rotation)
    writeDefinedProperty(n, 'translation', this.translation)
    writeDefinedProperty(n, 'scale', this.scale)
    writeDefinedProperty(n, 'matrix', this.matrix)
    writeDefinedProperty(n, 'weights', this.weights)
    writeDefinedProperty(n, 'skin', this.skin)
    writeDefinedProperty(n, 'camera', this.camera)
    writeDefinedProperty(n, 'name', this.name)

    if (this.children && this.children.length !== 0) {
      writeDefinedProperty(n, 'children', this.children)
    }
    writeExtensionsProperty(n, this.extensions)
    writeDefinedProperty(n, 'extras', this.extras)

    return n
  }

  static fromJson(json: IGLTFNode) {
    const node = new GLTFNode()
    node.name = json.name
    node.mesh = json.mesh
    node.matrix = json.matrix
    node.rotation = json.rotation
    node.scale = json.scale
    node.skin = json.skin
    node.children = json.children
    node.weights = json.weights
    node.translation = json.translation
    node.camera = json.camera
    node.extras = json.extras
    return node
  }
}

export default GLTFNode