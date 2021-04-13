import { IGLTFAsset } from "src/interfaces/IGLTFObj"
import ISerializable from "src/interfaces/ISerializable"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import IValidate from "../../../interfaces/IValidate"
import GLTFExtensionBase from "../../ext/gltf-extension-base"
import GLTFVersion from "./enum/gltf-version"

class GLTFAsset implements IValidate, ISerializable {
  version: GLTFVersion = GLTFVersion.TWO
  generator?: string
  copyright?: string
  minVersion?: GLTFVersion
  extensions?: Set<GLTFExtensionBase> = new Set()
  extras?: any

  validate() {
    return true
  }
  json() {
    const asset = {
      version: this.version
    }
    writeDefinedProperty(asset, 'generator', this.generator)
    writeDefinedProperty(asset, 'minVersion', this.minVersion)
    writeDefinedProperty(asset, 'copyright', this.copyright)
    writeDefinedProperty(asset, 'extensions', this.generator)
    writeDefinedProperty(asset, 'extras', this.extras)

    return asset
  }

  static readFromJson(json: IGLTFAsset): GLTFAsset {
    const asset = new GLTFAsset()
    asset.version = json.version as GLTFVersion
    asset.minVersion = json.minVersion as GLTFVersion
    asset.copyright = json.copyright
    asset.generator = json.generator
    asset.extras = json.extras
    return asset
  }
}

export default GLTFAsset