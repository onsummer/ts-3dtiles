import { GLTFAccessor, GLTFAlphaMode, GLTFAnimation, GLTFAsset, GLTFAttributeType, GLTFBuffer, GLTFBufferView, GLTFCamera, GLTFComponentType, GLTFDocument, GLTFFilter, GLTFImage, GLTFMaterial, GLTFMesh, GLTFNode, GLTFOrthographicCamera, GLTFPerspectiveCamera, GLTFPrimitive, GLTFPrimitiveAttribute, GLTFPrimitiveMode, GLTFSampler, GLTFScene, GLTFSkin, GLTFTexture, GLTFVersion, GLTFWrapMode, MIME } from "src/gltf/core"
import { IGLTFObj } from "src/interfaces"
import { IGLTFAccessor, IGLTFAnimation, IGLTFBuffer, IGLTFBufferView, IGLTFCamera, IGLTFImage, IGLTFMaterial, IGLTFMesh, IGLTFNode, IGLTFPrimitive, IGLTFSampler, IGLTFScene, IGLTFSkin, IGLTFTexture } from "src/interfaces/IGLTFObj"
import GLTFReadType from "src/interfaces/GLTFReadType"
import GLTFResources from "src/interfaces/GLTFResources"
import GLTFCameraType from "src/gltf/core/def/enum/gltf-cameratype"

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

function readAccessors(gltfAccessors: GLTFAccessor[], json: IGLTFAccessor[]) {
  for (const accjson of json) {
    const acc = new GLTFAccessor()
    if (accjson.componentType in GLTFComponentType) {
      acc.componentType = accjson.componentType as GLTFComponentType
    } else {
      throw new Error('[readGLTF() readAccessors()] 属性 componentType 非法')
    }
    acc.count = accjson.count
    if (accjson.type in GLTFAttributeType) {
      acc.type = accjson['type'] as GLTFAttributeType
    } else {
      throw new Error('[readGLTF() readAccessors()] 属性 type 非法')
    }
    acc.max = accjson.max
    acc.min = accjson.min
    acc.sparse = accjson.sparse
    acc.normalized = accjson.normalized
    acc.bufferView = accjson.bufferView
    acc.byteOffset = accjson.byteOffset
    acc.name = accjson.name
    acc.extras = accjson.extras
    // extensions 单独处理
    gltfAccessors.push(acc)
  }
}

function readScenes(gltfScenes: GLTFScene[], json: IGLTFScene[]) {
  for (const scenejson of json) {
    const scene = new GLTFScene()
    scene.name = scenejson.name
    scene.nodes = scenejson.nodes
    scene.extras = scenejson.extras
    gltfScenes.push(scene)
  }
}

function readNodes(gltfNodes: GLTFNode[], json: IGLTFNode[]) {
  for (const nodejson of json) {
    const node = new GLTFNode()
    node.name = nodejson.name
    node.mesh = nodejson.mesh
    node.matrix = nodejson.matrix
    node.rotation = nodejson.rotation
    node.scale = nodejson.scale
    node.skin = nodejson.skin
    node.children = nodejson.children
    node.weights = nodejson.weights
    node.translation = nodejson.translation
    node.camera = nodejson.camera
    node.extras = nodejson.extras
    gltfNodes.push(node)
  }
}

function readMeshs(gltfMeshs: GLTFMesh[], json: IGLTFMesh[]) {
  for (const meshjson of json) {
    const mesh = new GLTFMesh()
    mesh.name = meshjson.name
    readPrimitives(mesh.primitives, meshjson.primitives)
    mesh.weights = meshjson.weights
    mesh.extras = meshjson.extras
    gltfMeshs.push(mesh)
  }
}

function readPrimitives(primitives: GLTFPrimitive[], json: IGLTFPrimitive[]) {
  for (const prmtjson of json) {
    const prmt = new GLTFPrimitive()
    prmt.indices = prmtjson.indices
    prmt.material = prmtjson.material
    if (prmtjson.mode !== undefined && prmtjson.mode !== 4) {
      if (prmtjson.mode in GLTFPrimitiveMode) {
        prmt.mode = prmtjson.mode as GLTFPrimitiveMode
      } else {
        throw new Error(`[readGLTF() readMeshs() readPrimitives()] mode：${prmtjson.mode} 不合法，请检查`)
      }
    }
    prmt.attribute = GLTFPrimitiveAttribute.readFromJson(prmtjson.attribute)
    primitives.push(prmt)
  }
}

