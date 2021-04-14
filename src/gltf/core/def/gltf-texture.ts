import { IGLTFTexture } from "src/interfaces/IGLTFObj"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import GLTFPropertyBase from "./gltf-property-base"

class GLTFTexture extends GLTFPropertyBase {
  sampler?: number
  source?: number
  name?: string

  constructor() {
    super()
  }
  
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

  static readFromJson(json: IGLTFTexture) {
    const tx = new GLTFTexture()
    tx.name = json.name
    tx.source = json.source
    tx.sampler = json.sampler
    tx.extras = json.extras
    return tx
  }
}

export default GLTFTexture