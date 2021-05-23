import ITilesetConstructionParam from "../../../interfaces/tileset/ITilesetConstructionParam"
import TilesetExtBase from "../../ext/ext-base"
import Asset from "./asset"
import Property from "./property"
import Tile from "./tile"
declare class Tileset {
  asset: Asset
  root: Tile
  geometricError: number
  uri: string
  extensions?: Set<TilesetExtBase>
  extras?: any
  extensionsUsed?: string[]
  extensionsRequired?: string[]
  properties?: Map<any, Property>
  constructor(options: ITilesetConstructionParam)
  /**
   * @deprecated `Tileset.url` 已废弃，请使用 `Tileset.uri`
   */
  get url(): string
  set url(value: string)
}
export default Tileset
