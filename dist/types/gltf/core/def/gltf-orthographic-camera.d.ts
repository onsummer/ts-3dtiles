import { ISerializable, IValidate } from "src/interfaces";
declare class GLTFOrthographicCamera implements IValidate, ISerializable {
    xmag: number;
    ymag: number;
    zfar: number;
    znear: number;
    validate(): boolean;
    json(): {
        xmag: number;
        ymag: number;
        zfar: number;
        znear: number;
    };
}
export default GLTFOrthographicCamera;
