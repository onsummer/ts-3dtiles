import { ISerializable, IValidate } from "src/interfaces"

class GLTFOrthographicCamera implements IValidate, ISerializable {
  xmag: number
  ymag: number
  zfar: number
  znear: number

  validate() {
    return this.znear >= 0 && this.zfar >= 0 && this.xmag !== 0 && this.ymag !== 0 && this.zfar > this.znear
  }

  json() {
    if (!this.validate()) {
      throw new Error('[GLTFOrthographicCamera json()] 当前 orthographic camera 对象属性不合法，请检查')
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