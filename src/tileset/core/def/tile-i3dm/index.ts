import { IOBuffer } from "iobuffer"

import IValidate from "../../../../interfaces/IValidate"

import { GLTFDocument } from "../../../../gltf"
import I3dmFeatureTable from "../featuretable/featuretable-i3dm"
import I3dmHeader from "./header"
import { BatchTable } from "../batchtable"

function parseHeader(header: I3dmHeader, io: IOBuffer) {
  io.rewind()
  header.magic = io.readChars(4)
  header.version = io.readUint32()
  header.byteLength = io.readUint32()
  header.featureTableJSONByteLength = io.readUint32()
  header.featureTableBinaryByteLength = io.readUint32()
  header.batchTableJSONByteLength = io.readUint32()
  header.batchTableBinaryByteLength = io.readUint32()
  header.gltfFormat = io.readUint32()
}

function parse(i3dm: I3dm, buffer: ArrayBuffer) {
  const iobuffer = new IOBuffer(buffer)
  parseHeader(i3dm.header, iobuffer)

  if (i3dm.byteLength % 8 != 0) {
    throw new Error('[I3dm 实例化错误] byteLength 未 8 字节对齐。')
  }

  iobuffer.rewind()
  iobuffer.skip(32)
  const ftJSON = JSON.parse(iobuffer.readChars(i3dm.featureTableJSONByteLength))
  const ftBin = iobuffer.readBytes(i3dm.featureTableBinaryByteLength)
  i3dm.featureTable = I3dmFeatureTable.createFromJSON(ftJSON, ftBin)

  if (i3dm.batchTableJSONByteLength !== 0) {
    const btJSON = JSON.parse(iobuffer.readChars(i3dm.batchTableJSONByteLength))
    const btBin = iobuffer.readBytes(i3dm.batchTableBinaryByteLength)
    i3dm.batchTable = BatchTable.createFromJSON(btJSON, btBin)
  }

  /* TODO: Parse GLB to GLTFDocument */
}

class I3dm implements IValidate {
  header: I3dmHeader
  featureTable: I3dmFeatureTable
  batchTable?: BatchTable
  externalData: string | GLTFDocument
  buffer?: ArrayBuffer

  /**
   *
   */
  constructor(buffer: ArrayBuffer, cacheBuffer = false) {
    this.header = new I3dmHeader()
    parse(this, buffer)

    if (cacheBuffer === true) {
      this.buffer = buffer
    }
  }

  validate() {
    return true
  }

  get magic() {
    return this.header.magic
  }

  get byteLength() {
    return this.header.byteLength
  }

  get version() {
    return this.header.version
  }

  get featureTableJSONByteLength() {
    return this.header.featureTableJSONByteLength
  }

  get featureTableBinaryByteLength() {
    return this.header.featureTableBinaryByteLength
  }

  get batchTableJSONByteLength() {
    return this.header.batchTableJSONByteLength
  }

  get batchTableBinaryByteLength() {
    return this.header.batchTableBinaryByteLength
  }

  get gltfFormat() {
    return this.header.gltfFormat
  }

  get sizeWithoutExternalData() {
    return 32 + 
    this.featureTableJSONByteLength + 
    this.featureTableBinaryByteLength + 
    this.batchTableJSONByteLength + 
    this.batchTableBinaryByteLength
  }
}

export default I3dm