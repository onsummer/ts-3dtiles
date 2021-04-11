import IValidate from "../../typings/IValidate";
declare class GLTFExtensionBase implements IValidate {
    get isRequire(): boolean;
    validate(): boolean;
}
export default GLTFExtensionBase;
