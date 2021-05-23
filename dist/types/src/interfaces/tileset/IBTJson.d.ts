import IBTBinaryRef from "./IBTBinaryRef"
export declare type BTJsonArrayType = string[] | number[] | boolean[]
export declare type BTJsonValue = IBTBinaryRef | BTJsonArrayType
export default interface IBTJson {
  [key: string]: BTJsonValue
}
