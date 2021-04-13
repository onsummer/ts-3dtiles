import { IGLTFPerspectiveCameraConstructionParam, IValidate } from "src/interfaces";
import ISerializable from "src/interfaces/ISerializable";
declare class GLTFPerspectiveCamera implements IValidate, ISerializable {
    yfov: number;
    znear: number;
    zfar?: number;
    aspectRatio?: number;
    constructor(options: IGLTFPerspectiveCameraConstructionParam);
    /**
     * @todo
     */
    validate(): boolean;
    json(): {
        yfov: number;
        znear: number;
    };
}
export default GLTFPerspectiveCamera;
