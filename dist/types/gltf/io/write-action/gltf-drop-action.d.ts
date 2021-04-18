import { IGLTFWriteAction } from "src/interfaces";
declare class GLTFDropAction implements IGLTFWriteAction {
    readonly type = "drop";
    dropTarget: any;
    submit(): boolean;
}
export default GLTFDropAction;
