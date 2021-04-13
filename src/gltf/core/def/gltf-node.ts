import { GLTFExtensionBase } from "src/gltf/ext"
import { ISerializable, IValidate } from "src/interfaces"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"

function validateTransforms(nd: GLTFNode) {
  let flag = true
  if (nd.matrix !== undefined) {
    if (nd.rotation !== undefined || nd.scale !== undefined || nd.translation !== undefined) {
      flag = false
    }
  }
  if (nd.matrix!.length !== 16) {
    flag = false
  }
  if (nd.scale!.length !== 3) {
    flag = false
  }
  if (nd.translation!.length !== 3) {
    flag = false
  }

  if (nd.rotation!.length !== 4) {
    flag = false
  } else {
    flag = nd.rotation!.every(r => r > 1 || r < -1)
  }

  return flag
}

class GLTFNode implements IValidate, ISerializable {
  children: number[] = []
  mesh?: number
  rotation?: number[]
  translation?: number[]
  weights?: number[]
  name?: string
  skin?: number
  camera?: number
  matrix?: number[]
  scale?: number[]
  extensions?: Set<GLTFExtensionBase> = new Set()
  extras?: any

  validate() {
    if (validateTransforms(this)) {
      return false
    }
    if (this.weights!.length < 1) {
      return false
    } else if (this.weights !== undefined && this.mesh === undefined) {
      return false
    }
    if (this.skin !== undefined && this.mesh === undefined) {
      return false
    }

    if (this.children!.length < 1) {
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
    
    if (this.children.length !== 0) {
      writeDefinedProperty(n, 'children', this.children)
    }
    writeExtensionsProperty(n, this.extensions)
    writeDefinedProperty(n, 'extras', this.extras)

    return n
  }
}

export default GLTFNode