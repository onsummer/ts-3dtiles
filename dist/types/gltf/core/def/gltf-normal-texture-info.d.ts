import { IGLTFNormalTextureInfo } from "src/interfaces/IGLTFObj";
import GLTFTextureInfo from "./gltf-texture-info";
declare class GLTFNormalTextureInfo extends GLTFTextureInfo {
    scale: number;
    constructor(index: number, texCoord: number, scale: number);
    validate(): boolean;
    json(): {
        index: number;
        texCoord: number;
    };
    static readFromJson(json: IGLTFNormalTextureInfo): GLTFNormalTextureInfo;
}
export default GLTFNormalTextureInfo;
