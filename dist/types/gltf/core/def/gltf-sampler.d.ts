import ISerializable from 'src/interfaces/ISerializable';
import IValidate from '../../../interfaces/IValidate';
import GLTFExtensionBase from '../../ext/gltf-extension-base';
import GLTFFilter from './enum/gltf-filter';
import GLTFWrapMode from './enum/gltf-wrapmode';
declare class GLTFSampler implements IValidate, ISerializable {
    magFilter?: GLTFFilter;
    minFilter?: GLTFFilter;
    wrapS?: GLTFWrapMode;
    wrapT?: GLTFWrapMode;
    name?: string;
    extensions?: Set<GLTFExtensionBase>;
    extras: any;
    validate(): boolean;
    json(): {};
}
export default GLTFSampler;
