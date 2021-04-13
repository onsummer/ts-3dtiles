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
  scene?: number = 0

  buffers: GLTFBuffer[] = []
  bufferViews: GLTFBufferView[] = []
  accessors: GLTFAccessor[] = []

  scenes: GLTFScene[] = []
  nodes: GLTFNode[] = []
  meshes: GLTFMesh[] = []

  materials?: GLTFMaterial[]
  textures?: GLTFTexture[]
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
    const gltfObj = {
      asset: this.asset.json(),
      buffers: this.buffers.map(buffer => buffer.json()),
      bufferViews: this.bufferViews.map(bufferView => bufferView.json()),
      accessors: this.accessors.map(acc => acc.json()),
      
      scenes: this.scenes.map(scene => scene.json()),
      nodes: this.nodes.map(node => node.json()),
      meshes: this.meshes.map(mesh => mesh.json()),
    }
    writeDefinedProperty(gltfObj, 'scene', this.scene)
    writeDefinedProperty(gltfObj, 'materials', this.materials !== undefined && this.materials.length !== 0 ? this.materials.map(mt => mt.json()) : undefined)
    writeDefinedProperty(gltfObj, 'textures', this.textures !== undefined && this.textures.length !== 0 ? this.textures.map(tx => tx.json()) : undefined)
    writeDefinedProperty(gltfObj, 'images', this.images !== undefined && this.images.length !== 0 ? this.images.map(img => img.json()) : undefined)
    writeDefinedProperty(gltfObj, 'samplers', this.samplers !== undefined && this.samplers.length !== 0 ? this.samplers.map(spl => spl.json()) : undefined)
    writeDefinedProperty(gltfObj, 'cameras', this.cameras !== undefined && this.cameras.length !== 0 ? this.cameras.map(c => c.json()) : undefined)
    writeDefinedProperty(gltfObj, 'animations', this.animations !== undefined && this.animations.length !== 0 ? this.animations.map(ani => ani.json()) : undefined)
    writeDefinedProperty(gltfObj, 'skins', this.skins !== undefined && this.skins.length !== 0 ? this.skins.map(skin => skin.json()) : undefined)

    writeExtensionsProperty(gltfObj, this.extensions)
    writeDefinedProperty(gltfObj, 'extras', this.extras)
    writeDefinedProperty(gltfObj, 'extensionsUsed', this.extensionsUsed)
    writeDefinedProperty(gltfObj, 'extensionsRequired', this.extensionsRequired)
  }
}

export default GLTFDocument