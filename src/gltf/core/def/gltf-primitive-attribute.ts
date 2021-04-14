import { IGLTFPrimitiveAttribute } from "src/interfaces/IGLTFObj"
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
  /** 3rd */
  _batchid?: number

  static readFromJson(json: IGLTFPrimitiveAttribute): GLTFPrimitiveAttribute {
    const attr = new GLTFPrimitiveAttribute()
    attr.position = json.POSITION
    attr.uv0 = json.TEXCOORD_0
    attr.uv1 = json.TEXCOORD_1
    attr.color0 = json.COLOR_0
    attr.normal = json.NORMAL
    attr.tangent = json.TANGENT
    attr.joints0 = json.JOINTS_0
    attr.weights0 = json.WEIGHTS_0
    attr._batchid = json._BATCHID
    return attr
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
    writeDefinedProperty(attr, '_BATCHID', this._batchid)

    return attr
  }
}

export default GLTFPrimitiveAttribute