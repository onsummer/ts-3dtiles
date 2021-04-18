import { GLTFDocument } from "src/gltf/core";
import IGLTFWriteAction from "../write-action";
declare class GLTFWriteQueueBase {
    actions: IGLTFWriteAction[];
    doc: GLTFDocument;
    execute(): void;
}
export default GLTFWriteQueueBase;
