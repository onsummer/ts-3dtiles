import { ISerializable, IValidate } from "src/interfaces"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import GLTFAnimationInterpolation from "./enum/gltf-animation-interpolation"


class GLTFAnimationSampler implements IValidate, ISerializable {
  input: number
  interpolation?: GLTFAnimationInterpolation
  output: number

  validate() {
    return true
  }

  json() {
    const as = {
      input: this.input,
      output: this.output
    }

    writeDefinedProperty(as, 'interpolation', this.interpolation)

    return as
  }
}

export default GLTFAnimationSampler