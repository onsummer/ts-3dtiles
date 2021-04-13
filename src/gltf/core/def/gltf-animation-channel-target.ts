import { GLTFExtensionBase } from "src/gltf/ext"
import { ISerializable, IValidate } from "src/interfaces"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import GLTFAnimationChannelTargetPath from "./enum/gltf-animation-channel-target-path"

class GLTFAnimationChannelTarget implements IValidate, ISerializable {
  node?: number
  path: GLTFAnimationChannelTargetPath
  extensions: Set<GLTFExtensionBase> = new Set

  validate() {
    return true
  }

  json() {
    const act = {
      path: this.path,
    }

    writeExtensionsProperty(act, this.extensions)
    writeDefinedProperty(act, 'node', this.node)

    return act
  }
}

export default GLTFAnimationChannelTarget