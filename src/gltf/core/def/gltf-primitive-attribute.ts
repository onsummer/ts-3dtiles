import IValidate from "../../../typings/IValidate"

class GLTFPrimitiveAttribute implements IValidate {
  position: number
  st1?: number
  normal?: number
  
  constructor(options: {
    position: number,
    st1?: number,
    normal?: number
  }) {
    this.position = options.position
    this.st1 = options.st1
    this.normal = options.normal
  }

  validate() {
    return Object.values(this).every(k => k! < 0)
  }
}

export default GLTFPrimitiveAttribute