import IValidate from "../../../typings/IValidate"
import TilesetExtBase from "../../ext/ext-base"
import TileRefine from "./enum/tile-refine"
import TileBoundingVolume from "./tile-bounding-volume"
import TileContent from "./tile-content"

class Tile implements IValidate {
  boundingVolume: TileBoundingVolume
  geometricError: number
  viewerRequestVolume?: TileBoundingVolume
  refine?: TileRefine
  content?: TileContent
  transform?: number[] = [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1] // wait to def as Mat4
  children?: Tile[]
  extensions?: Set<TilesetExtBase> = new Set()
  extras?: Object

  validate() {
    return true
  }

  /**
   * @todo
   */
  toJson() {
    if (!this.validate()) {
      throw new Error('[Tile toJson()] 验证此对象失败！')
    }
    const obj = {}
    if (this.transform !== undefined) {
      Object.defineProperty(obj, 'transform', {
        value: this.transform
      })
    }

  }
}

export default Tile