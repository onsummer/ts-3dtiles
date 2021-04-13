import ISerializable from "src/interfaces/ISerializable";
import IValidate from "../../../interfaces/IValidate";
import GLTFExtensionBase from "../../ext/gltf-extension-base";
declare class GLTFScene implements IValidate, ISerializable {
    nodes: number[];
    name?: string;
    extensions: Set<GLTFExtensionBase>;
    validate(): boolean;
    json(): {
        nodes: number[];
    };
}
export default GLTFScene;
