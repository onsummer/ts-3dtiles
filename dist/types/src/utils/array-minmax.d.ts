declare type TypedArrayType =
  | Uint8Array
  | Uint16Array
  | Uint32Array
  | Int8Array
  | Int16Array
  | Int32Array
  | Float32Array
  | Float64Array
/**
 * 求最大最小值
 * @param {number[]} arr 数组
 * @param {boolean} [max] 若为 true 则求最大值。默认是 true。否则求最小值
 * @returns
 */
export declare function arrayMinMax(arr: number[] | TypedArrayType, max?: boolean): number
export declare function strideArrayMinMax(
  arr: number[] | TypedArrayType,
  dimension?: number,
  max?: boolean
): number[]
export {}
