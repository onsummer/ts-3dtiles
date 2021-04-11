import IValidate from "../../../typings/IValidate";
import { GLTFExtensionBase } from "../../ext";
declare class GLTFAccessorSparseValues implements IValidate {
    bufferView: number;
    byteOffset?: number;
    extensions: Set<GLTFExtensionBase>;
    validate(): boolean;
}
export default GLTFAccessorSparseValues;
