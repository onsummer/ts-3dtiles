import IValidate from "../../../typings/IValidate"
import TilesetExtBase from "../../ext/ext-base"
import TileBoundingVolume from "./tile-bounding-volume"
// import * as URI from 'uri-js'

class TileContent implements IValidate {
  boundingVolume?: TileBoundingVolume
  uri: string
  extensions?: Set<TilesetExtBase> = new Set()
  extras?: any

  /**
   * @deprecated `TileContent.url` 已废弃，请使用 `TileContent.uri`
   */
  get url() {
    return this.uri
  }

  validate() {
    return true
  }
}

export default TileContent