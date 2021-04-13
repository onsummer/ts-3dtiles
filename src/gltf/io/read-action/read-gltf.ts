import { GLTFAsset, GLTFBuffer, GLTFBufferView, GLTFDocument, GLTFVersion } from "src/gltf/core"
import { IGLTFObj } from "src/interfaces"
import { IGLTFAsset, IGLTFBuffer, IGLTFBufferView } from "src/interfaces/IGLTFObj"
import GLTFReadType from "src/interfaces/GLTFReadType"
import GLTFResources from "src/interfaces/GLTFResources"

function readAsset(gltfAsset: GLTFAsset, json: IGLTFAsset) {
  gltfAsset.version = json.version === "1.0" ? GLTFVersion.ONE : GLTFVersion.TWO
  gltfAsset.minVersion = json.minVersion === "1.0" ? GLTFVersion.ONE : GLTFVersion.TWO
  gltfAsset.copyright = json.copyright
  gltfAsset.generator = json.generator
  gltfAsset.extras = json.extras
  // extensions 单独处理
}

function readBuffers(gltfBuffers: GLTFBuffer[], json: IGLTFBuffer[]) {
  for (const bfjson of json) {
    const bf = new GLTFBuffer()
    bf.uri = bfjson.uri
    bf.byteLength = bfjson.byteLength
    bf.extras = bfjson.extras
    // extensions 单独处理
    gltfBuffers.push(bf)
  }
}

function readBufferViews(gltfBufferViews: GLTFBufferView[], json: IGLTFBufferView[]) {
  for (const bvjson of json) {
    const bv = new GLTFBufferView()
    bv.buffer = bvjson.buffer
    bv.byteLength = bvjson.byteLength
    bv.byteOffset = bvjson.byteOffset
    bv.extras = bvjson.extras
    bv.target = bvjson.target
    // extensions 单独处理
    gltfBufferViews.push(bv)
  }
}

// function bind(doc: GLTFDocument) {
//   // 绑定 doc 到各个元素上
// }

const readGLTF = (json: GLTFReadType, ...resources: GLTFResources[]): GLTFDocument => {
  const doc = new GLTFDocument()
  let resourcesLength = resources.length
  console.log(`Resources Length is ${resourcesLength}`);

  let obj = json
  if (typeof json === "string") {
    obj = JSON.parse(json.trim())
  }
  obj = obj as IGLTFObj

  doc.scene = obj['scene']
  readAsset(doc.asset, obj['asset'])
  readBuffers(doc.buffers, obj['buffers'])
  readBufferViews(doc.bufferViews, obj['bufferViews'])

  // bind(doc)
  return doc
}

export default readGLTF