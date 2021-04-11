import IValidate from "../../../typings/IValidate";
import GLTFExtensionBase from "../../ext/gltf-extension-base";
declare class GLTFNode implements IValidate {
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
    extensions: Set<GLTFExtensionBase>;
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
}
export default GLTFNode;
