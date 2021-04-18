import { GLTFExtensionBase } from "src/gltf/ext";
import { ISerializable, IValidate } from "src/interfaces";
import GLTFDocument from "../gltf-document";
export default class GLTFPropertyBase implements IValidate, ISerializable {
    extensions?: Set<GLTFExtensionBase>;
    extras?: any;
    protected _doc?: GLTFDocument;
    get doc(): GLTFDocument | undefined;
    set doc(doc: GLTFDocument | undefined);
    validate(): boolean;
    json(): {};
}
