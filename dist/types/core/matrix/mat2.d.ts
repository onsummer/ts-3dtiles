declare class Mat2 {
    v11: number;
    v12: number;
    v21: number;
    v22: number;
}
export declare const toArray: (m: Mat2) => number[];
export declare const add: (left: Mat2, right: Mat2, result?: Mat2) => Mat2;
export declare const substract: (left: Mat2, right: Mat2, result?: Mat2) => Mat2;
/**
 * 矩阵乘法
 * @param left 左矩阵
 * @param right 右矩阵
 * @param result 结果矩阵。创建了一个新的 Mat2 实例
 */
export declare const multiply: (left: Mat2, right: Mat2, result?: Mat2) => Mat2;
export default Mat2;
