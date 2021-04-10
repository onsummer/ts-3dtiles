import IValidate from "../../../../typings/IValidate"
import TilesetExtBase from "../../../ext/ext-base"
import FeatureTableType from "../enum/featuretable-type"

class FeatureTable implements IValidate {

  _json: Object
  _binary: Uint8Array
  extensions?: Set<TilesetExtBase>
  extras?: any

  featureTableType: FeatureTableType

  validate() {
    return false // base class always return false.
  }
}

export default FeatureTable