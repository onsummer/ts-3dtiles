import { IGLTFAsset } from "src/interfaces/IGLTFObj"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import GLTFPropertyBase from "./gltf-property-base"
import GLTFVersion, { GLTFVersionValues } from "./enum/gltf-version"

class GLTFAsset extends GLTFPropertyBase {
  version: GLTFVersion = GLTFVersion.TWO
  generator?: string
  copyright?: string
  minVersion?: GLTFVersion

  constructor() {
    super()
  }

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
    if (GLTFVersionValues.includes(json.version)) {
      asset.version = json.version as GLTFVersion
    } else {
      throw new Error(`[GLTFAsset.readFromJson()] 参数 version：${json.version} 不合法，请检查`)
    }

    if (json.minVersion !== undefined) {
      if (GLTFVersionValues.includes(json.minVersion))
        asset.minVersion = json.version as GLTFVersion
      else
        throw new Error(`[GLTFAsset.readFromJson()] 参数 minVersion: ${json.minVersion} 不合法，请检查`)
    }
    asset.copyright = json.copyright
    asset.generator = json.generator
    asset.extras = json.extras
    return asset
  }
}

export default GLTFAsset