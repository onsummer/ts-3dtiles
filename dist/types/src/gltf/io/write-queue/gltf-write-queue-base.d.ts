import { IGLTFWriteAction } from "src"
import { GLTFDocument } from "src/gltf/core"
declare class GLTFWriteQueueBase {
  actions: IGLTFWriteAction[]
  doc: GLTFDocument
  execute(): void
}
export default GLTFWriteQueueBase
