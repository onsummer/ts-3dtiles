export default interface IGLTFObj {
    asset: IGLTFAsset;
    scene?: number;
    buffers: IGLTFBuffer[];
    bufferViews: IGLTFBufferView[];
    accessors: IGLTFAccessor[];
    scenes: IGLTFScene[];
    nodes: IGLTFNode[];
    meshes: IGLTFMesh[];
    textures?: IGLTFTexture[];
    images?: IGLTFImage[];
    materials?: IGLTFMaterial[];
    samplers?: IGLTFSampler[];
    animations?: IGLTFAnimation[];
    skins?: IGLTFSkin[];
    cameras?: IGLTFCamera[];
    extensionsUsed?: string[];
    extensionsRequired?: string[];
    extensions?: Object;
    extras?: Object;
}
export interface IGLTFExtensionProp {
    extensions?: any;
    extras?: any;
}
export interface IGLTFAsset extends IGLTFExtensionProp {
    version: string;
    minVersion?: string;
    generator?: string;
    copyright?: string;
}
export interface IGLTFBuffer extends IGLTFExtensionProp {
    uri?: string;
    byteLength: number;
}
export interface IGLTFBufferView extends IGLTFExtensionProp {
    buffer: number;
    byteLength: number;
    byteOffset?: number;
    byteStride?: number;
    target?: number;
}
export interface IGLTFAccessor extends IGLTFExtensionProp {
    componentType: number;
    count: number;
    type: string;
    max?: [number, number, number];
    min?: [number, number, number];
    sparse?: IGLTFAccessorSparse;
    name?: string;
    normalized?: boolean;
    bufferView?: number;
    byteOffset?: number;
}
export interface IGLTFAccessorSparse extends IGLTFExtensionProp {
    count: number;
    indices: IGLTFAccessorSparseIndices;
    values: IGLTFAccessorSparseValues;
}
export interface IGLTFAccessorSparseIndices extends IGLTFExtensionProp {
    bufferView: number;
    byteOffset: number;
    componentType: number;
}
export interface IGLTFAccessorSparseValues extends IGLTFExtensionProp {
    bufferView: number;
    byteOffset?: number;
}
export interface IGLTFScene extends IGLTFExtensionProp {
    nodes: number[];
    name?: string;
}
export interface IGLTFNode extends IGLTFExtensionProp {
    children: number[];
    mesh?: number;
    rotation?: [number, number, number, number];
    translation?: [number, number, number];
    weights?: number[];
    name?: string;
    skin?: number;
    camera?: number;
    matrix?: [
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number
    ];
    scale?: [number, number, number];
}
export interface IGLTFMesh extends IGLTFExtensionProp {
    primitives: IGLTFPrimitive[];
    weights?: number[];
    name?: string;
}
export interface IGLTFPrimitive extends IGLTFExtensionProp {
    attributes: IGLTFPrimitiveAttribute;
    indices?: number;
    material?: number;
    mode: number;
}
export interface IGLTFPrimitiveAttribute extends IGLTFExtensionProp {
    POSITION: number;
    TEXCOORD_0?: number;
    TEXCOORD_1?: number;
    COLOR_0?: number;
    NORMAL?: number;
    TANGENT?: number;
    JOINTS_0?: number;
    WEIGHTS_0?: number;
    /** 3rd */
    _BATCHID?: number;
}
export interface IGLTFTexture extends IGLTFExtensionProp {
    sampler?: number;
    source?: number;
    name?: string;
}
export interface IGLTFImage extends IGLTFExtensionProp {
    uri?: string;
    bufferView?: number;
    mimeType?: string;
    name?: string;
}
export interface IGLTFMaterial extends IGLTFExtensionProp {
    name?: string;
    pbrMetallicRoughness?: IGLTFPbr;
    normalTexture?: IGLTFNormalTextureInfo;
    occlusionTexture?: IGLTFOcclusionTextureInfo;
    emissiveTexture?: IGLTFTextureInfo;
    emissiveFactor?: [number, number, number];
    alphaMode?: string;
    alphaCutoff?: number;
    doubleSided?: boolean;
}
export interface IGLTFPbr extends IGLTFExtensionProp {
    baseColorFactor?: [number, number, number, number];
    baseColorTexture?: IGLTFTextureInfo;
    metallicFactor?: number;
    roughnessFactor?: number;
    metallicRoughnessTexture?: IGLTFTextureInfo;
}
export interface IGLTFNormalTextureInfo extends IGLTFTextureInfo, IGLTFExtensionProp {
    scale: number;
}
export interface IGLTFOcclusionTextureInfo extends IGLTFTextureInfo, IGLTFExtensionProp {
    strength: number;
}
export interface IGLTFTextureInfo extends IGLTFExtensionProp {
    index: number;
    texCoord: number;
}
export interface IGLTFSampler extends IGLTFExtensionProp {
    magFilter?: number;
    minFilter?: number;
    wrapS?: number;
    wrapT?: number;
    name?: string;
}
export interface IGLTFAnimation extends IGLTFExtensionProp {
    channels: IGLTFAnimationChannel[];
    samplers: IGLTFAnimationSampler[];
    name?: string;
}
export interface IGLTFAnimationChannel extends IGLTFExtensionProp {
    sampler: number;
    target: IGLTFAnimationChannelTarget;
}
export interface IGLTFAnimationChannelTarget extends IGLTFExtensionProp {
    path: string;
    node?: number;
}
export interface IGLTFAnimationSampler extends IGLTFExtensionProp {
    input: number;
    output: number;
    interpolation?: string;
}
export interface IGLTFSkin extends IGLTFExtensionProp {
    joints: number[];
    name?: string;
    skeleton?: number;
    inverseBindMatrices?: number;
}
export interface IGLTFCamera extends IGLTFExtensionProp {
    type: string;
    name?: string;
    perspective?: IGLTFPerspectiveCamera;
    orthographic?: IGLTFOrthographicCamera;
}
export interface IGLTFOrthographicCamera extends IGLTFExtensionProp {
    xmag: number;
    ymag: number;
    zfar: number;
    znear: number;
}
export interface IGLTFPerspectiveCamera extends IGLTFExtensionProp {
    yfov: number;
    znear: number;
    zfar?: number;
    aspectRatio?: number;
}
