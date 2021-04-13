import ISerializable from "src/interfaces/ISerializable";
import IValidate from "../../../interfaces/IValidate";
import GLTFExtensionBase from "../../ext/gltf-extension-base";
import MIME from "./enum/mime";
declare class GLTFImage implements IValidate, ISerializable {
    uri?: string;
    bufferView?: number;
    mimeType?: MIME;
    name?: string;
    extensions?: Set<GLTFExtensionBase>;
    extras?: any;
    validate(): boolean;
    json(): {};
}
export default GLTFImage;
