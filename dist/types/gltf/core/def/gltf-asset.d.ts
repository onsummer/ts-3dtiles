import ISerializable from "src/interfaces/ISerializable";
import IValidate from "../../../interfaces/IValidate";
import GLTFExtensionBase from "../../ext/gltf-extension-base";
import GLTFVersion from "./enum/gltf-version";
declare class GLTFAsset implements IValidate, ISerializable {
    version: GLTFVersion;
    generator?: string;
    copyright?: string;
    minVersion?: GLTFVersion;
    extensions?: Set<GLTFExtensionBase>;
    extras?: any;
    validate(): boolean;
    json(): {
        version: GLTFVersion;
    };
}
export default GLTFAsset;
