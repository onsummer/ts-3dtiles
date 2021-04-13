import { GLTFExtensionBase } from "src/gltf/ext"
import { ISerializable, IValidate } from "src/interfaces"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import GLTFTextureInfo from "./gltf-texture-info"

class GLTFNormalTextureInfo 
extends GLTFTextureInfo 
implements IValidate, ISerializable {
  scale: number
  extensions?: Set<GLTFExtensionBase> = new Set()
  extras?: any

  constructor(index: number, texCoord: number, scale: number) {
    super(index, texCoord)
    this.scale = scale
  }

  validate() {
    return true
  }

  json() {
    if (!this.validate()) {
      throw new Error('[GLTFNormalTextureInfo json()] 当前 normal textureinfo 属性不合法，请检查')
    }

    const st = super.json()
    writeDefinedProperty(st, 'scale', this.scale)
    writeExtensionsProperty(st, this.extensions)
    writeDefinedProperty(st, 'extras', this.extras)

    return st
  }
}

export default GLTFNormalTextureInfo