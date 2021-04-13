import { IGLTFPerspectiveCameraConstructionParam, IValidate } from "src/interfaces"
import ISerializable from "src/interfaces/ISerializable"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"

class GLTFPerspectiveCamera implements IValidate, ISerializable {
  yfov: number
  znear: number
  zfar?: number
  aspectRatio?: number

  constructor(options: IGLTFPerspectiveCameraConstructionParam) {
    this.yfov = options.yfov
    this.znear = options.znear
    this.zfar = options.zfar
    this.aspectRatio = options.aspectRatio
  }

  /**
   * @todo 
   */
  validate() {
    return false
  }

  json() {
    if (!this.validate()) {
      throw new Error('[GLTFPerspectiveCamera json()] 当前对象属性有问题，请检查')
    }

    const c = {
      yfov: this.yfov,
      znear: this.znear
    }

    writeDefinedProperty(c, 'aspectRatio', this.aspectRatio)
    writeDefinedProperty(c, 'zfar', this.zfar)

    return c
  }
}

export default GLTFPerspectiveCamera