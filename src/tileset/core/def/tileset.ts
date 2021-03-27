import ITilesetConstructionParam from "../../../typings/tileset/ITilesetConstructionParam"
import Tile from "./tile"

class Tileset {
  root: Tile
  geometricError: number
  uri: string

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