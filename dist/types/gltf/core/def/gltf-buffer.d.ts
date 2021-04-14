import { IGLTFBuffer } from "src/interfaces/IGLTFObj";
import GLTFPropertyBase from "./gltf-property-base";
declare class GLTFBuffer extends GLTFPropertyBase {
    byteLength: number;
    uri?: string;
    constructor();
    /** @deprecated */
    get url(): string | undefined;
    validate(): boolean;
    json(): {
        byteLength: number;
    };
    static readFromJson(json: IGLTFBuffer): GLTFBuffer;
}
export default GLTFBuffer;
