import IValidate from "../../typings/IValidate"

class GLTFExtensionBase implements IValidate {
  readonly name: string = "gltf_extbase"

  validate = () => true
}

export default GLTFExtensionBase