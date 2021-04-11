import IValidate from "../../../typings/IValidate";
import GLTFAlphaMode from "./enum/gltf-alphamode";
import GLTFPbr from "./gltf-pbr";
import GLTFOcclusionTextureInfo from "./gltf-occlusion-texture-info";
import GLTFNormalTextureInfo from "./gltf-normal-texture-info";
import GLTFTextureInfo from "./gltf-texture-info";
import GLTFExtensionBase from "../../ext/gltf-extension-base";
declare class GLTFMaterial implements IValidate {
    pbrMetallicRoughness?: GLTFPbr;
    normalTexture?: GLTFNormalTextureInfo;
    occlusionTexture?: GLTFOcclusionTextureInfo;
    emissiveTexture?: GLTFTextureInfo;
    emissiveFactor?: number[];
    alphaMode?: GLTFAlphaMode;
    alphaCutoff?: number;
    doubleSided?: boolean;
    extensions: Set<GLTFExtensionBase>;
    validate(): boolean;
}
export default GLTFMaterial;
