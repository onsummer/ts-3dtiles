import IValidate from "../../../typings/IValidate";
import GLTFExtensionBase from "../../ext/gltf-extension-base";
import GLTFTextureInfo from "./gltf-texture-info";
declare class GLTFNormalTextureInfo extends GLTFTextureInfo implements IValidate {
    scale: number;
    extensions: Set<GLTFExtensionBase>;
    constructor(index: number, texCoord: number, scale: number);
}
export default GLTFNormalTextureInfo;
