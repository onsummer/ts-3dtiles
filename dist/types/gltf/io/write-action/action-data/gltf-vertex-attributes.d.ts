import { GLTFVertexBuffer } from "src";
import { GLTFDocument, GLTFPrimitive, GLTFPrimitiveMode } from "src/gltf/core";
import { GLTFExtensionBase } from "src/gltf/ext";
import { IValidate } from "src/interfaces";
import GLTFVertexIndices from "./gltf-vertex-indices";
/**
 * GLTFVertexAttributes 相对于 GLTFPrimitive 的数据本体，只不过它保存的是顶点属性的真实数据
 */
declare class GLTFVertexAttributes implements IValidate {
    /**
     * vertexBuffers，相当于 GLTFPrimitiveAttributes 中每一个 attribute 的数据本体
     */
    vertexBuffers: GLTFVertexBuffer[];
    primitiveMode: GLTFPrimitiveMode;
    extensions?: Set<GLTFExtensionBase>;
    /**
     * indices 与 GLTFPrimitive.indices 意义相同，是索引型数据
     */
    indices?: GLTFVertexIndices;
    /**
     * @todo 检测 indices 数量与 vertexBuffers 的数量关系是否正确
     */
    validate(): boolean;
    get verticeCount(): number;
    asPrimitive(doc: GLTFDocument, materialIndex?: number): GLTFPrimitive;
}
export default GLTFVertexAttributes;
