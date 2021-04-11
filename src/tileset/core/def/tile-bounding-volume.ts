import IValidate from "../../../interfaces/IValidate"
import TilesetExtBase from "../../ext/ext-base"

class TileBoundingVolume implements IValidate {
  box?: number[]
  region?: number[]
  sphere?: number[]
  extensions?: Set<TilesetExtBase>
  extras?: any

  validate() {
    const boxExist = this.box === undefined ? 1 : 0
    const regionExist = this.region === undefined ? 1 : 0
    const sphereExist = this.sphere === undefined ? 1 : 0
    // === 3 意思是三个都不存在
    // === 2 意思是存在 1 个
    // === 1 意思是存在 2 个
    // === 0 意思是存在 3 个
    if (boxExist + regionExist + sphereExist !== 2) {
      return false
    }

    if ((<number[]>this.box).length != 12)
      return false
    if ((<number[]>this.region).length != 6)
      return false
    if ((<number[]>this.sphere).length != 4)
      return false

    return true
  }
}

export default TileBoundingVolume