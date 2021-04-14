import { IGLTFScene } from "src/interfaces/IGLTFObj";
import GLTFPropertyBase from "./gltf-property-base";
declare class GLTFScene extends GLTFPropertyBase {
    nodes: number[];
    name?: string;
    constructor();
    validate(): boolean;
    json(): {
        nodes: number[];
    };
    static readFromJson(json: IGLTFScene): GLTFScene;
}
export default GLTFScene;
