import ISerializable from 'src/interfaces/ISerializable'
import writeDefinedProperty from 'src/utils/io/writeDefinedProperty'
import writeExtensionsProperty from 'src/utils/io/writeExtensionsProperty'
import { GLTFExtensionBase } from '../ext'
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
  GLTFAnimation,
  GLTFCamera,
  GLTFSkin,
} from './def'

class GLTFDocument implements ISerializable {
  asset: GLTFAsset = new GLTFAsset()
  scene: number = 0

  buffers: GLTFBuffer[] = []
  bufferViews: GLTFBufferView[] = []
  accessors: GLTFAccessor[] = []

  scenes: GLTFScene[] = []
  nodes: GLTFNode[] = []
  meshes: GLTFMesh[] = []
  
  materials?: GLTFMaterial[] = []
  textures?: GLTFTexture[] = []
  images?: GLTFImage[]
  samplers?: GLTFSampler[]

  animations?: GLTFAnimation[]
  cameras?: GLTFCamera[]
  skins?: GLTFSkin[]

  extensions?: Set<GLTFExtensionBase>
  extras?: object
  extensionsUsed?: string[]
  extensionsRequired?: string[]

  json() {
    // if (!this.validate()) {
    //   throw new Error('[GLTFDocument json()] 文档校验失败')
    // }

    const gltfObj = {
      asset: this.asset.json(),
      scene: this.scene,
      buffers: this.buffers.map(buffer => buffer.json()),
      // bufferViews: this.bufferViews.map(bufferView => bufferView.json()),
      // accessors: this.accessors.map(acc => acc.json()),

      scenes: this.scenes.map(scene => scene.json()),
      // nodes: this.nodes.map(node => node.json()),
      meshes: this.meshes.map(mesh => mesh.json()),

      // materials: this.materials?.map(mt => mt.json()),
      textures: this.textures?.map(tx => tx.json()),
      images: this.images?.map(img => img.json()),
      samplers: this.samplers?.map(spl => spl.json()),

      // cameras: this.cameras?.map(c => c.json()),
      // animations: this.animations?.map(ani => ani.json()),
      // skins: this.skins?.map(skin => skin.json())
    }

    writeExtensionsProperty(gltfObj, <Set<GLTFExtensionBase>>this.extensions)
    writeDefinedProperty(gltfObj, 'extras', this.extras)
    writeDefinedProperty(gltfObj, 'extensionsUsed', this.extensionsUsed)
    writeDefinedProperty(gltfObj, 'extensionsRequired', this.extensionsRequired)
  }
}

export default GLTFDocument