import IFTBinaryRef from "./IFTBinaryRef";

export default interface IVctrFTJson {
  REGION: number[]
  RTC_CENTER?: number[]
  POLYGONS_LENGTH?: number
  POLYLINES_LENGTH?: number
  POINTS_LENGTH?: number
  POLYGON_COUNTS?: IFTBinaryRef
  POLYGON_INDEX_COUNTS?: IFTBinaryRef
  POLYGON_MINIMUM_HEIGHTS?: IFTBinaryRef
  POLYGON_MAXIMUM_HEIGHTS?: IFTBinaryRef
  POLYGON_BATCH_IDS?: IFTBinaryRef
  POLYLINE_COUNTS?: IFTBinaryRef
  POLYLINE_BATCH_IDS?: IFTBinaryRef
  POINT_BATCH_IDS?: IFTBinaryRef
  extensions?: Object
  extras?: any
}