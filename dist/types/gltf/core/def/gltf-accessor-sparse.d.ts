import IValidate from "../../../typings/IValidate";
import GLTFAccessorSparseIndices from "./gltf-accessor-sparse-indices";
import GLTFAccessorSparseValues from "./gltf-accessor-sparse-values";
declare class GLTFAccessorSparse implements IValidate {
    count: number;
    indices: GLTFAccessorSparseIndices;
    values: GLTFAccessorSparseValues;
    validate(): boolean;
}
export default GLTFAccessorSparse;
