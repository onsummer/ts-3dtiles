import GLTFTextureInfo from "../core/def/gltf-texture-info";
import GLTFExtensionBase from "./gltf-extension-base";
declare class ExtPbrSpecularGlossiness extends GLTFExtensionBase {
    readonly name = "KHR_materials_pbrSpecularGlossiness";
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
}
export default ExtPbrSpecularGlossiness;
