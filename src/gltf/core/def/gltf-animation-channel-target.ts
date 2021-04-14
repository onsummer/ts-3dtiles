import { IGLTFAnimationChannelTarget } from "src/interfaces/IGLTFObj"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import GLTFPropertyBase from "./gltf-property-base"
import GLTFAnimationChannelTargetPath, { GLTFAnimationChannelTargetPathValues } from "./enum/gltf-animation-channel-target-path"

class GLTFAnimationChannelTarget extends GLTFPropertyBase {
  path: GLTFAnimationChannelTargetPath
  node?: number

  constructor() {
    super()
  }
  
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

  static readFromJson(json: IGLTFAnimationChannelTarget) {
    const channelTarget = new GLTFAnimationChannelTarget()
    channelTarget.extras = json.extras
    channelTarget.node = json.node
    if (json.path !== undefined && GLTFAnimationChannelTargetPathValues.includes(json.path)) {
      channelTarget.path = json.path as GLTFAnimationChannelTargetPath
    }

    return channelTarget
  }
}

export default GLTFAnimationChannelTarget