import IGLTFPerspectiveCameraConstructionParam from "../../../typings/IGLTFPerspectiveCameraConstructionParam";
import IValidate from "../../../typings/IValidate";
declare class GLTFPerspectiveCamera implements IValidate {
    yfov: number;
    znear: number;
    zfar?: number;
    aspectRatio?: number;
    constructor(options: IGLTFPerspectiveCameraConstructionParam);
    /**
     * @todo
     */
    validate(): boolean;
}
export default GLTFPerspectiveCamera;
