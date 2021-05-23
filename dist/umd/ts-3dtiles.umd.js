!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = "undefined" != typeof globalThis ? globalThis : e || self).ts3dtiles = {}))
})(this, function (e) {
  "use strict"
  function t(e, t, s) {
    void 0 !== s &&
      Object.defineProperty(e, t, { value: s, enumerable: !0, writable: !0, configurable: !0 })
  }
  function s(e, t) {
    if (void 0 !== t) {
      const s = {}
      ;[...t].forEach((e) => {
        Object.defineProperty(s, e.name, { value: e.json() })
      }),
        Object.defineProperty(e, "extensions", { value: s })
    }
  }
  class r {
    get doc() {
      return this._doc
    }
    set doc(e) {
      this._doc = e
    }
    validate() {
      return !0
    }
    json() {
      return {}
    }
  }
  var i
  !(function (e) {
    ;(e.TWO = "2.0"), (e.ONE = "1.0")
  })(i || (i = {}))
  const n = Object.freeze(Object.values(i))
  var a,
    o = i
  class h extends r {
    constructor() {
      super(), (this.version = o.TWO)
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
    static readFromJson(e) {
      const t = new h()
      if (!n.includes(e.version))
        throw new Error(`[GLTFAsset.readFromJson()] 参数 version：${e.version} 不合法，请检查`)
      if (((t.version = e.version), void 0 !== e.minVersion)) {
        if (!n.includes(e.minVersion))
          throw new Error(
            `[GLTFAsset.readFromJson()] 参数 minVersion: ${e.minVersion} 不合法，请检查`
          )
        t.minVersion = e.version
      }
      return (t.copyright = e.copyright), (t.generator = e.generator), (t.extras = e.extras), t
    }
  }
  !(function (e) {
    ;(e.SCALAR = "SCALAR"),
      (e.VEC2 = "VEC2"),
      (e.VEC3 = "VEC3"),
      (e.VEC4 = "VEC4"),
      (e.MAT2 = "MAT2"),
      (e.MAT3 = "MAT3"),
      (e.MAT4 = "MAT4")
  })(a || (a = {}))
  const c = Object.freeze(Object.values(a)),
    u = (e) => {
      switch (e) {
        case a.VEC2:
          return 2
        case a.VEC3:
          return 3
        case a.VEC4:
        case a.MAT2:
          return 4
        case a.MAT3:
          return 9
        case a.MAT4:
          return 16
        default:
          return 1
      }
    }
  var l,
    d = a
  !(function (e) {
    ;(e[(e.BYTE = 5120)] = "BYTE"),
      (e[(e.UNSIGNED_BYTE = 5121)] = "UNSIGNED_BYTE"),
      (e[(e.SHORT = 5122)] = "SHORT"),
      (e[(e.UNSIGNED_SHORT = 5123)] = "UNSIGNED_SHORT"),
      (e[(e.UNSIGNED_INT = 5125)] = "UNSIGNED_INT"),
      (e[(e.FLOAT = 5126)] = "FLOAT")
  })(l || (l = {}))
  const f = Object.freeze(Object.values(l)),
    m = (e) => {
      switch (e) {
        case l.BYTE:
        case l.UNSIGNED_BYTE:
          return 1
        case l.SHORT:
        case l.UNSIGNED_SHORT:
          return 2
        case l.UNSIGNED_INT:
        default:
          return 4
      }
    }
  var p,
    v = l
  !(function (e) {
    ;(e.OPAQUE = "OPAQUE"), (e.MASK = "MASK"), (e.BLEND = "BLEND")
  })(p || (p = {}))
  const b = Object.freeze(Object.values(p))
  var g,
    T = p
  !(function (e) {
    ;(e[(e.NEAREST = 9728)] = "NEAREST"),
      (e[(e.LINEAR = 9729)] = "LINEAR"),
      (e[(e.NEAREST_MIPMAP_NEAREST = 9984)] = "NEAREST_MIPMAP_NEAREST"),
      (e[(e.LINEAR_MIPMAP_NEAREST = 9985)] = "LINEAR_MIPMAP_NEAREST"),
      (e[(e.NEAREST_MIPMAP_LINEAR = 9986)] = "NEAREST_MIPMAP_LINEAR"),
      (e[(e.LINEAR_MIPMAP_LINEAR = 9987)] = "LINEAR_MIPMAP_LINEAR")
  })(g || (g = {}))
  const y = Object.freeze(Object.values(g))
  var x,
    w = g
  !(function (e) {
    ;(e[(e.REPEAT = 10497)] = "REPEAT"),
      (e[(e.CLAMP_TO_EDGE = 33071)] = "CLAMP_TO_EDGE"),
      (e[(e.MIRRORED_REPEAT = 33648)] = "MIRRORED_REPEAT")
  })(x || (x = {}))
  const L = Object.freeze(Object.values(x))
  var E,
    O = x
  !(function (e) {
    ;(e[(e.POINTS = 0)] = "POINTS"),
      (e[(e.LINES = 1)] = "LINES"),
      (e[(e.LINE_LOOP = 2)] = "LINE_LOOP"),
      (e[(e.LINE_STRIP = 3)] = "LINE_STRIP"),
      (e[(e.TRIANGLES = 4)] = "TRIANGLES"),
      (e[(e.TRIANGLE_STRIP = 5)] = "TRIANGLE_STRIP"),
      (e[(e.TRIANGLE_FAN = 6)] = "TRIANGLE_FAN")
  })(E || (E = {}))
  const _ = Object.freeze(Object.values(E))
  var F,
    A = E
  !(function (e) {
    ;(e.POSITION = "position"),
      (e.UV0 = "uv0"),
      (e.UV1 = "uv1"),
      (e.COLOR0 = "color0"),
      (e.TANGENT = "tangent"),
      (e.NORMAL = "normal"),
      (e.JOINTS0 = "joints0"),
      (e.WEIGHTS0 = "weights0"),
      (e.BATCHID = "batchid")
  })(F || (F = {}))
  var N,
    S = F
  !(function (e) {
    ;(e.JPG = "image/jpg"),
      (e.JPEG = "image/jpeg"),
      (e.PNG = "image/png"),
      (e.WEBP = "image/webp"),
      (e.DDS = "image/vnd-ms.dds")
  })(N || (N = {})),
    Object.freeze(Object.values(N))
  var B = N
  class I extends r {
    constructor() {
      super()
    }
    validate() {
      return (
        this.componentType === v.UNSIGNED_BYTE ||
        this.componentType === v.UNSIGNED_INT ||
        this.componentType === v.UNSIGNED_SHORT
      )
    }
    json() {
      if (!this.validate())
        throw new Error(
          "[GLTFAccessorSparseIndices json()] 此 accessor.sparse.indices 的属性不合法，请检查"
        )
      const e = {
        bufferView: this.bufferView,
        byteOffset: this.byteOffset,
        componentType: this.componentType
      }
      return s(e, this.extensions), t(e, "extras", this.extras), e
    }
    static readFromJson(e) {
      const t = new I()
      return (
        (t.extras = e.extras),
        (t.bufferView = e.bufferView),
        (t.byteOffset = e.byteOffset),
        f.includes(e.componentType) && (t.componentType = e.componentType),
        t
      )
    }
  }
  class j extends r {
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
      const e = { bufferView: this.bufferView }
      return (
        t(e, "byteOffset", this.byteOffset), s(e, this.extensions), t(e, "extras", this.extras), e
      )
    }
    static readFromJson(e) {
      const t = new j()
      return (t.bufferView = e.bufferView), (t.byteOffset = e.byteOffset), (t.extras = e.extras), t
    }
  }
  class C extends r {
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
    static readFromJson(e) {
      const t = new C()
      return (
        (t.indices = I.readFromJson(e.indices)),
        (t.values = j.readFromJson(e.values)),
        (t.extras = e.extras),
        t
      )
    }
  }
  class G extends r {
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
      if (!this.validate())
        throw new Error("[GLTFAccessor json()] 当前 accessor 属性不合法，请检查")
      const e = { componentType: this.componentType, type: this.type, count: this.count }
      return (
        t(e, "max", this.max),
        t(e, "min", this.min),
        t(e, "name", this.name),
        t(e, "normalized", this.normalized),
        t(e, "sparse", void 0 !== this.sparse ? this.sparse.json() : void 0),
        t(e, "bufferView", this.bufferView),
        t(e, "byteOffset", this.byteOffset),
        s(e, this.extensions),
        t(e, "extras", this.extras),
        e
      )
    }
    static fromJson(e) {
      const t = new G()
      if (!f.includes(e.componentType))
        throw new Error("[GLTFAccessor.readFromJson()] 属性 componentType 非法")
      if (((t.componentType = e.componentType), (t.count = e.count), !c.includes(e.type)))
        throw new Error("[readGLTF() readAccessors()] 属性 type 非法")
      return (
        (t.type = e.type),
        (t.max = e.max),
        (t.min = e.min),
        void 0 !== e.sparse && (t.sparse = C.readFromJson(e.sparse)),
        (t.normalized = e.normalized),
        (t.bufferView = e.bufferView),
        (t.byteOffset = e.byteOffset),
        (t.name = e.name),
        (t.extras = e.extras),
        t
      )
    }
  }
  function R(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
  }
  function J(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports
  }
  var U = J(function (e, t) {
    !(function () {
      for (
        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          s = new Uint8Array(256),
          r = 0;
        r < e.length;
        r++
      )
        s[e.charCodeAt(r)] = r
      ;(t.encode = function (t) {
        var s,
          r = new Uint8Array(t),
          i = r.length,
          n = ""
        for (s = 0; s < i; s += 3)
          (n += e[r[s] >> 2]),
            (n += e[((3 & r[s]) << 4) | (r[s + 1] >> 4)]),
            (n += e[((15 & r[s + 1]) << 2) | (r[s + 2] >> 6)]),
            (n += e[63 & r[s + 2]])
        return (
          i % 3 == 2
            ? (n = n.substring(0, n.length - 1) + "=")
            : i % 3 == 1 && (n = n.substring(0, n.length - 2) + "=="),
          n
        )
      }),
        (t.decode = function (e) {
          var t,
            r,
            i,
            n,
            a,
            o = 0.75 * e.length,
            h = e.length,
            c = 0
          "=" === e[e.length - 1] && (o--, "=" === e[e.length - 2] && o--)
          var u = new ArrayBuffer(o),
            l = new Uint8Array(u)
          for (t = 0; t < h; t += 4)
            (r = s[e.charCodeAt(t)]),
              (i = s[e.charCodeAt(t + 1)]),
              (n = s[e.charCodeAt(t + 2)]),
              (a = s[e.charCodeAt(t + 3)]),
              (l[c++] = (r << 2) | (i >> 4)),
              (l[c++] = ((15 & i) << 4) | (n >> 2)),
              (l[c++] = ((3 & n) << 6) | (63 & a))
          return u
        })
    })()
  })
  U.encode
  var M,
    P = U.decode
  class V extends r {
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
      const e = { byteLength: this.byteLength }
      return t(e, "uri", this.uri), s(e, this.extensions), t(e, "extras", this.extras), e
    }
    static fromJson(e) {
      const t = new V()
      return (
        (t.uri = e.uri),
        t.uri &&
          t.uri.startsWith("data:") &&
          (t.bufferData = P(t.uri.substr(t.uri.indexOf(",") + 1))),
        (t.byteLength = e.byteLength),
        (t.extras = e.extras),
        t
      )
    }
  }
  !(function (e) {
    ;(e[(e.ARRAY_BUFFER = 34962)] = "ARRAY_BUFFER"),
      (e[(e.ELEMENT_ARRAY_BUFFER = 34963)] = "ELEMENT_ARRAY_BUFFER")
  })(M || (M = {}))
  const D = Object.freeze(Object.values(M))
  var z = M
  class k extends r {
    constructor() {
      super(),
        (this.buffer = 0),
        (this.byteLength = 1),
        (this.byteOffset = 0),
        (this.byteStride = 4)
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
      const e = { buffer: this.buffer, byteLength: this.byteLength }
      return (
        (this.target !== z.ARRAY_BUFFER && this.target !== z.ELEMENT_ARRAY_BUFFER) ||
          t(e, "target", this.target),
        t(e, "byteOffset", this.byteOffset),
        4 !== this.byteStride && t(e, "byteStride", this.byteStride),
        s(e, this.extensions),
        t(e, "extras", this.extras),
        e
      )
    }
    static fromJson(e) {
      const t = new k()
      return (
        (t.buffer = e.buffer),
        (t.byteLength = e.byteLength),
        (t.byteOffset = e.byteOffset),
        (t.extras = e.extras),
        void 0 !== e.target && D.includes(e.target) && (t.target = e.target),
        t
      )
    }
  }
  class H extends r {
    constructor() {
      super(), (this.nodes = [])
    }
    validate() {
      return this.nodes.length > 1
    }
    json() {
      const e = { nodes: this.nodes }
      return t(e, "name", this.name), s(e, this.extensions), e
    }
    static fromJson(e) {
      const t = new H()
      return (t.name = e.name), (t.nodes = e.nodes), (t.extras = e.extras), t
    }
  }
  class W extends r {
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
        !!(function (e) {
          let t = !0
          return (
            void 0 !== e.matrix
              ? (void 0 === e.rotation && void 0 === e.scale && void 0 === e.translation) ||
                (t = !1)
              : void 0 === e.rotation && void 0 === e.scale && void 0 === e.translation && (t = !1),
            e.rotation && (t = e.rotation.every((e) => e > 1 || e < -1)),
            t
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
      const e = {}
      t(e, "mesh", this.mesh),
        t(e, "rotation", this.rotation),
        t(e, "translation", this.translation),
        t(e, "scale", this.scale)
      const r = this.matrix
      return (
        r &&
          ((1 === r[0] && 1 === r[5] && 1 === r[10] && 1 === r[15]) || t(e, "matrix", this.matrix)),
        t(e, "weights", this.weights),
        t(e, "skin", this.skin),
        t(e, "camera", this.camera),
        t(e, "name", this.name),
        this.children && 0 !== this.children.length && t(e, "children", this.children),
        s(e, this.extensions),
        t(e, "extras", this.extras),
        e
      )
    }
    static fromJson(e) {
      const t = new W()
      return (
        (t.name = e.name),
        (t.mesh = e.mesh),
        (t.matrix = e.matrix),
        (t.rotation = e.rotation),
        (t.scale = e.scale),
        (t.skin = e.skin),
        (t.children = e.children),
        (t.weights = e.weights),
        (t.translation = e.translation),
        (t.camera = e.camera),
        (t.extras = e.extras),
        t
      )
    }
  }
  class Y {
    static fromJson(e) {
      const t = new Y()
      return (
        (t.position = e.POSITION),
        (t.uv0 = e.TEXCOORD_0),
        (t.uv1 = e.TEXCOORD_1),
        (t.color0 = e.COLOR_0),
        (t.normal = e.NORMAL),
        (t.tangent = e.TANGENT),
        (t.joints0 = e.JOINTS_0),
        (t.weights0 = e.WEIGHTS_0),
        (t._batchid = e._BATCHID),
        t
      )
    }
    validate() {
      return Object.values(this).every((e) => e < 0)
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
  class Q extends r {
    constructor() {
      super(), (this.attributes = new Y()), (this.mode = A.TRIANGLES)
    }
    getAccessor(e) {
      switch (e.toLowerCase()) {
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
      const e = { attributes: this.attributes.json() }
      return (
        this.mode !== A.TRIANGLES && void 0 !== this.mode && t(e, "mode", this.mode),
        t(e, "indices", this.indices),
        t(e, "material", this.material),
        s(e, this.extensions),
        t(e, "extras", this.extras),
        e
      )
    }
    static fromJson(e) {
      const t = new Q()
      if (((t.indices = e.indices), (t.material = e.material), void 0 !== e.mode && 4 !== e.mode)) {
        if (!_.includes(e.mode))
          throw new Error(`[GLTFPrimitive.readFromJson()] mode：${e.mode} 不合法，请检查`)
        t.mode = e.mode
      }
      return (t.attributes = Y.fromJson(e.attributes)), t
    }
  }
  class q extends r {
    constructor() {
      super(), (this.primitives = [])
    }
    set doc(e) {
      ;(this._doc = e), this.primitives.forEach((t) => (t.doc = e))
    }
    validate() {
      let e = !1
      return this.primitives.every((e) => e.validate()) && (e = !0), e
    }
    json() {
      const e = { primitives: this.primitives.map((e) => e.json()) }
      return t(e, "weights", this.weights), t(e, "name", this.name), s(e, this.extensions), e
    }
    static fromJson(e) {
      const t = new q()
      return (
        (t.name = e.name),
        (t.primitives = e.primitives.map((e) => Q.fromJson(e))),
        (t.weights = e.weights),
        (t.extras = e.extras),
        t
      )
    }
  }
  class $ extends r {
    constructor(e, t) {
      super(), (this.index = e), (this.texCoord = t)
    }
    validate() {
      return this.index < 0 || this.texCoord < 0
    }
    json() {
      if (!this.validate())
        throw new Error("[GLTFTextureInfo json()] 当前 textureinfo 对象属性不合法，请检查")
      return { index: this.index, texCoord: this.texCoord }
    }
    static fromJson(e) {
      const t = new $(e.index, e.texCoord)
      return (t.extras = e.extras), t
    }
  }
  class X extends $ {
    constructor(e, t, s) {
      super(e, t), (this.scale = s)
    }
    validate() {
      return !0
    }
    json() {
      if (!this.validate())
        throw new Error("[GLTFNormalTextureInfo json()] 当前 normal textureinfo 属性不合法，请检查")
      const e = super.json()
      return t(e, "scale", this.scale), s(e, this.extensions), t(e, "extras", this.extras), e
    }
    static fromJson(e) {
      const t = new X(e.index, e.texCoord, e.scale)
      return (t.extras = e.extras), t
    }
  }
  class Z extends r {
    constructor() {
      super(), (this.baseColorFactor = [1, 1, 1, 1])
    }
    validate() {
      return (
        (!this.baseColorFactor || !this.baseColorFactor.every((e) => e < 0 || e > 1)) &&
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
      const e = {}
      return (
        void 0 !== this.baseColorFactor &&
          this.baseColorFactor.every((e) => 1 !== e) &&
          t(e, "baseColorFactor", this.baseColorFactor),
        t(
          e,
          "baseColorTexture",
          void 0 !== this.baseColorTexture ? this.baseColorTexture.json() : void 0
        ),
        t(
          e,
          "metallicFactor",
          this.metallicFactor && 1 === this.metallicFactor ? void 0 : this.metallicFactor
        ),
        t(
          e,
          "roughnessFactor",
          this.roughnessFactor && 1 === this.roughnessFactor ? void 0 : this.roughnessFactor
        ),
        t(
          e,
          "metallicRoughnessTexture",
          void 0 !== this.metallicRoughnessTexture ? this.metallicRoughnessTexture.json() : void 0
        ),
        s(e, this.extensions),
        t(e, "extras", this.extras),
        e
      )
    }
    static fromJson(e) {
      const t = new Z()
      return (
        (t.extras = e.extras),
        (t.metallicFactor = e.metallicFactor),
        (t.roughnessFactor = e.roughnessFactor),
        (t.baseColorFactor = e.baseColorFactor),
        void 0 !== e.baseColorTexture && (t.baseColorTexture = $.fromJson(e.baseColorTexture)),
        void 0 !== e.metallicRoughnessTexture &&
          (t.metallicRoughnessTexture = $.fromJson(e.metallicRoughnessTexture)),
        t
      )
    }
  }
  class K extends r {
    constructor() {
      super(),
        (this.emissiveFactor = [0, 0, 0]),
        (this.alphaMode = T.OPAQUE),
        (this.alphaCutoff = 0.5),
        (this.doubleSided = !1)
    }
    set doc(e) {
      ;(this._doc = e),
        void 0 !== this.pbrMetallicRoughness && (this.pbrMetallicRoughness.doc = e),
        void 0 !== this.normalTexture && (this.normalTexture.doc = e),
        void 0 !== this.emissiveTexture && (this.emissiveTexture.doc = e),
        void 0 !== this.occlusionTexture && (this.occlusionTexture.doc = e)
    }
    validate() {
      return (
        !1 !== this.pbrMetallicRoughness?.validate() &&
        !1 !== this.normalTexture?.validate() &&
        !1 !== this.occlusionTexture?.validate() &&
        (this.alphaMode !== T.MASK || void 0 !== this.alphaCutoff) &&
        !this.emissiveFactor?.every((e) => e < 0 || e > 1)
      )
    }
    json() {
      if (!this.validate())
        throw new Error("[GLTFMaterial json()] 此 material 对象的属性不合法，请检查")
      const e = {}
      return (
        t(e, "name", this.name),
        t(
          e,
          "pbrMetallicRoughness",
          void 0 !== this.pbrMetallicRoughness ? this.pbrMetallicRoughness.json() : void 0
        ),
        t(e, "normalTexture", void 0 !== this.normalTexture ? this.normalTexture.json() : void 0),
        t(
          e,
          "emissiveTexture",
          void 0 !== this.emissiveTexture ? this.emissiveTexture.json() : void 0
        ),
        t(e, "emissiveFactor", this.emissiveFactor),
        t(
          e,
          "alphaMode",
          void 0 !== this.alphaMode && this.alphaMode !== T.OPAQUE ? this.alphaMode : void 0
        ),
        t(
          e,
          "alphaCutoff",
          0.5 !== this.alphaCutoff && void 0 !== this.alphaCutoff ? this.alphaCutoff : void 0
        ),
        t(
          e,
          "alphaCutoff",
          !1 !== this.doubleSided && void 0 !== this.doubleSided ? this.doubleSided : void 0
        ),
        s(e, this.extensions),
        t(e, "extras", this.extras),
        e
      )
    }
    static fromJson(e) {
      const t = new K()
      return (
        (t.name = e.name),
        void 0 !== e.pbrMetallicRoughness &&
          (t.pbrMetallicRoughness = Z.fromJson(e.pbrMetallicRoughness)),
        void 0 !== e.normalTexture && (t.normalTexture = X.fromJson(e.normalTexture)),
        void 0 !== e.emissiveTexture && (t.emissiveTexture = $.fromJson(e.emissiveTexture)),
        void 0 !== e.alphaMode && b.includes(e.alphaMode) && (t.alphaMode = e.alphaMode),
        (t.doubleSided = e.doubleSided),
        (t.emissiveFactor = e.emissiveFactor),
        (t.alphaCutoff = e.alphaCutoff),
        (t.extras = e.extras),
        t
      )
    }
  }
  class ee extends r {
    constructor() {
      super()
    }
    validate() {
      return void 0 !== this.sampler || void 0 !== this.source || void 0 !== this.name
    }
    json() {
      const e = {}
      return (
        t(e, "name", this.name),
        t(e, "source", this.source),
        t(e, "sampler", this.sampler),
        s(e, this.extensions),
        t(e, "extras", this.extras),
        e
      )
    }
    static fromJson(e) {
      const t = new ee()
      return (
        (t.name = e.name), (t.source = e.source), (t.sampler = e.sampler), (t.extras = e.extras), t
      )
    }
  }
  !(function (e) {
    if (e.TextEncoder && e.TextDecoder) return !1
    function t(e = "utf-8") {
      if ("utf-8" !== e)
        throw new RangeError(
          `Failed to construct 'TextEncoder': The encoding label provided ('${e}') is invalid.`
        )
    }
    function s(e = "utf-8", t = { fatal: !1 }) {
      if ("utf-8" !== e)
        throw new RangeError(
          `Failed to construct 'TextDecoder': The encoding label provided ('${e}') is invalid.`
        )
      if (t.fatal)
        throw new Error("Failed to construct 'TextDecoder': the 'fatal' option is unsupported.")
    }
    Object.defineProperty(t.prototype, "encoding", { value: "utf-8" }),
      (t.prototype.encode = function (e, t = { stream: !1 }) {
        if (t.stream) throw new Error("Failed to encode: the 'stream' option is unsupported.")
        let s = 0
        const r = e.length
        let i = 0,
          n = Math.max(32, r + (r >> 1) + 7),
          a = new Uint8Array((n >> 3) << 3)
        for (; s < r; ) {
          let t = e.charCodeAt(s++)
          if (t >= 55296 && t <= 56319) {
            if (s < r) {
              const r = e.charCodeAt(s)
              56320 == (64512 & r) && (++s, (t = ((1023 & t) << 10) + (1023 & r) + 65536))
            }
            if (t >= 55296 && t <= 56319) continue
          }
          if (i + 4 > a.length) {
            ;(n += 8), (n *= 1 + (s / e.length) * 2), (n = (n >> 3) << 3)
            const t = new Uint8Array(n)
            t.set(a), (a = t)
          }
          if (0 != (4294967168 & t)) {
            if (0 == (4294965248 & t)) a[i++] = ((t >> 6) & 31) | 192
            else if (0 == (4294901760 & t))
              (a[i++] = ((t >> 12) & 15) | 224), (a[i++] = ((t >> 6) & 63) | 128)
            else {
              if (0 != (4292870144 & t)) continue
              ;(a[i++] = ((t >> 18) & 7) | 240),
                (a[i++] = ((t >> 12) & 63) | 128),
                (a[i++] = ((t >> 6) & 63) | 128)
            }
            a[i++] = (63 & t) | 128
          } else a[i++] = t
        }
        return a.slice(0, i)
      }),
      Object.defineProperty(s.prototype, "encoding", { value: "utf-8" }),
      Object.defineProperty(s.prototype, "fatal", { value: !1 }),
      Object.defineProperty(s.prototype, "ignoreBOM", { value: !1 }),
      (s.prototype.decode = function (e, t = { stream: !1 }) {
        if (t.stream) throw new Error("Failed to decode: the 'stream' option is unsupported.")
        const s = new Uint8Array(e)
        let r = 0
        const i = s.length,
          n = []
        for (; r < i; ) {
          const e = s[r++]
          if (0 === e) break
          if (0 == (128 & e)) n.push(e)
          else if (192 == (224 & e)) {
            const t = 63 & s[r++]
            n.push(((31 & e) << 6) | t)
          } else if (224 == (240 & e)) {
            const t = 63 & s[r++],
              i = 63 & s[r++]
            n.push(((31 & e) << 12) | (t << 6) | i)
          } else if (240 == (248 & e)) {
            let t = ((7 & e) << 18) | ((63 & s[r++]) << 12) | ((63 & s[r++]) << 6) | (63 & s[r++])
            t > 65535 &&
              ((t -= 65536), n.push(((t >>> 10) & 1023) | 55296), (t = 56320 | (1023 & t))),
              n.push(t)
          }
        }
        return String.fromCharCode.apply(null, n)
      }),
      (e.TextEncoder = t),
      (e.TextDecoder = s)
  })("undefined" != typeof window ? window : "undefined" != typeof self ? self : void 0)
  var te = J(function (e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.encode = t.decode = void 0)
    const s = new TextDecoder("utf-8")
    t.decode = function (e) {
      return s.decode(e)
    }
    const r = new TextEncoder()
    t.encode = function (e) {
      return r.encode(e)
    }
  })
  R(te), te.encode, te.decode
  var se = J(function (e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.IOBuffer = void 0)
    class s {
      constructor(e = 8192, t = {}) {
        let r = !1
        "number" == typeof e
          ? (e = new ArrayBuffer(e))
          : ((r = !0), (this.lastWrittenByte = e.byteLength))
        const i = t.offset ? t.offset >>> 0 : 0,
          n = e.byteLength - i
        let a = i
        ;(ArrayBuffer.isView(e) || e instanceof s) &&
          (e.byteLength !== e.buffer.byteLength && (a = e.byteOffset + i), (e = e.buffer)),
          (this.lastWrittenByte = r ? n : 0),
          (this.buffer = e),
          (this.length = n),
          (this.byteLength = n),
          (this.byteOffset = a),
          (this.offset = 0),
          (this.littleEndian = !0),
          (this._data = new DataView(this.buffer, a, n)),
          (this._mark = 0),
          (this._marks = [])
      }
      available(e = 1) {
        return this.offset + e <= this.length
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
      skip(e = 1) {
        return (this.offset += e), this
      }
      seek(e) {
        return (this.offset = e), this
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
        const e = this._marks.pop()
        if (void 0 === e) throw new Error("Mark stack empty")
        return this.seek(e), this
      }
      rewind() {
        return (this.offset = 0), this
      }
      ensureAvailable(e = 1) {
        if (!this.available(e)) {
          const t = 2 * (this.offset + e),
            s = new Uint8Array(t)
          s.set(new Uint8Array(this.buffer)),
            (this.buffer = s.buffer),
            (this.length = this.byteLength = t),
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
      readBytes(e = 1) {
        const t = new Uint8Array(e)
        for (let s = 0; s < e; s++) t[s] = this.readByte()
        return t
      }
      readInt16() {
        const e = this._data.getInt16(this.offset, this.littleEndian)
        return (this.offset += 2), e
      }
      readUint16() {
        const e = this._data.getUint16(this.offset, this.littleEndian)
        return (this.offset += 2), e
      }
      readInt32() {
        const e = this._data.getInt32(this.offset, this.littleEndian)
        return (this.offset += 4), e
      }
      readUint32() {
        const e = this._data.getUint32(this.offset, this.littleEndian)
        return (this.offset += 4), e
      }
      readFloat32() {
        const e = this._data.getFloat32(this.offset, this.littleEndian)
        return (this.offset += 4), e
      }
      readFloat64() {
        const e = this._data.getFloat64(this.offset, this.littleEndian)
        return (this.offset += 8), e
      }
      readChar() {
        return String.fromCharCode(this.readInt8())
      }
      readChars(e = 1) {
        let t = ""
        for (let s = 0; s < e; s++) t += this.readChar()
        return t
      }
      readUtf8(e = 1) {
        return te.decode(this.readBytes(e))
      }
      writeBoolean(e) {
        return this.writeUint8(e ? 255 : 0), this
      }
      writeInt8(e) {
        return (
          this.ensureAvailable(1),
          this._data.setInt8(this.offset++, e),
          this._updateLastWrittenByte(),
          this
        )
      }
      writeUint8(e) {
        return (
          this.ensureAvailable(1),
          this._data.setUint8(this.offset++, e),
          this._updateLastWrittenByte(),
          this
        )
      }
      writeByte(e) {
        return this.writeUint8(e)
      }
      writeBytes(e) {
        this.ensureAvailable(e.length)
        for (let t = 0; t < e.length; t++) this._data.setUint8(this.offset++, e[t])
        return this._updateLastWrittenByte(), this
      }
      writeInt16(e) {
        return (
          this.ensureAvailable(2),
          this._data.setInt16(this.offset, e, this.littleEndian),
          (this.offset += 2),
          this._updateLastWrittenByte(),
          this
        )
      }
      writeUint16(e) {
        return (
          this.ensureAvailable(2),
          this._data.setUint16(this.offset, e, this.littleEndian),
          (this.offset += 2),
          this._updateLastWrittenByte(),
          this
        )
      }
      writeInt32(e) {
        return (
          this.ensureAvailable(4),
          this._data.setInt32(this.offset, e, this.littleEndian),
          (this.offset += 4),
          this._updateLastWrittenByte(),
          this
        )
      }
      writeUint32(e) {
        return (
          this.ensureAvailable(4),
          this._data.setUint32(this.offset, e, this.littleEndian),
          (this.offset += 4),
          this._updateLastWrittenByte(),
          this
        )
      }
      writeFloat32(e) {
        return (
          this.ensureAvailable(4),
          this._data.setFloat32(this.offset, e, this.littleEndian),
          (this.offset += 4),
          this._updateLastWrittenByte(),
          this
        )
      }
      writeFloat64(e) {
        return (
          this.ensureAvailable(8),
          this._data.setFloat64(this.offset, e, this.littleEndian),
          (this.offset += 8),
          this._updateLastWrittenByte(),
          this
        )
      }
      writeChar(e) {
        return this.writeUint8(e.charCodeAt(0))
      }
      writeChars(e) {
        for (let t = 0; t < e.length; t++) this.writeUint8(e.charCodeAt(t))
        return this
      }
      writeUtf8(e) {
        return this.writeBytes(te.encode(e))
      }
      toArray() {
        return new Uint8Array(this.buffer, this.byteOffset, this.lastWrittenByte)
      }
      _updateLastWrittenByte() {
        this.offset > this.lastWrittenByte && (this.lastWrittenByte = this.offset)
      }
    }
    t.IOBuffer = s
  })
  R(se)
  var re,
    ie = se.IOBuffer
  class ne extends r {
    constructor() {
      super()
    }
    get isEncodeWithUri() {
      return void 0 === this.uri && void 0 !== this.bufferView
    }
    get getImageData() {
      if (!1 === this.validate())
        throw new Error("[GLTFImage getImageData()] 当前 image 对象属性有问题，请检查")
      if (this.uri && this.isEncodeWithUri) return P(this.uri)
      if (void 0 === this.doc) throw new Error("")
      if (0 === this.doc.buffers.length || 0 === this.doc.bufferViews.length) throw new Error("")
      {
        const e = this.doc.bufferViews[this.bufferView],
          t = this.doc.buffers[e.buffer],
          s = void 0 === e.byteOffset ? this.doc.bufferViews.indexOf(e) : e.byteOffset,
          r = e.byteLength,
          i = t.bufferData
        if (void 0 !== i) return new ie(i).skip(s).readBytes(r).buffer
      }
    }
    validate() {
      return (
        (void 0 === this.uri || void 0 === this.bufferView) &&
        (void 0 === this.bufferView || void 0 !== this.mimeType)
      )
    }
    json() {
      const e = {}
      return (
        t(e, "name", this.name),
        t(e, "bufferView", this.bufferView),
        t(e, "uri", this.uri),
        t(e, "mimeType", this.mimeType),
        s(e, this.extensions),
        t(e, "extras", this.extras),
        e
      )
    }
    static fromJson(e) {
      const t = new ne()
      if (((t.name = e.name), (t.bufferView = e.bufferView), void 0 !== e.mimeType)) {
        if (!(e.mimeType in B)) throw new Error("[GLTFImage.readFromJson()] 不支持的 mime 类型")
        t.mimeType = e.mimeType
      }
      return (t.extras = e.extras), t
    }
  }
  class ae extends r {
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
      const e = {}
      return (
        t(e, "magFilter", this.magFilter),
        t(e, "minFilter", this.minFilter),
        t(e, "wrapS", this.wrapS),
        t(e, "wrapT", this.wrapT),
        t(e, "name", this.name),
        s(e, this.extensions),
        t(e, "extras", this.extras),
        e
      )
    }
    static fromJson(e) {
      const t = new ae()
      return (
        (t.name = e.name),
        void 0 !== e.magFilter && y.includes(e.magFilter) && (t.magFilter = e.magFilter),
        void 0 !== e.minFilter && y.includes(e.minFilter) && (t.minFilter = e.minFilter),
        void 0 !== e.wrapS && L.includes(e.wrapS) && (t.wrapS = e.wrapS),
        void 0 !== e.wrapT && L.includes(e.wrapT) && (t.wrapT = e.wrapT),
        (t.extras = e.extras),
        t
      )
    }
  }
  !(function (e) {
    ;(e.TRANSLATION = "translation"),
      (e.ROTATION = "rotation"),
      (e.SCALE = "scale"),
      (e.WEIGHTS = "weights")
  })(re || (re = {}))
  const oe = Object.freeze(Object.values(re))
  class he extends r {
    constructor() {
      super()
    }
    validate() {
      return !0
    }
    json() {
      const e = { path: this.path }
      return t(e, "node", this.node), s(e, this.extensions), t(e, "extras", this.extras), e
    }
    static readFromJson(e) {
      const t = new he()
      return (
        (t.extras = e.extras),
        (t.node = e.node),
        void 0 !== e.path && oe.includes(e.path) && (t.path = e.path),
        t
      )
    }
  }
  class ce extends r {
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
      const e = { sampler: this.sampler, target: this.target.json() }
      return s(e, this.extensions), t(e, "extras", this.extras), e
    }
    static readFromJson(e) {
      const t = new ce()
      return (
        (t.sampler = e.sampler), (t.target = he.readFromJson(e.target)), (t.extras = e.extras), t
      )
    }
  }
  var ue
  !(function (e) {
    ;(e.LINEAR = "LINEAR"), (e.STEP = "STEP"), (e.CUBICSPLINE = "CUBICSPLINE")
  })(ue || (ue = {}))
  const le = Object.freeze(Object.values(ue))
  class de extends r {
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
    static readFromJson(e) {
      const t = new de()
      return (
        (t.input = e.input),
        (t.output = e.output),
        void 0 !== e.interpolation &&
          le.includes(e.interpolation) &&
          (t.interpolation = e.interpolation),
        t
      )
    }
  }
  class fe extends r {
    constructor() {
      super(), (this.channels = []), (this.samplers = [])
    }
    validate() {
      return !(this.channels.length < 1 || this.samplers.length < 1)
    }
    json() {
      if (!this.validate())
        throw new Error("[GLTFAnimation json()] 当前 animation 对象属性不合法，请检查")
      const e = {}
      return (
        t(e, "name", this.name),
        t(e, "channels", 0 !== this.channels.length ? this.channels.map((e) => e.json()) : void 0),
        t(e, "samplers", 0 !== this.samplers.length ? this.samplers.map((e) => e.json()) : void 0),
        s(e, this.extensions),
        t(e, "extras", this.extras),
        e
      )
    }
    static fromJson(e) {
      const t = new fe()
      return (
        (t.name = e.name),
        (t.channels = e.channels.map((e) => ce.readFromJson(e))),
        (t.samplers = e.samplers.map((e) => de.readFromJson(e))),
        (t.extras = e.extras),
        t
      )
    }
  }
  var me
  !(function (e) {
    ;(e.PERSPECTIVE = "perspective"), (e.ORTHOGRAPHIC = "orthographic")
  })(me || (me = {}))
  const pe = Object.freeze(Object.values(me))
  class ve {
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
  class be {
    validate() {
      let e = this.yfov >= 0 && this.znear >= 0
      return (
        void 0 !== this.aspectRatio && (e = e && this.aspectRatio >= 0),
        void 0 !== this.zfar && (e = e && this.zfar >= 0),
        void 0 !== this.zfar && (e = e && this.zfar > this.znear),
        e
      )
    }
    json() {
      if (!this.validate())
        throw new Error("[GLTFPerspectiveCamera json()] 当前对象属性有问题，请检查")
      const e = { yfov: this.yfov, znear: this.znear }
      return t(e, "aspectRatio", this.aspectRatio), t(e, "zfar", this.zfar), e
    }
  }
  class ge extends r {
    constructor() {
      super()
    }
    validate() {
      return void 0 === this.orthographic || void 0 === this.perspective
    }
    json() {
      if (!this.validate())
        throw new Error("[GLTFCamera json()] 当前 camera 对象属性不合法，请检查")
      const e = { type: this.type }
      return (
        t(e, "name", this.name),
        t(e, "perspective", this.perspective ? this.perspective.json() : void 0),
        t(e, "orthographic", this.orthographic ? this.orthographic.json() : void 0),
        s(e, this.extensions),
        t(e, "extras", this.extras),
        e
      )
    }
    static fromJson(e) {
      const t = new ge()
      ;(t.name = e.name), pe.includes(e.type) && (t.type = e.type)
      let s = !1
      if (
        (void 0 !== e.perspective &&
          ((t.perspective = new be()),
          (t.perspective.yfov = e.perspective.yfov),
          (t.perspective.znear = e.perspective.znear),
          (t.perspective.aspectRatio = e.perspective.aspectRatio),
          (t.perspective.zfar = e.perspective.zfar),
          (s = !0)),
        void 0 !== e.orthographic)
      ) {
        if (s) throw new Error("[GLTFCamera.readFromJson()] 已经有一个 perspective 相机了")
        ;(t.orthographic = new ve()),
          (t.orthographic.xmag = e.orthographic.xmag),
          (t.orthographic.ymag = e.orthographic.ymag),
          (t.orthographic.zfar = e.orthographic.zfar),
          (t.orthographic.znear = e.orthographic.znear)
      }
      return (t.extras = e.extras), t
    }
  }
  class Te extends r {
    constructor() {
      super()
    }
    validate() {
      return this.joints.length > 1
    }
    json() {
      if (!this.validate()) throw new Error("[GLTFSkin json()] 当前 skin 属性不合法，请检查")
      const e = {}
      return (
        t(e, "inverseBindMatrices", this.inverseBindMatrices),
        t(e, "skeleton", this.skeleton),
        t(e, "name", this.name),
        t(e, "joints", 0 !== this.joints.length ? this.joints : void 0),
        s(e, this.extensions),
        t(e, "extras", this.extras),
        e
      )
    }
    static fromJson(e) {
      const t = new Te()
      return (
        (t.joints = e.joints),
        (t.name = e.name),
        (t.inverseBindMatrices = e.inverseBindMatrices),
        (t.skeleton = e.skeleton),
        (t.extras = e.extras),
        t
      )
    }
  }
  class ye {
    constructor() {
      ;(this.asset = new h()),
        (this.scene = 0),
        (this.buffers = []),
        (this.bufferViews = []),
        (this.accessors = []),
        (this.scenes = []),
        (this.nodes = []),
        (this.meshes = [])
    }
    json() {
      const e = {
        asset: this.asset.json(),
        buffers: this.buffers.map((e) => e.json()),
        bufferViews: this.bufferViews.map((e) => e.json()),
        accessors: this.accessors.map((e) => e.json()),
        scenes: this.scenes.map((e) => e.json()),
        nodes: this.nodes.map((e) => e.json()),
        meshes: this.meshes.map((e) => e.json())
      }
      return (
        t(e, "scene", this.scene),
        t(
          e,
          "materials",
          void 0 !== this.materials && 0 !== this.materials.length
            ? this.materials.map((e) => e.json())
            : void 0
        ),
        t(
          e,
          "textures",
          void 0 !== this.textures && 0 !== this.textures.length
            ? this.textures.map((e) => e.json())
            : void 0
        ),
        t(
          e,
          "images",
          void 0 !== this.images && 0 !== this.images.length
            ? this.images.map((e) => e.json())
            : void 0
        ),
        t(
          e,
          "samplers",
          void 0 !== this.samplers && 0 !== this.samplers.length
            ? this.samplers.map((e) => e.json())
            : void 0
        ),
        t(
          e,
          "cameras",
          void 0 !== this.cameras && 0 !== this.cameras.length
            ? this.cameras.map((e) => e.json())
            : void 0
        ),
        t(
          e,
          "animations",
          void 0 !== this.animations && 0 !== this.animations.length
            ? this.animations.map((e) => e.json())
            : void 0
        ),
        t(
          e,
          "skins",
          void 0 !== this.skins && 0 !== this.skins.length
            ? this.skins.map((e) => e.json())
            : void 0
        ),
        s(e, this.extensions),
        t(e, "extras", this.extras),
        t(e, "extensionsUsed", this.extensionsUsed),
        t(e, "extensionsRequired", this.extensionsRequired),
        e
      )
    }
  }
  class xe {
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
  const we = (e, ...t) => {
    const s = new ye()
    let r = t.length
    console.log(`Resources Length is ${r}`)
    let i = e
    return (
      "string" == typeof e && (i = JSON.parse(e.trim())),
      (i = i),
      (s.scene = i.scene),
      (s.asset = h.readFromJson(i.asset)),
      (function (e, t) {
        for (const s of t) {
          const t = V.fromJson(s)
          e.push(t)
        }
      })(s.buffers, i.buffers),
      (function (e, t) {
        for (const s of t) {
          const t = k.fromJson(s)
          e.push(t)
        }
      })(s.bufferViews, i.bufferViews),
      (function (e, t) {
        for (const s of t) {
          const t = G.fromJson(s)
          e.push(t)
        }
      })(s.accessors, i.accessors),
      (function (e, t) {
        for (const s of t) {
          const t = H.fromJson(s)
          e.push(t)
        }
      })(s.scenes, i.scenes),
      (function (e, t) {
        for (const s of t) {
          const t = W.fromJson(s)
          e.push(t)
        }
      })(s.nodes, i.nodes),
      (function (e, t) {
        for (const s of t) {
          const t = q.fromJson(s)
          e.push(t)
        }
      })(s.meshes, i.meshes),
      void 0 !== i.textures &&
        (function (e, t) {
          for (const s of t) {
            const t = ee.fromJson(s)
            e.push(t)
          }
        })(void 0 === s.textures ? new Array() : s.textures, i.textures),
      void 0 !== i.images &&
        (function (e, t) {
          for (const s of t) {
            const t = ne.fromJson(s)
            e.push(t)
          }
        })(void 0 === s.images ? new Array() : s.images, i.images),
      void 0 !== i.materials &&
        (function (e, t) {
          for (const s of t) {
            const t = K.fromJson(s)
            e.push(t)
          }
        })(void 0 === s.materials ? new Array() : s.materials, i.materials),
      void 0 !== i.samplers &&
        (function (e, t) {
          for (const s of t) {
            const t = ae.fromJson(s)
            e.push(t)
          }
        })(void 0 === s.samplers ? new Array() : s.samplers, i.samplers),
      void 0 !== i.animations &&
        (function (e, t) {
          for (const s of t) {
            const t = fe.fromJson(s)
            e.push(t)
          }
        })(void 0 === s.animations ? new Array() : s.animations, i.animations),
      void 0 !== i.skins &&
        (function (e, t) {
          for (const s of t) {
            const t = Te.fromJson(s)
            e.push(t)
          }
        })(void 0 === s.skins ? new Array() : s.skins, i.skins),
      void 0 !== i.cameras &&
        (function (e, t) {
          for (const s of t) {
            const t = ge.fromJson(s)
            e.push(t)
          }
        })(void 0 === s.cameras ? new Array() : s.cameras, i.cameras),
      (function (e) {
        ;(e.asset.doc = e),
          e.buffers.forEach((t) => (t.doc = e)),
          e.bufferViews.forEach((t) => (t.doc = e)),
          e.accessors.forEach((t) => (t.doc = e)),
          e.scenes.forEach((t) => (t.doc = e)),
          e.nodes.forEach((t) => (t.doc = e)),
          e.meshes.forEach((t) => (t.doc = e)),
          e.materials && e.materials.forEach((t) => (t.doc = e)),
          e.textures && e.textures.forEach((t) => (t.doc = e)),
          e.images && e.images.forEach((t) => (t.doc = e)),
          e.samplers && e.samplers.forEach((t) => (t.doc = e)),
          e.animations && e.animations.forEach((t) => (t.doc = e)),
          e.cameras && e.cameras.forEach((t) => (t.doc = e)),
          e.skins && e.skins.forEach((t) => (t.doc = e))
      })(s),
      s
    )
  }
  function Le(e, t = !0) {
    const s = e.length
    if (0 === s) throw new Error("数组不能为空")
    let r = e[0]
    for (let i = 1; i < s; i++) {
      const s = e[i]
      ;(t ? s > r : s < r) && (r = s)
    }
    return r
  }
  function Ee(e, t = 1, s = !0) {
    const r = e.length
    if (0 === r || r % t != 0)
      throw new Error(`数组为空或数组长度 length: ${r} 不能被 stride: ${t} 整除`)
    if (1 === t) return [Le(e, s)]
    const i = [],
      n = r / t
    for (let s = 0; s < t; s++) i.push(e[s])
    for (let r = 0; r < n; r++)
      for (let n = 0; n < t; n++) (s ? e[r + n] > i[n] : e[r + n] < i[n]) && (i[n] = e[r + n])
    return i
  }
  class Oe {
    constructor(e) {
      ;(this.name = e.name),
        (this.data = e.data),
        (this.elementType = e.elementType),
        (this.valueType = e.valueType)
    }
    getTypedArray() {
      switch (this.valueType) {
        case v.BYTE:
          return new Int8Array(this.data)
        case v.UNSIGNED_BYTE:
          return new Uint8Array(this.data)
        case v.SHORT:
          return new Int16Array(this.data)
        case v.UNSIGNED_SHORT:
          return new Uint16Array(this.data)
        case v.UNSIGNED_INT:
          return new Uint32Array(this.data)
        case v.FLOAT:
          return new Float32Array(this.data)
      }
    }
  }
  class _e {}
  class Fe {
    validate() {
      return !0
    }
  }
  class Ae extends Fe {
    constructor() {
      super()
    }
  }
  var Ne
  !(function (e) {
    ;(e.B3dm = "b3dm"), (e.I3dm = "i3dm"), (e.Pnts = "pnts"), (e.Vctr = "vctr")
  })(Ne || (Ne = {}))
  var Se,
    Be = Ne
  class Ie {
    validate() {
      return !1
    }
  }
  class je extends Ie {
    constructor() {
      super()
    }
    static createFromJSON(e, t) {
      const s = new je()
      return (
        (s._json = e),
        (s._binary = t),
        (s.featureTableType = Be.B3dm),
        (function (e) {
          const t = e._json
          ;(e.batchLength = t.BATCH_LENGTH),
            (e.rtcCenter = t.RTC_CENTER),
            void 0 !== t.extensions && (e.extensions = new Set()),
            (e.extras = t.extras)
        })(s),
        s
      )
    }
    validate() {
      return void 0 !== this.batchLength
    }
  }
  class Ce {
    constructor() {
      this.variables = new Map()
    }
    static createFromJSON(e, t) {
      const s = new Ce()
      return (
        (s._json = e),
        (s._binary = t),
        (function (e) {
          for (const t of Object.keys(e._json)) e.variables.set(t, e._json[t])
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
    getVariable(e) {
      if (this.variables.has(e)) {
        return this.variables.get(e)
      }
      throw new Error(`[BatchTable getVariable()] 没有这个值：${e}。`)
    }
  }
  class Ge extends Fe {
    constructor() {
      super()
    }
    validate() {
      return 0 === this.gltfFormat || 1 === this.gltfFormat
    }
  }
  class Re extends Ie {
    constructor() {
      super()
    }
    static createFromJSON(e, t) {
      const s = new Re()
      return (
        (s._json = e),
        (s._binary = t),
        (s.featureTableType = Be.I3dm),
        (function (e) {
          const t = e._json
          ;(e.position = t.POSITION),
            (e.positionQuantized = t.POSITION_QUANTIZED),
            (e.normalUp = t.NORMAL_UP),
            (e.normalRight = t.NORMAL_RIGHT),
            (e.normalUpOct32p = t.NORMAL_UP_OCT32P),
            (e.normalRightOct32p = t.NORMAL_RIGHT_OCT32P),
            (e.scale = t.SCALE),
            (e.scaleNonUniform = t.SCALE_NON_UNIFORM),
            (e.instancesLength = t.INSTANCES_LENGTH),
            (e.rtcCenter = t.RTC_CENTER),
            (e.quantizedVolumeOffset = t.QUANTIZED_VOLUME_OFFSET),
            (e.quantizedVolumeScale = t.QUANTIZED_VOLUME_SCALE),
            void 0 !== t.extensions && (e.extensions = new Set()),
            (e.extras = t.extras)
        })(s),
        s
      )
    }
    validate() {
      return !(
        (void 0 === (e = this).position && void 0 === e.positionQuantized) ||
        (void 0 !== e.position && void 0 !== e.positionQuantized) ||
        (void 0 !== e.positionQuantized &&
          (void 0 === e.quantizedVolumeOffset || void 0 === e.quantizedVolumeScale)) ||
        (void 0 === e.normalUp && void 0 !== e.normalRight) ||
        (void 0 === e.normalRight && void 0 !== e.normalUp) ||
        (void 0 === e.normalUpOct32p && void 0 !== e.normalRightOct32p) ||
        (void 0 === e.normalRightOct32p && void 0 !== e.normalUpOct32p)
      )
      var e
    }
  }
  class Je extends Fe {
    constructor() {
      super()
    }
  }
  class Ue extends Ie {
    constructor() {
      super()
    }
    static createFromJSON(e, t) {
      const s = new Ue()
      return (
        (s._json = e),
        (s._binary = t),
        (s.featureTableType = Be.Pnts),
        (function (e) {
          const t = e._json
          ;(e.position = t.POSITION),
            (e.positionQuantized = t.POSITION_QUANTIZED),
            (e.rgba = t.RGBA),
            (e.rgb = t.RGB),
            (e.rgb565 = t.RGB565),
            (e.normal = t.NORMAL),
            (e.normalOct16p = t.NORMAL_OCT16P),
            (e.batchId = t.BATCH_ID),
            (e.pointsLength = t.POINTS_LENGTH),
            (e.quantizedVolumeOffset = t.QUANTIZED_VOLUME_OFFSET),
            (e.quantizedVolumeScale = t.QUANTIZED_VOLUME_SCALE),
            (e.constantRgba = t.CONSTANT_RGBA),
            void 0 !== t.extensions && (e.extensions = new Set()),
            (e.extras = t.extras)
        })(s),
        s
      )
    }
    validate() {
      return !(
        (void 0 === (e = this).position && void 0 === e.positionQuantized) ||
        (void 0 !== e.batchId && void 0 === e.batchLength) ||
        (void 0 !== e.positionQuantized &&
          (void 0 === e.quantizedVolumeOffset || void 0 === e.quantizedVolumeScale))
      )
      var e
    }
  }
  class Me extends Ie {
    constructor() {
      super()
    }
    static createFromJSON(e, t) {
      const s = new Me()
      return (
        (s._json = e),
        (s._binary = t),
        (s.featureTableType = Be.Vctr),
        (function (e) {
          const t = e._json
          ;(e.region = t.REGION),
            (e.rtcCenter = t.RTC_CENTER),
            (e.polygonsLength = t.POLYGONS_LENGTH),
            (e.polylinesLength = t.POLYLINES_LENGTH),
            (e.pointsLength = t.POINTS_LENGTH),
            (e.polygonCounts = t.POLYGON_COUNTS),
            (e.polygonIndexCounts = t.POLYGON_INDEX_COUNTS),
            (e.polygonMinimumHeights = t.POLYGON_MINIMUM_HEIGHTS),
            (e.polygonMaximumHeights = t.POLYGON_MAXIMUM_HEIGHTS),
            (e.polylineCounts = t.POLYLINE_COUNTS),
            (e.polylineBatchIds = t.POLYLINE_BATCH_IDS),
            (e.pointBatchIds = t.POINT_BATCH_IDS),
            void 0 !== t.extensions && (e.extensions = new Set()),
            (e.extras = t.extras)
        })(s),
        s
      )
    }
    validate() {
      return (
        6 === (e = this).region.length &&
        3 === e.rtcCenter.length &&
        (void 0 === e.polygonsLength ||
          (void 0 !== e.polygonCounts && void 0 !== e.polygonIndexCounts)) &&
        (void 0 === e.polylinesLength || void 0 !== e.polylineCounts)
      )
      var e
    }
  }
  !(function (e) {
    ;(e.ADD = "add"), (e.REPLACE = "replace")
  })(Se || (Se = {}))
  var Pe = Se
  const Ve = "0.1.0"
  ;(e.Asset = class {
    validate() {
      return !0
    }
  }),
    (e.B3dm = class {
      constructor(e, t = !1) {
        ;(this.header = new Ae()),
          (function (e, t) {
            const s = new ie(t)
            var r, i
            if (
              ((r = e.header),
              (i = s).rewind(),
              (r.magic = i.readChars(4)),
              (r.version = i.readUint32()),
              (r.byteLength = i.readUint32()),
              (r.featureTableJSONByteLength = i.readUint32()),
              (r.featureTableBinaryByteLength = i.readUint32()),
              (r.batchTableJSONByteLength = i.readUint32()),
              (r.batchTableBinaryByteLength = i.readUint32()),
              e.byteLength % 8 != 0)
            )
              throw new Error("[B3dm 实例化错误] byteLength 未 8 字节对齐。")
            s.rewind(), s.skip(28)
            const n = JSON.parse(s.readChars(e.featureTableJSONByteLength)),
              a = s.readBytes(e.featureTableBinaryByteLength)
            if (((e.featureTable = je.createFromJSON(n, a)), 0 !== e.batchTableJSONByteLength)) {
              const t = JSON.parse(s.readChars(e.batchTableJSONByteLength)),
                r = s.readBytes(e.batchTableBinaryByteLength)
              e.batchTable = Ce.createFromJSON(t, r)
            }
          })(this, e),
          !0 === t && (this.buffer = e)
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
    }),
    (e.B3dmFeatureTable = je),
    (e.B3dmHeader = Ae),
    (e.BatchTable = Ce),
    (e.Cmpt = class {}),
    (e.ExtBatchtableHierarchy = class extends _e {
      constructor() {
        super(...arguments), (this.name = "3DTILES_batch_table_hierarchy")
      }
      load() {}
    }),
    (e.ExtContentGLTF = class extends _e {
      constructor() {
        super(...arguments), (this.name = "3DTILES_content_gltf")
      }
    }),
    (e.ExtDraco = class extends xe {
      constructor() {
        super(), (this._name = "KHR_draco_mesh_compression")
      }
      validate() {
        return Number.isInteger(this.bufferView) && this.bufferView > 0
      }
      json() {
        return { bufferView: this.bufferView, attributes: this.attributes.json() }
      }
    }),
    (e.ExtGeometryMetadata = class extends xe {
      constructor() {
        super(...arguments), (this._name = "FB_geometry_metadata")
      }
    }),
    (e.ExtImplicitTiling = class extends _e {
      constructor() {
        super(...arguments), (this.name = "3DTILES_implicit_tiling")
      }
    }),
    (e.ExtLayers = class extends _e {
      constructor() {
        super(...arguments), (this.name = "3DTILES_layers")
      }
    }),
    (e.ExtLod = class extends xe {
      constructor() {
        super(...arguments), (this._name = "MSFT_lod")
      }
    }),
    (e.ExtMaterialsThinTransparency = class extends xe {
      constructor() {
        super(...arguments), (this._name = "ADOBE_materials_thin_transparency")
      }
    }),
    (e.ExtMeshOptCompression = class extends xe {
      constructor() {
        super(...arguments), (this._name = "EXT_meshopt_compression")
      }
    }),
    (e.ExtMetadata = class extends _e {
      constructor() {
        super(...arguments), (this.name = "3DTILES_metadata")
      }
    }),
    (e.ExtMultipleContent = class extends _e {
      constructor() {
        super(...arguments), (this.name = "3DTILES_multiple_contents")
      }
    }),
    (e.ExtPbrSpecularGlossiness = class extends xe {
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
          if (this.diffuseFactor.every((e) => e > 0 && e < 1)) return !1
        }
        if (void 0 !== this.specularFactor) {
          if (3 !== this.specularFactor.length) return !1
          if (this.specularFactor.every((e) => e > 1 || e < 0)) return !1
        }
        return (
          void 0 === this.glossinessFactor ||
          !(this.glossinessFactor > 1 || this.glossinessFactor < 0)
        )
      }
      json() {
        if (!1 === this.validate())
          throw new Error("[ExtPbrSpecularGlossiness json()] 当前对象的属性值不合法，请检查")
        const e = {}
        return (
          this.diffuseFactor &&
            !this.diffuseFactor.every((e) => 1 === e) &&
            t(e, "diffuseFactor", this.diffuseFactor),
          this.specularFactor &&
            !this.specularFactor.every((e) => 1 === e) &&
            t(e, "diffuseFactor", this.specularFactor),
          1 !== this.glossinessFactor && t(e, "glossinessFactor", this.glossinessFactor),
          void 0 !== this.diffuseTexture && t(e, "diffuseTexture", this.diffuseTexture.json()),
          void 0 !== this.specularGlossinessTexture &&
            t(e, "specularGlossinessTexture", this.specularGlossinessTexture.json()),
          e
        )
      }
    }),
    (e.ExtPntsDraco = class extends _e {
      constructor() {
        super(...arguments), (this.name = "3DTILES_draco_point_compression")
      }
    }),
    (e.ExtPrimitiveOutline = class extends xe {
      constructor() {
        super(...arguments), (this._name = "CESIUM_primitive_outline")
      }
    }),
    (e.ExtTextureDDS = class extends xe {
      constructor() {
        super(...arguments), (this._name = "MSFT_texture_dds")
      }
    }),
    (e.ExtTextureWebp = class extends xe {
      constructor() {
        super(...arguments), (this._name = "EXT_texture_webp")
      }
    }),
    (e.FeatureTable = Ie),
    (e.GLTFAccessor = G),
    (e.GLTFAccessorSparse = C),
    (e.GLTFAccessorSparseIndices = I),
    (e.GLTFAccessorSparseValues = j),
    (e.GLTFAddAction = class {
      constructor(e, t, s) {
        ;(this.type = "add"),
          (this.vertexArrayData = e),
          (this.material = t),
          (this.textureImage = s)
      }
      submit(e) {
        try {
          const t = G.fromJson({
            count: this.vertexArrayData.verticeCount,
            componentType: 5126,
            type: "vec3"
          })
          e.accessors.push(t)
          const s = this.vertexArrayData.asPrimitive(e),
            r = new q()
          r.primitives.push(s), (r.doc = e)
          const i = e.meshes.push(r),
            n = new W()
          ;(n.doc = e), (n.mesh = i)
          const a = e.nodes.push(n)
          if (
            (e.scenes[void 0 === e.scene ? 0 : e.scene].nodes.push(a), void 0 !== this.material)
          ) {
            void 0 === e.materials && (e.materials = [])
            let t = e.materials.length
            ;(s.material = t), e.materials.push(K.fromJson(this.material))
          }
          let o
          if (
            (void 0 !== this.textureImage && console.log("贴图功能正在开发..."),
            0 === e.buffers.length)
          ) {
            const t = e.buffers.push(new V())
            o = e.buffers[t].bufferData
          } else o = e.buffers[0].bufferData
          if (void 0 !== o) {
            const e = new ie(o)
            this.vertexArrayData.vertexBuffers.forEach((t) => {
              e.writeBytes(new Uint8Array(t.buffer))
            })
          } else {
            o = new ie().buffer
          }
        } catch (e) {
          console.log(e)
        }
        return !0
      }
    }),
    (e.GLTFAlphaMode = T),
    (e.GLTFAnimation = fe),
    (e.GLTFAnimationChannel = ce),
    (e.GLTFAnimationChannelTarget = he),
    (e.GLTFAnimationSampler = de),
    (e.GLTFAsset = h),
    (e.GLTFAttributeType = d),
    (e.GLTFBuffer = V),
    (e.GLTFBufferView = k),
    (e.GLTFCamera = ge),
    (e.GLTFComponentType = v),
    (e.GLTFDocument = ye),
    (e.GLTFDropAction = class {
      constructor() {
        this.type = "drop"
      }
      submit() {
        return !0
      }
    }),
    (e.GLTFExtensionBase = xe),
    (e.GLTFFilter = w),
    (e.GLTFImage = ne),
    (e.GLTFMaterial = K),
    (e.GLTFMesh = q),
    (e.GLTFNode = W),
    (e.GLTFNormalTextureInfo = X),
    (e.GLTFOcclusionTextureInfo = class extends $ {
      constructor(e, t, s) {
        super(e, t), (this.strength = s)
      }
      validate() {
        return this.strength > 1 || this.strength < 0
      }
      json() {
        if (!this.validate())
          throw new Error(
            "[GLTFOcclusionTextureInfo json()] 当前 occlusion texture info 属性不合法，请检查"
          )
        const e = super.json()
        return (
          t(e, "strength", this.strength), s(e, this.extensions), t(e, "extras", this.extras), e
        )
      }
    }),
    (e.GLTFOrthographicCamera = ve),
    (e.GLTFPbr = Z),
    (e.GLTFPerspectiveCamera = be),
    (e.GLTFPrimitive = Q),
    (e.GLTFPrimitiveAttribute = Y),
    (e.GLTFPrimitiveBuilder = class {
      constructor(e) {
        if (((this.vao = []), !Number.isInteger(e) || e <= 0))
          throw new Error(`[GLTFPrimitive ctor] vertexCount: ${e} 不正确`)
        this.count = e
      }
      setPosition(e) {
        if (e.length / 3 !== this.count) return !1
        const t = new Oe({
          name: "position",
          data: e.buffer,
          elementType: d.VEC3,
          valueType: v.FLOAT
        })
        return this.vao.push(t), !0
      }
      setUV0(e) {
        if (e.length / 2 !== this.count) return !1
        const t = new Oe({ name: "uv0", data: e.buffer, elementType: d.VEC2, valueType: v.FLOAT })
        return this.vao.push(t), !0
      }
      setNormal(e) {
        if (e.length / 3 !== this.count) return !1
        const t = new Oe({
          name: "normal",
          data: e.buffer,
          elementType: d.VEC3,
          valueType: v.FLOAT
        })
        return this.vao.push(t), !0
      }
      setIndices(e) {
        console.log(e)
      }
      setOther(e, t, s, r) {
        const i = new Oe({ name: e, data: t, elementType: s, valueType: r })
        this.vao.push(i)
      }
      set mesh(e) {
        this._mesh = e
      }
      set material(e) {
        this._material = e
      }
      submit(e) {
        let t,
          s,
          r = -1
        const i = Q.fromJson({ attributes: { POSITION: -1 }, mode: 4 })
        if (void 0 === this._mesh)
          (t = q.fromJson({ primitives: [] })),
            e.meshes.push(t),
            (s = W.fromJson({
              children: [],
              mesh: e.meshes.length - 1,
              matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
            })),
            (r = e.nodes.push(s) - 1)
        else {
          t = this._mesh
          let i = -1
          if (void 0 !== t.doc) {
            let e = t.doc.meshes.indexOf(t)
            i = -1 !== e ? e : t.doc.meshes.push(t) - 1
          } else i = e.meshes.push(t) - 1
          e.nodes.forEach((e, t) => {
            void 0 !== e.mesh && e.mesh === i && ((s = e), (r = t))
          }),
            void 0 === s &&
              ((s = W.fromJson({
                children: [],
                mesh: i,
                matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
              })),
              (r = e.nodes.push(s) - 1))
        }
        t.primitives.push(i)
        const n = H.fromJson({ nodes: [r] })
        if (
          (e.scenes.push(n),
          this.vao.forEach((t, s, r) => {
            const n = k.fromJson({
                buffer: 0,
                byteLength: t.data.byteLength,
                byteOffset: 0 === s ? 0 : r[s - 1].data.byteLength
              }),
              a = e.bufferViews.push(n) - 1,
              o = m(t.valueType),
              h = u(t.elementType),
              c = t.getTypedArray(),
              l = G.fromJson({
                componentType: t.valueType,
                count: t.data.byteLength / (o * h),
                type: t.elementType,
                bufferView: a,
                byteOffset: 0,
                max: Ee(c, h, !0),
                min: Ee(c, h, !1)
              }),
              d = e.accessors.push(l) - 1
            !(function (e, t, s) {
              const r = e.attributes
              switch (t) {
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
            })(i, t.name, d)
            let f = e.buffers[0]
            void 0 === f && ((f = V.fromJson({ byteLength: 0 })), e.buffers.push(f))
            let p = void 0 === f.bufferData ? new ArrayBuffer(0) : f.bufferData
            ;(f.bufferData = (function (e, t) {
              if ("Object" === globalThis.constructor.name)
                return Buffer.concat([new Uint8Array(e), new Uint8Array(t)]).buffer
              {
                const s = e.byteLength + t.byteLength,
                  r = new Uint8Array(s)
                return r.set(new Uint8Array(e), 0), r.set(new Uint8Array(t), e.byteLength), r.buffer
              }
            })(p, t.data)),
              (f.byteLength += t.data.byteLength)
          }),
          void 0 !== this._material)
        )
          if (void 0 !== e.materials) {
            const t = e.materials.indexOf(this._material)
            i.material = -1 !== t ? t : e.materials.push(this._material) - 1
          } else (e.materials = []), (i.material = e.materials.push(this._material) - 1)
      }
    }),
    (e.GLTFPrimitiveMode = A),
    (e.GLTFSampler = ae),
    (e.GLTFScene = H),
    (e.GLTFSkin = Te),
    (e.GLTFTexture = ee),
    (e.GLTFTextureInfo = $),
    (e.GLTFUpdateAction = class {
      constructor() {
        this.type = "update"
      }
      submit() {
        return !0
      }
    }),
    (e.GLTFVersion = o),
    (e.GLTFVertexAttributeType = S),
    (e.GLTFVertexAttributes = class {
      constructor() {
        ;(this.vertexBuffers = []), (this.primitiveMode = A.TRIANGLES)
      }
      validate() {
        return !1
      }
      get verticeCount() {
        return 0 === this.vertexBuffers.length ? 0 : this.vertexBuffers[0].count
      }
      asPrimitive(e, t) {
        const s = new Q()
        return (
          (s.material = t),
          (s.attributes = (function (e, t) {
            const s = new Y()
            return (
              t.forEach((t) => {
                switch (t.type.toString()) {
                  case "position":
                    s.position = ++e
                    break
                  case "normal":
                    s.normal = ++e
                    break
                  case "uv0":
                    s.uv0 = ++e
                    break
                  case "uv1":
                    s.uv1 = ++e
                    break
                  case "joints0":
                    s.joints0 = ++e
                    break
                  case "weights0":
                    s.weights0 = ++e
                    break
                  case "tangent":
                    s.tangent = ++e
                    break
                  case "color0":
                    s.color0 = ++e
                }
              }),
              s
            )
          })(e.accessors.length, this.vertexBuffers)),
          void 0 !== this.indices && (s.indices = ++e.accessors.length),
          (s.mode = this.primitiveMode),
          (s.doc = e),
          s
        )
      }
    }),
    (e.GLTFVertexBuffer = class {
      constructor() {
        ;(this.type = S.POSITION), (this.numberType = v.FLOAT), (this.elementType = d.VEC3)
      }
      get count() {
        const e = m(this.numberType),
          t = u(this.elementType)
        if ((this.buffer.byteLength % e) * t != 0)
          throw new Error("[GLTFVertexBuffer count] 数据与类型不匹配，请检查")
        return this.buffer.byteLength / (e * t)
      }
    }),
    (e.GLTFVertexBufferObject = Oe),
    (e.GLTFVertexIndices = class {}),
    (e.GLTFWrapMode = O),
    (e.I3dm = class {
      constructor(e, t = !1) {
        ;(this.header = new Ge()),
          (function (e, t) {
            const s = new ie(t)
            var r, i
            if (
              ((r = e.header),
              (i = s).rewind(),
              (r.magic = i.readChars(4)),
              (r.version = i.readUint32()),
              (r.byteLength = i.readUint32()),
              (r.featureTableJSONByteLength = i.readUint32()),
              (r.featureTableBinaryByteLength = i.readUint32()),
              (r.batchTableJSONByteLength = i.readUint32()),
              (r.batchTableBinaryByteLength = i.readUint32()),
              (r.gltfFormat = i.readUint32()),
              e.byteLength % 8 != 0)
            )
              throw new Error("[I3dm 实例化错误] byteLength 未 8 字节对齐。")
            s.rewind(), s.skip(32)
            const n = JSON.parse(s.readChars(e.featureTableJSONByteLength)),
              a = s.readBytes(e.featureTableBinaryByteLength)
            if (((e.featureTable = Re.createFromJSON(n, a)), 0 !== e.batchTableJSONByteLength)) {
              const t = JSON.parse(s.readChars(e.batchTableJSONByteLength)),
                r = s.readBytes(e.batchTableBinaryByteLength)
              e.batchTable = Ce.createFromJSON(t, r)
            }
          })(this, e),
          !0 === t && (this.buffer = e)
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
    }),
    (e.I3dmFeatureTable = Re),
    (e.I3dmHeader = Ge),
    (e.MIME = B),
    (e.Pnts = class {
      constructor(e, t = !1) {
        ;(this.header = new Je()),
          (function (e, t) {
            const s = new ie(t)
            var r, i
            if (
              ((r = e.header),
              (i = s).rewind(),
              (r.magic = i.readChars(4)),
              (r.version = i.readUint32()),
              (r.byteLength = i.readUint32()),
              (r.featureTableJSONByteLength = i.readUint32()),
              (r.featureTableBinaryByteLength = i.readUint32()),
              (r.batchTableJSONByteLength = i.readUint32()),
              (r.batchTableBinaryByteLength = i.readUint32()),
              e.byteLength % 8 != 0)
            )
              throw new Error("[Pnts 实例化错误] byteLength 未 8 字节对齐。")
            s.rewind(), s.skip(28)
            const n = JSON.parse(s.readChars(e.featureTableJSONByteLength)),
              a = s.readBytes(e.featureTableBinaryByteLength)
            if (((e.featureTable = Ue.createFromJSON(n, a)), 0 !== e.batchTableJSONByteLength)) {
              const t = JSON.parse(s.readChars(e.batchTableJSONByteLength)),
                r = s.readBytes(e.batchTableBinaryByteLength)
              e.batchTable = Ce.createFromJSON(t, r)
            }
          })(this, e),
          !0 === t && (this.buffer = e)
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
    }),
    (e.PntsFeatureTable = Ue),
    (e.PntsHeader = Je),
    (e.Property = class {}),
    (e.Tile = class {
      constructor() {
        ;(this.transform = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
          (this.extensions = new Set())
      }
      validate() {
        return !0
      }
      toJson() {
        if (!this.validate()) throw new Error("[Tile toJson()] 验证此对象失败！")
        const e = {}
        void 0 !== this.transform &&
          Object.defineProperty(e, "transform", { value: this.transform })
      }
    }),
    (e.TileBoundingVolume = class {
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
    }),
    (e.TileContent = class {
      constructor() {
        this.extensions = new Set()
      }
      get url() {
        return this.uri
      }
      validate() {
        return !0
      }
    }),
    (e.TileHeaderBase = Fe),
    (e.TileRefine = Pe),
    (e.Tileset = class {
      constructor(e) {
        ;(this.extensions = new Set()),
          (this.extensionsUsed = []),
          (this.extensionsRequired = []),
          (this.root = e.root),
          (this.geometricError = e.geometricError),
          (this.uri = e.uri)
      }
      get url() {
        return this.uri
      }
      set url(e) {
        this.uri = e
      }
    }),
    (e.TilesetExtBase = _e),
    (e.VERSION = Ve),
    (e.VctrFeatureTable = Me),
    (e.readGLB = (e) => {
      const t = new ie(e)
      if ("gltf" !== t.readChars(4)) throw new Error("[readGLB()] 不是 glb 二进制")
      if (2 !== t.readUint32()) throw new Error("[readGLB()] 暂不支持其他版本，仅支持 2.0 版本")
      if (t.readUint32() !== e.byteLength) throw new Error("[readGLB()] 数据长度异常")
      const s = t.readUint32(),
        r = t.readUint32()
      console.log(`数据块 1 的类型: ${r} (1=json, 0=bin)`)
      const i = t.readChars(s),
        n = JSON.parse(i),
        a = t.readUint32(),
        o = t.readUint32()
      let h
      console.log(`数据块 2 的类型: ${o} (1=json, 0=bin)`)
      try {
        return (h = t.readBytes(a)), we(n, h)
      } catch {
        throw new Error("[readGLB()] 数据长度异常，试检查 glb binary 块有无问题")
      }
    }),
    (e.readGLTF = we),
    Object.defineProperty(e, "__esModule", { value: !0 })
})
//# sourceMappingURL=ts-3dtiles.umd.js.map
