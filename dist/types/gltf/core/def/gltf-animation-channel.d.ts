import { GLTFExtensionBase } from "src/gltf/ext";
import { IValidate } from "src/interfaces";
import GLTFAnimationChannelTarget from "./gltf-animation-channel-target";
declare class GLTFAnimationChannel implements IValidate {
    sampler: number;
    target: GLTFAnimationChannelTarget;
    extensions?: Set<GLTFExtensionBase>;
    extras?: any;
    validate(): boolean;
    json(): {
        sampler: number;
        target: {
            path: import("./enum/gltf-animation-channel-target-path").default;
        };
    };
}
export default GLTFAnimationChannel;
