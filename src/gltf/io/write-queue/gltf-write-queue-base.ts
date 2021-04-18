import { GLTFDocument } from "src/gltf/core"
import IGLTFWriteAction from "../write-action"

class GLTFWriteQueueBase {
  actions: IGLTFWriteAction[] = []
  doc: GLTFDocument

  execute() {
    this.actions.forEach(action => {
      action.submit(this.doc)
      console.log(action.type)
    })
  }
}

export default GLTFWriteQueueBase