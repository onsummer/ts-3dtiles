import { IOBuffer } from 'iobuffer'

import IValidate from "../../../../typings/IValidate"

import { GLTFDocument } from "../../../../gltf"
import B3dmHeader from "./header"
import B3dmFeatureTable from '../featuretable/featuretable-b3dm'
import { BatchTable } from "../batchtable"

function parseHeader(header: B3dmHeader, io: IOBuffer) {
  io.rewind()
  header.magic = io.readChars(4)
  header.version = io.readUint32()
  header.byteLength = io.readUint32()
  header.featureTableJSONByteLength = io.readUint32()
  header.featureTableBinaryByteLength = io.readUint32()
  header.batchTableJSONByteLength = io.readUint32()
  header.batchTableBinaryByteLength = io.readUint32()
}

function parse(b3dm: B3dm, buffer: ArrayBuffer) {
  const iobuffer = new IOBuffer(buffer)
  parseHeader(b3dm.header, iobuffer)

  if (b3dm.byteLength % 8 != 0) {
    throw new Error('[B3dm 实例化错误] byteLength 未 8 字节对齐。')
  }

  iobuffer.rewind()
  iobuffer.skip(28)
  const ftJSON = JSON.parse(iobuffer.readChars(b3dm.featureTableJSONByteLength))
  const ftBin = iobuffer.readBytes(b3dm.featureTableBinaryByteLength)
  b3dm.featureTable = B3dmFeatureTable.createFromJSON(ftJSON, ftBin)

  if (b3dm.batchTableJSONByteLength !== 0) {
    const btJSON = JSON.parse(iobuffer.readChars(b3dm.batchTableJSONByteLength))
    const btBin = iobuffer.readBytes(b3dm.batchTableBinaryByteLength)
    b3dm.batchTable = BatchTable.createFromJSON(btJSON, btBin)
  }

  /* TODO: Parse GLB to GLTFDocument */
}

class B3dm implements IValidate {
  header: B3dmHeader
  featureTable: B3dmFeatureTable
  batchTable?: BatchTable
  parsedGLTF: GLTFDocument
  buffer?: ArrayBuffer

  constructor(buffer: ArrayBuffer, cacheBuffer = false) {
    this.header = new B3dmHeader()
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

  get sizeWithoutGLB() {
    return 28 + 
    this.featureTableJSONByteLength + 
    this.featureTableBinaryByteLength + 
    this.batchTableJSONByteLength + 
    this.batchTableBinaryByteLength
  }
}

export default B3dm