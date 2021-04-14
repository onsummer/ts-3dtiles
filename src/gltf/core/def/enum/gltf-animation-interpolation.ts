enum GLTFAnimationInterpolation {
  LINEAR = "LINEAR",
  STEP = "STEP",
  CUBICSPLINE = "CUBICSPLINE",
}

export const GLTFAnimationInterpolationValues = Object.freeze(Object.values(GLTFAnimationInterpolation) as Array<string>)

export default GLTFAnimationInterpolation