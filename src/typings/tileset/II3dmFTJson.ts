import IFTBinaryRef from "./IFTBinaryRef";

export default interface II3dmFTJson {
  POSITION?: IFTBinaryRef
  POSITION_QUANTIZED?: IFTBinaryRef
  NORMAL_UP?: IFTBinaryRef
  NORMAL_RIGHT?: IFTBinaryRef
  NORMAL_UP_OCT32P?: IFTBinaryRef
  NORMAL_RIGHT_OCT32P?: IFTBinaryRef
  SCALE?: IFTBinaryRef
  SCALE_NON_UNIFORM?: IFTBinaryRef
  BATCH_ID?: IFTBinaryRef

  INSTANCES_LENGTH: number
  
  RTC_CENTER?: number[]
  QUANTIZED_VOLUME_OFFSET?: number[]
  QUANTIZED_VOLUME_SCALE?: number[]
  EAST_NORTH_UP?: boolean

  extensions?: Object
  extras?: Object
}