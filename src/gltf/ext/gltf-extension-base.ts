import { ISerializable, IValidate } from "src/interfaces"

class GLTFExtensionBase implements IValidate, ISerializable {
  protected _name: string = ""
  get name() {
    return this._name
  }
  
  required?: boolean
  used?: boolean

  validate() {
    return true
  }

  json() {
    return
  }
}

export default GLTFExtensionBase