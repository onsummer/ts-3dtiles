import { GLTFExtensionBase } from "src/gltf/ext";
import { IValidate } from "src/interfaces";
declare class GLTFSkin implements IValidate {
    inverseBindMatrices?: number;
    skeleton?: number;
    name?: string;
    joints: number[];
    extensions?: Set<GLTFExtensionBase>;
    extras?: any;
    validate(): boolean;
    json(): {};
}
export default GLTFSkin;
