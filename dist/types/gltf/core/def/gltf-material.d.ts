import { GLTFExtensionBase } from "src/gltf/ext";
import { ISerializable, IValidate } from "src/interfaces";
import { GLTFAlphaMode } from "./enum";
import GLTFNormalTextureInfo from "./gltf-normal-texture-info";
import GLTFOcclusionTextureInfo from "./gltf-occlusion-texture-info";
import GLTFPbr from "./gltf-pbr";
import GLTFTextureInfo from "./gltf-texture-info";
declare class GLTFMaterial implements IValidate, ISerializable {
    name?: string;
    pbrMetallicRoughness?: GLTFPbr;
    normalTexture?: GLTFNormalTextureInfo;
    occlusionTexture?: GLTFOcclusionTextureInfo;
    emissiveTexture?: GLTFTextureInfo;
    emissiveFactor?: number[];
    alphaMode?: GLTFAlphaMode;
    alphaCutoff?: number;
    doubleSided?: boolean;
    extensions?: Set<GLTFExtensionBase>;
    extras?: any;
    validate(): boolean;
    json(): {};
}
export default GLTFMaterial;
