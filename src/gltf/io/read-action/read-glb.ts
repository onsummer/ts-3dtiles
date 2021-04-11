import { IOBuffer } from "iobuffer"
import readGLTF from "./read-gltf"

const readGLB = (binary: Uint8Array | ArrayBuffer | Buffer) => {
  /* read head */
  const io = new IOBuffer(binary)
  const magic = io.readChars(4)
  if (magic !== "gltf") {
    throw new Error("[readGLB()] 不是 glb 二进制")
  }
  const version = io.readUint32()
  if (version !== 2) {
    throw new Error("[readGLB()] 暂不支持其他版本，仅支持 2.0 版本")
  }
  const length = io.readUint32()
  if (length !== binary.byteLength) {
    throw new Error("[readGLB()] 数据长度异常")
  }
  
  /* read json */
  const jsonByteLength = io.readUint32()
  const jsonType = io.readUint32()
  console.log(`数据块 1 的类型: ${jsonType} (1=json, 0=bin)`)
  const jsonText = io.readChars(jsonByteLength)
  const json = JSON.parse(jsonText)

  /* read binarydata */
  const binByteLength = io.readUint32()
  const binType = io.readUint32()
  console.log(`数据块 2 的类型: ${binType} (1=json, 0=bin)`)
  let binarydata = undefined
  try {
    binarydata = io.readBytes(binByteLength)
  } catch {
    throw new Error("[readGLB()] 数据长度异常，试检查 glb binary 块有无问题")
  }

  /* read as gltfdocument */
  if (binarydata) {
    return readGLTF(json, binarydata)
  }
}

export default readGLB