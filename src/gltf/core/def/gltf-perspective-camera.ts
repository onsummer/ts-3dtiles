import IGLTFPerspectiveCameraConstructionParam from "../../../interfaces/IGLTFPerspectiveCameraConstructionParam";
import IValidate from "../../../interfaces/IValidate";

class GLTFPerspectiveCamera implements IValidate {
  yfov: number
  znear: number
  zfar?: number
  aspectRatio?: number

  constructor(options: IGLTFPerspectiveCameraConstructionParam) {
    this.yfov = options.yfov
    this.znear = options.znear
    this.zfar = options.zfar
    this.aspectRatio = options.aspectRatio
  }

  /**
   * @todo 
   */
  validate() {
    return false
  }
}

export default GLTFPerspectiveCamera