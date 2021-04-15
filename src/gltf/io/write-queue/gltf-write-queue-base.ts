import IGLTFWriteAction from "../write-action"

class GLTFWriteQueueBase {
  queue: IGLTFWriteAction[] = []

  execute() {
    this.queue.forEach(action => {
      console.log(action.type)
    })
  }
}

export default GLTFWriteQueueBase