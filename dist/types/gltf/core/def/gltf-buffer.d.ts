import ISerializable from "src/interfaces/ISerializable";
import IValidate from "../../../interfaces/IValidate";
import GLTFExtensionBase from "../../ext/gltf-extension-base";
declare class GLTFBuffer implements IValidate, ISerializable {
    byteLength: number;
    uri?: string;
    extensions?: Set<GLTFExtensionBase>;
    extras?: any;
    /** @deprecated */
    get url(): string | undefined;
    validate(): boolean;
    json(): {
        byteLength: number;
    };
}
export default GLTFBuffer;
