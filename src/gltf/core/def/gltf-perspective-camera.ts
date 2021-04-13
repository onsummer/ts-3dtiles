import { ISerializable, IValidate } from "src/interfaces"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"

class GLTFPerspectiveCamera implements IValidate, ISerializable {
  yfov: number
  znear: number
  zfar?: number
  aspectRatio?: number

  validate() {
    let flag = this.yfov >= 0 && this.znear >= 0

    this.aspectRatio !== undefined ? flag = flag && this.aspectRatio >= 0 : flag
    this.zfar !== undefined ? flag = flag && this.zfar >= 0 : flag
    this.zfar !== undefined ? flag = flag && this.zfar > this.znear : flag

    return flag
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