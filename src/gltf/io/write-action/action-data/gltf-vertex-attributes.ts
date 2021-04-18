import { GLTFVertexBuffer } from "src"
import { GLTFDocument, GLTFPrimitive, GLTFPrimitiveAttribute, GLTFPrimitiveMode } from "src/gltf/core"
import { GLTFExtensionBase } from "src/gltf/ext"
import { IValidate } from "src/interfaces"
import GLTFVertexIndices from "./gltf-vertex-indices"

function createAttribute(accessorStartIndex: number, vertexBuffers: GLTFVertexBuffer[]) {
  const attrs = new GLTFPrimitiveAttribute()

  vertexBuffers.forEach(vb => {
    switch (vb.type.toString()) {
      case 'position':
        attrs.position = ++accessorStartIndex
        break;
      case 'normal':
        attrs.normal = ++accessorStartIndex
        break;
      case 'uv0':
        attrs.uv0 = ++accessorStartIndex
        break;
      case 'uv1':
        attrs.uv1 = ++accessorStartIndex
        break;
      case 'joints0':
        attrs.joints0 = ++accessorStartIndex
        break;
      case 'weights0':
        attrs.weights0 = ++accessorStartIndex
        break;
      case 'tangent':
        attrs.tangent = ++accessorStartIndex
        break;
      case 'color0':
        attrs.color0 = ++accessorStartIndex
        break;
      default:
        break;
    }
  })
  return attrs
}

/**
 * GLTFVertexAttributes 相对于 GLTFPrimitive 的数据本体，只不过它保存的是顶点属性的真实数据
 */
class GLTFVertexAttributes implements IValidate {
  /**
   * vertexBuffers，相当于 GLTFPrimitiveAttributes 中每一个 attribute 的数据本体
   */
  vertexBuffers: GLTFVertexBuffer[] = []
  primitiveMode: GLTFPrimitiveMode = GLTFPrimitiveMode.TRIANGLES
  extensions?: Set<GLTFExtensionBase>
  /**
   * indices 与 GLTFPrimitive.indices 意义相同，是索引型数据
   */
  indices?: GLTFVertexIndices

  /**
   * @todo 检测 indices 数量与 vertexBuffers 的数量关系是否正确
   */
  validate() {
    return false
  }

  get verticeCount() {
    if (this.vertexBuffers.length === 0) {
      return 0
    }
    return this.vertexBuffers[0].count
  }

  asPrimitive(doc: GLTFDocument, materialIndex?: number) {
    const prmt = new GLTFPrimitive()
    prmt.material = materialIndex
    prmt.attributes = createAttribute(doc.accessors.length, this.vertexBuffers)
    if (this.indices !== undefined) {
      prmt.indices = ++doc.accessors.length
    }
    prmt.mode = this.primitiveMode
    prmt.doc = doc
    return prmt
  }
}

export default GLTFVertexAttributes