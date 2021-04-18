import { ISerializable, IValidate } from "src/interfaces";
declare class GLTFExtensionBase implements IValidate, ISerializable {
    protected _name: string;
    get name(): string;
    required?: boolean;
    used?: boolean;
    validate(): boolean;
    json(): void;
}
export default GLTFExtensionBase;
