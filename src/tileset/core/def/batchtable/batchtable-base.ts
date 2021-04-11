import { IOBuffer } from "iobuffer"
import IValidate from "../../../../interfaces/IValidate"
import IBTBinaryRef from "../../../../interfaces/tileset/IBTBinaryRef"
import IBTJson, { BTJsonValue } from "../../../../interfaces/tileset/IBTJson"
import TilesetExtBase from "../../../ext/ext-base"

/*
  batchtable
    json: 它有可能是n个数组，每个数组的长度等于不同瓦片的 featureTableJSON.XXXLength，b3dm 是 BATCH_LENGTH，等等：
            {
              "name": ['name1', 'name2', 'name3'],
              "height": [10, 20, 5]
            }
          也有可能是对二进制 batchtable binary 的引用定义，拥有 byteOffset、componentType、type 三个属性的对象
            {
              "name": {
                byteOffset: 16, // 相对于 batchtable binary body 的偏移值
                type: "SCALAR",
                componentType: "INT"
              }
            }
          所以，batchtable 有一个弱点，不能用 binary 存储文本数据，因为第二种情况只允许存储 scalar、vec2、vec3、vec4 四种数值类型
          不过使用 byte + scalar 的方式或许可以存储字节信息。
    binary: 根据 json 中第二种定义而存储数据

  扩展：层级 batchtable：
    
 */

function parse(table: BatchTable) {
  for (const k of Object.keys(table._json)) {
    table.variables.set(k, table._json[k])
  }
}

class BatchTable implements IValidate {

  _json: IBTJson
  _binary: Uint8Array

  variables: Map<string, BTJsonValue> = new Map()
  extensions?: Set<TilesetExtBase>
  extras?: any

  static createFromJSON(json: IBTJson, binary: Uint8Array) {
    const bt = new BatchTable()
    bt._json = json
    bt._binary = binary

    parse(bt)

    return bt
  }

  validate() {
    return true
  }

  get variableNames() {
    return Object.keys(this._json)
  }

  get variableCounts() {
    return this.variableNames.length
  }

  getVariable(name: string) {
    if (this.variables.has(name)) {
      const v = this.variables.get(name)
      return v
    }

    throw new Error(`[BatchTable getVariable()] 没有这个值：${name}。`)
  }
}

function timesOperator(fn: () => void, times: number) {
  for (let i = 0; i < times; i++) fn()
}

function getTimes(type: string) {
  return type === "SCALAR" ? 1 :
  type === "VEC2" ? 2 :
  type === "VEC3" ? 3 :
  type === "VEC4" ? 4 : -1
}

function getReadFunction(io: IOBuffer, componentType: string) {
  return componentType === "BYTE" ? io.readInt8 :
  componentType === "UNSIGNED_BYTE" ? io.readUint8 :
  componentType === "SHORT" ? io.readInt16 :
  componentType === "UNSIGNED_SHORT" ? io.readUint16 : 
  componentType === "INT" ? io.readInt32:
  componentType === "UNSIGNED_INT" ? io.readUint32 :
  componentType === "FLOAT" ? io.readFloat32 : io.readFloat64
}

/**
 * 将 BatchTableBinary 读取并转换成普通的数字数组
 * @param {BatchTable} table BatchTable 实例
 * @param {IBTBinaryRef} variable 从 BatchTable JSON 中获取的引用描述对象，可使用 BatchTable.prototype.getVariable(name) 获取
 * @param {number} count FeatureTable 中的 XXXLength，即每个变量有多少个数据
 * @returns {number[]}
 */
export const parseBTBinary2Array = (table: BatchTable, variable: IBTBinaryRef, count: number) => {
  let hasHierarchy = false
  table.extensions?.forEach(ext => {
    if ('name' in ext && ext['name'] === '3DTILES_batch_table_hierarchy') {
      hasHierarchy = true
    }
  })
  if (hasHierarchy) {
    return
  }

  const io = new IOBuffer(table._binary.buffer)
  io.skip(variable.byteOffset)
  const result: number[] = []

  for (let i = 0; i < count; i++) {
    const readFunction = getReadFunction(io, variable.componentType)
    timesOperator(() => result.push(readFunction()), getTimes(variable.type))
  }

  return result
}

export default BatchTable