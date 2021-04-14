enum GLTFPrimitiveMode {
  POINTS = 0,
  LINES = 1,
  LINE_LOOP = 2,
  LINE_STRIP = 3,
  TRIANGLES = 4,
  TRIANGLE_STRIP = 5,
  TRIANGLE_FAN = 6
}

export const GLTFPrimitiveModeValues = Object.freeze(Object.values(GLTFPrimitiveMode) as Array<number>)

export default GLTFPrimitiveMode