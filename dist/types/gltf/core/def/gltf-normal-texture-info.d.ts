import { GLTFExtensionBase } from "src/gltf/ext";
import { ISerializable, IValidate } from "src/interfaces";
import GLTFTextureInfo from "./gltf-texture-info";
declare class GLTFNormalTextureInfo extends GLTFTextureInfo implements IValidate, ISerializable {
    scale: number;
    extensions?: Set<GLTFExtensionBase>;
    extras?: any;
    constructor(index: number, texCoord: number, scale: number);
    validate(): boolean;
    json(): {
        index: number;
        texCoord: number;
    };
}
export default GLTFNormalTextureInfo;
