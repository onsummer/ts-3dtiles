import { IGLTFMaterial } from "src/interfaces/IGLTFObj";
import GLTFPropertyBase from "./gltf-property-base";
import { GLTFAlphaMode } from "./enum";
import GLTFNormalTextureInfo from "./gltf-normal-texture-info";
import GLTFOcclusionTextureInfo from "./gltf-occlusion-texture-info";
import GLTFPbr from "./gltf-pbr";
import GLTFTextureInfo from "./gltf-texture-info";
import { GLTFDocument } from "..";
declare class GLTFMaterial extends GLTFPropertyBase {
    name?: string;
    pbrMetallicRoughness?: GLTFPbr;
    normalTexture?: GLTFNormalTextureInfo;
    occlusionTexture?: GLTFOcclusionTextureInfo;
    emissiveTexture?: GLTFTextureInfo;
    emissiveFactor?: [number, number, number];
    alphaMode?: GLTFAlphaMode;
    alphaCutoff?: number;
    doubleSided?: boolean;
    constructor();
    set doc(value: GLTFDocument);
    validate(): boolean;
    json(): {};
    static fromJson(json: IGLTFMaterial): GLTFMaterial;
}
export default GLTFMaterial;
