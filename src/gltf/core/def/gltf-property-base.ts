import { GLTFExtensionBase } from "src/gltf/ext"
import { ISerializable, IValidate } from "src/interfaces"
import GLTFDocument from "../gltf-document"

export default class GLTFPropertyBase implements IValidate, ISerializable {
  extensions?: Set<GLTFExtensionBase>
  extras?: any
  protected _doc?: GLTFDocument
  get doc() {
    return this._doc
  }
  set doc(doc) {
    this._doc = doc
  }
  
  validate() {
    return true
  }

  json() {
    return {}
  }
}