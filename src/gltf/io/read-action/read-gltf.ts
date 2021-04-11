import { GLTFAsset, GLTFBuffer, GLTFDocument, GLTFVersion } from "src/gltf/core"
import { IGLTFObj } from "src/interfaces"
import GLTFReadType from "src/interfaces/GLTFReadType"
import GLTFResources from "src/interfaces/GLTFResources"
import { IGLTFAsset } from "src/interfaces/IGLTFObj"

const doc = new GLTFDocument()

function readAsset(gltfAsset: GLTFAsset, json: IGLTFAsset) {
  gltfAsset.version = json.version === "1.0" ? GLTFVersion.ONE : GLTFVersion.TWO
  gltfAsset.minVersion = json.minVersion === "1.0" ? GLTFVersion.ONE : GLTFVersion.TWO
  gltfAsset.copyright = json.copyright
  gltfAsset.generator = json.generator
}

// TODO
function readBuffers(gltfBuffers: GLTFBuffer[], json: []) {

}

const readGLTF = (json: GLTFReadType, ...resources: GLTFResources[]) => {
  let obj = json
  if (typeof json === "string") {
    obj = JSON.parse(json.trim())
  }
  obj = obj as IGLTFObj

  readAsset(doc.asset, obj['asset'])
  readBuffers(doc.buffers, obj['buffers'])
  return doc
}

export default readGLTF