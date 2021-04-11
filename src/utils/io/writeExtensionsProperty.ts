import { GLTFExtensionBase } from "src/gltf";

function writeExtensionsProperty(obj: any, exts?: Set<GLTFExtensionBase>) {
  if (exts !== undefined) {
    const extObj = {}
    const _ = [...exts]
    _.forEach(ext => {
      Object.defineProperty(extObj, ext.name, {
        value: ext.json()
      })
    })
    Object.defineProperty(obj, 'extensions', {
      value: extObj
    })
  }
}

export default writeExtensionsProperty