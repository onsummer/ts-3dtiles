import { GLTFPrimitive, GLTFPrimitiveMode } from "src/gltf/core";
import { GLTFExtensionBase } from "src/gltf/ext";
import { IGLTFPrimitiveAttribute } from "src/interfaces";
/**
 * 考虑做一个无索引的 primitive 包，由 AddAction 引用
 * bag 必须实现一个共同的接口，即 bundle 之类的，返回正确的 primitive
 */
declare class GLTFVAOBag {
    /** 考虑拆分 */
    data: ArrayBuffer | Uint8Array;
    /** 数字类型 Uint8、Uint32、Float32... */
    types: string[];
    /** 数组长度 */
    length: number;
    material?: number;
    extensions?: Set<GLTFExtensionBase>;
    primitiveMode: GLTFPrimitiveMode.TRIANGLES;
    /** 这一步中 attributes 的 accessor 索引号，应当由外部 queue 传递进来，material 索引同理 */
    asPrimitive(attributes: IGLTFPrimitiveAttribute, materialIndex?: number): {
        prmt: GLTFPrimitive;
        self: GLTFVAOBag;
    };
}
export default GLTFVAOBag;
