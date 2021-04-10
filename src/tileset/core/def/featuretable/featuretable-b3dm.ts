import IValidate from "../../../../typings/IValidate"
import IB3dmFTJson from "../../../../typings/tileset/IB3dmFTJson"

import FeatureTableType from "../enum/featuretable-type"
import FeatureTable from "./featuretable-base"

function validateB3dmBatchTable(table: B3dmFeatureTable): boolean {
  return table.batchLength === undefined ? false : true
}

function parse(table: B3dmFeatureTable) {
  const json = table._json as IB3dmFTJson
  table.batchLength = json['BATCH_LENGTH']
  table.rtcCenter = json['RTC_CENTER']

  if (json['extensions'] !== undefined) {
    table.extensions = new Set()
  }
  table.extras = json['extras']
}

class B3dmFeatureTable extends FeatureTable implements IValidate {

  batchLength: number
  rtcCenter?: number[]

  /**
   *
   */
  constructor() {
    super()
  }

  static createFromJSON(json: Object, binary: Uint8Array) {
    const ft = new B3dmFeatureTable()

    ft._json = json
    ft._binary = binary
    ft.featureTableType = FeatureTableType.B3dm

    parse(ft)

    return ft
  }

  validate() {
    return validateB3dmBatchTable(this)
  }
}

export default B3dmFeatureTable