import IValidate from "../../interfaces/IValidate"

class GLTFExtensionBase implements IValidate {
  get isRequire() {
    return false
  }

  validate() {
    return true
  }
}

export default GLTFExtensionBase