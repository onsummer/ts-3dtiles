import { IGLTFWriteAction } from "src/interfaces";
declare class GLTFUpdateAction implements IGLTFWriteAction {
    readonly type = "update";
    updateTargetType: string;
    updateTargetIndex?: any;
    submit(): boolean;
}
export default GLTFUpdateAction;
