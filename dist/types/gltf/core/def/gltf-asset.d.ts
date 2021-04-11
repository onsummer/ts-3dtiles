import IValidate from "../../../typings/IValidate";
import GLTFExtensionBase from "../../ext/gltf-extension-base";
import GLTFVersion from "./enum/gltf-version";
declare class GLTFAsset implements IValidate {
    version: GLTFVersion;
    generator?: string;
    copyright?: string;
    minVersion?: GLTFVersion;
    extensions: Set<GLTFExtensionBase>;
    validate: () => boolean;
}
export default GLTFAsset;
