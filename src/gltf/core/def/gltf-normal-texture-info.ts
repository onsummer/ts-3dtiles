import IValidate from "../../../interfaces/IValidate";
import GLTFExtensionBase from "../../ext/gltf-extension-base";
import GLTFTextureInfo from "./gltf-texture-info";

class GLTFNormalTextureInfo 
extends GLTFTextureInfo 
implements IValidate {
  scale: number
  extensions: Set<GLTFExtensionBase> = new Set()

  constructor(index: number, texCoord: number, scale: number) {
    super(index, texCoord)
    this.scale = scale
  }
}

export default GLTFNormalTextureInfo