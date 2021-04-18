import { IGLTFTexture } from "src/interfaces/IGLTFObj";
import GLTFPropertyBase from "./gltf-property-base";
declare class GLTFTexture extends GLTFPropertyBase {
    sampler?: number;
    source?: number;
    name?: string;
    constructor();
    validate(): boolean;
    json(): {};
    static fromJson(json: IGLTFTexture): GLTFTexture;
}
export default GLTFTexture;
