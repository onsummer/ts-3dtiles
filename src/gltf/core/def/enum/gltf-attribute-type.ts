enum GLTFAttributeType {
  SCALAR = "SCALAR",
  VEC2 = "VEC2",
  VEC3 = "VEC3",
  VEC4 = "VEC4",
  MAT2 = "MAT2",
  MAT3 = "MAT3",
  MAT4 = "MAT4",
}

export const GLTFAttributeTypeValues = Object.freeze(Object.values(GLTFAttributeType) as Array<string>)

export const getAttributeTypeElementCount = (t: GLTFAttributeType): number => {
  switch (t) {
    case GLTFAttributeType.VEC2:
      return 2
    case GLTFAttributeType.VEC3:
      return 3
    case GLTFAttributeType.VEC4:
    case GLTFAttributeType.MAT2:
      return 4
    case GLTFAttributeType.MAT3:
      return 9
    case GLTFAttributeType.MAT4:
      return 16
    default: // means SCALAR
      return 1
  }
}

export default GLTFAttributeType