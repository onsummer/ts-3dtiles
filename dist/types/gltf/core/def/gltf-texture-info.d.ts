import { ISerializable, IValidate } from "src/interfaces";
declare class GLTFTextureInfo implements IValidate, ISerializable {
    index: number;
    texCoord: number;
    constructor(index: number, texCoord: number);
    validate(): boolean;
    json(): {
        index: number;
        texCoord: number;
    };
}
export default GLTFTextureInfo;
