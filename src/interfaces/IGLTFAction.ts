import { GLTFDocument } from "src/gltf"

interface IGLTFWriteAction { 
  type: string
  submit(doc: GLTFDocument): boolean
}

export default IGLTFWriteAction