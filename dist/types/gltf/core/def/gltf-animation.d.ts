import { GLTFExtensionBase } from "src/gltf/ext";
import { ISerializable, IValidate } from "src/interfaces";
import GLTFAnimationChannel from "./gltf-animation-channel";
import GLTFAnimationSampler from "./gltf-animation-sampler";
declare class GLTFAnimation implements IValidate, ISerializable {
    channels: GLTFAnimationChannel[];
    samplers: GLTFAnimationSampler[];
    name?: string;
    extensions?: Set<GLTFExtensionBase>;
    extras?: any;
    validate(): boolean;
    json(): {};
}
export default GLTFAnimation;
