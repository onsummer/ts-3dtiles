import { IGLTFMaterial } from "src/interfaces/IGLTFObj";
import GLTFPropertyBase from "./gltf-property-base";
import { GLTFAlphaMode } from "./enum";
import GLTFNormalTextureInfo from "./gltf-normal-texture-info";
import GLTFOcclusionTextureInfo from "./gltf-occlusion-texture-info";
import GLTFPbr from "./gltf-pbr";
import GLTFTextureInfo from "./gltf-texture-info";
declare class GLTFMaterial extends GLTFPropertyBase {
    name?: string;
    pbrMetallicRoughness?: GLTFPbr;
    normalTexture?: GLTFNormalTextureInfo;
    occlusionTexture?: GLTFOcclusionTextureInfo;
    emissiveTexture?: GLTFTextureInfo;
    emissiveFactor?: number[];
    alphaMode?: GLTFAlphaMode;
    alphaCutoff?: number;
    doubleSided?: boolean;
    constructor();
    validate(): boolean;
    json(): {};
    static readFromJson(json: IGLTFMaterial): GLTFMaterial;
}
export default GLTFMaterial;
