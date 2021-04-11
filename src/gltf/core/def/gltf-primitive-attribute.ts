import ISerializable from "src/interfaces/ISerializable"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import IValidate from "../../../interfaces/IValidate"

class GLTFPrimitiveAttribute implements IValidate, ISerializable {
  position: number
  uv0?: number
  uv1?: number
  color0?: number
  normal?: number
  tangent?: number
  joints0?: number
  weights0?: number

  constructor(options: {
    position: number,
    uv0?: number,
    uv1?: number,
    color0?: number,
    normal?: number,
    tangent?: number,
    joints0?: number
    weights0?: number
  }) {
    this.position = options.position
    this.uv0 = options.uv0
    this.uv1 = options.uv1
    this.color0 = options.color0
    this.normal = options.normal
    this.tangent = options.tangent
    this.joints0 = options.joints0
    this.weights0 = options.weights0
  }

  validate() {
    return Object.values(this).every(k => k! < 0)
  }

  json() {
    const attr = {
      POSITION: this.position,
    }
    writeDefinedProperty(attr, 'NORMAL', this.normal)
    writeDefinedProperty(attr, 'TANGENT', this.tangent)
    writeDefinedProperty(attr, 'TEXCOORD_0', this.uv0)
    writeDefinedProperty(attr, 'TEXCOORD_1', this.uv1)
    writeDefinedProperty(attr, 'COLOR_0', this.color0)
    writeDefinedProperty(attr, 'JOINTS_0', this.joints0)
    writeDefinedProperty(attr, 'WEIGHTS_0', this.weights0)
  }
}

export default GLTFPrimitiveAttribute