import ISerializable from 'src/interfaces/ISerializable';
import { GLTFExtensionBase } from '../ext';
import { GLTFAsset, GLTFBuffer, GLTFBufferView, GLTFAccessor, GLTFScene, GLTFNode, GLTFMesh, GLTFMaterial, GLTFImage, GLTFTexture, GLTFSampler, GLTFAnimation, GLTFCamera, GLTFSkin } from './def';
declare class GLTFDocument implements ISerializable {
    asset: GLTFAsset;
    scene?: number;
    buffers: GLTFBuffer[];
    bufferViews: GLTFBufferView[];
    accessors: GLTFAccessor[];
    scenes: GLTFScene[];
    nodes: GLTFNode[];
    meshes: GLTFMesh[];
    materials?: GLTFMaterial[];
    textures?: GLTFTexture[];
    images?: GLTFImage[];
    samplers?: GLTFSampler[];
    animations?: GLTFAnimation[];
    cameras?: GLTFCamera[];
    skins?: GLTFSkin[];
    extensions?: Set<GLTFExtensionBase>;
    extras?: object;
    extensionsUsed?: string[];
    extensionsRequired?: string[];
    json(): void;
}
export default GLTFDocument;
