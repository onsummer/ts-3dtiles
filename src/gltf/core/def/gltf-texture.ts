import IValidate from "../../../typings/IValidate"

class GLTFTexture implements IValidate {
  sampler?: number
  source?: number
  name?: string

  validate = () => true
}

export default GLTFTexture