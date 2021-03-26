class Mat2 {
  v11: number = 1
  v12: number = 0
  v21: number = 0
  v22: number = 1
}

export const toArray = (m: Mat2) => {
  return [m.v11, m.v12, m.v21, m.v22]
}

export const add = (left: Mat2, right: Mat2, result: Mat2 = new Mat2()) => {
  result.v11 = left.v11 + right.v11
  result.v12 = left.v12 + right.v12
  result.v21 = left.v21 + right.v21
  result.v22 = left.v22 + right.v22
  return result
}

export const substract = (left: Mat2, right: Mat2, result: Mat2 = new Mat2()) => {
  result.v11 = left.v11 - right.v11
  result.v12 = left.v12 - right.v12
  result.v21 = left.v21 - right.v21
  result.v22 = left.v22 - right.v22
  return result
}

/**
 * 矩阵乘法
 * @param left 左矩阵
 * @param right 右矩阵
 * @param result 结果矩阵。创建了一个新的 Mat2 实例
 */
export const multiply = (left: Mat2, right: Mat2, result: Mat2 = new Mat2()) => {
  result.v11 = left.v11 * right.v11 + left.v12 * right.v21
  result.v12 = left.v11 * right.v21 + left.v12 * right.v22
  result.v21 = left.v21 * right.v11 + left.v22 * right.v21
  result.v22 = left.v21 * right.v12 + left.v22 * right.v22
  return result
}

export default Mat2