import { readGLTF } from './src/gltf/io/read-action'

const doc = readGLTF({
  asset: {
    version: "2.0"
  },
  buffers: [
    {
      "uri": "data:application/octet-stream;base64,AAABAAIAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAAAAAAAAAAACAPwAAAAA=",
      "byteLength": 44
    }
  ],
  bufferViews: [
    {
      "buffer": 0,
      "byteOffset": 0,
      "byteLength": 6,
      "target": 34963
    },
    {
      "buffer": 0,
      "byteOffset": 8,
      "byteLength": 36,
      "target": 34962
    }
  ]
})

console.log(doc.asset.version)