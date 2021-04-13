import ISerializable from "src/interfaces/ISerializable";
import IValidate from "../../../interfaces/IValidate";
import { GLTFExtensionBase } from "../../ext";
import GLTFCameraType from "./enum/gltf-cameratype";
import GLTFOrthographicCamera from "./gltf-orthographic-camera";
import GLTFPerspectiveCamera from "./gltf-perspective-camera";
declare class GLTFCamera implements IValidate, ISerializable {
    orthographic?: GLTFOrthographicCamera;
    perspective?: GLTFPerspectiveCamera;
    type: GLTFCameraType;
    name?: string;
    extensions?: Set<GLTFExtensionBase>;
    extras?: any;
    constructor(options: {
        orthographic?: GLTFOrthographicCamera;
        perspective?: GLTFPerspectiveCamera;
        type: GLTFCameraType;
        name?: string;
    });
    validate(): boolean;
    json(): {
        type: GLTFCameraType;
    };
}
export default GLTFCamera;
