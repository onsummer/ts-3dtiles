import ISerializable from "src/interfaces/ISerializable"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import IValidate from "../../../interfaces/IValidate"
import GLTFExtensionBase from "../../ext/gltf-extension-base"

class GLTFTexture implements IValidate, ISerializable {
  sampler?: number
  source?: number
  name?: string
  extensions?: Set<GLTFExtensionBase> = new Set()
  extras?: any

  validate() {
    if (this.sampler === undefined && this.source === undefined && this.name === undefined)
      return false
    return true
  }

  json() {
    const tx = {}
    writeDefinedProperty(tx, 'name', this.name)
    writeDefinedProperty(tx, 'source', this.source)
    writeDefinedProperty(tx, 'sampler', this.sampler)
    writeExtensionsProperty(tx, this.extensions)
    writeDefinedProperty(tx, 'extras', this.extras)

    return tx
  }
}

export default GLTFTexture