import GLTFTextureInfo from "./gltf-texture-info";
declare class GLTFOcclusionTextureInfo extends GLTFTextureInfo {
    strength: number;
    constructor(index: number, texCoord: number, strength: number);
    validate(): boolean;
    json(): {
        index: number;
        texCoord: number;
    };
}
export default GLTFOcclusionTextureInfo;
