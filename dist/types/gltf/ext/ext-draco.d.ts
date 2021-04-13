import { GLTFPrimitiveAttribute } from "../core";
import GLTFExtensionBase from "./gltf-extension-base";
declare class ExtDraco extends GLTFExtensionBase {
    _name: string;
    bufferView: number;
    attributes: GLTFPrimitiveAttribute;
    get isRequire(): boolean;
    constructor(options: {
        bufferView: number;
        attributes: GLTFPrimitiveAttribute;
    });
    validate(): boolean;
    /**
     * @todo
     */
    json(): {
        name: string;
        bufferView: number;
        attributes: {
            POSITION: number;
        };
    };
}
export default ExtDraco;
