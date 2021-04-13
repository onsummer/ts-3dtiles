import { IGLTFOrthographicCameraConstructionParam, IValidate } from "src/interfaces";
import ISerializable from "src/interfaces/ISerializable";
declare class GLTFOrthographicCamera implements IValidate, ISerializable {
    xmag: number;
    ymag: number;
    zfar: number;
    znear: number;
    constructor(options: IGLTFOrthographicCameraConstructionParam);
    /**
     * @todo
     */
    validate(): boolean;
    json(): {
        xmag: number;
        ymag: number;
        zfar: number;
        znear: number;
    };
}
export default GLTFOrthographicCamera;
