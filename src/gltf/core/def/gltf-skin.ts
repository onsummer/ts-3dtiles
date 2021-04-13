import { GLTFExtensionBase } from "src/gltf/ext"
import { IValidate } from "src/interfaces"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"

class GLTFSkin implements IValidate {
  inverseBindMatrices?: number
  skeleton?: number
  name?: string
  joints: number[]
  extensions?: Set<GLTFExtensionBase> = new Set()
  extras?: any

  validate() {
    return this.joints.length > 1
  }

  json() {
    if (!this.validate()) {
      throw new Error('[GLTFSkin json()] 当前 skin 属性不合法，请检查')
    }

    const sk = {}

    writeDefinedProperty(sk, 'inverseBindMatrices', this.inverseBindMatrices)
    writeDefinedProperty(sk, 'skeleton', this.skeleton)
    writeDefinedProperty(sk, 'name', this.name)
    writeDefinedProperty(sk, 'joints', this.joints.length !== 0 ? this.joints : undefined)
    writeExtensionsProperty(sk, this.extensions)
    writeDefinedProperty(sk, 'extras', this.extras)

    return sk
  }
}

export default GLTFSkin