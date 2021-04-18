import { IGLTFWriteAction } from "src/interfaces"

class GLTFDropAction implements IGLTFWriteAction {
  readonly type = "drop"
  dropTarget: any

  submit() {
    return true
  }
}

export default GLTFDropAction