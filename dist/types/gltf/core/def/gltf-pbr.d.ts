import { GLTFExtensionBase } from "src/gltf/ext";
import { ISerializable, IValidate } from "src/interfaces";
import GLTFTextureInfo from "./gltf-texture-info";
declare class GLTFPbr implements IValidate, ISerializable {
    baseColorFactor?: number[];
    baseColorTexture?: GLTFTextureInfo;
    metallicFactor?: number;
    roughnessFactor?: number;
    metallicRoughnessTexture?: GLTFTextureInfo;
    extensions?: Set<GLTFExtensionBase>;
    extras?: any;
    validate(): boolean;
    json(): {};
}
export default GLTFPbr;
