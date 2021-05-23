import IValidate from "../../../../interfaces/IValidate"
import IBTBinaryRef from "../../../../interfaces/tileset/IBTBinaryRef"
import IBTJson, { BTJsonValue } from "../../../../interfaces/tileset/IBTJson"
import TilesetExtBase from "../../../ext/ext-base"
declare class BatchTable implements IValidate {
  _json: IBTJson
  _binary: Uint8Array
  variables: Map<string, BTJsonValue>
  extensions?: Set<TilesetExtBase>
  extras?: any
  static createFromJSON(json: IBTJson, binary: Uint8Array): BatchTable
  validate(): boolean
  get variableNames(): string[]
  get variableCounts(): number
  getVariable(name: string): BTJsonValue | undefined
}
/**
 * 将 BatchTableBinary 读取并转换成普通的数字数组
 * @param {BatchTable} table BatchTable 实例
 * @param {IBTBinaryRef} variable 从 BatchTable JSON 中获取的引用描述对象，可使用 BatchTable.prototype.getVariable(name) 获取
 * @param {number} count FeatureTable 中的 XXXLength，即每个变量有多少个数据
 * @returns {number[]}
 */
export declare const parseBTBinary2Array: (
  table: BatchTable,
  variable: IBTBinaryRef,
  count: number
) => number[] | undefined
export default BatchTable
