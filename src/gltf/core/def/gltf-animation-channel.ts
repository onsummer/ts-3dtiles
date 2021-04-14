import { IGLTFAnimationChannel } from "src/interfaces/IGLTFObj"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import GLTFPropertyBase from "./gltf-property-base"
import GLTFAnimationChannelTarget from "./gltf-animation-channel-target"

class GLTFAnimationChannel extends GLTFPropertyBase {
  sampler: number
  target: GLTFAnimationChannelTarget

  constructor() {
    super()
  }
  
  validate() {
    return this.target.validate()
  } 

  json() {
    if (!this.validate()) {
      throw new Error('[GLTFAnimationChannel json()] 当前 animation channel 对象的属性不合法，请检查')
    }

    const ac = {
      sampler: this.sampler,
      target: this.target.json(),
    }

    writeExtensionsProperty(ac, this.extensions)
    writeDefinedProperty(ac, 'extras', this.extras)

    return ac
  }

  static readFromJson(json: IGLTFAnimationChannel) {
    const channel = new GLTFAnimationChannel()
    channel.sampler = json.sampler
    channel.target = GLTFAnimationChannelTarget.readFromJson(json.target)
    channel.extras = json.extras
    
    return channel
  }
}

export default GLTFAnimationChannel