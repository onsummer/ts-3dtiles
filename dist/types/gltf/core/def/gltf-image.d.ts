import IValidate from "../../../typings/IValidate";
import GLTFExtensionBase from "../../ext/gltf-extension-base";
import MIME from "./enum/mime";
declare class GLTFImage implements IValidate {
    uri?: string;
    bufferView?: number;
    mimeType?: MIME;
    name?: string;
    extensions: Set<GLTFExtensionBase>;
    validate(): boolean;
}
export default GLTFImage;
