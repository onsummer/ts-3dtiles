export default interface IGLTFObj {
  asset: IGLTFAsset,
  buffer: number,
  buffers: [],
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

export interface IGLTFAsset {
  version: string
  minVersion?: string
  generator?: string
  copyright?: string
  extensions?: any
  extras?: any
}