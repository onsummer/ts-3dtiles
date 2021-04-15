import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import { GLTFTextureInfo } from "../../core"
import GLTFExtensionBase from "../gltf-extension-base"

class ExtPbrSpecularGlossiness extends GLTFExtensionBase {
  _name: string = "KHR_materials_pbrSpecularGlossiness"

  diffuseFactor?: number[]
  specularFactor?: number[]
  glossinessFactor?: number
  diffuseTexture?: GLTFTextureInfo
  specularGlossinessTexture?: GLTFTextureInfo
  required?: boolean
  used?: boolean

  validate() {
    if (this.diffuseTexture !== undefined) {
      return this.diffuseTexture.validate()
    }
    if (this.specularGlossinessTexture !== undefined) {
      this.specularGlossinessTexture.validate()
    }
    if (this.diffuseFactor !== undefined) {
      if (this.diffuseFactor.length !== 4) {
        return false
      }
      if (this.diffuseFactor.every(v => v > 0 && v < 1)) {
        return false
      }
    }
    if (this.specularFactor !== undefined) {
      if (this.specularFactor.length !== 3) {
        return false
      }
      if (this.specularFactor.every(v => v > 1 || v < 0)) {
        return false
      }
    }
    if (this.glossinessFactor !== undefined && (this.glossinessFactor > 1 || this.glossinessFactor < 0)) {
      return false
    }

    return true
  }

  json() {
    if (this.validate() === false) {
      throw new Error('[ExtPbrSpecularGlossiness json()] 当前对象的属性值不合法，请检查')
    }
    const ext = {}
    if (this.diffuseFactor && !this.diffuseFactor.every(v => v === 1)) {
      writeDefinedProperty(ext, 'diffuseFactor', this.diffuseFactor)
    }
    if (this.specularFactor && !this.specularFactor.every(v => v === 1)) {
      writeDefinedProperty(ext, 'diffuseFactor', this.specularFactor)
    }
    if (this.glossinessFactor !== 1.0)
      writeDefinedProperty(ext, 'glossinessFactor', this.glossinessFactor)
    if (this.diffuseTexture !== undefined) {
      writeDefinedProperty(ext, 'diffuseTexture', this.diffuseTexture.json())
    }
    if (this.specularGlossinessTexture !== undefined) {
      writeDefinedProperty(ext, 'specularGlossinessTexture', this.specularGlossinessTexture.json())
    }
    return ext
  }
}

export default ExtPbrSpecularGlossiness