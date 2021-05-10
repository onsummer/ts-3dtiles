/*
  TODO
 */

import GLTFExtensionBase from "../gltf-extension-base"

class ExtLightPunctual extends GLTFExtensionBase {
  _name: string = "KHR_lights_punctual"

  target: string = "extensions" // 也可以是 node

  lights: any[]
}

export default ExtLightPunctual