function readTextures(gltfTextures: GLTFTexture[], json: IGLTFTexture[]) {
  for (const txjson of json) {
    const tx = new GLTFTexture()
    tx.name = txjson.name
    tx.source = txjson.source
    tx.sampler = txjson.sampler
    tx.extras = txjson.extras
    gltfTextures.push(tx)
  }
}

function readImages(gltfImages: GLTFImage[], json: IGLTFImage[]) {
  for (const imgjson of json) {
    const img = new GLTFImage()
    img.name = imgjson.name
    img.bufferView = imgjson.bufferView
    if (imgjson.mimeType !== undefined) {
      if (imgjson.mimeType in MIME) {
        img.mimeType = imgjson.mimeType as MIME
      } else {
        throw new Error('[readGLTF() readImages()] 不支持的 mime 类型')
      }
    }
    img.extras = imgjson.extras
    gltfImages.push(img)
  }
}

function readMaterials(gltfMaterials: GLTFMaterial[], json: IGLTFMaterial[]) {
  for (const mtrljson of json) {
    const mtrl = new GLTFMaterial()
    mtrl.name = mtrljson.name
    // mtrl.pbrMetallicRoughness = mtrljson.pbrMetallicRoughness
    // mtrl.normalTexture = mtrljson.normalTexture
    // mtrl.alphaMode = mtrljson.alphaMode as GLTFAlphaMode
    mtrl.doubleSided = mtrljson.doubleSided
    mtrl.emissiveFactor = mtrljson.emissiveFactor
    mtrl.alphaCutoff = mtrljson.alphaCutoff
    mtrl.extras = mtrljson.extras
    gltfMaterials.push(mtrl)
  }
}

function readSamplers(gltfSamplers: GLTFSampler[], json: IGLTFSampler[]) {
  for (const spljson of json) {
    const spl = new GLTFSampler()
    spl.name = spljson.name
    // spl.magFilter = spljson.magFilter as GLTFFilter
    // spl.minFilter = spljson.minFilter as GLTFFilter
    // spl.wrapS = spljson.wrapS as GLTFWrapMode
    // spl.wrapT = spljson.wrapT as GLTFWrapMode
    spl.extras = spljson.extras
    gltfSamplers.push(spl)
  }
}

function readAnimations(gltfAnimations: GLTFAnimation[], json: IGLTFAnimation[]) {
  for (const anijson of json) {
    const ani = new GLTFAnimation()
    ani.name = anijson.name
    // ani.channels = anijson.channels
    // ani.samplers = anijson.samplers
    ani.extras = anijson.extras
    gltfAnimations.push(ani)
  }
}

function readSkins(gltfSkins: GLTFSkin[], json: IGLTFSkin[]) {
  for (const skinjson of json) {
    const skin = new GLTFSkin()
    skin.joints = skinjson.joints
    skin.name = skinjson.name
    skin.inverseBindMatrices = skinjson.inverseBindMatrices
    skin.skeleton = skinjson.skeleton
    skin.extras = skin.extras
    gltfSkins.push(skin)
  }
}

function readCameras(gltfCameras: GLTFCamera[], json: IGLTFCamera[]) {
  for (const camerajson of json) {
    const camera = new GLTFCamera()
    camera.name = camerajson.name
    camera.type = camerajson.type as GLTFCameraType
    let hasCamera = false
    if (camerajson.perspective !== undefined) {
      camera.perspective = new GLTFPerspectiveCamera()
      camera.perspective.yfov = camerajson.perspective.yfov
      camera.perspective.znear = camerajson.perspective.znear
      camera.perspective.aspectRatio = camerajson.perspective.aspectRatio
      camera.perspective.zfar = camerajson.perspective.zfar
      hasCamera = true
    }
    if (camerajson.orthographic !== undefined) {
      if (hasCamera) {
        throw new Error('[readGLTF() readCameras()] 已经有一个 perspective 相机了')
      }
      camera.orthographic = new GLTFOrthographicCamera()
      camera.orthographic.xmag = camerajson.orthographic.xmag
      camera.orthographic.ymag = camerajson.orthographic.ymag
      camera.orthographic.zfar = camerajson.orthographic.zfar
      camera.orthographic.znear = camerajson.orthographic.znear
    }
    camera.extras = camerajson.extras
    gltfCameras.push(camera)
  }
}

// function bind(doc: GLTFDocument) {
// 绑定 doc 到各个元素上
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

  // bind(doc)
  return doc
}

export default readGLTF