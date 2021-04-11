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
    console.log(resultPath)
    return this.doc
  }
}

export default GLTFWriteAction