import IValidate from '../../../typings/IValidate'
import GLTFExtensionBase from '../../ext/gltf-extension-base'
import GLTFFilter from './enum/gltf-filter'
import GLTFWrapMode from './enum/gltf-wrapmode'

class GLTFSampler implements IValidate {
  magFilter?: GLTFFilter
  minFilter?: GLTFFilter
  wrapS?: GLTFWrapMode
  wrapT?: GLTFWrapMode
  name?: string
  extensions: Set<GLTFExtensionBase> = new Set()

  validate = () => true
}

export default GLTFSampler