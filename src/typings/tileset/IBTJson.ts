import IBTBinaryRef from "./IBTBinaryRef";

export type BTJsonArrayType = string[] | number[] | boolean[]
export type BTJsonValue = IBTBinaryRef | BTJsonArrayType

export default interface IBTJson {
  [key: string]: BTJsonValue
}