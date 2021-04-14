enum GLTFAnimationChannelTargetPath {
  TRANSLATION = "translation",
  ROTATION = "rotation",
  SCALE = "scale",
  WEIGHTS = "weights"
}

export const GLTFAnimationChannelTargetPathValues = Object.freeze(Object.values(GLTFAnimationChannelTargetPath) as Array<string>)

export default GLTFAnimationChannelTargetPath