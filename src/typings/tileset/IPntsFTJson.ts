import IFTBinaryRef from "./IFTBinaryRef";

export default interface IPntsFTJson {
  POSITION?: IFTBinaryRef
  POSITION_QUANTIZED?: IFTBinaryRef
  RGBA?: IFTBinaryRef
  RGB?: IFTBinaryRef
  RGB565?: IFTBinaryRef
  NORMAL?: IFTBinaryRef
  NORMAL_OCT16P?: IFTBinaryRef
  BATCH_ID?: IFTBinaryRef

  POINTS_LENGTH: number
  
  RTC_CENTER?: number[]
  QUANTIZED_VOLUME_OFFSET?: number[]
  QUANTIZED_VOLUME_SCALE?: number[]
  CONSTANT_RGBA?: number[]
  BATCH_LENGTH?: number

  extensions?: Object
  extras?: Object
}