/**
 * @enum {GLTFAlphaMode} 透明度模式
 */
declare enum GLTFAlphaMode {
    /**
     * @description 不透明。默认选项。
     */
    OPAQUE = "OPAQUE",
    /**
     * @description 透明度取决于 alphaCutOff 值，即半透明
     */
    MASK = "MASK",
    /**
     * @description 混合模式
     */
    BLEND = "BLEND"
}
export declare const GLTFAlphaModeValues: readonly string[];
export default GLTFAlphaMode;
