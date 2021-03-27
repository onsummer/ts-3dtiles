enum GLTFComponentType {
  BYTE = 5120,
  UNSIGNED_BYTE = 5121,
  SHORT = 5122,
  UNSIGNED_SHORT = 5123,
  UNSIGNED_INT = 5125,
  FLOAT = 5126
}

export const getComponentTypeByteSize = (t: GLTFComponentType): number => {
  switch (t) {
    case GLTFComponentType.BYTE:
    case GLTFComponentType.UNSIGNED_BYTE:
      return 1
    case GLTFComponentType.SHORT:
    case GLTFComponentType.UNSIGNED_SHORT:
      return 2
    case GLTFComponentType.UNSIGNED_INT:
      return 4
    default: // means FLOAT
      return 8
  }
}

export default GLTFComponentType