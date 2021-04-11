import IValidate from "../../../typings/IValidate";
import GLTFExtensionBase from "../../ext/gltf-extension-base";
declare class GLTFBufferView implements IValidate {
    buffer: number;
    byteLength: number;
    byteOffset?: number;
    extensions: Set<GLTFExtensionBase>;
    validate(): boolean;
}
export default GLTFBufferView;
