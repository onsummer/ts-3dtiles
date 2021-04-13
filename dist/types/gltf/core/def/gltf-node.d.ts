import { GLTFExtensionBase } from "src/gltf/ext";
import { ISerializable, IValidate } from "src/interfaces";
declare class GLTFNode implements IValidate, ISerializable {
    children: number[];
    mesh?: number;
    rotation?: number[];
    translation?: number[];
    weights?: number[];
    name?: string;
    skin?: number;
    camera?: number;
    matrix?: number[];
    scale?: number[];
    extensions?: Set<GLTFExtensionBase>;
    extras?: any;
    constructor(options: {
        children?: number[];
        mesh?: number;
        rotation?: number[];
        translation?: number[];
        weights?: number[];
        name?: string;
        skin?: number;
        camera?: number;
        matrix?: number[];
        scale?: number[];
    });
    private validateTransforms;
    validate(): boolean;
    json(): {};
}
export default GLTFNode;
