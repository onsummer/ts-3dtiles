import { IGLTFPrimitive } from "src/interfaces/IGLTFObj";
import GLTFPropertyBase from "./gltf-property-base";
import GLTFPrimitiveMode from "./enum/gltf-primitivemode";
import GLTFPrimitiveAttribute from "./gltf-primitive-attribute";
declare class GLTFPrimitive extends GLTFPropertyBase {
    attributes: GLTFPrimitiveAttribute;
    indices?: number;
    material?: number;
    mode?: GLTFPrimitiveMode;
    constructor();
    validate(): boolean;
    json(): {
        attribute: {
            POSITION: number;
        };
    };
    static readFromJson(json: IGLTFPrimitive): GLTFPrimitive;
}
export default GLTFPrimitive;
