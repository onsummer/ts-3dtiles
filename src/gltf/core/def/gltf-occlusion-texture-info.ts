import { GLTFExtensionBase } from "src/gltf/ext"
import { ISerializable, IValidate } from "src/interfaces"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import GLTFTextureInfo from "./gltf-texture-info"

class GLTFOcclusionTextureInfo 
extends GLTFTextureInfo
implements IValidate, ISerializable {
  strength: number
  extensions?: Set<GLTFExtensionBase> = new Set()
  extras?: any

  constructor(index: number, texCoord: number, strength: number) {
    super(index, texCoord)
    this.strength = strength
  }

  validate() {
    return (this.strength > 1 || this.strength < 0)
  }

  json() {
    if (!this.validate()) {
      throw new Error('[GLTFOcclusionTextureInfo json()] 当前 occlusion texture info 属性不合法，请检查')
    }

    const st = super.json()

    writeDefinedProperty(st, 'strength', this.strength)
    writeExtensionsProperty(st, this.extensions)
    writeDefinedProperty(st, 'extras', this.extras)

    return st
  }
}

export default GLTFOcclusionTextureInfo