import { IGLTFSampler } from 'src/interfaces/IGLTFObj'
import writeDefinedProperty from 'src/utils/io/writeDefinedProperty'
import writeExtensionsProperty from 'src/utils/io/writeExtensionsProperty'
import GLTFPropertyBase from "./gltf-property-base"
import GLTFFilter, { GLTFFilterValues } from './enum/gltf-filter'
import GLTFWrapMode, { GLTFWrapModeValues } from './enum/gltf-wrapmode'

class GLTFSampler extends GLTFPropertyBase {
  magFilter?: GLTFFilter
  minFilter?: GLTFFilter
  wrapS?: GLTFWrapMode
  wrapT?: GLTFWrapMode
  name?: string

  constructor() {
    super()
  }
  
  validate() {
    // 注意默认值检查
    if (this.magFilter === undefined && this.minFilter === undefined && this.wrapS === undefined && this.wrapT === undefined)
      return false
    return true
  }

  json() {
    if (!this.validate()) {
      throw new Error('[GLTFSampler json()] 当前 sampler 对象的属性不合法，请检查')
    }

    const spl = {}
    writeDefinedProperty(spl, 'magFilter', this.magFilter)
    writeDefinedProperty(spl, 'minFilter', this.minFilter)
    writeDefinedProperty(spl, 'wrapS', this.wrapS)
    writeDefinedProperty(spl, 'wrapT', this.wrapT)
    writeDefinedProperty(spl, 'name', this.name)
    writeExtensionsProperty(spl, this.extensions)
    writeDefinedProperty(spl, 'extras', this.extras)

    return spl
  }

  static fromJson(json: IGLTFSampler) {
    const spl = new GLTFSampler()
    spl.name = json.name
    if (json.magFilter !== undefined && GLTFFilterValues.includes(json.magFilter)) {
      spl.magFilter = json.magFilter as GLTFFilter
    }
    if (json.minFilter !== undefined && GLTFFilterValues.includes(json.minFilter)) {
      spl.minFilter = json.minFilter as GLTFFilter
    }
    if (json.wrapS !== undefined && GLTFWrapModeValues.includes(json.wrapS)) {
      spl.wrapS = json.wrapS as GLTFWrapMode
    }
    if (json.wrapT !== undefined && GLTFWrapModeValues.includes(json.wrapT)) {
      spl.wrapT = json.wrapT as GLTFWrapMode
    }
    spl.extras = json.extras

    return spl
  }
}

export default GLTFSampler