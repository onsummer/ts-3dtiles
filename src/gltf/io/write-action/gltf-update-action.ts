import { IGLTFWriteAction } from "src/interfaces"

class GLTFUpdateAction implements IGLTFWriteAction {
  readonly type = "update"
  updateTargetType: string
  updateTargetIndex?: any

  submit() {
    return true
  }
}

export default GLTFUpdateAction