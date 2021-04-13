import ISerializable from "src/interfaces/ISerializable";
import IValidate from "../../../interfaces/IValidate";
import GLTFExtensionBase from "../../ext/gltf-extension-base";
declare class GLTFTexture implements IValidate, ISerializable {
    sampler?: number;
    source?: number;
    name?: string;
    extensions?: Set<GLTFExtensionBase>;
    extras?: any;
    validate(): boolean;
    json(): {};
}
export default GLTFTexture;
