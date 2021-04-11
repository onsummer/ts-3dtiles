export default interface IGLTFObj {
  asset: Object,
  buffer: number,
  bufferViews: [],
  accessors: [],
  scenes: [],
  nodes: [],
  meshes: [],
  textures?: [],
  images?: [],
  materials?: [],
  samplers?: [],
  animations?: [],
  cameras?: [],
  extensionsUsed?: string[]
  extensionsRequired?: string[]
  extensions?: Object,
  extras?: Object,
  skins?: []
}