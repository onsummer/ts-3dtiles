export default interface IGLTFObj {
    asset: IGLTFAsset;
    scene?: number;
    buffers: IGLTFBuffer[];
    bufferViews: IGLTFBufferView[];
    accessors: [];
    scenes: [];
    nodes: [];
    meshes: [];
    textures?: [];
    images?: [];
    materials?: [];
    samplers?: [];
    animations?: [];
    cameras?: [];
    extensionsUsed?: string[];
    extensionsRequired?: string[];
    extensions?: Object;
    extras?: Object;
    skins?: [];
}
export interface IGLTFAsset {
    version: string;
    minVersion?: string;
    generator?: string;
    copyright?: string;
    extensions?: any;
    extras?: any;
}
export interface IGLTFBuffer {
    uri?: string;
    byteLength: number;
    extensions?: any;
    extras?: any;
}
export interface IGLTFBufferView {
    buffer: number;
    byteLength: number;
    byteOffset?: number;
    byteStride?: number;
    extensions?: any;
    extras?: any;
    target?: number;
}
