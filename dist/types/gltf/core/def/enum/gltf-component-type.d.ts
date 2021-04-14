declare enum GLTFComponentType {
    BYTE = 5120,
    UNSIGNED_BYTE = 5121,
    SHORT = 5122,
    UNSIGNED_SHORT = 5123,
    UNSIGNED_INT = 5125,
    FLOAT = 5126
}
export declare const GLTFComponentTypeValues: readonly number[];
export declare const getComponentTypeByteSize: (t: GLTFComponentType) => number;
export default GLTFComponentType;
