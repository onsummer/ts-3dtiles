import { IGLTFAsset } from "src/interfaces/IGLTFObj";
import GLTFPropertyBase from "./gltf-property-base";
import GLTFVersion from "./enum/gltf-version";
declare class GLTFAsset extends GLTFPropertyBase {
    version: GLTFVersion;
    generator?: string;
    copyright?: string;
    minVersion?: GLTFVersion;
    constructor();
    validate(): boolean;
    json(): {
        version: GLTFVersion;
    };
    static readFromJson(json: IGLTFAsset): GLTFAsset;
}
export default GLTFAsset;
