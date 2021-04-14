import { GLTFDocument } from "src/gltf";
export default interface IGLTFAction {
    /** methods */
    emit(): void;
    /** properties */
    doc: GLTFDocument;
    locked: boolean;
}
