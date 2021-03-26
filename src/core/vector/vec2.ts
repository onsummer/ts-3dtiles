class Vec2 {
  protected _v1 = 0
  protected _v2 = 0

  get v1() {
    return this._v1
  }
  get v2() {
    return this._v2
  }

  set v1(value: number) {
    this._v1 = value
  }
  set v2(value: number) {
    this._v2 = value
  }
}

export const length = (v: Vec2) => {
  return Math.sqrt(v.v1 ** 2 + v.v2 ** 2)
}

export default Vec2