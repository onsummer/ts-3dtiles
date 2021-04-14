import { IGLTFSkin } from "src/interfaces/IGLTFObj"
import writeDefinedProperty from "src/utils/io/writeDefinedProperty"
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty"
import GLTFPropertyBase from "./gltf-property-base"

class GLTFSkin extends GLTFPropertyBase {
  inverseBindMatrices?: number
  skeleton?: number
  name?: string
  joints: number[]

  constructor() {
    super()
  }
  
  validate() {
    return this.joints.length > 1
  }

  json() {
    if (!this.validate()) {
      throw new Error('[GLTFSkin json()] 当前 skin 属性不合法，请检查')
    }

    const sk = {}

    writeDefinedProperty(sk, 'inverseBindMatrices', this.inverseBindMatrices)
    writeDefinedProperty(sk, 'skeleton', this.skeleton)
    writeDefinedProperty(sk, 'name', this.name)
    writeDefinedProperty(sk, 'joints', this.joints.length !== 0 ? this.joints : undefined)
    writeExtensionsProperty(sk, this.extensions)
    writeDefinedProperty(sk, 'extras', this.extras)

    return sk
  }

  static readFromJson(json: IGLTFSkin) {
    const skin = new GLTFSkin()
    skin.joints = json.joints
    skin.name = json.name
    skin.inverseBindMatrices = json.inverseBindMatrices
    skin.skeleton = json.skeleton
    skin.extras = json.extras
    return skin
  }
}

export default GLTFSkin