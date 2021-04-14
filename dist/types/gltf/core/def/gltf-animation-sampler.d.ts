import { IGLTFAnimationSampler } from "src/interfaces/IGLTFObj";
import GLTFPropertyBase from "./gltf-property-base";
import GLTFAnimationInterpolation from "./enum/gltf-animation-interpolation";
declare class GLTFAnimationSampler extends GLTFPropertyBase {
    input: number;
    interpolation?: GLTFAnimationInterpolation;
    output: number;
    constructor();
    validate(): boolean;
    json(): {
        input: number;
        output: number;
    };
    static readFromJson(json: IGLTFAnimationSampler): GLTFAnimationSampler;
}
export default GLTFAnimationSampler;
