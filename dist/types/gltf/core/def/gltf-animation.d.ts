import IValidate from "../../../typings/IValidate";
import { GLTFExtensionBase } from "../../ext";
import GLTFAnimationChannel from "./gltf-animation-channel";
import GLTFAnimationSampler from "./gltf-animation-sampler";
declare class GLTFAnimation implements IValidate {
    channels: GLTFAnimationChannel[];
    samplers: GLTFAnimationSampler[];
    name?: string;
    extensions: Set<GLTFExtensionBase>;
    validate(): boolean;
}
export default GLTFAnimation;
