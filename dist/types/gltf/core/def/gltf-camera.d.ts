import { IGLTFCamera } from "src/interfaces/IGLTFObj";
import GLTFPropertyBase from "./gltf-property-base";
import GLTFCameraType from "./enum/gltf-cameratype";
import GLTFOrthographicCamera from "./gltf-orthographic-camera";
import GLTFPerspectiveCamera from "./gltf-perspective-camera";
declare class GLTFCamera extends GLTFPropertyBase {
    orthographic?: GLTFOrthographicCamera;
    perspective?: GLTFPerspectiveCamera;
    type: GLTFCameraType;
    name?: string;
    constructor();
    validate(): boolean;
    json(): {
        type: GLTFCameraType;
    };
    static readFromJson(json: IGLTFCamera): GLTFCamera;
}
export default GLTFCamera;
