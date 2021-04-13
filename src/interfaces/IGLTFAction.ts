import { GLTFDocument } from "src/gltf";

export default interface IGLTFAction {
  /** methods */
  emit(): void

  /** properties */
  doc: GLTFDocument
  locked: boolean // 是否放在对应资源的对象中比较好？
}