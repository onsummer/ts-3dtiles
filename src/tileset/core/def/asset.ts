import IValidate from "../../../typings/IValidate"
import TilesetExtBase from "../../ext/ext-base"

class Asset implements IValidate {
  version: string
  tilesetVersion?: string
  extensions?: Set<TilesetExtBase>
  extras?: Object

  validate() {
    return true
  }
}

export default Asset