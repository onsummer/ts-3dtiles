enum GLTFCameraType {
  PERSPECTIVE = "perspective",
  ORTHOGRAPHIC = "orthographic"
}

export const GLTFCameraTypeValues = Object.freeze(Object.values(GLTFCameraType) as Array<string>)

export default GLTFCameraType