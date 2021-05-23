function t(t, e, s) {
  void 0 !== s &&
    Object.defineProperty(t, e, { value: s, enumerable: !0, writable: !0, configurable: !0 })
}
function e(t, e) {
  if (void 0 !== e) {
    const s = {}
    ;[...e].forEach((t) => {
      Object.defineProperty(s, t.name, { value: t.json() })
    }),
      Object.defineProperty(t, "extensions", { value: s })
  }
}
class s {
  get doc() {
    return this._doc
  }
  set doc(t) {
    this._doc = t
  }
  validate() {
    return !0
  }
  json() {
    return {}
  }
}
var r
!(function (t) {
  ;(t.TWO = "2.0"), (t.ONE = "1.0")
})(r || (r = {}))
const i = Object.freeze(Object.values(r))
var n,
  a = r
class o extends s {
  constructor() {
    super(), (this.version = a.TWO)
  }
  validate() {
    return !0
  }
  json() {
    const e = { version: this.version }
    return (
      t(e, "generator", this.generator),
      t(e, "minVersion", this.minVersion),
      t(e, "copyright", this.copyright),
      t(e, "extensions", this.generator),
      t(e, "extras", this.extras),
      e
    )
  }
  static readFromJson(t) {
    const e = new o()
    if (!i.includes(t.version))
      throw new Error(`[GLTFAsset.readFromJson()] 参数 version：${t.version} 不合法，请检查`)
    if (((e.version = t.version), void 0 !== t.minVersion)) {
      if (!i.includes(t.minVersion))
        throw new Error(
          `[GLTFAsset.readFromJson()] 参数 minVersion: ${t.minVersion} 不合法，请检查`
        )
      e.minVersion = t.version
    }
    return (e.copyright = t.copyright), (e.generator = t.generator), (e.extras = t.extras), e
  }
}
!(function (t) {
  ;(t.SCALAR = "SCALAR"),
    (t.VEC2 = "VEC2"),
    (t.VEC3 = "VEC3"),
    (t.VEC4 = "VEC4"),
    (t.MAT2 = "MAT2"),
    (t.MAT3 = "MAT3"),
    (t.MAT4 = "MAT4")
})(n || (n = {}))
const h = Object.freeze(Object.values(n)),
  c = (t) => {
    switch (t) {
      case n.VEC2:
        return 2
      case n.VEC3:
        return 3
      case n.VEC4:
      case n.MAT2:
        return 4
      case n.MAT3:
        return 9
      case n.MAT4:
        return 16
      default:
        return 1
    }
  }
var u,
  l = n
!(function (t) {
  ;(t[(t.BYTE = 5120)] = "BYTE"),
    (t[(t.UNSIGNED_BYTE = 5121)] = "UNSIGNED_BYTE"),
    (t[(t.SHORT = 5122)] = "SHORT"),
    (t[(t.UNSIGNED_SHORT = 5123)] = "UNSIGNED_SHORT"),
    (t[(t.UNSIGNED_INT = 5125)] = "UNSIGNED_INT"),
    (t[(t.FLOAT = 5126)] = "FLOAT")
})(u || (u = {}))
const d = Object.freeze(Object.values(u)),
  f = (t) => {
    switch (t) {
      case u.BYTE:
      case u.UNSIGNED_BYTE:
        return 1
      case u.SHORT:
      case u.UNSIGNED_SHORT:
        return 2
      case u.UNSIGNED_INT:
      default:
        return 4
    }
  }
var m,
  p = u
!(function (t) {
  ;(t.OPAQUE = "OPAQUE"), (t.MASK = "MASK"), (t.BLEND = "BLEND")
})(m || (m = {}))
const v = Object.freeze(Object.values(m))
var b,
  g = m
!(function (t) {
  ;(t[(t.NEAREST = 9728)] = "NEAREST"),
    (t[(t.LINEAR = 9729)] = "LINEAR"),
    (t[(t.NEAREST_MIPMAP_NEAREST = 9984)] = "NEAREST_MIPMAP_NEAREST"),
    (t[(t.LINEAR_MIPMAP_NEAREST = 9985)] = "LINEAR_MIPMAP_NEAREST"),
    (t[(t.NEAREST_MIPMAP_LINEAR = 9986)] = "NEAREST_MIPMAP_LINEAR"),
    (t[(t.LINEAR_MIPMAP_LINEAR = 9987)] = "LINEAR_MIPMAP_LINEAR")
})(b || (b = {}))
const y = Object.freeze(Object.values(b))
var T,
  w = b
!(function (t) {
  ;(t[(t.REPEAT = 10497)] = "REPEAT"),
    (t[(t.CLAMP_TO_EDGE = 33071)] = "CLAMP_TO_EDGE"),
    (t[(t.MIRRORED_REPEAT = 33648)] = "MIRRORED_REPEAT")
})(T || (T = {}))
const x = Object.freeze(Object.values(T))
var E,
  L = T
!(function (t) {
  ;(t[(t.POINTS = 0)] = "POINTS"),
    (t[(t.LINES = 1)] = "LINES"),
    (t[(t.LINE_LOOP = 2)] = "LINE_LOOP"),
    (t[(t.LINE_STRIP = 3)] = "LINE_STRIP"),
    (t[(t.TRIANGLES = 4)] = "TRIANGLES"),
    (t[(t.TRIANGLE_STRIP = 5)] = "TRIANGLE_STRIP"),
    (t[(t.TRIANGLE_FAN = 6)] = "TRIANGLE_FAN")
})(E || (E = {}))
const O = Object.freeze(Object.values(E))
var _,
  N = E
!(function (t) {
  ;(t.POSITION = "position"),
    (t.UV0 = "uv0"),
    (t.UV1 = "uv1"),
    (t.COLOR0 = "color0"),
    (t.TANGENT = "tangent"),
    (t.NORMAL = "normal"),
    (t.JOINTS0 = "joints0"),
    (t.WEIGHTS0 = "weights0"),
    (t.BATCHID = "batchid")
})(_ || (_ = {}))
var A,
  S = _
!(function (t) {
  ;(t.JPG = "image/jpg"),
    (t.JPEG = "image/jpeg"),
    (t.PNG = "image/png"),
    (t.WEBP = "image/webp"),
    (t.DDS = "image/vnd-ms.dds")
})(A || (A = {})),
  Object.freeze(Object.values(A))
