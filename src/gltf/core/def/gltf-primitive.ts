import GLTFPrimitiveAttribute from "./gltf-primitive-attribute"

class GLTFPrimitive {
  attribute: GLTFPrimitiveAttribute
  indices?: number
  private _material: number | undefined
  constructor(options: {
    attribute: {
      position: number,
      [propName: string]: any
    },
    indices?: number,
    material?: number
  }) {
    this.attribute = new GLTFPrimitiveAttribute({
      position: options.attribute.position,
      st1: options.attribute['st1'],
      normal: options.attribute['normal']
    })
    this.indices = options.indices
    this.material = options.material
  }

  get material() {
    return this._material
  } 
  set material(value: number | undefined) {
    if (value! < 0) {
      throw new Error('material index must greater than 0.')
    }
    else {
      this._material = value
    }
  }
}

export default GLTFPrimitive