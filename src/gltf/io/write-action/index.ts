import { GLTFDocument } from "../..";

class GLTFWriteAction {
  doc?: GLTFDocument
  constructor() {
    this.doc = undefined
  }

  setDocument(d: GLTFDocument) {
    // if (d.validate()) {
    //   this.doc = d
    // }
    this.doc = d
  }

  write(resultPath: string) {
    return this.doc
  }
}

export default GLTFWriteAction