var B = A
class F extends s {
  constructor() {
    super()
  }
  validate() {
    return (
      this.componentType === p.UNSIGNED_BYTE ||
      this.componentType === p.UNSIGNED_INT ||
      this.componentType === p.UNSIGNED_SHORT
    )
  }
  json() {
    if (!this.validate())
      throw new Error(
        "[GLTFAccessorSparseIndices json()] 此 accessor.sparse.indices 的属性不合法，请检查"
      )
    const s = {
      bufferView: this.bufferView,
      byteOffset: this.byteOffset,
      componentType: this.componentType
    }
    return e(s, this.extensions), t(s, "extras", this.extras), s
  }
  static readFromJson(t) {
    const e = new F()
    return (
      (e.extras = t.extras),
      (e.bufferView = t.bufferView),
      (e.byteOffset = t.byteOffset),
      d.includes(t.componentType) && (e.componentType = t.componentType),
      e
    )
  }
}
class I extends s {
  constructor() {
    super()
  }
  validate() {
    return !(this.byteOffset && this.byteOffset < 0)
  }
  json() {
    if (!this.validate())
      throw new Error(
        "[GLTFAccessorSparseValues json()] 此 accessor.sparse.values 的属性不合法，请检查"
      )
    const s = { bufferView: this.bufferView }
    return (
      t(s, "byteOffset", this.byteOffset), e(s, this.extensions), t(s, "extras", this.extras), s
    )
  }
  static readFromJson(t) {
    const e = new I()
    return (e.bufferView = t.bufferView), (e.byteOffset = t.byteOffset), (e.extras = t.extras), e
  }
}
class j extends s {
  constructor() {
    super()
  }
  validate() {
    return this.count > 0 && this.values.validate() && this.indices.validate()
  }
  json() {
    if (!this.validate())
      throw new Error("[GLTFAccessorSparse json()] 此 sparse 对象属性不合法，请检查属性")
    return { count: this.count, indices: this.indices.json(), values: this.values.json() }
  }
  static readFromJson(t) {
    const e = new j()
    return (
      (e.indices = F.readFromJson(t.indices)),
      (e.values = I.readFromJson(t.values)),
      (e.extras = t.extras),
      e
    )
  }
}
class R extends s {
  constructor() {
    super()
  }
  validate() {
    return (
      (void 0 === this.byteOffset ? 1 : 0) + (void 0 === this.bufferView ? 1 : 0) != 1 &&
      !(this.byteOffset && this.byteOffset < 0)
    )
  }
  json() {
    if (!this.validate()) throw new Error("[GLTFAccessor json()] 当前 accessor 属性不合法，请检查")
    const s = { componentType: this.componentType, type: this.type, count: this.count }
    return (
      t(s, "max", this.max),
      t(s, "min", this.min),
      t(s, "name", this.name),
      t(s, "normalized", this.normalized),
      t(s, "sparse", void 0 !== this.sparse ? this.sparse.json() : void 0),
      t(s, "bufferView", this.bufferView),
      t(s, "byteOffset", this.byteOffset),
      e(s, this.extensions),
      t(s, "extras", this.extras),
      s
    )
  }
  static fromJson(t) {
    const e = new R()
    if (!d.includes(t.componentType))
      throw new Error("[GLTFAccessor.readFromJson()] 属性 componentType 非法")
    if (((e.componentType = t.componentType), (e.count = t.count), !h.includes(t.type)))
      throw new Error("[readGLTF() readAccessors()] 属性 type 非法")
    return (
      (e.type = t.type),
      (e.max = t.max),
      (e.min = t.min),
      void 0 !== t.sparse && (e.sparse = j.readFromJson(t.sparse)),
      (e.normalized = t.normalized),
      (e.bufferView = t.bufferView),
      (e.byteOffset = t.byteOffset),
      (e.name = t.name),
      (e.extras = t.extras),
      e
    )
  }
}
function C(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
function J(t, e) {
  return t((e = { exports: {} }), e.exports), e.exports
}
var U = J(function (t, e) {
  !(function () {
    for (
      var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        s = new Uint8Array(256),
        r = 0;
      r < t.length;
      r++
    )
      s[t.charCodeAt(r)] = r
    ;(e.encode = function (e) {
      var s,
        r = new Uint8Array(e),
        i = r.length,
        n = ""
      for (s = 0; s < i; s += 3)
        (n += t[r[s] >> 2]),
          (n += t[((3 & r[s]) << 4) | (r[s + 1] >> 4)]),
          (n += t[((15 & r[s + 1]) << 2) | (r[s + 2] >> 6)]),
          (n += t[63 & r[s + 2]])
      return (
        i % 3 == 2
          ? (n = n.substring(0, n.length - 1) + "=")
          : i % 3 == 1 && (n = n.substring(0, n.length - 2) + "=="),
        n
      )
    }),
      (e.decode = function (t) {
        var e,
          r,
          i,
          n,
          a,
          o = 0.75 * t.length,
          h = t.length,
          c = 0
        "=" === t[t.length - 1] && (o--, "=" === t[t.length - 2] && o--)
        var u = new ArrayBuffer(o),
          l = new Uint8Array(u)
        for (e = 0; e < h; e += 4)
          (r = s[t.charCodeAt(e)]),
            (i = s[t.charCodeAt(e + 1)]),
            (n = s[t.charCodeAt(e + 2)]),
            (a = s[t.charCodeAt(e + 3)]),
            (l[c++] = (r << 2) | (i >> 4)),
            (l[c++] = ((15 & i) << 4) | (n >> 2)),
            (l[c++] = ((3 & n) << 6) | (63 & a))
        return u
      })
  })()
})
U.encode
var G,
  M = U.decode
class P extends s {
  constructor() {
    super(), (this.byteLength = 0)
  }
  get url() {
    return this.uri
  }
  validate() {
    return this.byteLength > 0
  }
  json() {
    const s = { byteLength: this.byteLength }
    return t(s, "uri", this.uri), e(s, this.extensions), t(s, "extras", this.extras), s
  }
  static fromJson(t) {
    const e = new P()
    return (
      (e.uri = t.uri),
      e.uri &&
        e.uri.startsWith("data:") &&
        (e.bufferData = M(e.uri.substr(e.uri.indexOf(",") + 1))),
      (e.byteLength = t.byteLength),
      (e.extras = t.extras),
      e
    )
  }
}
!(function (t) {
  ;(t[(t.ARRAY_BUFFER = 34962)] = "ARRAY_BUFFER"),
    (t[(t.ELEMENT_ARRAY_BUFFER = 34963)] = "ELEMENT_ARRAY_BUFFER")
})(G || (G = {}))
const V = Object.freeze(Object.values(G))
var D = G
class z extends s {
  constructor() {
    super(), (this.buffer = 0), (this.byteLength = 1), (this.byteOffset = 0), (this.byteStride = 4)
  }
  validate() {
    return (
      !(this.buffer < 0) &&
      !(this.byteLength < 1) &&
      !(this.byteOffset && this.byteOffset < 0) &&
      (!this.byteStride ||
        !(this.byteStride % 4 != 0 || this.byteStride > 252 || this.byteStride < 4))
    )
  }
  json() {
    if (!this.validate())
      throw new Error("[GLTFBufferView json()] 当前 bufferView 属性不合法，请检查")
    const s = { buffer: this.buffer, byteLength: this.byteLength }
    return (
      (this.target !== D.ARRAY_BUFFER && this.target !== D.ELEMENT_ARRAY_BUFFER) ||
        t(s, "target", this.target),
      t(s, "byteOffset", this.byteOffset),
      4 !== this.byteStride && t(s, "byteStride", this.byteStride),
      e(s, this.extensions),
      t(s, "extras", this.extras),
      s
    )
  }
  static fromJson(t) {
    const e = new z()
    return (
      (e.buffer = t.buffer),
      (e.byteLength = t.byteLength),
      (e.byteOffset = t.byteOffset),
      (e.extras = t.extras),
      void 0 !== t.target && V.includes(t.target) && (e.target = t.target),
      e
    )
  }
}
class k extends s {
  constructor() {
    super(), (this.nodes = [])
  }
  validate() {
    return this.nodes.length > 1
  }
  json() {
    const s = { nodes: this.nodes }
    return t(s, "name", this.name), e(s, this.extensions), s
  }
  static fromJson(t) {
    const e = new k()
    return (e.name = t.name), (e.nodes = t.nodes), (e.extras = t.extras), e
  }
}
class H extends s {
  constructor() {
    super(), (this.children = [])
  }
  getMesh() {
    return void 0 === this.doc || void 0 === this.mesh || this.doc.meshes.length < this.mesh
      ? null
      : this.doc.meshes[this.mesh]
  }
  validate() {
    return (
      !!(function (t) {
        let e = !0
        return (
          void 0 !== t.matrix
            ? (void 0 === t.rotation && void 0 === t.scale && void 0 === t.translation) || (e = !1)
            : void 0 === t.rotation && void 0 === t.scale && void 0 === t.translation && (e = !1),
          t.rotation && (e = t.rotation.every((t) => t > 1 || t < -1)),
          e
        )
      })(this) &&
      !(this.weights && this.weights.length < 1) &&
      (void 0 === this.weights || void 0 !== this.mesh) &&
      (void 0 === this.skin || void 0 !== this.mesh) &&
      !(
        this.children &&
        this.children.length > 1 &&
        new Set(this.children).size !== this.children.length
      )
    )
  }
  json() {
    if (!this.validate()) throw new Error("[GLTFNode json()] 当前 node 属性不合法，请检查属性")
    const s = {}
    t(s, "mesh", this.mesh),
      t(s, "rotation", this.rotation),
      t(s, "translation", this.translation),
      t(s, "scale", this.scale)
    const r = this.matrix
    return (
      r &&
        ((1 === r[0] && 1 === r[5] && 1 === r[10] && 1 === r[15]) || t(s, "matrix", this.matrix)),
      t(s, "weights", this.weights),
      t(s, "skin", this.skin),
      t(s, "camera", this.camera),
      t(s, "name", this.name),
      this.children && 0 !== this.children.length && t(s, "children", this.children),
      e(s, this.extensions),
      t(s, "extras", this.extras),
      s
    )
  }
  static fromJson(t) {
    const e = new H()
    return (
      (e.name = t.name),
      (e.mesh = t.mesh),
      (e.matrix = t.matrix),
      (e.rotation = t.rotation),
      (e.scale = t.scale),
      (e.skin = t.skin),
      (e.children = t.children),
      (e.weights = t.weights),
      (e.translation = t.translation),
      (e.camera = t.camera),
      (e.extras = t.extras),
      e
    )
  }
}
class W {
  static fromJson(t) {
    const e = new W()
    return (
      (e.position = t.POSITION),
      (e.uv0 = t.TEXCOORD_0),
      (e.uv1 = t.TEXCOORD_1),
      (e.color0 = t.COLOR_0),
      (e.normal = t.NORMAL),
      (e.tangent = t.TANGENT),
      (e.joints0 = t.JOINTS_0),
      (e.weights0 = t.WEIGHTS_0),
      (e._batchid = t._BATCHID),
      e
    )
  }
  validate() {
    return Object.values(this).every((t) => t < 0)
  }
  json() {
    const e = { POSITION: this.position }
    return (
      t(e, "NORMAL", this.normal),
      t(e, "TANGENT", this.tangent),
      t(e, "TEXCOORD_0", this.uv0),
      t(e, "TEXCOORD_1", this.uv1),
      t(e, "COLOR_0", this.color0),
      t(e, "JOINTS_0", this.joints0),
      t(e, "WEIGHTS_0", this.weights0),
      t(e, "_BATCHID", this._batchid),
      e
    )
  }
}
class Y extends s {
  constructor() {
    super(), (this.attributes = new W()), (this.mode = N.TRIANGLES)
  }
  getAccessor(t) {
    switch (t.toLowerCase()) {
      case "uv0":
      case "uv":
        return void 0 !== this.attributes.uv0 ? this.doc?.accessors[this.attributes.uv0] : void 0
      case "uv1":
        return void 0 !== this.attributes.uv1 ? this.doc?.accessors[this.attributes.uv1] : void 0
      case "color0":
      case "color":
        return void 0 !== this.attributes.color0
          ? this.doc?.accessors[this.attributes.color0]
          : void 0
      case "normal":
        return void 0 !== this.attributes.normal
          ? this.doc?.accessors[this.attributes.normal]
          : void 0
      case "tangent":
        return void 0 !== this.attributes.tangent
          ? this.doc?.accessors[this.attributes.tangent]
          : void 0
      case "joints0":
      case "joints":
        return void 0 !== this.attributes.joints0
          ? this.doc?.accessors[this.attributes.joints0]
          : void 0
      case "weights0":
      case "weights":
        return void 0 !== this.attributes.weights0
          ? this.doc?.accessors[this.attributes.weights0]
          : void 0
      case "_batchid":
      case "batchid":
        return void 0 !== this.attributes._batchid
          ? this.doc?.accessors[this.attributes._batchid]
          : void 0
      default:
        return this.doc?.accessors[this.attributes.position]
    }
  }
  validate() {
    return !1 !== this.attributes.validate() && !(this.indices < 0) && !(this.material < 0)
  }
  json() {
    const s = { attributes: this.attributes.json() }
    return (
      this.mode !== N.TRIANGLES && void 0 !== this.mode && t(s, "mode", this.mode),
      t(s, "indices", this.indices),
      t(s, "material", this.material),
      e(s, this.extensions),
      t(s, "extras", this.extras),
      s
    )
  }
  static fromJson(t) {
    const e = new Y()
    if (((e.indices = t.indices), (e.material = t.material), void 0 !== t.mode && 4 !== t.mode)) {
      if (!O.includes(t.mode))
        throw new Error(`[GLTFPrimitive.readFromJson()] mode：${t.mode} 不合法，请检查`)
      e.mode = t.mode
    }
    return (e.attributes = W.fromJson(t.attributes)), e
  }
}
class Q extends s {
  constructor() {
    super(), (this.primitives = [])
  }
  set doc(t) {
    ;(this._doc = t), this.primitives.forEach((e) => (e.doc = t))
  }
  validate() {
    let t = !1
    return this.primitives.every((t) => t.validate()) && (t = !0), t
  }
  json() {
    const s = { primitives: this.primitives.map((t) => t.json()) }
    return t(s, "weights", this.weights), t(s, "name", this.name), e(s, this.extensions), s
  }
  static fromJson(t) {
    const e = new Q()
    return (
      (e.name = t.name),
      (e.primitives = t.primitives.map((t) => Y.fromJson(t))),
      (e.weights = t.weights),
      (e.extras = t.extras),
      e
    )
  }
}
class q extends s {
  constructor(t, e) {
    super(), (this.index = t), (this.texCoord = e)
  }
  validate() {
    return this.index < 0 || this.texCoord < 0
  }
  json() {
    if (!this.validate())
      throw new Error("[GLTFTextureInfo json()] 当前 textureinfo 对象属性不合法，请检查")
    return { index: this.index, texCoord: this.texCoord }
  }
  static fromJson(t) {
    const e = new q(t.index, t.texCoord)
    return (e.extras = t.extras), e
  }
}
class $ extends q {
  constructor(t, e, s) {
    super(t, e), (this.scale = s)
  }
  validate() {
    return !0
  }
  json() {
    if (!this.validate())
      throw new Error("[GLTFNormalTextureInfo json()] 当前 normal textureinfo 属性不合法，请检查")
    const s = super.json()
    return t(s, "scale", this.scale), e(s, this.extensions), t(s, "extras", this.extras), s
  }
  static fromJson(t) {
    const e = new $(t.index, t.texCoord, t.scale)
    return (e.extras = t.extras), e
  }
}
class X extends s {
  constructor() {
    super(), (this.baseColorFactor = [1, 1, 1, 1])
  }
  validate() {
    return (
      (!this.baseColorFactor || !this.baseColorFactor.every((t) => t < 0 || t > 1)) &&
      (void 0 === this.roughnessFactor ||
        !(this.roughnessFactor > 1 || this.roughnessFactor < 0)) &&
      !(
        (void 0 !== this.metallicFactor && this.metallicFactor > 1) ||
        (void 0 !== this.metallicFactor && this.metallicFactor < 0)
      ) &&
      !1 !== this.baseColorTexture?.validate() &&
      !1 !== this.metallicRoughnessTexture?.validate()
    )
  }
  json() {
    if (!1 === this.validate()) throw new Error("[GLTFPbr json()] 此 pbr 对象属性有误，请检查")
    const s = {}
    return (
      void 0 !== this.baseColorFactor &&
        this.baseColorFactor.every((t) => 1 !== t) &&
        t(s, "baseColorFactor", this.baseColorFactor),
      t(
        s,
        "baseColorTexture",
        void 0 !== this.baseColorTexture ? this.baseColorTexture.json() : void 0
      ),
      t(
        s,
        "metallicFactor",
        this.metallicFactor && 1 === this.metallicFactor ? void 0 : this.metallicFactor
      ),
      t(
        s,
        "roughnessFactor",
        this.roughnessFactor && 1 === this.roughnessFactor ? void 0 : this.roughnessFactor
      ),
      t(
        s,
        "metallicRoughnessTexture",
        void 0 !== this.metallicRoughnessTexture ? this.metallicRoughnessTexture.json() : void 0
      ),
      e(s, this.extensions),
      t(s, "extras", this.extras),
      s
    )
  }
  static fromJson(t) {
    const e = new X()
    return (
      (e.extras = t.extras),
      (e.metallicFactor = t.metallicFactor),
      (e.roughnessFactor = t.roughnessFactor),
      (e.baseColorFactor = t.baseColorFactor),
      void 0 !== t.baseColorTexture && (e.baseColorTexture = q.fromJson(t.baseColorTexture)),
      void 0 !== t.metallicRoughnessTexture &&
        (e.metallicRoughnessTexture = q.fromJson(t.metallicRoughnessTexture)),
      e
    )
  }
}
class Z extends s {
  constructor() {
    super(),
      (this.emissiveFactor = [0, 0, 0]),
      (this.alphaMode = g.OPAQUE),
      (this.alphaCutoff = 0.5),
      (this.doubleSided = !1)
  }
  set doc(t) {
    ;(this._doc = t),
      void 0 !== this.pbrMetallicRoughness && (this.pbrMetallicRoughness.doc = t),
      void 0 !== this.normalTexture && (this.normalTexture.doc = t),
      void 0 !== this.emissiveTexture && (this.emissiveTexture.doc = t),
      void 0 !== this.occlusionTexture && (this.occlusionTexture.doc = t)
  }
  validate() {
    return (
      !1 !== this.pbrMetallicRoughness?.validate() &&
      !1 !== this.normalTexture?.validate() &&
      !1 !== this.occlusionTexture?.validate() &&
      (this.alphaMode !== g.MASK || void 0 !== this.alphaCutoff) &&
      !this.emissiveFactor?.every((t) => t < 0 || t > 1)
    )
  }
  json() {
    if (!this.validate())
      throw new Error("[GLTFMaterial json()] 此 material 对象的属性不合法，请检查")
    const s = {}
    return (
      t(s, "name", this.name),
      t(
        s,
        "pbrMetallicRoughness",
        void 0 !== this.pbrMetallicRoughness ? this.pbrMetallicRoughness.json() : void 0
      ),
      t(s, "normalTexture", void 0 !== this.normalTexture ? this.normalTexture.json() : void 0),
      t(
        s,
        "emissiveTexture",
        void 0 !== this.emissiveTexture ? this.emissiveTexture.json() : void 0
      ),
      t(s, "emissiveFactor", this.emissiveFactor),
      t(
        s,
        "alphaMode",
        void 0 !== this.alphaMode && this.alphaMode !== g.OPAQUE ? this.alphaMode : void 0
      ),
      t(
        s,
        "alphaCutoff",
        0.5 !== this.alphaCutoff && void 0 !== this.alphaCutoff ? this.alphaCutoff : void 0
      ),
      t(
        s,
        "alphaCutoff",
        !1 !== this.doubleSided && void 0 !== this.doubleSided ? this.doubleSided : void 0
      ),
      e(s, this.extensions),
      t(s, "extras", this.extras),
      s
    )
  }
  static fromJson(t) {
    const e = new Z()
    return (
      (e.name = t.name),
      void 0 !== t.pbrMetallicRoughness &&
        (e.pbrMetallicRoughness = X.fromJson(t.pbrMetallicRoughness)),
      void 0 !== t.normalTexture && (e.normalTexture = $.fromJson(t.normalTexture)),
      void 0 !== t.emissiveTexture && (e.emissiveTexture = q.fromJson(t.emissiveTexture)),
      void 0 !== t.alphaMode && v.includes(t.alphaMode) && (e.alphaMode = t.alphaMode),
      (e.doubleSided = t.doubleSided),
      (e.emissiveFactor = t.emissiveFactor),
      (e.alphaCutoff = t.alphaCutoff),
      (e.extras = t.extras),
      e
    )
  }
}
class K extends s {
  constructor() {
    super()
  }
  validate() {
    return void 0 !== this.sampler || void 0 !== this.source || void 0 !== this.name
  }
  json() {
    const s = {}
    return (
      t(s, "name", this.name),
      t(s, "source", this.source),
      t(s, "sampler", this.sampler),
      e(s, this.extensions),
      t(s, "extras", this.extras),
      s
    )
  }
  static fromJson(t) {
    const e = new K()
    return (
      (e.name = t.name), (e.source = t.source), (e.sampler = t.sampler), (e.extras = t.extras), e
    )
  }
}
!(function (t) {
  if (t.TextEncoder && t.TextDecoder) return !1
  function e(t = "utf-8") {
    if ("utf-8" !== t)
      throw new RangeError(
        `Failed to construct 'TextEncoder': The encoding label provided ('${t}') is invalid.`
      )
  }
  function s(t = "utf-8", e = { fatal: !1 }) {
    if ("utf-8" !== t)
      throw new RangeError(
        `Failed to construct 'TextDecoder': The encoding label provided ('${t}') is invalid.`
      )
    if (e.fatal)
      throw new Error("Failed to construct 'TextDecoder': the 'fatal' option is unsupported.")
  }
  Object.defineProperty(e.prototype, "encoding", { value: "utf-8" }),
    (e.prototype.encode = function (t, e = { stream: !1 }) {
      if (e.stream) throw new Error("Failed to encode: the 'stream' option is unsupported.")
      let s = 0
      const r = t.length
      let i = 0,
        n = Math.max(32, r + (r >> 1) + 7),
        a = new Uint8Array((n >> 3) << 3)
      for (; s < r; ) {
        let e = t.charCodeAt(s++)
        if (e >= 55296 && e <= 56319) {
          if (s < r) {
            const r = t.charCodeAt(s)
            56320 == (64512 & r) && (++s, (e = ((1023 & e) << 10) + (1023 & r) + 65536))
          }
          if (e >= 55296 && e <= 56319) continue
        }
        if (i + 4 > a.length) {
          ;(n += 8), (n *= 1 + (s / t.length) * 2), (n = (n >> 3) << 3)
          const e = new Uint8Array(n)
          e.set(a), (a = e)
        }
        if (0 != (4294967168 & e)) {
          if (0 == (4294965248 & e)) a[i++] = ((e >> 6) & 31) | 192
          else if (0 == (4294901760 & e))
            (a[i++] = ((e >> 12) & 15) | 224), (a[i++] = ((e >> 6) & 63) | 128)
          else {
            if (0 != (4292870144 & e)) continue
            ;(a[i++] = ((e >> 18) & 7) | 240),
              (a[i++] = ((e >> 12) & 63) | 128),
              (a[i++] = ((e >> 6) & 63) | 128)
          }
          a[i++] = (63 & e) | 128
        } else a[i++] = e
      }
      return a.slice(0, i)
    }),
    Object.defineProperty(s.prototype, "encoding", { value: "utf-8" }),
    Object.defineProperty(s.prototype, "fatal", { value: !1 }),
    Object.defineProperty(s.prototype, "ignoreBOM", { value: !1 }),
    (s.prototype.decode = function (t, e = { stream: !1 }) {
      if (e.stream) throw new Error("Failed to decode: the 'stream' option is unsupported.")
      const s = new Uint8Array(t)
      let r = 0
      const i = s.length,
        n = []
      for (; r < i; ) {
        const t = s[r++]
        if (0 === t) break
        if (0 == (128 & t)) n.push(t)
        else if (192 == (224 & t)) {
          const e = 63 & s[r++]
          n.push(((31 & t) << 6) | e)
        } else if (224 == (240 & t)) {
          const e = 63 & s[r++],
            i = 63 & s[r++]
          n.push(((31 & t) << 12) | (e << 6) | i)
        } else if (240 == (248 & t)) {
          let e = ((7 & t) << 18) | ((63 & s[r++]) << 12) | ((63 & s[r++]) << 6) | (63 & s[r++])
          e > 65535 &&
            ((e -= 65536), n.push(((e >>> 10) & 1023) | 55296), (e = 56320 | (1023 & e))),
            n.push(e)
        }
      }
      return String.fromCharCode.apply(null, n)
    }),
    (t.TextEncoder = e),
    (t.TextDecoder = s)
})("undefined" != typeof window ? window : "undefined" != typeof self ? self : void 0)
var tt = J(function (t, e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.encode = e.decode = void 0)
  const s = new TextDecoder("utf-8")
  e.decode = function (t) {
    return s.decode(t)
  }
  const r = new TextEncoder()
  e.encode = function (t) {
    return r.encode(t)
  }
})
C(tt), tt.encode, tt.decode
var et = J(function (t, e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.IOBuffer = void 0)
  class s {
    constructor(t = 8192, e = {}) {
      let r = !1
      "number" == typeof t
        ? (t = new ArrayBuffer(t))
        : ((r = !0), (this.lastWrittenByte = t.byteLength))
      const i = e.offset ? e.offset >>> 0 : 0,
        n = t.byteLength - i
      let a = i
      ;(ArrayBuffer.isView(t) || t instanceof s) &&
        (t.byteLength !== t.buffer.byteLength && (a = t.byteOffset + i), (t = t.buffer)),
        (this.lastWrittenByte = r ? n : 0),
        (this.buffer = t),
        (this.length = n),
        (this.byteLength = n),
        (this.byteOffset = a),
        (this.offset = 0),
        (this.littleEndian = !0),
        (this._data = new DataView(this.buffer, a, n)),
        (this._mark = 0),
        (this._marks = [])
    }
    available(t = 1) {
      return this.offset + t <= this.length
    }
    isLittleEndian() {
      return this.littleEndian
    }
    setLittleEndian() {
      return (this.littleEndian = !0), this
    }
    isBigEndian() {
      return !this.littleEndian
    }
    setBigEndian() {
      return (this.littleEndian = !1), this
    }
    skip(t = 1) {
      return (this.offset += t), this
    }
    seek(t) {
      return (this.offset = t), this
    }
    mark() {
      return (this._mark = this.offset), this
    }
    reset() {
      return (this.offset = this._mark), this
    }
    pushMark() {
      return this._marks.push(this.offset), this
    }
    popMark() {
      const t = this._marks.pop()
      if (void 0 === t) throw new Error("Mark stack empty")
      return this.seek(t), this
    }
    rewind() {
      return (this.offset = 0), this
    }
    ensureAvailable(t = 1) {
      if (!this.available(t)) {
        const e = 2 * (this.offset + t),
          s = new Uint8Array(e)
        s.set(new Uint8Array(this.buffer)),
          (this.buffer = s.buffer),
          (this.length = this.byteLength = e),
          (this._data = new DataView(this.buffer))
      }
      return this
    }
    readBoolean() {
      return 0 !== this.readUint8()
    }
    readInt8() {
      return this._data.getInt8(this.offset++)
    }
    readUint8() {
      return this._data.getUint8(this.offset++)
    }
    readByte() {
      return this.readUint8()
    }
    readBytes(t = 1) {
      const e = new Uint8Array(t)
      for (let s = 0; s < t; s++) e[s] = this.readByte()
      return e
    }
    readInt16() {
      const t = this._data.getInt16(this.offset, this.littleEndian)
      return (this.offset += 2), t
    }
    readUint16() {
      const t = this._data.getUint16(this.offset, this.littleEndian)
      return (this.offset += 2), t
    }
    readInt32() {
      const t = this._data.getInt32(this.offset, this.littleEndian)
      return (this.offset += 4), t
    }
    readUint32() {
      const t = this._data.getUint32(this.offset, this.littleEndian)
      return (this.offset += 4), t
    }
    readFloat32() {
      const t = this._data.getFloat32(this.offset, this.littleEndian)
      return (this.offset += 4), t
    }
    readFloat64() {
      const t = this._data.getFloat64(this.offset, this.littleEndian)
      return (this.offset += 8), t
    }
    readChar() {
      return String.fromCharCode(this.readInt8())
    }
    readChars(t = 1) {
      let e = ""
      for (let s = 0; s < t; s++) e += this.readChar()
      return e
    }
    readUtf8(t = 1) {
      return tt.decode(this.readBytes(t))
    }
    writeBoolean(t) {
      return this.writeUint8(t ? 255 : 0), this
    }
    writeInt8(t) {
      return (
        this.ensureAvailable(1),
        this._data.setInt8(this.offset++, t),
        this._updateLastWrittenByte(),
        this
      )
    }
    writeUint8(t) {
      return (
        this.ensureAvailable(1),
        this._data.setUint8(this.offset++, t),
        this._updateLastWrittenByte(),
        this
      )
    }
    writeByte(t) {
      return this.writeUint8(t)
    }
    writeBytes(t) {
      this.ensureAvailable(t.length)
      for (let e = 0; e < t.length; e++) this._data.setUint8(this.offset++, t[e])
      return this._updateLastWrittenByte(), this
    }
    writeInt16(t) {
      return (
        this.ensureAvailable(2),
        this._data.setInt16(this.offset, t, this.littleEndian),
        (this.offset += 2),
        this._updateLastWrittenByte(),
        this
      )
    }
    writeUint16(t) {
      return (
        this.ensureAvailable(2),
        this._data.setUint16(this.offset, t, this.littleEndian),
        (this.offset += 2),
        this._updateLastWrittenByte(),
        this
      )
    }
    writeInt32(t) {
      return (
        this.ensureAvailable(4),
        this._data.setInt32(this.offset, t, this.littleEndian),
        (this.offset += 4),
        this._updateLastWrittenByte(),
        this
      )
    }
    writeUint32(t) {
      return (
        this.ensureAvailable(4),
        this._data.setUint32(this.offset, t, this.littleEndian),
        (this.offset += 4),
        this._updateLastWrittenByte(),
        this
      )
    }
    writeFloat32(t) {
      return (
        this.ensureAvailable(4),
        this._data.setFloat32(this.offset, t, this.littleEndian),
        (this.offset += 4),
        this._updateLastWrittenByte(),
        this
      )
    }
    writeFloat64(t) {
      return (
        this.ensureAvailable(8),
        this._data.setFloat64(this.offset, t, this.littleEndian),
        (this.offset += 8),
        this._updateLastWrittenByte(),
        this
      )
    }
    writeChar(t) {
      return this.writeUint8(t.charCodeAt(0))
    }
    writeChars(t) {
      for (let e = 0; e < t.length; e++) this.writeUint8(t.charCodeAt(e))
      return this
    }
    writeUtf8(t) {
      return this.writeBytes(tt.encode(t))
    }
    toArray() {
      return new Uint8Array(this.buffer, this.byteOffset, this.lastWrittenByte)
    }
    _updateLastWrittenByte() {
      this.offset > this.lastWrittenByte && (this.lastWrittenByte = this.offset)
    }
  }
  e.IOBuffer = s
})
C(et)
var st,
  rt = et.IOBuffer
