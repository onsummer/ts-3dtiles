import { IGLTFAnimationChannel } from "src/interfaces/IGLTFObj";
import GLTFPropertyBase from "./gltf-property-base";
import GLTFAnimationChannelTarget from "./gltf-animation-channel-target";
declare class GLTFAnimationChannel extends GLTFPropertyBase {
    sampler: number;
    target: GLTFAnimationChannelTarget;
    constructor();
    validate(): boolean;
    json(): {
        sampler: number;
        target: {
            path: import("./enum/gltf-animation-channel-target-path").default;
        };
    };
    static readFromJson(json: IGLTFAnimationChannel): GLTFAnimationChannel;
}
export default GLTFAnimationChannel;
