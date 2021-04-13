import { GLTFExtensionBase } from "src/gltf/ext"
import { ISerializable, IValidate } from "src/interfaces"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import GLTFAnimationChannelTargetPath from "./enum/gltf-animation-channel-target-path"

class GLTFAnimationChannelTarget implements IValidate, ISerializable {
  path: GLTFAnimationChannelTargetPath
  node?: number
  extensions?: Set<GLTFExtensionBase> = new Set
  extras?: any

  validate() {
    return true
  }

  json() {
    const act = {
      path: this.path,
    }

    writeDefinedProperty(act, 'node', this.node)
    writeExtensionsProperty(act, this.extensions)
    writeDefinedProperty(act, 'extras', this.extras)

    return act
  }
}

export default GLTFAnimationChannelTarget