import { GLTFDocument } from "src/gltf/core"
import GLTFReadType from "src/interfaces/GLTFReadType"
import GLTFResources from "src/interfaces/GLTFResources"
declare const readGLTF: (json: GLTFReadType, ...resources: GLTFResources[]) => GLTFDocument
export default readGLTF
