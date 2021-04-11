import { GLTFAsset, GLTFBuffer, GLTFBufferView, GLTFAccessor, GLTFScene, GLTFNode, GLTFMesh, GLTFMaterial, GLTFImage, GLTFTexture, GLTFSampler } from './def';
declare class GLTFDocument {
    asset: GLTFAsset;
    scene: number;
    buffers: GLTFBuffer[];
    bufferViews: GLTFBufferView[];
    accessors: GLTFAccessor[];
    scenes: GLTFScene[];
    nodes: GLTFNode[];
    meshes: GLTFMesh[];
    materials: GLTFMaterial[];
    textures: GLTFTexture[];
    images: GLTFImage[];
    samplers: GLTFSampler[];
}
export default GLTFDocument;
