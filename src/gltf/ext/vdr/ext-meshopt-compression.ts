import GLTFExtensionBase from "../gltf-extension-base"

/**
 * @description 作用对象：GLTFBufferView 和 GLTFBuffer
 */
class ExtMeshOptCompression extends GLTFExtensionBase {
  _name: string = "EXT_meshopt_compression"
  buffer: number
  byteOffset?: number
  byteLength: number // min 1
  byteStride: number // 2 ~ 256
  /**
   * @description "ATTRIBUTES", "TRIANGLES", "INDICES"
   */
  mode: string
  count: number // min 1
  /**
   * @description "NONE", "OCTAHEDRAL", "QUATERNION", "EXPONENTIAL"
   */
  filter?: string
}

export default ExtMeshOptCompression