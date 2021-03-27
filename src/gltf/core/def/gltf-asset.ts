import IValidate from "../../../typings/IValidate"
import GLTFExtensionBase from "../../ext/gltf-extension-base"
import GLTFVersion from "./enum/gltf-version"

class GLTFAsset implements IValidate {
  version: GLTFVersion = GLTFVersion.TWO
  generator?: string  
  copyright?: string
  minVersion?: GLTFVersion
  extensions: Set<GLTFExtensionBase> = new Set()

  validate = () => true
}

export default GLTFAsset