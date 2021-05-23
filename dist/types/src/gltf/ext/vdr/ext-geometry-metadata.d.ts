import GLTFExtensionBase from "../gltf-extension-base"
/**
 * @description
 * 此扩展由 Facebook 提供。它作用于 `GLTFScene` 对象。
 *
 */
declare class ExtGeometryMetadata extends GLTFExtensionBase {
  _name: string
  /**
   * @description 当前 `GLTFScene` 总共的顶点数量（不重复，意味着只统计 primitive，不考虑 node 复用）
   */
  vertexCount: number
  /**
   * @description 当前 `GLTFScene` 总共的图元数量
   */
  primitiveCount: number
  sceneBounds: {
    min: [number, number, number]
    max: [number, number, number]
  }
}
export default ExtGeometryMetadata
