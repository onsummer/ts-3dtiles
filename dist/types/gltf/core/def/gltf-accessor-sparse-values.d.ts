import { GLTFExtensionBase } from "src/gltf/ext";
import { ISerializable, IValidate } from "src/interfaces";
declare class GLTFAccessorSparseValues implements IValidate, ISerializable {
    bufferView: number;
    byteOffset?: number;
    extensions?: Set<GLTFExtensionBase>;
    extras?: any;
    validate(): boolean;
    json(): {
        bufferView: number;
    };
}
export default GLTFAccessorSparseValues;
