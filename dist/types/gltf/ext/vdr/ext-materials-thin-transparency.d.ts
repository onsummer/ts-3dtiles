import { GLTFTextureInfo } from "../../core";
import GLTFExtensionBase from "../gltf-extension-base";
/**
 * @description 此扩展由 adobe 提出，它解决的是 pbr 透明材质中没有表面反射的问题（玻璃完全透明，但是表面仍然是有反射的）
 */
declare class ExtMaterialsThinTransparency extends GLTFExtensionBase {
    _name: string;
    /**
     * @default 1.0
     */
    transmissionFactor?: number;
    /**
     *
     */
    transmissionTexture?: GLTFTextureInfo[];
    /**
     * @description
     * @default 1.33
     */
    ior?: number;
}
export default ExtMaterialsThinTransparency;
