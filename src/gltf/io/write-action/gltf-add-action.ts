import { IOBuffer } from "iobuffer"
import { GLTFAccessor, GLTFBuffer, GLTFDocument, GLTFMaterial, GLTFMesh, GLTFNode } from "src/gltf/core"
import { IGLTFMaterial } from "src/interfaces"
import IGLTFWriteAction from "src/interfaces/IGLTFAction"
import { GLTFVertexAttributes, GLTFVertexIndices } from "./action-data"

/**
 * GLTF 创建行为中的 `"添加动作"`，添加动作当前代表了一个完整的 GLTFPrimitive 的创建
 * 一个 `"添加动作"` 包含一个 vao，允许包括相对应的材质、贴图以及 gltf 扩展
 */
class GLTFAddAction implements IGLTFWriteAction {
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

  constructor(vao: GLTFVertexAttributes, material?: IGLTFMaterial, textureImage?: ArrayBuffer) {
    this.vertexArrayData = vao
    this.material = material
    this.textureImage = textureImage
  }

  submit(doc: GLTFDocument) {
    try {
      // 第一步 创建 accessor，更新index  <-------------- 必须创建
      // TODO 针对每一个 VBO 创建自己的 accessor
      const acc = GLTFAccessor.fromJson({
        count: this.vertexArrayData.verticeCount,
        componentType: 5126,
        type: 'vec3'
      })
      doc.accessors.push(acc)
      
      
      // 第二步，创建 bufferView <----------------------- 最好创建新的


      // 第三步 创建 primitive -> mesh -> node
      // -- primitive
      const prmt = this.vertexArrayData.asPrimitive(doc)


      // -- mesh
      const mesh = new GLTFMesh()
      mesh.primitives.push(prmt)
      mesh.doc = doc
      const meshid = doc.meshes.push(mesh)
      // -- node
      const node = new GLTFNode()
      node.doc = doc
      node.mesh = meshid
      const nodeid = doc.nodes.push(node)
      // -- update scenes.nodes 
      doc.scenes[doc.scene === undefined ? 0 : doc.scene].nodes.push(nodeid)


      // 可选步 创建材质、纹理、贴图以及其对象
      if (this.material !== undefined) {
        if (doc.materials === undefined) {
          doc.materials = []
        }
        let materialStartIndex = doc.materials.length
        prmt.material = materialStartIndex
        // todo!!
        // material <--- 用 IGLTFMaterial 是有问题的，用户不知道索引之类的东西
        doc.materials.push(GLTFMaterial.fromJson(this.material))
      }
      // todo
      if (this.textureImage !== undefined) {
        // image，即 GLTFImage 的索引号，在这一步创建完成后，要更新材质中 纹理的source
        console.log('贴图功能正在开发...')
      }

      // 第三步 写入 buffer
      // 如何写入？创建新的？跟随某个buffer？
      // -- 写入分两步，先 vao，再 textureImage

      /* --- 获取buffer对象 --- */
      let bfData = undefined
      if (doc.buffers.length === 0) {
        const bfIndex = doc.buffers.push(new GLTFBuffer())
        bfData = doc.buffers[bfIndex].bufferData
      } else {
        bfData = doc.buffers[0].bufferData
      }

      /* --- 写入vao --- */
      if (bfData !== undefined) {
        // 检查8byte对齐
        const io = new IOBuffer(bfData)
        this.vertexArrayData.vertexBuffers.forEach(vbo => {
          io.writeBytes(new Uint8Array(vbo.buffer))
          // 检查8byte对齐
        })
      } else {
        const io = new IOBuffer()
        bfData = io.buffer as ArrayBuffer
      }
    } catch (error) {
      console.log(error)
    }
    return true
  }
}

export default GLTFAddAction