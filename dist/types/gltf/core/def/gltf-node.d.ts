import { IGLTFNode } from "src/interfaces/IGLTFObj";
import GLTFPropertyBase from "./gltf-property-base";
declare class GLTFNode extends GLTFPropertyBase {
    children: number[];
    mesh?: number;
    rotation?: number[];
    translation?: number[];
    weights?: number[];
    name?: string;
    skin?: number;
    camera?: number;
    matrix?: number[];
    scale?: number[];
    constructor();
    validate(): boolean;
    json(): {};
    static readFromJson(json: IGLTFNode): GLTFNode;
}
export default GLTFNode;
