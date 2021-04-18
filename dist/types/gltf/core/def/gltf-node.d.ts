import { IGLTFNode } from "src/interfaces/IGLTFObj";
import GLTFPropertyBase from "./gltf-property-base";
declare class GLTFNode extends GLTFPropertyBase {
    children: number[];
    mesh?: number;
    rotation?: [number, number, number, number];
    translation?: [number, number, number];
    weights?: number[];
    name?: string;
    skin?: number;
    camera?: number;
    matrix?: [
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number
    ];
    scale?: [number, number, number];
    constructor();
    getMesh(): import("./gltf-mesh").default | null;
    validate(): boolean;
    json(): {};
    static fromJson(json: IGLTFNode): GLTFNode;
}
export default GLTFNode;
