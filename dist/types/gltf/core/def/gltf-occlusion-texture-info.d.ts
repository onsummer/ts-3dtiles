import { GLTFExtensionBase } from "src/gltf/ext";
import { ISerializable, IValidate } from "src/interfaces";
import GLTFTextureInfo from "./gltf-texture-info";
declare class GLTFOcclusionTextureInfo extends GLTFTextureInfo implements IValidate, ISerializable {
    strength: number;
    extensions?: Set<GLTFExtensionBase>;
    extras?: any;
    constructor(index: number, texCoord: number, strength: number);
    validate(): boolean;
    json(): {
        index: number;
        texCoord: number;
    };
}
export default GLTFOcclusionTextureInfo;
