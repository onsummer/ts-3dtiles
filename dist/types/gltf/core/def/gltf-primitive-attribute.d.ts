import IValidate from "../../../typings/IValidate";
declare class GLTFPrimitiveAttribute implements IValidate {
    position: number;
    st1?: number;
    normal?: number;
    constructor(options: {
        position: number;
        st1?: number;
        normal?: number;
    });
    validate(): boolean;
}
export default GLTFPrimitiveAttribute;
