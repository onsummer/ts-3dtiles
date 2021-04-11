import ISerializable from 'src/interfaces/ISerializable'
import writeDefinedProperty from 'src/utils/io/writeDefinedProperty'
import writeExtensionsProperty from 'src/utils/io/writeExtensionsProperty'
import IValidate from '../../../interfaces/IValidate'
import GLTFExtensionBase from '../../ext/gltf-extension-base'
import GLTFFilter from './enum/gltf-filter'
import GLTFWrapMode from './enum/gltf-wrapmode'

class GLTFSampler implements IValidate, ISerializable {
  magFilter?: GLTFFilter
  minFilter?: GLTFFilter
  wrapS?: GLTFWrapMode
  wrapT?: GLTFWrapMode
  name?: string
  extensions?: Set<GLTFExtensionBase> = new Set()
  extras: any

  validate() {
    // 注意默认值检查
    if (this.magFilter === undefined && this.minFilter === undefined && this.wrapS === undefined && this.wrapT === undefined)
      return false
    return true
  }

  json() {
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
}

export default GLTFSampler