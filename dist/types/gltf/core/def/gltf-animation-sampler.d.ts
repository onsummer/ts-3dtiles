import { ISerializable, IValidate } from "src/interfaces";
import GLTFAnimationInterpolation from "./enum/gltf-animation-interpolation";
declare class GLTFAnimationSampler implements IValidate, ISerializable {
    input: number;
    interpolation?: GLTFAnimationInterpolation;
    output: number;
    validate(): boolean;
    json(): {
        input: number;
        output: number;
    };
}
export default GLTFAnimationSampler;
