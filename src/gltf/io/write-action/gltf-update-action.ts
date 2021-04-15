import IGLTFWriteAction from ".";

class GLTFUpdateAction implements IGLTFWriteAction {
  readonly type = "update"
  updateTargetType: string
  updateTargetIndex?: any

  submit() {
    return true
  }
}

export default GLTFUpdateAction