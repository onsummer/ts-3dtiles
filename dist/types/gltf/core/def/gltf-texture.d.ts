import IValidate from "../../../typings/IValidate";
import GLTFExtensionBase from "../../ext/gltf-extension-base";
declare class GLTFTexture implements IValidate {
    sampler?: number;
    source?: number;
    name?: string;
    extensions: Set<GLTFExtensionBase>;
    validate: () => boolean;
}
export default GLTFTexture;
