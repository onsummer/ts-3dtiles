import { GLTFDocument } from "../..";
declare class GLTFWriteAction {
    doc?: GLTFDocument;
    constructor();
    setDocument(d: GLTFDocument): void;
    write(resultPath: string): GLTFDocument | undefined;
}
export default GLTFWriteAction;
