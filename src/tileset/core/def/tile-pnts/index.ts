import { IOBuffer } from "iobuffer"

import IValidate from "../../../../interfaces/IValidate"

import { GLTFDocument } from "../../../.."
import PntsFeatureTable from "../featuretable/featuretable-pnts"
import PntsHeader from "./header"
import { BatchTable } from "../batchtable"

function parseHeader(header: PntsHeader, io: IOBuffer) {
  io.rewind()
  header.magic = io.readChars(4)
  header.version = io.readUint32()
  header.byteLength = io.readUint32()
  header.featureTableJSONByteLength = io.readUint32()
  header.featureTableBinaryByteLength = io.readUint32()
  header.batchTableJSONByteLength = io.readUint32()
  header.batchTableBinaryByteLength = io.readUint32()
}

function parse(pnts: Pnts, buffer: ArrayBuffer) {
  const iobuffer = new IOBuffer(buffer)
  parseHeader(pnts.header, iobuffer)

  if (pnts.byteLength % 8 != 0) {
    throw new Error('[Pnts 实例化错误] byteLength 未 8 字节对齐。')
  }

  iobuffer.rewind()
  iobuffer.skip(28)
  const ftJSON = JSON.parse(iobuffer.readChars(pnts.featureTableJSONByteLength))
  const ftBin = iobuffer.readBytes(pnts.featureTableBinaryByteLength)
  pnts.featureTable = PntsFeatureTable.createFromJSON(ftJSON, ftBin)

  if (pnts.batchTableJSONByteLength !== 0) {
    const btJSON = JSON.parse(iobuffer.readChars(pnts.batchTableJSONByteLength))
    const btBin = iobuffer.readBytes(pnts.batchTableBinaryByteLength)
    pnts.batchTable = BatchTable.createFromJSON(btJSON, btBin)
  }
}

class Pnts implements IValidate {
  header: PntsHeader
  featureTable: PntsFeatureTable
  batchTable?: BatchTable
  parsedGLTF: GLTFDocument
  buffer?: ArrayBuffer

  constructor(buffer: ArrayBuffer, cacheBuffer = false) {
    this.header = new PntsHeader()
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

export default Pnts