import IValidate from "../../../typings/IValidate";
import { GLTFExtensionBase } from "../../ext";
import { GLTFComponentType } from "./enum";
declare class GLTFAccessorSparseIndices implements IValidate {
    bufferView: number;
    byteOffset: number;
    componentType: GLTFComponentType;
    extensions: Set<GLTFExtensionBase>;
    validate(): boolean;
}
export default GLTFAccessorSparseIndices;
