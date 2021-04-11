import IValidate from "../../../typings/IValidate";
import GLTFExtensionBase from "../../ext/gltf-extension-base";
declare class GLTFScene implements IValidate {
    nodes: number[];
    name?: string;
    extensions: Set<GLTFExtensionBase>;
    validate(): boolean;
}
export default GLTFScene;
