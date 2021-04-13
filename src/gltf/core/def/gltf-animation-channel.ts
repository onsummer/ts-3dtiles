import { GLTFExtensionBase } from "src/gltf/ext"
import { IValidate } from "src/interfaces"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import GLTFAnimationChannelTarget from "./gltf-animation-channel-target"

class GLTFAnimationChannel implements IValidate {
  sampler: number
  target: GLTFAnimationChannelTarget
  extensions?: Set<GLTFExtensionBase> = new Set()
  extras?: any

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
}

export default GLTFAnimationChannel