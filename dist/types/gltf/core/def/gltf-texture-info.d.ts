import IValidate from "../../../typings/IValidate";
declare class GLTFTextureInfo implements IValidate {
    index: number;
    texCoord: number;
    constructor(index: number, texCoord: number);
    validate(): boolean;
}
export default GLTFTextureInfo;
