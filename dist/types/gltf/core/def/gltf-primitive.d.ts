import { IGLTFPrimitive } from "src/interfaces/IGLTFObj";
import GLTFPropertyBase from "./gltf-property-base";
import GLTFPrimitiveMode from "./enum/gltf-primitivemode";
import GLTFPrimitiveAttribute from "./gltf-primitive-attribute";
declare class GLTFPrimitive extends GLTFPropertyBase {
    attributes: GLTFPrimitiveAttribute;
    indices?: number;
    material?: number;
    mode?: GLTFPrimitiveMode;
    constructor();
    /**
     * 获取对应顶点属性的访问器
     * @param {string} attrName 顶点属性名，允许值是：
     * `'uv0'` | `'uv'`(等同uv0) | `'uv1'` | `'color0'` | `'color'` |
     * `'normal'` | `'tangent'` | `'joints0'` | `'joints'` | `'weights0'` |
     * `'weights'` | `'_batchid'` | `'batchid'`
     *
     * 大写小写均可，例如 `'UV0'` 和 `'uv'`、`'uv0'` 是一样的
     * @returns {GLTFAccessor | undefined}
     */
    getAccessor(attrName: string): import("./gltf-accessor").default | undefined;
    validate(): boolean;
    json(): {
        attribute: {
            POSITION: number;
        };
    };
    static fromJson(json: IGLTFPrimitive): GLTFPrimitive;
}
export default GLTFPrimitive;
