import { IGLTFImage } from "src/interfaces/IGLTFObj";
import GLTFPropertyBase from "./gltf-property-base";
import MIME from "./enum/mime";
declare class GLTFImage extends GLTFPropertyBase {
    uri?: string;
    bufferView?: number;
    mimeType?: MIME;
    name?: string;
    constructor();
    get isEncodeWithUri(): boolean;
    get getImageData(): ArrayBuffer | undefined;
    validate(): boolean;
    json(): {};
    static fromJson(json: IGLTFImage): GLTFImage;
}
export default GLTFImage;
