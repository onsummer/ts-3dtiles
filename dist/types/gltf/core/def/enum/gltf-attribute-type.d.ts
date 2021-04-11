declare enum GLTFAttributeType {
    SCALAR = "SCALAR",
    VEC2 = "VEC2",
    VEC3 = "VEC3",
    VEC4 = "VEC4",
    MAT2 = "MAT2",
    MAT3 = "MAT3",
    MAT4 = "MAT4"
}
export declare const getAttributeTypeElementCount: (t: GLTFAttributeType) => number;
export default GLTFAttributeType;
