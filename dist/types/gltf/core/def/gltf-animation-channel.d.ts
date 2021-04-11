import IValidate from "../../../typings/IValidate";
import { GLTFExtensionBase } from "../../ext";
import GLTFAnimationChannelTarget from "./gltf-animation-channel-target";
declare class GLTFAnimationChannel implements IValidate {
    sampler: number;
    target: GLTFAnimationChannelTarget;
    extensions: Set<GLTFExtensionBase>;
    validate: () => boolean;
}
export default GLTFAnimationChannel;
