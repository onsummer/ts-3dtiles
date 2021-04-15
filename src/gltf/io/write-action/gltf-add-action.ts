import IGLTFWriteAction from ".";
import GLTFVAOBag from "./bag/vao-bag";

class GLTFAddAction implements IGLTFWriteAction {
  readonly type = "add"
  datas: GLTFVAOBag[]

  constructor() {
    this.datas = []
  }

  submit() {
    return true
  }
}

export default GLTFAddAction