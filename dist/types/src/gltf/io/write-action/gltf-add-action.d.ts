import { GLTFDocument } from "src/gltf/core"
import { IGLTFMaterial } from "src/interfaces"
import IGLTFWriteAction from "src/interfaces/IGLTFAction"
import { GLTFVertexAttributes, GLTFVertexIndices } from "./action-data"
/**
 * GLTF 创建行为中的 `"添加动作"`，添加动作当前代表了一个完整的 GLTFPrimitive 的创建
 * 一个 `"添加动作"` 包含一个 vao，允许包括相对应的材质、贴图以及 gltf 扩展
 */
declare class GLTFAddAction implements IGLTFWriteAction {
  readonly type = "add"
  /** vertexArrayData */
  vertexArrayData: GLTFVertexAttributes
  indicesData?: GLTFVertexIndices
  /**
   * @todo
   * 用 IGLTFMaterial 是有问题的，用户不知道索引之类的东西
   */
  material?: IGLTFMaterial
  textureImage?: ArrayBuffer
  constructor(vao: GLTFVertexAttributes, material?: IGLTFMaterial, textureImage?: ArrayBuffer)
  submit(doc: GLTFDocument): boolean
}
export default GLTFAddAction
