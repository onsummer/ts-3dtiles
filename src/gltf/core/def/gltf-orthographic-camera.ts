import { IGLTFOrthographicCameraConstructionParam, IValidate } from "src/interfaces"
import ISerializable from "src/interfaces/ISerializable"


class GLTFOrthographicCamera implements IValidate, ISerializable {
  xmag: number
  ymag: number
  zfar: number
  znear: number

  constructor(options: IGLTFOrthographicCameraConstructionParam) {
    this.xmag = options.xmag
    this.ymag = options.ymag
    this.zfar = options.zfar
    this.znear = options.znear
  }

  /**
   * @todo
   */
  validate() {
    return false
  }

  json() {
    if (!this.validate()) {
      throw new Error('[GLTFOrthographicCamera json()] 当前对象属性不合法，请检查')
    }

    const c = {
      xmag: this.xmag,
      ymag: this.ymag,
      zfar: this.zfar,
      znear: this.znear,
    }

    return c
  }
}

export default GLTFOrthographicCamera