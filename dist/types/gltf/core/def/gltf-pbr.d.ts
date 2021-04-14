import { IGLTFPbr } from "src/interfaces/IGLTFObj";
import GLTFPropertyBase from "./gltf-property-base";
import GLTFTextureInfo from "./gltf-texture-info";
declare class GLTFPbr extends GLTFPropertyBase {
    baseColorFactor?: number[];
    baseColorTexture?: GLTFTextureInfo;
    metallicFactor?: number;
    roughnessFactor?: number;
    metallicRoughnessTexture?: GLTFTextureInfo;
    constructor();
    validate(): boolean;
    json(): {};
    static readFromJson(json: IGLTFPbr): GLTFPbr;
}
export default GLTFPbr;
