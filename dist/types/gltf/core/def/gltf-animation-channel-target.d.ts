import { IGLTFAnimationChannelTarget } from "src/interfaces/IGLTFObj";
import GLTFPropertyBase from "./gltf-property-base";
import GLTFAnimationChannelTargetPath from "./enum/gltf-animation-channel-target-path";
declare class GLTFAnimationChannelTarget extends GLTFPropertyBase {
    path: GLTFAnimationChannelTargetPath;
    node?: number;
    constructor();
    validate(): boolean;
    json(): {
        path: GLTFAnimationChannelTargetPath;
    };
    static readFromJson(json: IGLTFAnimationChannelTarget): GLTFAnimationChannelTarget;
}
export default GLTFAnimationChannelTarget;
