import { GLTFAccessor, GLTFAnimation, GLTFAsset, GLTFBuffer, GLTFBufferView, GLTFCamera, GLTFDocument, GLTFImage, GLTFMaterial, GLTFMesh, GLTFNode, GLTFSampler, GLTFScene, GLTFSkin, GLTFTexture } from "src/gltf/core"
import { IGLTFObj, IGLTFAccessor, IGLTFAnimation, IGLTFBuffer, IGLTFBufferView, IGLTFCamera, IGLTFImage, IGLTFMaterial, IGLTFMesh, IGLTFNode, IGLTFSampler, IGLTFScene, IGLTFSkin, IGLTFTexture } from "src/interfaces"
import GLTFReadType from "src/interfaces/GLTFReadType"
import GLTFResources from "src/interfaces/GLTFResources"

function readBuffers(gltfBuffers: GLTFBuffer[], json: IGLTFBuffer[]) {
  for (const bfjson of json) {
    const bf = GLTFBuffer.fromJson(bfjson)
    gltfBuffers.push(bf)
  }
}

function readBufferViews(gltfBufferViews: GLTFBufferView[], json: IGLTFBufferView[]) {
  for (const bvjson of json) {
    const bv = GLTFBufferView.fromJson(bvjson)
    // extensions 单独处理
    gltfBufferViews.push(bv)
  }
}

function readAccessors(gltfAccessors: GLTFAccessor[], json: IGLTFAccessor[]) {
  for (const accjson of json) {
    const acc = GLTFAccessor.fromJson(accjson)
    // extensions 单独处理
    gltfAccessors.push(acc)
  }
}

function readScenes(gltfScenes: GLTFScene[], json: IGLTFScene[]) {
  for (const scenejson of json) {
    const scene = GLTFScene.fromJson(scenejson)
    gltfScenes.push(scene)
  }
}

function readNodes(gltfNodes: GLTFNode[], json: IGLTFNode[]) {
  for (const nodejson of json) {
    const node = GLTFNode.fromJson(nodejson)
    gltfNodes.push(node)
  }
}

function readMeshs(gltfMeshs: GLTFMesh[], json: IGLTFMesh[]) {
  for (const meshjson of json) {
    const mesh = GLTFMesh.fromJson(meshjson)
    gltfMeshs.push(mesh)
  }
}

function readTextures(gltfTextures: GLTFTexture[], json: IGLTFTexture[]) {
  for (const txjson of json) {
    const tx = GLTFTexture.fromJson(txjson)
    gltfTextures.push(tx)
  }
}

function readImages(gltfImages: GLTFImage[], json: IGLTFImage[]) {
  for (const imgjson of json) {
    const img = GLTFImage.fromJson(imgjson)
    gltfImages.push(img)
  }
}

function readMaterials(gltfMaterials: GLTFMaterial[], json: IGLTFMaterial[]) {
  for (const mtrljson of json) {
    const mtrl = GLTFMaterial.fromJson(mtrljson)
    gltfMaterials.push(mtrl)
  }
}

function readSamplers(gltfSamplers: GLTFSampler[], json: IGLTFSampler[]) {
  for (const spljson of json) {
    const spl = GLTFSampler.fromJson(spljson)
    gltfSamplers.push(spl)
  }
}

function readAnimations(gltfAnimations: GLTFAnimation[], json: IGLTFAnimation[]) {
  for (const anijson of json) {
    const ani = GLTFAnimation.fromJson(anijson)
    gltfAnimations.push(ani)
  }
}

function readSkins(gltfSkins: GLTFSkin[], json: IGLTFSkin[]) {
  for (const skinjson of json) {
    const skin = GLTFSkin.fromJson(skinjson)
    gltfSkins.push(skin)
  }
}

function readCameras(gltfCameras: GLTFCamera[], json: IGLTFCamera[]) {
  for (const camerajson of json) {
    const camera = GLTFCamera.fromJson(camerajson)
    gltfCameras.push(camera)
  }
}

function bind(doc: GLTFDocument) {
  doc.asset.doc = doc
  doc.buffers.forEach(bf => bf.doc = doc)
  doc.bufferViews.forEach(bv => bv.doc = doc)
  doc.accessors.forEach(acc => acc.doc = doc)
  doc.scenes.forEach(scene => scene.doc = doc)
  doc.nodes.forEach(nd => nd.doc = doc)
  doc.meshes.forEach(mesh => mesh.doc = doc)
  if (doc.materials)
    doc.materials.forEach(mtl => mtl.doc = doc)
  if (doc.textures)
    doc.textures.forEach(tx => tx.doc = doc)
  if (doc.images)
    doc.images.forEach(img => img.doc = doc)
  if (doc.samplers)
    doc.samplers.forEach(spl => spl.doc = doc)
  if (doc.animations)
    doc.animations.forEach(ani => ani.doc = doc)
  if (doc.cameras)
    doc.cameras.forEach(camera => camera.doc = doc)
  if (doc.skins)
    doc.skins.forEach(skin => skin.doc = doc)
}

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
  doc.asset = GLTFAsset.readFromJson(obj['asset'])
  readBuffers(doc.buffers, obj['buffers'])
  readBufferViews(doc.bufferViews, obj['bufferViews'])
  readAccessors(doc.accessors, obj['accessors'])
  readScenes(doc.scenes, obj['scenes'])
  readNodes(doc.nodes, obj['nodes'])
  readMeshs(doc.meshes, obj['meshes'])
  if (obj['textures'] !== undefined) {
    readTextures(doc.textures === undefined ? new Array<GLTFTexture>() : doc.textures, obj['textures'])
  }
  if (obj['images'] !== undefined) {
    readImages(doc.images === undefined ? new Array<GLTFImage>() : doc.images, obj['images'])
  }
  if (obj['materials'] !== undefined) {
    readMaterials(doc.materials === undefined ? new Array<GLTFMaterial>() : doc.materials, obj['materials'])
  }
  if (obj['samplers'] !== undefined) {
    readSamplers(doc.samplers === undefined ? new Array<GLTFSampler>() : doc.samplers, obj['samplers'])
  }
  if (obj['animations'] !== undefined) {
    readAnimations(doc.animations === undefined ? new Array<GLTFAnimation>() : doc.animations, obj['animations'])
  }
  if (obj['skins'] !== undefined) {
    readSkins(doc.skins === undefined ? new Array<GLTFSkin>() : doc.skins, obj['skins'])
  }
  if (obj['cameras'] !== undefined) {
    readCameras(doc.cameras === undefined ? new Array<GLTFCamera>() : doc.cameras, obj['cameras'])
  }

  bind(doc)
  return doc
}

export default readGLTF