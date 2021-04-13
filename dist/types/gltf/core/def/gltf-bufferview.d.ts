import { GLTFExtensionBase } from "src/gltf/ext";
import { ISerializable, IValidate } from "src/interfaces";
import GLTFBufferViewTarget from "./enum/gltf-bufferview-target";
declare class GLTFBufferView implements IValidate, ISerializable {
    buffer: number;
    byteLength: number;
    byteOffset?: number;
    byteStride?: number;
    target?: GLTFBufferViewTarget;
    extensions?: Set<GLTFExtensionBase>;
    extras?: any;
    validate(): boolean;
    json(): {
        buffer: number;
        byteLength: number;
    };
}
export default GLTFBufferView;
