import ITilesetConstructionParam from "../../../typings/tileset/ITilesetConstructionParam"
import TilesetExtBase from "../../ext/ext-base"
import Asset from "./asset"
import Property from "./property"
import Tile from "./tile"

class Tileset {
  asset: Asset
  root: Tile
  geometricError: number
  uri: string
  extensions?: Set<TilesetExtBase> = new Set()
  extras?: any
  extensionsUsed?: string[] = []
  extensionsRequired?: string[] = []
  properties?: Map<any, Property>

  constructor(options: ITilesetConstructionParam) {
    this.root = options.root
    this.geometricError = options.geometricError
    this.uri = options.uri
  }

  /**
   * @deprecated `Tileset.url` 已废弃，请使用 `Tileset.uri`
   */
  get url() {
    return this.uri
  }
  set url(value: string) {
    this.uri = value
  }
}

export default Tileset