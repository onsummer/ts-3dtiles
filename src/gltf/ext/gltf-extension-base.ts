import ISerializable from "src/interfaces/ISerializable"
import IValidate from "../../interfaces/IValidate"

class GLTFExtensionBase implements IValidate, ISerializable {
  protected _name: string = ""
  get name() {
    return this._name
  }
  
  get isRequire() {
    return false
  }

  validate() {
    return true
  }

  json() {
    return
  }
}

export default GLTFExtensionBase