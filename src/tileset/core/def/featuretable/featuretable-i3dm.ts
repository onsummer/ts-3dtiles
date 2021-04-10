import IValidate from "../../../../typings/IValidate"
import IFTBinaryRef from "../../../../typings/tileset/IFTBinaryRef"
import II3dmFTJson from "../../../../typings/tileset/II3dmFTJson"

import FeatureTableType from "../enum/featuretable-type"
import FeatureTable from "./featuretable-base"

function validateI3dmBatchTable(table: I3dmFeatureTable): boolean {
  if (table.position === undefined && table.positionQuantized === undefined) {
    return false
  }
  if (table.position !== undefined && table.positionQuantized !== undefined) {
    return false
  }
  if (table.positionQuantized !== undefined) {
    if (table.quantizedVolumeOffset === undefined || table.quantizedVolumeScale === undefined) {
      return false
    }
  }
  if (
    (table.normalUp === undefined && table.normalRight !== undefined) ||
    (table.normalRight === undefined && table.normalUp !== undefined)
  ) {
    return false
  }
  if (
    (table.normalUpOct32p === undefined && table.normalRightOct32p !== undefined) ||
    (table.normalRightOct32p === undefined && table.normalUpOct32p !== undefined)
  ) {
    return false
  }
  return true
}

function parse(table: I3dmFeatureTable) {
  const json = table._json as II3dmFTJson
  table.position = json['POSITION']
  table.positionQuantized = json['POSITION_QUANTIZED']
  table.normalUp = json['NORMAL_UP']
  table.normalRight = json['NORMAL_RIGHT']
  table.normalUpOct32p = json['NORMAL_UP_OCT32P']
  table.normalRightOct32p = json['NORMAL_RIGHT_OCT32P']
  table.scale = json['SCALE']
  table.scaleNonUniform = json['SCALE_NON_UNIFORM']
  table.instancesLength = json['INSTANCES_LENGTH']
  table.rtcCenter = json['RTC_CENTER']
  table.quantizedVolumeOffset = json['QUANTIZED_VOLUME_OFFSET']
  table.quantizedVolumeScale = json['QUANTIZED_VOLUME_SCALE']

  if (json['extensions'] !== undefined) {
    table.extensions = new Set()
    // todo
  }
  table.extras = json['extras']
}

class I3dmFeatureTable extends FeatureTable implements IValidate {

  position?: IFTBinaryRef
  positionQuantized?: IFTBinaryRef
  normalUp?: IFTBinaryRef
  normalRight?: IFTBinaryRef
  normalUpOct32p?: IFTBinaryRef
  normalRightOct32p?: IFTBinaryRef
  scale?: IFTBinaryRef
  batchId?: IFTBinaryRef
  scaleNonUniform?: IFTBinaryRef

  instancesLength: number

  rtcCenter?: number[]
  quantizedVolumeOffset?: number[]
  quantizedVolumeScale?: number[]
  eastNorthUp?: boolean

  constructor() {
    super()
  }

  static createFromJSON(json: Object, binary: Uint8Array) {
    const ft = new I3dmFeatureTable()

    ft._json = json
    ft._binary = binary
    ft.featureTableType = FeatureTableType.I3dm

    parse(ft)

    return ft
  }

  validate() {
    return validateI3dmBatchTable(this)
  }
}

export default I3dmFeatureTable