import GLTFPrimitiveAttribute from "../core/def/gltf-primitive-attribute";
import GLTFExtensionBase from "./gltf-extension-base";
declare class ExtDraco extends GLTFExtensionBase {
    readonly name = "KHR_draco_mesh_compression";
    bufferView: number;
    attributes: GLTFPrimitiveAttribute;
    get isRequire(): boolean;
    constructor(options: {
        bufferView: number;
        attributes: GLTFPrimitiveAttribute;
    });
    validate(): boolean;
}
export default ExtDraco;
