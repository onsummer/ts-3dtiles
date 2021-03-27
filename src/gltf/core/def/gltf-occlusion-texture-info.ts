import IValidate from "../../../typings/IValidate";
import GLTFExtensionBase from "../../ext/gltf-extension-base";
import GLTFTextureInfo from "./gltf-texture-info";

class GLTFOcclusionTextureInfo 
extends GLTFTextureInfo 
implements IValidate {
  strength: number
  extensions: Set<GLTFExtensionBase> = new Set()

  constructor(index: number, texCoord: number, strength: number) {
    super(index, texCoord)
    this.strength = strength
  }

  validate() {
    return (this.strength > 1 || this.strength < 0)
  }
}

export default GLTFOcclusionTextureInfo