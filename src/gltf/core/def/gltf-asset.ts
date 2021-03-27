enum GLTFVersion {
  TWO = "2.0",
  ONE = "1.0"
}

class GLTFAsset {
  version: GLTFVersion = GLTFVersion.TWO
  generator?: string  
  copyright?: string
}

export default GLTFAsset

export {
  GLTFVersion
}