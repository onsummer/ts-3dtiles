import { GLTFDocument } from "src/gltf/core"
import { readGLB } from "../read-util"

export default function glb2gltfDocument(glb: Uint8Array | ArrayBuffer | Buffer): GLTFDocument {
  return readGLB(glb)
}
