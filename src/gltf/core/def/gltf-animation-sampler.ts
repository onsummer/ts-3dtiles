import { IGLTFAnimationSampler } from "src/interfaces/IGLTFObj"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import GLTFPropertyBase from "./gltf-property-base"
import GLTFAnimationInterpolation, { GLTFAnimationInterpolationValues } from "./enum/gltf-animation-interpolation"


class GLTFAnimationSampler extends GLTFPropertyBase {
  input: number
  interpolation?: GLTFAnimationInterpolation
  output: number

  constructor() {
    super()
  }
  
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

  static readFromJson(json: IGLTFAnimationSampler) {
    const as = new GLTFAnimationSampler()
    as.input = json.input
    as.output = json.output
    if (json.interpolation !== undefined && GLTFAnimationInterpolationValues.includes(json.interpolation)) {
      as.interpolation = json.interpolation as GLTFAnimationInterpolation
    }
    return as
  }
}

export default GLTFAnimationSampler