class it extends s {
  constructor() {
    super()
  }
  get isEncodeWithUri() {
    return void 0 === this.uri && void 0 !== this.bufferView
  }
  get getImageData() {
    if (!1 === this.validate())
      throw new Error("[GLTFImage getImageData()] 当前 image 对象属性有问题，请检查")
    if (this.uri && this.isEncodeWithUri) return M(this.uri)
    if (void 0 === this.doc) throw new Error("")
    if (0 === this.doc.buffers.length || 0 === this.doc.bufferViews.length) throw new Error("")
    {
      const t = this.doc.bufferViews[this.bufferView],
        e = this.doc.buffers[t.buffer],
        s = void 0 === t.byteOffset ? this.doc.bufferViews.indexOf(t) : t.byteOffset,
        r = t.byteLength,
        i = e.bufferData
      if (void 0 !== i) return new rt(i).skip(s).readBytes(r).buffer
    }
  }
  validate() {
    return (
      (void 0 === this.uri || void 0 === this.bufferView) &&
      (void 0 === this.bufferView || void 0 !== this.mimeType)
    )
  }
  json() {
    const s = {}
    return (
      t(s, "name", this.name),
      t(s, "bufferView", this.bufferView),
      t(s, "uri", this.uri),
      t(s, "mimeType", this.mimeType),
      e(s, this.extensions),
      t(s, "extras", this.extras),
      s
    )
  }
  static fromJson(t) {
    const e = new it()
    if (((e.name = t.name), (e.bufferView = t.bufferView), void 0 !== t.mimeType)) {
      if (!(t.mimeType in B)) throw new Error("[GLTFImage.readFromJson()] 不支持的 mime 类型")
      e.mimeType = t.mimeType
    }
    return (e.extras = t.extras), e
  }
}
class nt extends s {
  constructor() {
    super()
  }
  validate() {
    return (
      void 0 !== this.magFilter ||
      void 0 !== this.minFilter ||
      void 0 !== this.wrapS ||
      void 0 !== this.wrapT
    )
  }
  json() {
    if (!this.validate())
      throw new Error("[GLTFSampler json()] 当前 sampler 对象的属性不合法，请检查")
    const s = {}
    return (
      t(s, "magFilter", this.magFilter),
      t(s, "minFilter", this.minFilter),
      t(s, "wrapS", this.wrapS),
      t(s, "wrapT", this.wrapT),
      t(s, "name", this.name),
      e(s, this.extensions),
      t(s, "extras", this.extras),
      s
    )
  }
  static fromJson(t) {
    const e = new nt()
    return (
      (e.name = t.name),
      void 0 !== t.magFilter && y.includes(t.magFilter) && (e.magFilter = t.magFilter),
      void 0 !== t.minFilter && y.includes(t.minFilter) && (e.minFilter = t.minFilter),
      void 0 !== t.wrapS && x.includes(t.wrapS) && (e.wrapS = t.wrapS),
      void 0 !== t.wrapT && x.includes(t.wrapT) && (e.wrapT = t.wrapT),
      (e.extras = t.extras),
      e
    )
  }
}
!(function (t) {
  ;(t.TRANSLATION = "translation"),
    (t.ROTATION = "rotation"),
    (t.SCALE = "scale"),
    (t.WEIGHTS = "weights")
})(st || (st = {}))
const at = Object.freeze(Object.values(st))
class ot extends s {
  constructor() {
    super()
  }
  validate() {
    return !0
  }
  json() {
    const s = { path: this.path }
    return t(s, "node", this.node), e(s, this.extensions), t(s, "extras", this.extras), s
  }
  static readFromJson(t) {
    const e = new ot()
    return (
      (e.extras = t.extras),
      (e.node = t.node),
      void 0 !== t.path && at.includes(t.path) && (e.path = t.path),
      e
    )
  }
}
class ht extends s {
  constructor() {
    super()
  }
  validate() {
    return this.target.validate()
  }
  json() {
    if (!this.validate())
      throw new Error(
        "[GLTFAnimationChannel json()] 当前 animation channel 对象的属性不合法，请检查"
      )
    const s = { sampler: this.sampler, target: this.target.json() }
    return e(s, this.extensions), t(s, "extras", this.extras), s
  }
  static readFromJson(t) {
    const e = new ht()
    return (e.sampler = t.sampler), (e.target = ot.readFromJson(t.target)), (e.extras = t.extras), e
  }
}
var ct
!(function (t) {
  ;(t.LINEAR = "LINEAR"), (t.STEP = "STEP"), (t.CUBICSPLINE = "CUBICSPLINE")
})(ct || (ct = {}))
const ut = Object.freeze(Object.values(ct))
class lt extends s {
  constructor() {
    super()
  }
  validate() {
    return !0
  }
  json() {
    const e = { input: this.input, output: this.output }
    return t(e, "interpolation", this.interpolation), e
  }
  static readFromJson(t) {
    const e = new lt()
    return (
      (e.input = t.input),
      (e.output = t.output),
      void 0 !== t.interpolation &&
        ut.includes(t.interpolation) &&
        (e.interpolation = t.interpolation),
      e
    )
  }
}
class dt extends s {
  constructor() {
    super(), (this.channels = []), (this.samplers = [])
  }
  validate() {
    return !(this.channels.length < 1 || this.samplers.length < 1)
  }
  json() {
    if (!this.validate())
      throw new Error("[GLTFAnimation json()] 当前 animation 对象属性不合法，请检查")
    const s = {}
    return (
      t(s, "name", this.name),
      t(s, "channels", 0 !== this.channels.length ? this.channels.map((t) => t.json()) : void 0),
      t(s, "samplers", 0 !== this.samplers.length ? this.samplers.map((t) => t.json()) : void 0),
      e(s, this.extensions),
      t(s, "extras", this.extras),
      s
    )
  }
  static fromJson(t) {
    const e = new dt()
    return (
      (e.name = t.name),
      (e.channels = t.channels.map((t) => ht.readFromJson(t))),
      (e.samplers = t.samplers.map((t) => lt.readFromJson(t))),
      (e.extras = t.extras),
      e
    )
  }
}
var ft
!(function (t) {
  ;(t.PERSPECTIVE = "perspective"), (t.ORTHOGRAPHIC = "orthographic")
})(ft || (ft = {}))
const mt = Object.freeze(Object.values(ft))
class pt {
  validate() {
    return (
      this.znear >= 0 &&
      this.zfar >= 0 &&
      0 !== this.xmag &&
      0 !== this.ymag &&
      this.zfar > this.znear
    )
  }
  json() {
    if (!this.validate())
      throw new Error(
        "[GLTFOrthographicCamera json()] 当前 orthographic camera 对象属性不合法，请检查"
      )
    return { xmag: this.xmag, ymag: this.ymag, zfar: this.zfar, znear: this.znear }
  }
}
class vt {
  validate() {
    let t = this.yfov >= 0 && this.znear >= 0
    return (
      void 0 !== this.aspectRatio && (t = t && this.aspectRatio >= 0),
      void 0 !== this.zfar && (t = t && this.zfar >= 0),
      void 0 !== this.zfar && (t = t && this.zfar > this.znear),
      t
    )
  }
  json() {
    if (!this.validate())
      throw new Error("[GLTFPerspectiveCamera json()] 当前对象属性有问题，请检查")
    const e = { yfov: this.yfov, znear: this.znear }
    return t(e, "aspectRatio", this.aspectRatio), t(e, "zfar", this.zfar), e
  }
}
class bt extends s {
  constructor() {
    super()
  }
  validate() {
    return void 0 === this.orthographic || void 0 === this.perspective
  }
  json() {
    if (!this.validate()) throw new Error("[GLTFCamera json()] 当前 camera 对象属性不合法，请检查")
    const s = { type: this.type }
    return (
      t(s, "name", this.name),
      t(s, "perspective", this.perspective ? this.perspective.json() : void 0),
      t(s, "orthographic", this.orthographic ? this.orthographic.json() : void 0),
      e(s, this.extensions),
      t(s, "extras", this.extras),
      s
    )
  }
  static fromJson(t) {
    const e = new bt()
    ;(e.name = t.name), mt.includes(t.type) && (e.type = t.type)
    let s = !1
    if (
      (void 0 !== t.perspective &&
        ((e.perspective = new vt()),
        (e.perspective.yfov = t.perspective.yfov),
        (e.perspective.znear = t.perspective.znear),
        (e.perspective.aspectRatio = t.perspective.aspectRatio),
        (e.perspective.zfar = t.perspective.zfar),
        (s = !0)),
      void 0 !== t.orthographic)
    ) {
      if (s) throw new Error("[GLTFCamera.readFromJson()] 已经有一个 perspective 相机了")
      ;(e.orthographic = new pt()),
        (e.orthographic.xmag = t.orthographic.xmag),
        (e.orthographic.ymag = t.orthographic.ymag),
        (e.orthographic.zfar = t.orthographic.zfar),
        (e.orthographic.znear = t.orthographic.znear)
    }
    return (e.extras = t.extras), e
  }
}
class gt extends s {
  constructor() {
    super()
  }
  validate() {
    return this.joints.length > 1
  }
  json() {
    if (!this.validate()) throw new Error("[GLTFSkin json()] 当前 skin 属性不合法，请检查")
    const s = {}
    return (
      t(s, "inverseBindMatrices", this.inverseBindMatrices),
      t(s, "skeleton", this.skeleton),
      t(s, "name", this.name),
      t(s, "joints", 0 !== this.joints.length ? this.joints : void 0),
      e(s, this.extensions),
      t(s, "extras", this.extras),
      s
    )
  }
  static fromJson(t) {
    const e = new gt()
    return (
      (e.joints = t.joints),
      (e.name = t.name),
      (e.inverseBindMatrices = t.inverseBindMatrices),
      (e.skeleton = t.skeleton),
      (e.extras = t.extras),
      e
    )
  }
}
class yt extends q {
  constructor(t, e, s) {
    super(t, e), (this.strength = s)
  }
  validate() {
    return this.strength > 1 || this.strength < 0
  }
  json() {
    if (!this.validate())
      throw new Error(
        "[GLTFOcclusionTextureInfo json()] 当前 occlusion texture info 属性不合法，请检查"
      )
    const s = super.json()
    return t(s, "strength", this.strength), e(s, this.extensions), t(s, "extras", this.extras), s
  }
}
class Tt {
  constructor() {
    ;(this.asset = new o()),
      (this.scene = 0),
      (this.buffers = []),
      (this.bufferViews = []),
      (this.accessors = []),
      (this.scenes = []),
      (this.nodes = []),
      (this.meshes = [])
  }
  json() {
    const s = {
      asset: this.asset.json(),
      buffers: this.buffers.map((t) => t.json()),
      bufferViews: this.bufferViews.map((t) => t.json()),
      accessors: this.accessors.map((t) => t.json()),
      scenes: this.scenes.map((t) => t.json()),
      nodes: this.nodes.map((t) => t.json()),
      meshes: this.meshes.map((t) => t.json())
    }
    return (
      t(s, "scene", this.scene),
      t(
        s,
        "materials",
        void 0 !== this.materials && 0 !== this.materials.length
          ? this.materials.map((t) => t.json())
          : void 0
      ),
      t(
        s,
        "textures",
        void 0 !== this.textures && 0 !== this.textures.length
          ? this.textures.map((t) => t.json())
          : void 0
      ),
      t(
        s,
        "images",
        void 0 !== this.images && 0 !== this.images.length
          ? this.images.map((t) => t.json())
          : void 0
      ),
      t(
        s,
        "samplers",
        void 0 !== this.samplers && 0 !== this.samplers.length
          ? this.samplers.map((t) => t.json())
          : void 0
      ),
      t(
        s,
        "cameras",
        void 0 !== this.cameras && 0 !== this.cameras.length
          ? this.cameras.map((t) => t.json())
          : void 0
      ),
      t(
        s,
        "animations",
        void 0 !== this.animations && 0 !== this.animations.length
          ? this.animations.map((t) => t.json())
          : void 0
      ),
      t(
        s,
        "skins",
        void 0 !== this.skins && 0 !== this.skins.length ? this.skins.map((t) => t.json()) : void 0
      ),
      e(s, this.extensions),
      t(s, "extras", this.extras),
      t(s, "extensionsUsed", this.extensionsUsed),
      t(s, "extensionsRequired", this.extensionsRequired),
      s
    )
  }
}
class wt {
  constructor() {
    this._name = ""
  }
  get name() {
    return this._name
  }
  validate() {
    return !0
  }
  json() {}
}
class xt extends wt {
  constructor() {
    super(), (this._name = "KHR_draco_mesh_compression")
  }
  validate() {
    return Number.isInteger(this.bufferView) && this.bufferView > 0
  }
  json() {
    return { bufferView: this.bufferView, attributes: this.attributes.json() }
  }
}
class Et extends wt {
  constructor() {
    super(...arguments), (this._name = "KHR_materials_pbrSpecularGlossiness")
  }
  validate() {
    if (void 0 !== this.diffuseTexture) return this.diffuseTexture.validate()
    if (
      (void 0 !== this.specularGlossinessTexture && this.specularGlossinessTexture.validate(),
      void 0 !== this.diffuseFactor)
    ) {
      if (4 !== this.diffuseFactor.length) return !1
      if (this.diffuseFactor.every((t) => t > 0 && t < 1)) return !1
    }
    if (void 0 !== this.specularFactor) {
      if (3 !== this.specularFactor.length) return !1
      if (this.specularFactor.every((t) => t > 1 || t < 0)) return !1
    }
    return (
      void 0 === this.glossinessFactor || !(this.glossinessFactor > 1 || this.glossinessFactor < 0)
    )
  }
  json() {
    if (!1 === this.validate())
      throw new Error("[ExtPbrSpecularGlossiness json()] 当前对象的属性值不合法，请检查")
    const e = {}
    return (
      this.diffuseFactor &&
        !this.diffuseFactor.every((t) => 1 === t) &&
        t(e, "diffuseFactor", this.diffuseFactor),
      this.specularFactor &&
        !this.specularFactor.every((t) => 1 === t) &&
        t(e, "diffuseFactor", this.specularFactor),
      1 !== this.glossinessFactor && t(e, "glossinessFactor", this.glossinessFactor),
      void 0 !== this.diffuseTexture && t(e, "diffuseTexture", this.diffuseTexture.json()),
      void 0 !== this.specularGlossinessTexture &&
        t(e, "specularGlossinessTexture", this.specularGlossinessTexture.json()),
      e
    )
  }
}
class Lt extends wt {
  constructor() {
    super(...arguments), (this._name = "EXT_texture_webp")
  }
}
class Ot extends wt {
  constructor() {
    super(...arguments), (this._name = "MSFT_texture_dds")
  }
}
class _t extends wt {
  constructor() {
    super(...arguments), (this._name = "FB_geometry_metadata")
  }
}
class Nt extends wt {
  constructor() {
    super(...arguments), (this._name = "CESIUM_primitive_outline")
  }
}
class At extends wt {
  constructor() {
    super(...arguments), (this._name = "EXT_meshopt_compression")
  }
}
class St extends wt {
  constructor() {
    super(...arguments), (this._name = "MSFT_lod")
  }
}
class Bt extends wt {
  constructor() {
    super(...arguments), (this._name = "ADOBE_materials_thin_transparency")
  }
}
class Ft {
  constructor(t, e, s) {
    ;(this.type = "add"), (this.vertexArrayData = t), (this.material = e), (this.textureImage = s)
  }
  submit(t) {
    try {
      const e = R.fromJson({
        count: this.vertexArrayData.verticeCount,
        componentType: 5126,
        type: "vec3"
      })
      t.accessors.push(e)
      const s = this.vertexArrayData.asPrimitive(t),
        r = new Q()
      r.primitives.push(s), (r.doc = t)
      const i = t.meshes.push(r),
        n = new H()
      ;(n.doc = t), (n.mesh = i)
      const a = t.nodes.push(n)
      if ((t.scenes[void 0 === t.scene ? 0 : t.scene].nodes.push(a), void 0 !== this.material)) {
        void 0 === t.materials && (t.materials = [])
        let e = t.materials.length
        ;(s.material = e), t.materials.push(Z.fromJson(this.material))
      }
      let o
      if (
        (void 0 !== this.textureImage && console.log("贴图功能正在开发..."), 0 === t.buffers.length)
      ) {
        const e = t.buffers.push(new P())
        o = t.buffers[e].bufferData
      } else o = t.buffers[0].bufferData
      if (void 0 !== o) {
        const t = new rt(o)
        this.vertexArrayData.vertexBuffers.forEach((e) => {
          t.writeBytes(new Uint8Array(e.buffer))
        })
      } else {
        o = new rt().buffer
      }
    } catch (t) {
      console.log(t)
    }
    return !0
  }
}
class It {
  constructor() {
    this.type = "drop"
  }
  submit() {
    return !0
  }
}
class jt {
  constructor() {
    this.type = "update"
  }
  submit() {
    return !0
  }
}
class Rt {
  constructor() {
    ;(this.vertexBuffers = []), (this.primitiveMode = N.TRIANGLES)
  }
  validate() {
    return !1
  }
  get verticeCount() {
    return 0 === this.vertexBuffers.length ? 0 : this.vertexBuffers[0].count
  }
  asPrimitive(t, e) {
    const s = new Y()
    return (
      (s.material = e),
      (s.attributes = (function (t, e) {
        const s = new W()
        return (
          e.forEach((e) => {
            switch (e.type.toString()) {
              case "position":
                s.position = ++t
                break
              case "normal":
                s.normal = ++t
                break
              case "uv0":
                s.uv0 = ++t
                break
              case "uv1":
                s.uv1 = ++t
                break
              case "joints0":
                s.joints0 = ++t
                break
              case "weights0":
                s.weights0 = ++t
                break
              case "tangent":
                s.tangent = ++t
                break
              case "color0":
                s.color0 = ++t
            }
          }),
          s
        )
      })(t.accessors.length, this.vertexBuffers)),
      void 0 !== this.indices && (s.indices = ++t.accessors.length),
      (s.mode = this.primitiveMode),
      (s.doc = t),
      s
    )
  }
}
class Ct {
  constructor() {
    ;(this.type = S.POSITION), (this.numberType = p.FLOAT), (this.elementType = l.VEC3)
  }
  get count() {
    const t = f(this.numberType),
      e = c(this.elementType)
    if ((this.buffer.byteLength % t) * e != 0)
      throw new Error("[GLTFVertexBuffer count] 数据与类型不匹配，请检查")
    return this.buffer.byteLength / (t * e)
  }
}
class Jt {}
const Ut = (t, ...e) => {
    const s = new Tt()
    let r = e.length
    console.log(`Resources Length is ${r}`)
    let i = t
    return (
      "string" == typeof t && (i = JSON.parse(t.trim())),
      (i = i),
      (s.scene = i.scene),
      (s.asset = o.readFromJson(i.asset)),
      (function (t, e) {
        for (const s of e) {
          const e = P.fromJson(s)
          t.push(e)
        }
      })(s.buffers, i.buffers),
      (function (t, e) {
        for (const s of e) {
          const e = z.fromJson(s)
          t.push(e)
        }
      })(s.bufferViews, i.bufferViews),
      (function (t, e) {
        for (const s of e) {
          const e = R.fromJson(s)
          t.push(e)
        }
      })(s.accessors, i.accessors),
      (function (t, e) {
        for (const s of e) {
          const e = k.fromJson(s)
          t.push(e)
        }
      })(s.scenes, i.scenes),
      (function (t, e) {
        for (const s of e) {
          const e = H.fromJson(s)
          t.push(e)
        }
      })(s.nodes, i.nodes),
      (function (t, e) {
        for (const s of e) {
          const e = Q.fromJson(s)
          t.push(e)
        }
      })(s.meshes, i.meshes),
      void 0 !== i.textures &&
        (function (t, e) {
          for (const s of e) {
            const e = K.fromJson(s)
            t.push(e)
          }
        })(void 0 === s.textures ? new Array() : s.textures, i.textures),
      void 0 !== i.images &&
        (function (t, e) {
          for (const s of e) {
            const e = it.fromJson(s)
            t.push(e)
          }
        })(void 0 === s.images ? new Array() : s.images, i.images),
      void 0 !== i.materials &&
        (function (t, e) {
          for (const s of e) {
            const e = Z.fromJson(s)
            t.push(e)
          }
        })(void 0 === s.materials ? new Array() : s.materials, i.materials),
      void 0 !== i.samplers &&
        (function (t, e) {
          for (const s of e) {
            const e = nt.fromJson(s)
            t.push(e)
          }
        })(void 0 === s.samplers ? new Array() : s.samplers, i.samplers),
      void 0 !== i.animations &&
        (function (t, e) {
          for (const s of e) {
            const e = dt.fromJson(s)
            t.push(e)
          }
        })(void 0 === s.animations ? new Array() : s.animations, i.animations),
      void 0 !== i.skins &&
        (function (t, e) {
          for (const s of e) {
            const e = gt.fromJson(s)
            t.push(e)
          }
        })(void 0 === s.skins ? new Array() : s.skins, i.skins),
      void 0 !== i.cameras &&
        (function (t, e) {
          for (const s of e) {
            const e = bt.fromJson(s)
            t.push(e)
          }
        })(void 0 === s.cameras ? new Array() : s.cameras, i.cameras),
      (function (t) {
        ;(t.asset.doc = t),
          t.buffers.forEach((e) => (e.doc = t)),
          t.bufferViews.forEach((e) => (e.doc = t)),
          t.accessors.forEach((e) => (e.doc = t)),
          t.scenes.forEach((e) => (e.doc = t)),
          t.nodes.forEach((e) => (e.doc = t)),
          t.meshes.forEach((e) => (e.doc = t)),
          t.materials && t.materials.forEach((e) => (e.doc = t)),
          t.textures && t.textures.forEach((e) => (e.doc = t)),
          t.images && t.images.forEach((e) => (e.doc = t)),
          t.samplers && t.samplers.forEach((e) => (e.doc = t)),
          t.animations && t.animations.forEach((e) => (e.doc = t)),
          t.cameras && t.cameras.forEach((e) => (e.doc = t)),
          t.skins && t.skins.forEach((e) => (e.doc = t))
      })(s),
      s
    )
  },
  Gt = (t) => {
    const e = new rt(t)
    if ("gltf" !== e.readChars(4)) throw new Error("[readGLB()] 不是 glb 二进制")
    if (2 !== e.readUint32()) throw new Error("[readGLB()] 暂不支持其他版本，仅支持 2.0 版本")
    if (e.readUint32() !== t.byteLength) throw new Error("[readGLB()] 数据长度异常")
    const s = e.readUint32(),
      r = e.readUint32()
    console.log(`数据块 1 的类型: ${r} (1=json, 0=bin)`)
    const i = e.readChars(s),
      n = JSON.parse(i),
      a = e.readUint32(),
      o = e.readUint32()
    let h
    console.log(`数据块 2 的类型: ${o} (1=json, 0=bin)`)
    try {
      return (h = e.readBytes(a)), Ut(n, h)
    } catch {
      throw new Error("[readGLB()] 数据长度异常，试检查 glb binary 块有无问题")
    }
  }
