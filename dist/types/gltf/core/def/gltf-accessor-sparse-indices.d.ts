import { GLTFExtensionBase } from "src/gltf/ext";
import { ISerializable, IValidate } from "src/interfaces";
import { GLTFComponentType } from "./enum";
declare class GLTFAccessorSparseIndices implements IValidate, ISerializable {
    bufferView: number;
    byteOffset: number;
    componentType: GLTFComponentType;
    extensions?: Set<GLTFExtensionBase>;
    extras?: any;
    validate(): boolean;
    json(): {
        bufferView: number;
        byteOffset: number;
        componentType: GLTFComponentType;
    };
}
export default GLTFAccessorSparseIndices;
