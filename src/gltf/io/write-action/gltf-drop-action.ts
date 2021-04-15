import IGLTFWriteAction from ".";

class GLTFDropAction implements IGLTFWriteAction {
  readonly type = "drop"
  dropTarget: any

  submit() {
    return true
  }
}

export default GLTFDropAction