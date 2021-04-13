import { ISerializable, IValidate } from "src/interfaces";
declare class GLTFExtensionBase implements IValidate, ISerializable {
    protected _name: string;
    get name(): string;
    get isRequire(): boolean;
    validate(): boolean;
    json(): void;
}
export default GLTFExtensionBase;
