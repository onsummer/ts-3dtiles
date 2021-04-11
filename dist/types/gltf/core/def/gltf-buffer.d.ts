import IValidate from "../../../typings/IValidate";
import GLTFExtensionBase from "../../ext/gltf-extension-base";
declare class GLTFBuffer implements IValidate {
    byteLength: number;
    uri?: string;
    /** @deprecated */
    url?: string;
    extensions: Set<GLTFExtensionBase>;
    validate(): boolean;
}
export default GLTFBuffer;
