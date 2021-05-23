import IValidate from "../../../interfaces/IValidate"
import TilesetExtBase from "../../ext/ext-base"
declare class TileBoundingVolume implements IValidate {
  box?: number[]
  region?: number[]
  sphere?: number[]
  extensions?: Set<TilesetExtBase>
  extras?: any
  validate(): boolean
}
export default TileBoundingVolume
