import { GLTFExtensionBase } from "src/gltf/ext";
import { ISerializable, IValidate } from "src/interfaces";
import GLTFAnimationChannelTargetPath from "./enum/gltf-animation-channel-target-path";
declare class GLTFAnimationChannelTarget implements IValidate, ISerializable {
    node?: number;
    path: GLTFAnimationChannelTargetPath;
    extensions: Set<GLTFExtensionBase>;
    validate(): boolean;
    json(): {
        path: GLTFAnimationChannelTargetPath;
    };
}
export default GLTFAnimationChannelTarget;
