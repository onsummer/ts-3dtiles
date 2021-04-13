import ISerializable from "src/interfaces/ISerializable";
import IValidate from "../../../interfaces/IValidate";
import GLTFExtensionBase from "../../ext/gltf-extension-base";
import GLTFPrimitiveMode from "./enum/gltf-primitivemode";
import GLTFPrimitiveAttribute from "./gltf-primitive-attribute";
declare class GLTFPrimitive implements IValidate, ISerializable {
    attribute: GLTFPrimitiveAttribute;
    indices?: number;
    material?: number;
    mode: GLTFPrimitiveMode;
    extensions: Set<GLTFExtensionBase>;
    extras: any;
    constructor(options: {
        attribute: {
            position: number;
            [propName: string]: any;
        };
        indices?: number;
        material?: number;
        mode?: GLTFPrimitiveMode;
    });
    validate(): boolean;
    json(): {
        attribute: {
            POSITION: number;
        };
    };
}
export default GLTFPrimitive;
