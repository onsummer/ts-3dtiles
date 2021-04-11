import IValidate from "../../../typings/IValidate";
import { GLTFExtensionBase } from "../../ext";
import GLTFCameraType from "./enum/gltf-cameratype";
import GLTFOrthographicCamera from "./gltf-orthographic-camera";
import GLTFPerspectiveCamera from "./gltf-perspective-camera";
declare class GLTFCamera implements IValidate {
    orthographic?: GLTFOrthographicCamera;
    perspective?: GLTFPerspectiveCamera;
    type: GLTFCameraType;
    name?: string;
    extensions: Set<GLTFExtensionBase>;
    constructor(options: {
        orthographic?: GLTFOrthographicCamera;
        perspective?: GLTFPerspectiveCamera;
        type: GLTFCameraType;
        name?: string;
    });
    validate(): boolean;
}
export default GLTFCamera;
