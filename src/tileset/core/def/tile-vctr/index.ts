import { IOBuffer } from "iobuffer"
import IValidate from "../../../../interfaces/IValidate"
import { BatchTable } from "../batchtable"
import { FeatureTable } from "../featuretable"
import VctrFeatureTable from "../featuretable/featuretable-vctr"
import VctrHeader from "./header"

function parseHeader(header: VctrHeader, io: IOBuffer) {
  io.rewind()
  header.magic = io.readChars(4)
  header.version = io.readUint32()
  header.byteLength = io.readUint32()
  header.featureTableJSONByteLength = io.readUint32()
  header.featureTableBinaryByteLength = io.readUint32()
  header.batchTableJSONByteLength = io.readUint32()
  header.batchTableBinaryByteLength = io.readUint32()
  header.polygonIndicesByteLength = io.readUint32()
  header.polygonPositionsByteLength = io.readUint32()
  header.polylinePositionsByteLength = io.readUint32()
  header.pointPositionsByteLength = io.readUint32()
}

function parse(vctr: Vctr, buffer: ArrayBuffer) {
  const iobuffer = new IOBuffer(buffer)
  parseHeader(vctr.header, iobuffer)

  if (vctr.byteLength % 8 != 0) {
    throw new Error('[Vctr 实例化错误] byteLength 未 8 字节对齐。')
  }

  iobuffer.rewind()
  iobuffer.skip(44)
  const ftJSON = JSON.parse(iobuffer.readChars(vctr.featureTableJSONByteLength))
  const ftBin = iobuffer.readBytes(vctr.featureTableBinaryByteLength)
  vctr.featureTable = VctrFeatureTable.createFromJSON(ftJSON, ftBin)

  const btJSON = JSON.parse(iobuffer.readChars(vctr.batchTableJSONByteLength))
  const btBin = iobuffer.readBytes(vctr.batchTableBinaryByteLength)
  vctr.batchTable = BatchTable.createFromJSON(btJSON, btBin)
}

class Vctr implements IValidate {
  header: VctrHeader
  featureTable: FeatureTable
  batchTable: BatchTable
  indices: any
  positions: any
  buffer?: ArrayBuffer

  /**
   *
   */
  constructor(buffer: ArrayBuffer, cacheBuffer = false) {
    this.header = new VctrHeader()
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

  get polygonIndicesByteLength() {
    return this.header.polygonIndicesByteLength
  }

  get polygonPositionsByteLength() {
    return this.header.polygonPositionsByteLength
  }

  get polylinePositionsByteLengt() {
    return this.header.polylinePositionsByteLength
  }

  get pointPositionsByteLength() {
    return this.header.pointPositionsByteLength
  }
}

export default Vctr