import GLTFExtensionBase from "../gltf-extension-base"
/**
 * @description
 * 此扩展由微软提出，作用于 `GLTFNode` 和 `GLTFMaterial`
 * 同时，要在 `GLTFNode` 的 `extras` 中附上 lod 权重数据
 * ``` json
 * "nodes": [
 *   {
 *     "name": "High_LOD",
 *     "mesh": 0,
 *     "extensions": {
 *       "MSFT_lod": {
 *         "ids": [ 1, 2 ]
 *       }
 *     },
 *     "extras": {
 *         "MSFT_screencoverage": [ 0.5, 0.2, 0.01 ]
 *     }
 *   },
 *   {
 *     "name": "Medium_LOD",
 *     "mesh": 1
 *   },
 *   {
 *     "name": "Low_LOD",
 *     "mesh": 2
 *   }
 * ]
 * ```
 */
declare class ExtLod extends GLTFExtensionBase {
  _name: string
  ids: number[]
  extras: {
    MSFT_screencoverage: number[]
  }
}
export default ExtLod
