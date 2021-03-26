class Vec3 {
  protected _v1 = 0
  protected _v2 = 0
  protected _v3 = 0

  get v1() {
    return this._v1
  }
  get v2() {
    return this._v2
  }
  get v3() {
    return this._v3
  }

  set v1(value: number) {
    this._v1 = value
  }
  set v2(value: number) {
    this._v2 = value
  }
  set v3(value: number) {
    this._v3 = value
  }
}

export default Vec3