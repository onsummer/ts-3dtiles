import GLTFExtensionBase from "../gltf-extension-base"
/**
 * @description
 * 此扩展允许 gltf texture 使用 dds 格式的贴图
 * ``` json
 * "textures": [
 *     {
 *         "source": 0,
 *         "extensions": {
 *             "MSFT_texture_dds": {
 *                 "source": 1
 *             }
 *         }
 *     }
 * ],
 * "images": [
 *     {
 *         "uri": "defaultTexture.png"
 *     },
 *     {
 *         "uri": "DDSTexture.dds"
 *     }
 * ]
 * ```
 *
 * 若 source 对象指向的是 bufferView，那么其 mime 需指明为 "image/vnd-ms.dds"
 * 也就是说，texture 允许超过 1 个贴图
 * 此扩展由微软提供
 */
declare class ExtTextureDDS extends GLTFExtensionBase {
  _name: string
  source: number
}
export default ExtTextureDDS
