import { ISerializable, IValidate } from "src/interfaces";
import GLTFAccessorSparseIndices from "./gltf-accessor-sparse-indices";
import GLTFAccessorSparseValues from "./gltf-accessor-sparse-values";
declare class GLTFAccessorSparse implements IValidate, ISerializable {
    count: number;
    indices: GLTFAccessorSparseIndices;
    values: GLTFAccessorSparseValues;
    validate(): boolean;
    json(): {
        count: number;
        indices: {
            bufferView: number;
            byteOffset: number;
            componentType: import("./enum/gltf-component-type").default;
        };
        values: {
            bufferView: number;
        };
    };
}
export default GLTFAccessorSparse;
