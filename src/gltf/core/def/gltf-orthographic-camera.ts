import IGLTFOrthographicCameraConstructionParam from '../../../interfaces/IGLTFOrthographicCameraConstructionParam'

class GLTFOrthographicCamera {
  xmag: number
  ymag: number
  zfar: number
  znear: number

  constructor(options: IGLTFOrthographicCameraConstructionParam) {
    this.xmag = options.xmag
    this.ymag = options.ymag
    this.zfar = options.zfar
    this.znear = options.znear
  }
}

export default GLTFOrthographicCamera