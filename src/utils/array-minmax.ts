type TypedArrayType =
  | Uint8Array
  | Uint16Array
  | Uint32Array
  | Int8Array
  | Int16Array
  | Int32Array
  | Float32Array
  | Float64Array;
/**
 * 求最大最小值
 * @param {number[]} arr 数组
 * @param {boolean} [max] 若为 true 则求最大值。默认是 true。否则求最小值
 * @returns
 */
export function arrayMinMax(
  arr: number[] | TypedArrayType,
  max: boolean = true
): number {
  const length = arr.length;
  if (length === 0) {
    throw new Error("数组不能为空");
  }
  let value = arr[0];
  for (let i = 1; i < length; i++) {
    const arri = arr[i];
    if (max ? arri > value : arri < value) {
      value = arri;
    }
  }
  return value;
}

export function strideArrayMinMax(
  arr: number[] | TypedArrayType,
  dimension: number = 1,
  max: boolean = true
): number[] {
  const length = arr.length;
  if (length === 0 || length % dimension !== 0) {
    throw new Error(
      `数组为空或数组长度 length: ${length} 不能被 stride: ${dimension} 整除`
    );
  }

  if (dimension === 1) {
    return [arrayMinMax(arr, max)];
  }

  const values: number[] = [];
  const dimensionLength = length / dimension;
  // 先求 stride 个初值
  for (let i = 0; i < dimension; i++) {
    values.push(arr[i]);
  }
  // 然后对整个数组进行遍历取最值
  for (let j = 0; j < dimensionLength; j++) {
    for (let k = 0; k < dimension; k++) {
      if (max ? arr[j + k] > values[k] : arr[j + k] < values[k]) {
        values[k] = arr[j + k];
      }
    }
  }
  return values;
}
