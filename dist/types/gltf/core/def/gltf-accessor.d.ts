import IValidate from "../../../typings/IValidate";
import GLTFExtensionBase from "../../ext/gltf-extension-base";
import GLTFAttributeType from "./enum/gltf-attribute-type";
import GLTFComponentType from "./enum/gltf-component-type";
declare class GLTFAccessor implements IValidate {
    componentType: GLTFComponentType;
    count: number;
    type: GLTFAttributeType;
    max?: number[];
    min?: number[];
    sparse?: any;
    name?: string;
    normalized?: boolean;
    bufferView?: number;
    byteOffset?: number;
    extensions: Set<GLTFExtensionBase>;
    constructor(options: {
        componentType: GLTFComponentType;
        count: number;
        type: GLTFAttributeType;
    });
    validate(): boolean;
}
export default GLTFAccessor;
