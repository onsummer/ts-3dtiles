import IValidate from "../../../typings/IValidate";
import { GLTFExtensionBase } from "../../ext";
declare class GLTFSkin implements IValidate {
    inverseBindMatrices?: number;
    skeleton?: number;
    name?: string;
    joints: number[];
    extensions?: Set<GLTFExtensionBase>;
    extras?: Object;
    validate(): boolean;
}
export default GLTFSkin;
