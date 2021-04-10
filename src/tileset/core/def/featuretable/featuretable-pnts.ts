import IValidate from "../../../../typings/IValidate"
import IFTBinaryRef from "../../../../typings/tileset/IFTBinaryRef"
import IPntsFTJson from "../../../../typings/tileset/IPntsFTJson"

import FeatureTableType from "../enum/featuretable-type"
import FeatureTable from "./featuretable-base"

function validatePntsFeatureTable(table: PntsFeatureTable): boolean {
  if (table.position === undefined && table.positionQuantized === undefined) {
    return false
  }
  if (table.batchId !== undefined && table.batchLength === undefined) {
    return false
  }
  if (table.positionQuantized !== undefined) {
    if (table.quantizedVolumeOffset === undefined || table.quantizedVolumeScale === undefined) {
      return false
    }
  }
  return true
}

function parse(table: PntsFeatureTable) {
  const json = table._json as IPntsFTJson
  table.position = json['POSITION']
  table.positionQuantized = json['POSITION_QUANTIZED']
  table.rgba = json['RGBA']
  table.rgb = json['RGB']
  table.rgb565 = json['RGB565']
  table.normal = json['NORMAL']
  table.normalOct16p = json['NORMAL_OCT16P']
  table.batchId = json['BATCH_ID']
  table.pointsLength = json['POINTS_LENGTH']
  table.quantizedVolumeOffset = json['QUANTIZED_VOLUME_OFFSET']
  table.quantizedVolumeScale = json['QUANTIZED_VOLUME_SCALE']
  table.constantRgba = json['CONSTANT_RGBA']

  if (json['extensions'] !== undefined) {
    table.extensions = new Set()
    // todo
  }
  table.extras = json['extras']
}

class PntsFeatureTable extends FeatureTable implements IValidate {

  position?: IFTBinaryRef
  positionQuantized?: IFTBinaryRef
  rgba?: IFTBinaryRef
  rgb?: IFTBinaryRef
  rgb565?: IFTBinaryRef
  normal?: IFTBinaryRef
  normalOct16p?: IFTBinaryRef

  pointsLength: number
  
  rtcCenter?: number[]
  quantizedVolumeOffset?: number[]
  quantizedVolumeScale?: number[]
  constantRgba?: number[]
  batchId?: any
  batchLength?: number

  constructor() {
    super()
  }

  static createFromJSON(json: Object, binary: Uint8Array) {
    const ft = new PntsFeatureTable()
    
    ft._json = json
    ft._binary = binary
    ft.featureTableType = FeatureTableType.Pnts

    parse(ft)

    return ft
  }

  validate() {
    return validatePntsFeatureTable(this)
  }
}

export default PntsFeatureTable