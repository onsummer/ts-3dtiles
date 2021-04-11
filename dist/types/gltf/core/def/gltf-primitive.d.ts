import IValidate from "../../../typings/IValidate";
import GLTFExtensionBase from "../../ext/gltf-extension-base";
import GLTFPrimitiveMode from "./enum/gltf-primitivemode";
import GLTFPrimitiveAttribute from "./gltf-primitive-attribute";
declare class GLTFPrimitive implements IValidate {
    attribute: GLTFPrimitiveAttribute;
    indices?: number;
    material?: number;
    mode?: GLTFPrimitiveMode;
    extensions: Set<GLTFExtensionBase>;
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
}
export default GLTFPrimitive;
