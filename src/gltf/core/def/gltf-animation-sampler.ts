import GLTFAnimationInterpolation from "./enum/gltf-animation-interpolation"

class GLTFAnimationSampler {
  input: number
  interpolation?: GLTFAnimationInterpolation
  output: number
}

export default GLTFAnimationSampler