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
    extras?: any;
    extensionsUsed?: string[];
    extensionsRequired?: string[];
    json(): {
        asset: {
            version: import("./def/enum/gltf-version").default;
        };
        buffers: {
            byteLength: number;
        }[];
        bufferViews: {
            buffer: number;
            byteLength: number;
        }[];
        accessors: {
            componentType: import("./def/enum/gltf-component-type").default;
            type: import("./def/enum/gltf-attribute-type").default;
            count: number;
        }[];
        scenes: {
            nodes: number[];
        }[];
        nodes: {}[];
        meshes: {
            primitives: {
                attribute: {
                    POSITION: number;
                };
            }[];
        }[];
    };
}
export default GLTFDocument;
