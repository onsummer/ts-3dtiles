enum GLTFFilter {
  NEAREST = 9728,
  LINEAR = 9729,
  NEAREST_MIPMAP_NEAREST = 9984,
  LINEAR_MIPMAP_NEAREST = 9985,
  NEAREST_MIPMAP_LINEAR = 9986,
  LINEAR_MIPMAP_LINEAR = 9987
}

export const GLTFFilterValues = Object.freeze(Object.values(GLTFFilter) as Array<number>)

export default GLTFFilter