import { GLTFExtensionBase } from "src/gltf/ext"
import { ISerializable, IValidate } from "src/interfaces"
import GLTFDocument from "../gltf-document"

export default class GLTFPropertyBase implements IValidate, ISerializable {
  name?: string
  extensions?: Set<GLTFExtensionBase>
  extras?: any
  doc?: GLTFDocument
  
  validate() {
    return true
  }

  json() {
    return {}
  }
}