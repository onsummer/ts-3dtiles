import { IGLTFTextureInfo } from "src/interfaces/IGLTFObj";
import GLTFPropertyBase from "./gltf-property-base";
declare class GLTFTextureInfo extends GLTFPropertyBase {
    index: number;
    texCoord: number;
    constructor(index: number, texCoord: number);
    validate(): boolean;
    json(): {
        index: number;
        texCoord: number;
    };
    static readFromJson(json: IGLTFTextureInfo): GLTFTextureInfo;
}
export default GLTFTextureInfo;