function Mt(t, e = !0) {
  const s = t.length
  if (0 === s) throw new Error("数组不能为空")
  let r = t[0]
  for (let i = 1; i < s; i++) {
    const s = t[i]
    ;(e ? s > r : s < r) && (r = s)
  }
  return r
}
function Pt(t, e = 1, s = !0) {
  const r = t.length
  if (0 === r || r % e != 0)
    throw new Error(`数组为空或数组长度 length: ${r} 不能被 stride: ${e} 整除`)
  if (1 === e) return [Mt(t, s)]
  const i = [],
    n = r / e
  for (let s = 0; s < e; s++) i.push(t[s])
  for (let r = 0; r < n; r++)
    for (let n = 0; n < e; n++) (s ? t[r + n] > i[n] : t[r + n] < i[n]) && (i[n] = t[r + n])
  return i
}
class Vt {
  constructor(t) {
    ;(this.name = t.name),
      (this.data = t.data),
      (this.elementType = t.elementType),
      (this.valueType = t.valueType)
  }
  getTypedArray() {
    switch (this.valueType) {
      case p.BYTE:
        return new Int8Array(this.data)
      case p.UNSIGNED_BYTE:
        return new Uint8Array(this.data)
      case p.SHORT:
        return new Int16Array(this.data)
      case p.UNSIGNED_SHORT:
        return new Uint16Array(this.data)
      case p.UNSIGNED_INT:
        return new Uint32Array(this.data)
      case p.FLOAT:
        return new Float32Array(this.data)
    }
  }
}
class Dt {
  constructor(t) {
    if (((this.vao = []), !Number.isInteger(t) || t <= 0))
      throw new Error(`[GLTFPrimitive ctor] vertexCount: ${t} 不正确`)
    this.count = t
  }
  setPosition(t) {
    if (t.length / 3 !== this.count) return !1
    const e = new Vt({ name: "position", data: t.buffer, elementType: l.VEC3, valueType: p.FLOAT })
    return this.vao.push(e), !0
  }
  setUV0(t) {
    if (t.length / 2 !== this.count) return !1
    const e = new Vt({ name: "uv0", data: t.buffer, elementType: l.VEC2, valueType: p.FLOAT })
    return this.vao.push(e), !0
  }
  setNormal(t) {
    if (t.length / 3 !== this.count) return !1
    const e = new Vt({ name: "normal", data: t.buffer, elementType: l.VEC3, valueType: p.FLOAT })
    return this.vao.push(e), !0
  }
  setIndices(t) {
    console.log(t)
  }
  setOther(t, e, s, r) {
    const i = new Vt({ name: t, data: e, elementType: s, valueType: r })
    this.vao.push(i)
  }
  set mesh(t) {
    this._mesh = t
  }
  set material(t) {
    this._material = t
  }
  submit(t) {
    let e,
      s,
      r = -1
    const i = Y.fromJson({ attributes: { POSITION: -1 }, mode: 4 })
    if (void 0 === this._mesh)
      (e = Q.fromJson({ primitives: [] })),
        t.meshes.push(e),
        (s = H.fromJson({
          children: [],
          mesh: t.meshes.length - 1,
          matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        })),
        (r = t.nodes.push(s) - 1)
    else {
      e = this._mesh
      let i = -1
      if (void 0 !== e.doc) {
        let t = e.doc.meshes.indexOf(e)
        i = -1 !== t ? t : e.doc.meshes.push(e) - 1
      } else i = t.meshes.push(e) - 1
      t.nodes.forEach((t, e) => {
        void 0 !== t.mesh && t.mesh === i && ((s = t), (r = e))
      }),
        void 0 === s &&
          ((s = H.fromJson({
            children: [],
            mesh: i,
            matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
          })),
          (r = t.nodes.push(s) - 1))
    }
    e.primitives.push(i)
    const n = k.fromJson({ nodes: [r] })
    if (
      (t.scenes.push(n),
      this.vao.forEach((e, s, r) => {
        const n = z.fromJson({
            buffer: 0,
            byteLength: e.data.byteLength,
            byteOffset: 0 === s ? 0 : r[s - 1].data.byteLength
          }),
          a = t.bufferViews.push(n) - 1,
          o = f(e.valueType),
          h = c(e.elementType),
          u = e.getTypedArray(),
          l = R.fromJson({
            componentType: e.valueType,
            count: e.data.byteLength / (o * h),
            type: e.elementType,
            bufferView: a,
            byteOffset: 0,
            max: Pt(u, h, !0),
            min: Pt(u, h, !1)
          }),
          d = t.accessors.push(l) - 1
        !(function (t, e, s) {
          const r = t.attributes
          switch (e) {
            case "position":
              r.position = s
              break
            case "uv0":
              r.uv0 = s
              break
            case "uv1":
              r.uv1 = s
              break
            case "normal":
              r.normal = s
              break
            case "_batchid":
              r._batchid = s
              break
            case "tangent":
              r.tangent = s
              break
            case "color0":
              r.color0 = s
              break
            case "weights0":
              r.weights0 = s
              break
            case "joints0":
              r.joints0 = s
          }
        })(i, e.name, d)
        let m = t.buffers[0]
        void 0 === m && ((m = P.fromJson({ byteLength: 0 })), t.buffers.push(m))
        let p = void 0 === m.bufferData ? new ArrayBuffer(0) : m.bufferData
        ;(m.bufferData = (function (t, e) {
          if ("Object" === globalThis.constructor.name)
            return Buffer.concat([new Uint8Array(t), new Uint8Array(e)]).buffer
          {
            const s = t.byteLength + e.byteLength,
              r = new Uint8Array(s)
            return r.set(new Uint8Array(t), 0), r.set(new Uint8Array(e), t.byteLength), r.buffer
          }
        })(p, e.data)),
          (m.byteLength += e.data.byteLength)
      }),
      void 0 !== this._material)
    )
      if (void 0 !== t.materials) {
        const e = t.materials.indexOf(this._material)
        i.material = -1 !== e ? e : t.materials.push(this._material) - 1
      } else (t.materials = []), (i.material = t.materials.push(this._material) - 1)
  }
}
class zt {}
class kt extends zt {
  constructor() {
    super(...arguments), (this.name = "3DTILES_batch_table_hierarchy")
  }
  load() {}
}
class Ht extends zt {
  constructor() {
    super(...arguments), (this.name = "3DTILES_draco_point_compression")
  }
}
class Wt extends zt {
  constructor() {
    super(...arguments), (this.name = "3DTILES_content_gltf")
  }
}
class Yt extends zt {
  constructor() {
    super(...arguments), (this.name = "3DTILES_implicit_tiling")
  }
}
class Qt extends zt {
  constructor() {
    super(...arguments), (this.name = "3DTILES_layers")
  }
}
class qt extends zt {
  constructor() {
    super(...arguments), (this.name = "3DTILES_metadata")
  }
}
class $t extends zt {
  constructor() {
    super(...arguments), (this.name = "3DTILES_multiple_contents")
  }
}
class Xt {
  constructor() {
    ;(this.transform = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      (this.extensions = new Set())
  }
  validate() {
    return !0
  }
  toJson() {
    if (!this.validate()) throw new Error("[Tile toJson()] 验证此对象失败！")
    const t = {}
    void 0 !== this.transform && Object.defineProperty(t, "transform", { value: this.transform })
  }
}
class Zt {
  constructor(t) {
    ;(this.extensions = new Set()),
      (this.extensionsUsed = []),
      (this.extensionsRequired = []),
      (this.root = t.root),
      (this.geometricError = t.geometricError),
      (this.uri = t.uri)
  }
  get url() {
    return this.uri
  }
  set url(t) {
    this.uri = t
  }
}
class Kt {
  validate() {
    return (
      (void 0 === this.box ? 1 : 0) +
        (void 0 === this.region ? 1 : 0) +
        (void 0 === this.sphere ? 1 : 0) ==
        2 &&
      12 == this.box.length &&
      6 == this.region.length &&
      4 == this.sphere.length
    )
  }
}
class te {
  constructor() {
    this.extensions = new Set()
  }
  get url() {
    return this.uri
  }
  validate() {
    return !0
  }
}
class ee {}
class se {
  validate() {
    return !0
  }
}
class re {
  validate() {
    return !0
  }
}
class ie extends re {
  constructor() {
    super()
  }
}
var ne
!(function (t) {
  ;(t.B3dm = "b3dm"), (t.I3dm = "i3dm"), (t.Pnts = "pnts"), (t.Vctr = "vctr")
})(ne || (ne = {}))
var ae,
  oe = ne
class he {
  validate() {
    return !1
  }
}
class ce extends he {
  constructor() {
    super()
  }
  static createFromJSON(t, e) {
    const s = new ce()
    return (
      (s._json = t),
      (s._binary = e),
      (s.featureTableType = oe.B3dm),
      (function (t) {
        const e = t._json
        ;(t.batchLength = e.BATCH_LENGTH),
          (t.rtcCenter = e.RTC_CENTER),
          void 0 !== e.extensions && (t.extensions = new Set()),
          (t.extras = e.extras)
      })(s),
      s
    )
  }
  validate() {
    return void 0 !== this.batchLength
  }
}
class ue {
  constructor() {
    this.variables = new Map()
  }
  static createFromJSON(t, e) {
    const s = new ue()
    return (
      (s._json = t),
      (s._binary = e),
      (function (t) {
        for (const e of Object.keys(t._json)) t.variables.set(e, t._json[e])
      })(s),
      s
    )
  }
  validate() {
    return !0
  }
  get variableNames() {
    return Object.keys(this._json)
  }
  get variableCounts() {
    return this.variableNames.length
  }
  getVariable(t) {
    if (this.variables.has(t)) {
      return this.variables.get(t)
    }
    throw new Error(`[BatchTable getVariable()] 没有这个值：${t}。`)
  }
}
class le {
  constructor(t, e = !1) {
    ;(this.header = new ie()),
      (function (t, e) {
        const s = new rt(e)
        var r, i
        if (
          ((r = t.header),
          (i = s).rewind(),
          (r.magic = i.readChars(4)),
          (r.version = i.readUint32()),
          (r.byteLength = i.readUint32()),
          (r.featureTableJSONByteLength = i.readUint32()),
          (r.featureTableBinaryByteLength = i.readUint32()),
          (r.batchTableJSONByteLength = i.readUint32()),
          (r.batchTableBinaryByteLength = i.readUint32()),
          t.byteLength % 8 != 0)
        )
          throw new Error("[B3dm 实例化错误] byteLength 未 8 字节对齐。")
        s.rewind(), s.skip(28)
        const n = JSON.parse(s.readChars(t.featureTableJSONByteLength)),
          a = s.readBytes(t.featureTableBinaryByteLength)
        if (((t.featureTable = ce.createFromJSON(n, a)), 0 !== t.batchTableJSONByteLength)) {
          const e = JSON.parse(s.readChars(t.batchTableJSONByteLength)),
            r = s.readBytes(t.batchTableBinaryByteLength)
          t.batchTable = ue.createFromJSON(e, r)
        }
      })(this, t),
      !0 === e && (this.buffer = t)
  }
  validate() {
    return !0
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
  get sizeWithoutGLB() {
    return (
      28 +
      this.featureTableJSONByteLength +
      this.featureTableBinaryByteLength +
      this.batchTableJSONByteLength +
      this.batchTableBinaryByteLength
    )
  }
}
class de extends re {
  constructor() {
    super()
  }
  validate() {
    return 0 === this.gltfFormat || 1 === this.gltfFormat
  }
}
class fe extends he {
  constructor() {
    super()
  }
  static createFromJSON(t, e) {
    const s = new fe()
    return (
      (s._json = t),
      (s._binary = e),
      (s.featureTableType = oe.I3dm),
      (function (t) {
        const e = t._json
        ;(t.position = e.POSITION),
          (t.positionQuantized = e.POSITION_QUANTIZED),
          (t.normalUp = e.NORMAL_UP),
          (t.normalRight = e.NORMAL_RIGHT),
          (t.normalUpOct32p = e.NORMAL_UP_OCT32P),
          (t.normalRightOct32p = e.NORMAL_RIGHT_OCT32P),
          (t.scale = e.SCALE),
          (t.scaleNonUniform = e.SCALE_NON_UNIFORM),
          (t.instancesLength = e.INSTANCES_LENGTH),
          (t.rtcCenter = e.RTC_CENTER),
          (t.quantizedVolumeOffset = e.QUANTIZED_VOLUME_OFFSET),
          (t.quantizedVolumeScale = e.QUANTIZED_VOLUME_SCALE),
          void 0 !== e.extensions && (t.extensions = new Set()),
          (t.extras = e.extras)
      })(s),
      s
    )
  }
  validate() {
    return !(
      (void 0 === (t = this).position && void 0 === t.positionQuantized) ||
      (void 0 !== t.position && void 0 !== t.positionQuantized) ||
      (void 0 !== t.positionQuantized &&
        (void 0 === t.quantizedVolumeOffset || void 0 === t.quantizedVolumeScale)) ||
      (void 0 === t.normalUp && void 0 !== t.normalRight) ||
      (void 0 === t.normalRight && void 0 !== t.normalUp) ||
      (void 0 === t.normalUpOct32p && void 0 !== t.normalRightOct32p) ||
      (void 0 === t.normalRightOct32p && void 0 !== t.normalUpOct32p)
    )
    var t
  }
}
class me {
  constructor(t, e = !1) {
    ;(this.header = new de()),
      (function (t, e) {
        const s = new rt(e)
        var r, i
        if (
          ((r = t.header),
          (i = s).rewind(),
          (r.magic = i.readChars(4)),
          (r.version = i.readUint32()),
          (r.byteLength = i.readUint32()),
          (r.featureTableJSONByteLength = i.readUint32()),
          (r.featureTableBinaryByteLength = i.readUint32()),
          (r.batchTableJSONByteLength = i.readUint32()),
          (r.batchTableBinaryByteLength = i.readUint32()),
          (r.gltfFormat = i.readUint32()),
          t.byteLength % 8 != 0)
        )
          throw new Error("[I3dm 实例化错误] byteLength 未 8 字节对齐。")
        s.rewind(), s.skip(32)
        const n = JSON.parse(s.readChars(t.featureTableJSONByteLength)),
          a = s.readBytes(t.featureTableBinaryByteLength)
        if (((t.featureTable = fe.createFromJSON(n, a)), 0 !== t.batchTableJSONByteLength)) {
          const e = JSON.parse(s.readChars(t.batchTableJSONByteLength)),
            r = s.readBytes(t.batchTableBinaryByteLength)
          t.batchTable = ue.createFromJSON(e, r)
        }
      })(this, t),
      !0 === e && (this.buffer = t)
  }
  validate() {
    return !0
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
  get gltfFormat() {
    return this.header.gltfFormat
  }
  get sizeWithoutExternalData() {
    return (
      32 +
      this.featureTableJSONByteLength +
      this.featureTableBinaryByteLength +
      this.batchTableJSONByteLength +
      this.batchTableBinaryByteLength
    )
  }
}
class pe extends re {
  constructor() {
    super()
  }
}
class ve extends he {
  constructor() {
    super()
  }
  static createFromJSON(t, e) {
    const s = new ve()
    return (
      (s._json = t),
      (s._binary = e),
      (s.featureTableType = oe.Pnts),
      (function (t) {
        const e = t._json
        ;(t.position = e.POSITION),
          (t.positionQuantized = e.POSITION_QUANTIZED),
          (t.rgba = e.RGBA),
          (t.rgb = e.RGB),
          (t.rgb565 = e.RGB565),
          (t.normal = e.NORMAL),
          (t.normalOct16p = e.NORMAL_OCT16P),
          (t.batchId = e.BATCH_ID),
          (t.pointsLength = e.POINTS_LENGTH),
          (t.quantizedVolumeOffset = e.QUANTIZED_VOLUME_OFFSET),
          (t.quantizedVolumeScale = e.QUANTIZED_VOLUME_SCALE),
          (t.constantRgba = e.CONSTANT_RGBA),
          void 0 !== e.extensions && (t.extensions = new Set()),
          (t.extras = e.extras)
      })(s),
      s
    )
  }
  validate() {
    return !(
      (void 0 === (t = this).position && void 0 === t.positionQuantized) ||
      (void 0 !== t.batchId && void 0 === t.batchLength) ||
      (void 0 !== t.positionQuantized &&
        (void 0 === t.quantizedVolumeOffset || void 0 === t.quantizedVolumeScale))
    )
    var t
  }
}
class be {
  constructor(t, e = !1) {
    ;(this.header = new pe()),
      (function (t, e) {
        const s = new rt(e)
        var r, i
        if (
          ((r = t.header),
          (i = s).rewind(),
          (r.magic = i.readChars(4)),
          (r.version = i.readUint32()),
          (r.byteLength = i.readUint32()),
          (r.featureTableJSONByteLength = i.readUint32()),
          (r.featureTableBinaryByteLength = i.readUint32()),
          (r.batchTableJSONByteLength = i.readUint32()),
          (r.batchTableBinaryByteLength = i.readUint32()),
          t.byteLength % 8 != 0)
        )
          throw new Error("[Pnts 实例化错误] byteLength 未 8 字节对齐。")
        s.rewind(), s.skip(28)
        const n = JSON.parse(s.readChars(t.featureTableJSONByteLength)),
          a = s.readBytes(t.featureTableBinaryByteLength)
        if (((t.featureTable = ve.createFromJSON(n, a)), 0 !== t.batchTableJSONByteLength)) {
          const e = JSON.parse(s.readChars(t.batchTableJSONByteLength)),
            r = s.readBytes(t.batchTableBinaryByteLength)
          t.batchTable = ue.createFromJSON(e, r)
        }
      })(this, t),
      !0 === e && (this.buffer = t)
  }
  validate() {
    return !0
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
  get sizeWithoutGLB() {
    return (
      28 +
      this.featureTableJSONByteLength +
      this.featureTableBinaryByteLength +
      this.batchTableJSONByteLength +
      this.batchTableBinaryByteLength
    )
  }
}
class ge {}
class ye extends he {
  constructor() {
    super()
  }
  static createFromJSON(t, e) {
    const s = new ye()
    return (
      (s._json = t),
      (s._binary = e),
      (s.featureTableType = oe.Vctr),
      (function (t) {
        const e = t._json
        ;(t.region = e.REGION),
          (t.rtcCenter = e.RTC_CENTER),
          (t.polygonsLength = e.POLYGONS_LENGTH),
          (t.polylinesLength = e.POLYLINES_LENGTH),
          (t.pointsLength = e.POINTS_LENGTH),
          (t.polygonCounts = e.POLYGON_COUNTS),
          (t.polygonIndexCounts = e.POLYGON_INDEX_COUNTS),
          (t.polygonMinimumHeights = e.POLYGON_MINIMUM_HEIGHTS),
          (t.polygonMaximumHeights = e.POLYGON_MAXIMUM_HEIGHTS),
          (t.polylineCounts = e.POLYLINE_COUNTS),
          (t.polylineBatchIds = e.POLYLINE_BATCH_IDS),
          (t.pointBatchIds = e.POINT_BATCH_IDS),
          void 0 !== e.extensions && (t.extensions = new Set()),
          (t.extras = e.extras)
      })(s),
      s
    )
  }
  validate() {
    return (
      6 === (t = this).region.length &&
      3 === t.rtcCenter.length &&
      (void 0 === t.polygonsLength ||
        (void 0 !== t.polygonCounts && void 0 !== t.polygonIndexCounts)) &&
      (void 0 === t.polylinesLength || void 0 !== t.polylineCounts)
    )
    var t
  }
}
!(function (t) {
  ;(t.ADD = "add"), (t.REPLACE = "replace")
})(ae || (ae = {}))
var Te = ae
const we = "0.1.0"
export {
  se as Asset,
  le as B3dm,
  ce as B3dmFeatureTable,
  ie as B3dmHeader,
  ue as BatchTable,
  ge as Cmpt,
  kt as ExtBatchtableHierarchy,
  Wt as ExtContentGLTF,
  xt as ExtDraco,
  _t as ExtGeometryMetadata,
  Yt as ExtImplicitTiling,
  Qt as ExtLayers,
  St as ExtLod,
  Bt as ExtMaterialsThinTransparency,
  At as ExtMeshOptCompression,
  qt as ExtMetadata,
  $t as ExtMultipleContent,
  Et as ExtPbrSpecularGlossiness,
  Ht as ExtPntsDraco,
  Nt as ExtPrimitiveOutline,
  Ot as ExtTextureDDS,
  Lt as ExtTextureWebp,
  he as FeatureTable,
  R as GLTFAccessor,
  j as GLTFAccessorSparse,
  F as GLTFAccessorSparseIndices,
  I as GLTFAccessorSparseValues,
  Ft as GLTFAddAction,
  g as GLTFAlphaMode,
  dt as GLTFAnimation,
  ht as GLTFAnimationChannel,
  ot as GLTFAnimationChannelTarget,
  lt as GLTFAnimationSampler,
  o as GLTFAsset,
  l as GLTFAttributeType,
  P as GLTFBuffer,
  z as GLTFBufferView,
  bt as GLTFCamera,
  p as GLTFComponentType,
  Tt as GLTFDocument,
  It as GLTFDropAction,
  wt as GLTFExtensionBase,
  w as GLTFFilter,
  it as GLTFImage,
  Z as GLTFMaterial,
  Q as GLTFMesh,
  H as GLTFNode,
  $ as GLTFNormalTextureInfo,
  yt as GLTFOcclusionTextureInfo,
  pt as GLTFOrthographicCamera,
  X as GLTFPbr,
  vt as GLTFPerspectiveCamera,
  Y as GLTFPrimitive,
  W as GLTFPrimitiveAttribute,
  Dt as GLTFPrimitiveBuilder,
  N as GLTFPrimitiveMode,
  nt as GLTFSampler,
  k as GLTFScene,
  gt as GLTFSkin,
  K as GLTFTexture,
  q as GLTFTextureInfo,
  jt as GLTFUpdateAction,
  a as GLTFVersion,
  S as GLTFVertexAttributeType,
  Rt as GLTFVertexAttributes,
  Ct as GLTFVertexBuffer,
  Vt as GLTFVertexBufferObject,
  Jt as GLTFVertexIndices,
  L as GLTFWrapMode,
  me as I3dm,
  fe as I3dmFeatureTable,
  de as I3dmHeader,
  B as MIME,
  be as Pnts,
  ve as PntsFeatureTable,
  pe as PntsHeader,
  ee as Property,
  Xt as Tile,
  Kt as TileBoundingVolume,
  te as TileContent,
  re as TileHeaderBase,
  Te as TileRefine,
  Zt as Tileset,
  zt as TilesetExtBase,
  we as VERSION,
  ye as VctrFeatureTable,
  Gt as readGLB,
  Ut as readGLTF
}
//# sourceMappingURL=ts-3dtiles.esm.js.map
