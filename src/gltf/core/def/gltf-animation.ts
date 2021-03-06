import { IGLTFAnimation } from "src/interfaces/IGLTFObj"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import GLTFPropertyBase from "./gltf-property-base"
import GLTFAnimationChannel from "./gltf-animation-channel"
import GLTFAnimationSampler from "./gltf-animation-sampler"

class GLTFAnimation extends GLTFPropertyBase {
  channels: GLTFAnimationChannel[] = []
  samplers: GLTFAnimationSampler[] = []
  name?: string

  constructor() {
    super()
  }
  
  validate() {
    if (this.channels!.length < 1 || this.samplers!.length < 1) {
      return false
    }
    return true
  }

  json() {
    if (!this.validate()) {
      throw new Error('[GLTFAnimation json()] 当前 animation 对象属性不合法，请检查')
    }

    const ani = {}

    writeDefinedProperty(ani, 'name', this.name)
    writeDefinedProperty(ani, 'channels', this.channels.length !== 0 ? this.channels.map(c => c.json()) : undefined)
    writeDefinedProperty(ani, 'samplers', this.samplers.length !== 0 ? this.samplers.map(s => s.json()) : undefined)
    writeExtensionsProperty(ani, this.extensions)
    writeDefinedProperty(ani, 'extras', this.extras)

    return ani
  }

  static fromJson(json: IGLTFAnimation) {
    const ani = new GLTFAnimation()
    ani.name = json.name
    ani.channels = json.channels.map(channel => GLTFAnimationChannel.readFromJson(channel))
    ani.samplers = json.samplers.map(spl => GLTFAnimationSampler.readFromJson(spl))
    ani.extras = json.extras

    return ani
  }
}

export default GLTFAnimation