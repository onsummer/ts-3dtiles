import GLTFExtensionBase from "../gltf-extension-base";
/**
 * @description 作用对象：GLTFBufferView 和 GLTFBuffer
 */
declare class ExtMeshOptCompression extends GLTFExtensionBase {
    _name: string;
    buffer: number;
    byteOffset?: number;
    byteLength: number;
    byteStride: number;
    /**
     * @description "ATTRIBUTES", "TRIANGLES", "INDICES"
     */
    mode: string;
    count: number;
    /**
     * @description "NONE", "OCTAHEDRAL", "QUATERNION", "EXPONENTIAL"
     */
    filter?: string;
}
export default ExtMeshOptCompression;
