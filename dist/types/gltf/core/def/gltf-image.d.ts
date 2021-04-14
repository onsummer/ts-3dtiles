import { IGLTFImage } from "src/interfaces/IGLTFObj";
import GLTFPropertyBase from "./gltf-property-base";
import MIME from "./enum/mime";
declare class GLTFImage extends GLTFPropertyBase {
    uri?: string;
    bufferView?: number;
    mimeType?: MIME;
    name?: string;
    constructor();
    validate(): boolean;
    json(): {};
    static readFromJson(json: IGLTFImage): GLTFImage;
}
export default GLTFImage;
