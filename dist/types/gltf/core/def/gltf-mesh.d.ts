import ISerializable from "src/interfaces/ISerializable";
import IValidate from "../../../interfaces/IValidate";
import GLTFExtensionBase from "../../ext/gltf-extension-base";
import GLTFPrimitive from "./gltf-primitive";
declare class GLTFMesh implements IValidate, ISerializable {
    primitives: GLTFPrimitive[];
    weights?: number[];
    name?: string;
    extensions: Set<GLTFExtensionBase>;
    validate(): boolean;
    json(): {
        primitives: {
            attribute: {
                POSITION: number;
            };
        }[];
    };
}
export default GLTFMesh;
