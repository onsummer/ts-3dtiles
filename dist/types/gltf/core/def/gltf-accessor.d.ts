import { IGLTFAccessor } from "src/interfaces/IGLTFObj";
import GLTFPropertyBase from "./gltf-property-base";
import { GLTFAttributeType, GLTFComponentType } from "./enum";
import GLTFAccessorSparse from "./gltf-accessor-sparse";
declare class GLTFAccessor extends GLTFPropertyBase {
    componentType: GLTFComponentType;
    count: number;
    type: GLTFAttributeType;
    max?: [number, number, number];
    min?: [number, number, number];
    sparse?: GLTFAccessorSparse;
    name?: string;
    normalized?: boolean;
    bufferView?: number;
    byteOffset?: number;
    constructor();
    validate(): boolean;
    json(): {
        componentType: GLTFComponentType;
        type: GLTFAttributeType;
        count: number;
    };
    static fromJson(json: IGLTFAccessor): GLTFAccessor;
}
export default GLTFAccessor;
