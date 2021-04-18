import { IGLTFAnimation } from "src/interfaces/IGLTFObj";
import GLTFPropertyBase from "./gltf-property-base";
import GLTFAnimationChannel from "./gltf-animation-channel";
import GLTFAnimationSampler from "./gltf-animation-sampler";
declare class GLTFAnimation extends GLTFPropertyBase {
    channels: GLTFAnimationChannel[];
    samplers: GLTFAnimationSampler[];
    name?: string;
    constructor();
    validate(): boolean;
    json(): {};
    static fromJson(json: IGLTFAnimation): GLTFAnimation;
}
export default GLTFAnimation;
