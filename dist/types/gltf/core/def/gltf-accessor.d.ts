import { GLTFExtensionBase } from "src/gltf/ext";
import { ISerializable, IValidate } from "src/interfaces";
import { GLTFAttributeType, GLTFComponentType } from "./enum";
import GLTFAccessorSparse from "./gltf-accessor-sparse";
declare class GLTFAccessor implements IValidate, ISerializable {
    componentType: GLTFComponentType;
    count: number;
    type: GLTFAttributeType;
    max?: number[];
    min?: number[];
    sparse?: GLTFAccessorSparse;
    name?: string;
    normalized?: boolean;
    bufferView?: number;
    byteOffset?: number;
    extensions?: Set<GLTFExtensionBase>;
    extras?: any;
    constructor(options: {
        componentType: GLTFComponentType;
        count: number;
        type: GLTFAttributeType;
    });
    validate(): boolean;
    json(): {
        componentType: GLTFComponentType;
        type: GLTFAttributeType;
        count: number;
    };
}
export default GLTFAccessor;
