import IValidate from "../../../../interfaces/IValidate"
import IFTBinaryRef from "../../../../interfaces/tileset/IFTBinaryRef"
import IVctrFTJson from "../../../../interfaces/tileset/IVctrFTJson"

import FeatureTableType from "../enum/featuretable-type"
import FeatureTable from "./featuretable-base"

function validateVctrFeatureTable(table: VctrFeatureTable) {
  if (table.region.length !== 6) {
    return false
  }
  if ((<number[]>table.rtcCenter).length !== 3) {
    return false
  }
  if (table.polygonsLength !== undefined) {
    if (table.polygonCounts === undefined || table.polygonIndexCounts === undefined) {
      return false
    }
  }
  if (table.polylinesLength !== undefined) {
    if (table.polylineCounts === undefined) {
      return false
    }
  }
  return true
}

function parse(table: VctrFeatureTable) {
  const json = table._json as IVctrFTJson
  table.region = json['REGION']
  table.rtcCenter = json['RTC_CENTER']
  table.polygonsLength = json['POLYGONS_LENGTH']
  table.polylinesLength = json['POLYLINES_LENGTH']
  table.pointsLength = json['POINTS_LENGTH']

  table.polygonCounts = json['POLYGON_COUNTS']
  table.polygonIndexCounts = json['POLYGON_INDEX_COUNTS']
  table.polygonMinimumHeights = json['POLYGON_MINIMUM_HEIGHTS']
  table.polygonMaximumHeights = json['POLYGON_MAXIMUM_HEIGHTS']

  table.polylineCounts = json['POLYLINE_COUNTS']
  table.polylineBatchIds = json['POLYLINE_BATCH_IDS']
  table.pointBatchIds = json['POINT_BATCH_IDS']

  if (json['extensions'] !== undefined) {
    table.extensions = new Set()
    // TODO
  }
  table.extras = json['extras']
}

class VctrFeatureTable extends FeatureTable implements IValidate {
  region: number[]
  rtcCenter?: number[]
  
  polygonsLength?: number
  polylinesLength?: number
  pointsLength?: number
  
  polygonCounts?: IFTBinaryRef
  polygonIndexCounts?: IFTBinaryRef
  polygonMinimumHeights?: IFTBinaryRef
  polygonMaximumHeights?: IFTBinaryRef
  polygonBatchIds?: IFTBinaryRef
  
  polylineCounts?: IFTBinaryRef
  polylineBatchIds?: IFTBinaryRef

  pointBatchIds?: IFTBinaryRef

  /**
   *
   */
  constructor() {
    super()
  }

  static createFromJSON(json: Object, binary: Uint8Array) {
    const ft = new VctrFeatureTable()
    
    ft._json = json
    ft._binary = binary
    ft.featureTableType = FeatureTableType.Vctr

    parse(ft)

    return ft
  }

  validate() {
    return validateVctrFeatureTable(this)
  }
}

export default VctrFeatureTable