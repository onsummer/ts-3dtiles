import IValidate from "../../../typings/IValidate";
import GLTFExtensionBase from "../../ext/gltf-extension-base";
import GLTFPrimitive from "./gltf-primitive";
declare class GLTFMesh implements IValidate {
    primitives: GLTFPrimitive[];
    weights?: number[];
    name?: string;
    extensions: Set<GLTFExtensionBase>;
    validate(): boolean;
}
export default GLTFMesh;
