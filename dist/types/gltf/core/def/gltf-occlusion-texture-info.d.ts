import IValidate from "../../../typings/IValidate";
import GLTFExtensionBase from "../../ext/gltf-extension-base";
import GLTFTextureInfo from "./gltf-texture-info";
declare class GLTFOcclusionTextureInfo extends GLTFTextureInfo implements IValidate {
    strength: number;
    extensions: Set<GLTFExtensionBase>;
    constructor(index: number, texCoord: number, strength: number);
    validate(): boolean;
}
export default GLTFOcclusionTextureInfo;
