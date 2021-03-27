class GLTFFid {
  _value: number = 0
  constructor(value: number) {
    this.value = value
  }

  static fromNumber(v: number) {
    return new GLTFFid(v)
  }

  get value() {
    return this._value
  }
  set value(value: number) {
    if (value < 0) {
      throw new RangeError('fid must greater than zero.')
    }
    // TODO 整数验证
    this._value = value
  }
}

export default GLTFFid