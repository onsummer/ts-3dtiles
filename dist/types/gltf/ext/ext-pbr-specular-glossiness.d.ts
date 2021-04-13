import { GLTFTextureInfo } from "../core";
import GLTFExtensionBase from "./gltf-extension-base";
declare class ExtPbrSpecularGlossiness extends GLTFExtensionBase {
    _name: string;
    diffuseFactor?: number[];
    specularFactor?: number[];
    glossinessFactor?: number;
    diffuseTexture?: GLTFTextureInfo;
    specularGlossinessTexture?: GLTFTextureInfo;
    get isRequire(): boolean;
    /**
     * @todo
     */
    validate(): boolean;
    /**
     *
     * @todo
     */
    json(): {};
}
export default ExtPbrSpecularGlossiness;
