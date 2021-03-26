import {
  GLTFAsset,
  GLTFBuffer,
  GLTFBufferView,
  GLTFAccessor,
  GLTFScene,
  GLTFNode,
  GLTFMesh,
  GLTFMaterial,
  GLTFImage,
  GLTFTexture,
  GLTFSampler,
} from './def'

class GLTFDocument {
  asset: GLTFAsset = new GLTFAsset()
  scene: number = 0

  buffers: GLTFBuffer[] = []
  bufferViews: GLTFBufferView[] = []
  accessors: GLTFAccessor[] = []

  scenes: GLTFScene[] = []
  nodes: GLTFNode[] = []
  meshes: GLTFMesh[] = []
  
  materials: GLTFMaterial[] = []
  textures: GLTFTexture[] = []
  images: GLTFImage[] = []
  samplers: GLTFSampler[] = []
}

export default GLTFDocument