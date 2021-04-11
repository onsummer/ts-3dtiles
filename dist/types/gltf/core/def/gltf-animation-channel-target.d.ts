import IValidate from "../../../typings/IValidate";
import { GLTFExtensionBase } from "../../ext";
import GLTFAnimationChannelTargetPath from "./enum/gltf-animation-channel-target-path";
declare class GLTFAnimationChannelTarget implements IValidate {
    node?: number;
    path: GLTFAnimationChannelTargetPath;
    extensions: Set<GLTFExtensionBase>;
    validate: () => boolean;
}
export default GLTFAnimationChannelTarget;
