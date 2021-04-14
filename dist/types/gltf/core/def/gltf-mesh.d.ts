import { IGLTFMesh } from "src/interfaces/IGLTFObj";
import GLTFPropertyBase from "./gltf-property-base";
import GLTFPrimitive from "./gltf-primitive";
declare class GLTFMesh extends GLTFPropertyBase {
    primitives: GLTFPrimitive[];
    weights?: number[];
    name?: string;
    constructor();
    validate(): boolean;
    json(): {
        primitives: {
            attribute: {
                POSITION: number;
            };
        }[];
    };
    static readFromJson(json: IGLTFMesh): GLTFMesh;
}
export default GLTFMesh;
