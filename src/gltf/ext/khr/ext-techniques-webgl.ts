/*
  TODO
 */

import GLTFExtensionBase from "../gltf-extension-base"

class ExtTechniquesWebGL extends GLTFExtensionBase {
  _name: string = "KHR_techniques_webgl"

  target: string = "extensions" // 也可以是 material

  /* -- for extensions -- */
  programs: any[]
  shaders: any[]
  techniques: any[]

  /* -- for material -- */
  technique: number
  values: { [key: string]: number | boolean | number[] | boolean[] } // 数组的话，至少1个元素

  /**
   * @todo
   */
  validate() {
    return true
  }
}

export default ExtTechniquesWebGL
