import ISerializable from "src/interfaces/ISerializable"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import IValidate from "../../../interfaces/IValidate"
import GLTFExtensionBase from "../../ext/gltf-extension-base"

class GLTFBuffer implements IValidate, ISerializable {
  byteLength: number = 0
  uri?: string
  extensions?: Set<GLTFExtensionBase> = new Set()
  extras?: any

  /** @deprecated */
  get url() {
    return this.uri
  }

  validate() {
    return this.byteLength > 0
  }

  json() {
    const bf = {
      byteLength: this.byteLength
    }
    writeDefinedProperty(bf, 'uri', this.uri)
    writeExtensionsProperty(bf, this.extensions)
    writeDefinedProperty(bf, 'extras', this.extras)

    return bf
  }
}

export default GLTFBuffer