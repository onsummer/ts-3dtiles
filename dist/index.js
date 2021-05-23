"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

function writeDefinedProperty(obj, name, data) {
  if (data !== undefined)
    Object.defineProperty(obj, name, {
      value: data,
      enumerable: true,
      writable: true,
      configurable: true,
    });
}

function writeExtensionsProperty(obj, exts) {
  if (exts !== undefined) {
    const extObj = {};
    const _ = [...exts];
    _.forEach((ext) => {
      Object.defineProperty(extObj, ext.name, {
        value: ext.json(),
      });
    });
    Object.defineProperty(obj, "extensions", {
      value: extObj,
    });
  }
}

class GLTFPropertyBase {
  get doc() {
    return this._doc;
  }
  set doc(doc) {
    this._doc = doc;
  }
  validate() {
    return true;
  }
  json() {
    return {};
  }
}

var GLTFVersion;
(function (GLTFVersion) {
  GLTFVersion["TWO"] = "2.0";
  GLTFVersion["ONE"] = "1.0";
})(GLTFVersion || (GLTFVersion = {}));
const GLTFVersionValues = Object.freeze(Object.values(GLTFVersion));
var GLTFVersion$1 = GLTFVersion;

class GLTFAsset extends GLTFPropertyBase {
  constructor() {
    super();
    this.version = GLTFVersion$1.TWO;
  }
  validate() {
    return true;
  }
  json() {
    const asset = {
      version: this.version,
    };
    writeDefinedProperty(asset, "generator", this.generator);
    writeDefinedProperty(asset, "minVersion", this.minVersion);
    writeDefinedProperty(asset, "copyright", this.copyright);
    writeDefinedProperty(asset, "extensions", this.generator);
    writeDefinedProperty(asset, "extras", this.extras);
    return asset;
  }
  static readFromJson(json) {
    const asset = new GLTFAsset();
    if (GLTFVersionValues.includes(json.version)) {
      asset.version = json.version;
    } else {
      throw new Error(
        `[GLTFAsset.readFromJson()] 参数 version：${json.version} 不合法，请检查`
      );
    }
    if (json.minVersion !== undefined) {
      if (GLTFVersionValues.includes(json.minVersion))
        asset.minVersion = json.version;
      else
        throw new Error(
          `[GLTFAsset.readFromJson()] 参数 minVersion: ${json.minVersion} 不合法，请检查`
        );
    }
    asset.copyright = json.copyright;
    asset.generator = json.generator;
    asset.extras = json.extras;
    return asset;
  }
}

var GLTFAttributeType;
(function (GLTFAttributeType) {
  GLTFAttributeType["SCALAR"] = "SCALAR";
  GLTFAttributeType["VEC2"] = "VEC2";
  GLTFAttributeType["VEC3"] = "VEC3";
  GLTFAttributeType["VEC4"] = "VEC4";
  GLTFAttributeType["MAT2"] = "MAT2";
  GLTFAttributeType["MAT3"] = "MAT3";
  GLTFAttributeType["MAT4"] = "MAT4";
})(GLTFAttributeType || (GLTFAttributeType = {}));
const GLTFAttributeTypeValues = Object.freeze(Object.values(GLTFAttributeType));
const getAttributeTypeElementCount = (t) => {
  switch (t) {
    case GLTFAttributeType.VEC2:
      return 2;
    case GLTFAttributeType.VEC3:
      return 3;
    case GLTFAttributeType.VEC4:
    case GLTFAttributeType.MAT2:
      return 4;
    case GLTFAttributeType.MAT3:
      return 9;
    case GLTFAttributeType.MAT4:
      return 16;
    default:
      // means SCALAR
      return 1;
  }
};
var GLTFAttributeType$1 = GLTFAttributeType;

var GLTFComponentType;
(function (GLTFComponentType) {
  GLTFComponentType[(GLTFComponentType["BYTE"] = 5120)] = "BYTE";
  GLTFComponentType[(GLTFComponentType["UNSIGNED_BYTE"] = 5121)] =
    "UNSIGNED_BYTE";
  GLTFComponentType[(GLTFComponentType["SHORT"] = 5122)] = "SHORT";
  GLTFComponentType[(GLTFComponentType["UNSIGNED_SHORT"] = 5123)] =
    "UNSIGNED_SHORT";
  GLTFComponentType[(GLTFComponentType["UNSIGNED_INT"] = 5125)] =
    "UNSIGNED_INT";
  GLTFComponentType[(GLTFComponentType["FLOAT"] = 5126)] = "FLOAT";
})(GLTFComponentType || (GLTFComponentType = {}));
const GLTFComponentTypeValues = Object.freeze(Object.values(GLTFComponentType));
const getComponentTypeByteSize = (t) => {
  switch (t) {
    case GLTFComponentType.BYTE:
    case GLTFComponentType.UNSIGNED_BYTE:
      return 1;
    case GLTFComponentType.SHORT:
    case GLTFComponentType.UNSIGNED_SHORT:
      return 2;
    case GLTFComponentType.UNSIGNED_INT:
      return 4;
    default:
      // means FLOAT 32bit 5126 - glTF 里没有 8 位浮点数
      return 4;
  }
};
var GLTFComponentType$1 = GLTFComponentType;

/**
 * @enum {GLTFAlphaMode} 透明度模式
 */
var GLTFAlphaMode;
(function (GLTFAlphaMode) {
  /**
   * @description 不透明。默认选项。
   */
  GLTFAlphaMode["OPAQUE"] = "OPAQUE";
  /**
   * @description 透明度取决于 alphaCutOff 值，即半透明
   */
  GLTFAlphaMode["MASK"] = "MASK";
  /**
   * @description 混合模式
   */
  GLTFAlphaMode["BLEND"] = "BLEND";
})(GLTFAlphaMode || (GLTFAlphaMode = {}));
const GLTFAlphaModeValues = Object.freeze(Object.values(GLTFAlphaMode));
var GLTFAlphaMode$1 = GLTFAlphaMode;

var GLTFFilter;
(function (GLTFFilter) {
  GLTFFilter[(GLTFFilter["NEAREST"] = 9728)] = "NEAREST";
  GLTFFilter[(GLTFFilter["LINEAR"] = 9729)] = "LINEAR";
  GLTFFilter[(GLTFFilter["NEAREST_MIPMAP_NEAREST"] = 9984)] =
    "NEAREST_MIPMAP_NEAREST";
  GLTFFilter[(GLTFFilter["LINEAR_MIPMAP_NEAREST"] = 9985)] =
    "LINEAR_MIPMAP_NEAREST";
  GLTFFilter[(GLTFFilter["NEAREST_MIPMAP_LINEAR"] = 9986)] =
    "NEAREST_MIPMAP_LINEAR";
  GLTFFilter[(GLTFFilter["LINEAR_MIPMAP_LINEAR"] = 9987)] =
    "LINEAR_MIPMAP_LINEAR";
})(GLTFFilter || (GLTFFilter = {}));
const GLTFFilterValues = Object.freeze(Object.values(GLTFFilter));
var GLTFFilter$1 = GLTFFilter;

var GLTFWrapMode;
(function (GLTFWrapMode) {
  GLTFWrapMode[(GLTFWrapMode["REPEAT"] = 10497)] = "REPEAT";
  GLTFWrapMode[(GLTFWrapMode["CLAMP_TO_EDGE"] = 33071)] = "CLAMP_TO_EDGE";
  GLTFWrapMode[(GLTFWrapMode["MIRRORED_REPEAT"] = 33648)] = "MIRRORED_REPEAT";
})(GLTFWrapMode || (GLTFWrapMode = {}));
const GLTFWrapModeValues = Object.freeze(Object.values(GLTFWrapMode));
var GLTFWrapMode$1 = GLTFWrapMode;

var GLTFPrimitiveMode;
(function (GLTFPrimitiveMode) {
  GLTFPrimitiveMode[(GLTFPrimitiveMode["POINTS"] = 0)] = "POINTS";
  GLTFPrimitiveMode[(GLTFPrimitiveMode["LINES"] = 1)] = "LINES";
  GLTFPrimitiveMode[(GLTFPrimitiveMode["LINE_LOOP"] = 2)] = "LINE_LOOP";
  GLTFPrimitiveMode[(GLTFPrimitiveMode["LINE_STRIP"] = 3)] = "LINE_STRIP";
  GLTFPrimitiveMode[(GLTFPrimitiveMode["TRIANGLES"] = 4)] = "TRIANGLES";
  GLTFPrimitiveMode[(GLTFPrimitiveMode["TRIANGLE_STRIP"] = 5)] =
    "TRIANGLE_STRIP";
  GLTFPrimitiveMode[(GLTFPrimitiveMode["TRIANGLE_FAN"] = 6)] = "TRIANGLE_FAN";
})(GLTFPrimitiveMode || (GLTFPrimitiveMode = {}));
const GLTFPrimitiveModeValues = Object.freeze(Object.values(GLTFPrimitiveMode));
var GLTFPrimitiveMode$1 = GLTFPrimitiveMode;

var GLTFVertexAttributeType;
(function (GLTFVertexAttributeType) {
  GLTFVertexAttributeType["POSITION"] = "position";
  GLTFVertexAttributeType["UV0"] = "uv0";
  GLTFVertexAttributeType["UV1"] = "uv1";
  GLTFVertexAttributeType["COLOR0"] = "color0";
  GLTFVertexAttributeType["TANGENT"] = "tangent";
  GLTFVertexAttributeType["NORMAL"] = "normal";
  GLTFVertexAttributeType["JOINTS0"] = "joints0";
  GLTFVertexAttributeType["WEIGHTS0"] = "weights0";
  GLTFVertexAttributeType["BATCHID"] = "batchid";
})(GLTFVertexAttributeType || (GLTFVertexAttributeType = {}));
var GLTFVertexAttributeType$1 = GLTFVertexAttributeType;

var MIME;
(function (MIME) {
  MIME["JPG"] = "image/jpg";
  MIME["JPEG"] = "image/jpeg";
  MIME["PNG"] = "image/png";
  MIME["WEBP"] = "image/webp";
  MIME["DDS"] = "image/vnd-ms.dds";
})(MIME || (MIME = {}));
Object.freeze(Object.values(MIME));
var MIME$1 = MIME;

class GLTFAccessorSparseIndices extends GLTFPropertyBase {
  constructor() {
    super();
  }
  validate() {
    if (
      this.componentType !== GLTFComponentType$1.UNSIGNED_BYTE &&
      this.componentType !== GLTFComponentType$1.UNSIGNED_INT &&
      this.componentType !== GLTFComponentType$1.UNSIGNED_SHORT
    ) {
      return false;
    }
    return true;
  }
  json() {
    if (!this.validate()) {
      throw new Error(
        "[GLTFAccessorSparseIndices json()] 此 accessor.sparse.indices 的属性不合法，请检查"
      );
    }
    const i = {
      bufferView: this.bufferView,
      byteOffset: this.byteOffset,
      componentType: this.componentType,
    };
    writeExtensionsProperty(i, this.extensions);
    writeDefinedProperty(i, "extras", this.extras);
    return i;
  }
  static readFromJson(json) {
    const accSparseIndices = new GLTFAccessorSparseIndices();
    accSparseIndices.extras = json.extras;
    accSparseIndices.bufferView = json.bufferView;
    accSparseIndices.byteOffset = json.byteOffset;
    if (GLTFComponentTypeValues.includes(json.componentType)) {
      accSparseIndices.componentType = json.componentType;
    }
    return accSparseIndices;
  }
}

class GLTFAccessorSparseValues extends GLTFPropertyBase {
  constructor() {
    super();
  }
  validate() {
    if (this.byteOffset && this.byteOffset < 0) {
      return false;
    }
    return true;
  }
  json() {
    if (!this.validate()) {
      throw new Error(
        "[GLTFAccessorSparseValues json()] 此 accessor.sparse.values 的属性不合法，请检查"
      );
    }
    const v = {
      bufferView: this.bufferView,
    };
    writeDefinedProperty(v, "byteOffset", this.byteOffset);
    writeExtensionsProperty(v, this.extensions);
    writeDefinedProperty(v, "extras", this.extras);
    return v;
  }
  static readFromJson(json) {
    const vals = new GLTFAccessorSparseValues();
    vals.bufferView = json.bufferView;
    vals.byteOffset = json.byteOffset;
    vals.extras = json.extras;
    return vals;
  }
}

class GLTFAccessorSparse extends GLTFPropertyBase {
  constructor() {
    super();
  }
  validate() {
    return this.count > 0 && this.values.validate() && this.indices.validate();
  }
  json() {
    if (!this.validate()) {
      throw new Error(
        "[GLTFAccessorSparse json()] 此 sparse 对象属性不合法，请检查属性"
      );
    }
    const spr = {
      count: this.count,
      indices: this.indices.json(),
      values: this.values.json(),
    };
    return spr;
  }
  static readFromJson(json) {
    const sparse = new GLTFAccessorSparse();
    sparse.indices = GLTFAccessorSparseIndices.readFromJson(json.indices);
    sparse.values = GLTFAccessorSparseValues.readFromJson(json.values);
    sparse.extras = json.extras;
    return sparse;
  }
}

class GLTFAccessor extends GLTFPropertyBase {
  constructor() {
    super();
  }
  validate() {
    /** byteOffset 和 bufferView 必须同时存在 */
    const offsetExist = this.byteOffset === undefined ? 1 : 0;
    const viewExist = this.bufferView === undefined ? 1 : 0;
    if (offsetExist + viewExist === 1) {
      return false;
    }
    if (this.byteOffset && this.byteOffset < 0) {
      return false;
    }
    return true;
  }
  json() {
    if (!this.validate()) {
      throw new Error("[GLTFAccessor json()] 当前 accessor 属性不合法，请检查");
    }
    const acc = {
      componentType: this.componentType,
      type: this.type,
      count: this.count,
    };
    writeDefinedProperty(acc, "max", this.max);
    writeDefinedProperty(acc, "min", this.min);
    writeDefinedProperty(acc, "name", this.name);
    writeDefinedProperty(acc, "normalized", this.normalized);
    writeDefinedProperty(
      acc,
      "sparse",
      this.sparse !== undefined ? this.sparse.json() : undefined
    );
    writeDefinedProperty(acc, "bufferView", this.bufferView);
    writeDefinedProperty(acc, "byteOffset", this.byteOffset);
    writeExtensionsProperty(acc, this.extensions);
    writeDefinedProperty(acc, "extras", this.extras);
    return acc;
  }
  static fromJson(json) {
    const acc = new GLTFAccessor();
    if (GLTFComponentTypeValues.includes(json.componentType)) {
      acc.componentType = json.componentType;
    } else {
      throw new Error("[GLTFAccessor.readFromJson()] 属性 componentType 非法");
    }
    acc.count = json.count;
    if (GLTFAttributeTypeValues.includes(json.type)) {
      acc.type = json["type"];
    } else {
      throw new Error("[readGLTF() readAccessors()] 属性 type 非法");
    }
    acc.max = json.max;
    acc.min = json.min;
    if (json.sparse !== undefined) {
      acc.sparse = GLTFAccessorSparse.readFromJson(json.sparse);
    }
    acc.normalized = json.normalized;
    acc.bufferView = json.bufferView;
    acc.byteOffset = json.byteOffset;
    acc.name = json.name;
    acc.extras = json.extras;
    return acc;
  }
}

function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default")
    ? x["default"]
    : x;
}

function createCommonjsModule(fn, module) {
  return (module = { exports: {} }), fn(module, module.exports), module.exports;
}

var base64Arraybuffer = createCommonjsModule(function (module, exports) {
  /*
   * base64-arraybuffer
   * https://github.com/niklasvh/base64-arraybuffer
   *
   * Copyright (c) 2012 Niklas von Hertzen
   * Licensed under the MIT license.
   */
  (function () {
    var chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    // Use a lookup table to find the index.
    var lookup = new Uint8Array(256);
    for (var i = 0; i < chars.length; i++) {
      lookup[chars.charCodeAt(i)] = i;
    }

    exports.encode = function (arraybuffer) {
      var bytes = new Uint8Array(arraybuffer),
        i,
        len = bytes.length,
        base64 = "";

      for (i = 0; i < len; i += 3) {
        base64 += chars[bytes[i] >> 2];
        base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
        base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
        base64 += chars[bytes[i + 2] & 63];
      }

      if (len % 3 === 2) {
        base64 = base64.substring(0, base64.length - 1) + "=";
      } else if (len % 3 === 1) {
        base64 = base64.substring(0, base64.length - 2) + "==";
      }

      return base64;
    };

    exports.decode = function (base64) {
      var bufferLength = base64.length * 0.75,
        len = base64.length,
        i,
        p = 0,
        encoded1,
        encoded2,
        encoded3,
        encoded4;

      if (base64[base64.length - 1] === "=") {
        bufferLength--;
        if (base64[base64.length - 2] === "=") {
          bufferLength--;
        }
      }

      var arraybuffer = new ArrayBuffer(bufferLength),
        bytes = new Uint8Array(arraybuffer);

      for (i = 0; i < len; i += 4) {
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];

        bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
        bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
      }

      return arraybuffer;
    };
  })();
});
base64Arraybuffer.encode;
var base64Arraybuffer_2 = base64Arraybuffer.decode;

function isDataUrl(str) {
  return str.startsWith("data:");
}
class GLTFBuffer extends GLTFPropertyBase {
  constructor() {
    super();
    this.byteLength = 0;
  }
  /** @deprecated */
  get url() {
    return this.uri;
  }
  validate() {
    return this.byteLength > 0;
  }
  json() {
    const bf = {
      byteLength: this.byteLength,
    };
    writeDefinedProperty(bf, "uri", this.uri);
    writeExtensionsProperty(bf, this.extensions);
    writeDefinedProperty(bf, "extras", this.extras);
    return bf;
  }
  static fromJson(json) {
    const bf = new GLTFBuffer();
    bf.uri = json.uri;
    if (bf.uri && isDataUrl(bf.uri)) {
      bf.bufferData = base64Arraybuffer_2(
        bf.uri.substr(bf.uri.indexOf(",") + 1)
      );
    }
    bf.byteLength = json.byteLength;
    bf.extras = json.extras;
    // extensions 单独处理
    return bf;
  }
}

var GLTFBufferViewTarget;
(function (GLTFBufferViewTarget) {
  GLTFBufferViewTarget[(GLTFBufferViewTarget["ARRAY_BUFFER"] = 34962)] =
    "ARRAY_BUFFER";
  GLTFBufferViewTarget[(GLTFBufferViewTarget["ELEMENT_ARRAY_BUFFER"] = 34963)] =
    "ELEMENT_ARRAY_BUFFER";
})(GLTFBufferViewTarget || (GLTFBufferViewTarget = {}));
const GLTFBufferViewTargetValues = Object.freeze(
  Object.values(GLTFBufferViewTarget)
);
var GLTFBufferViewTarget$1 = GLTFBufferViewTarget;

class GLTFBufferView extends GLTFPropertyBase {
  constructor() {
    super();
    this.buffer = 0;
    this.byteLength = 1;
    this.byteOffset = 0;
    this.byteStride = 4;
  }
  validate() {
    if (this.buffer < 0) {
      return false;
    }
    if (this.byteLength < 1) {
      return false;
    }
    if (this.byteOffset && this.byteOffset < 0) {
      return false;
    }
    if (
      this.byteStride &&
      (this.byteStride % 4 !== 0 ||
        this.byteStride > 252 ||
        this.byteStride < 4)
    ) {
      return false;
    }
    return true;
  }
  json() {
    if (!this.validate()) {
      throw new Error(
        "[GLTFBufferView json()] 当前 bufferView 属性不合法，请检查"
      );
    }
    const bv = {
      buffer: this.buffer,
      byteLength: this.byteLength,
    };
    if (
      this.target === GLTFBufferViewTarget$1.ARRAY_BUFFER ||
      this.target === GLTFBufferViewTarget$1.ELEMENT_ARRAY_BUFFER
    ) {
      writeDefinedProperty(bv, "target", this.target);
    }
    writeDefinedProperty(bv, "byteOffset", this.byteOffset);
    if (this.byteStride !== 4) {
      writeDefinedProperty(bv, "byteStride", this.byteStride);
    }
    writeExtensionsProperty(bv, this.extensions);
    writeDefinedProperty(bv, "extras", this.extras);
    return bv;
  }
  static fromJson(json) {
    const bv = new GLTFBufferView();
    bv.buffer = json.buffer;
    bv.byteLength = json.byteLength;
    bv.byteOffset = json.byteOffset;
    bv.extras = json.extras;
    if (
      json.target !== undefined &&
      GLTFBufferViewTargetValues.includes(json.target)
    ) {
      bv.target = json.target;
    }
    return bv;
  }
}

class GLTFScene extends GLTFPropertyBase {
  constructor() {
    super();
    this.nodes = [];
  }
  validate() {
    return this.nodes.length > 1;
  }
  json() {
    const s = {
      nodes: this.nodes,
    };
    writeDefinedProperty(s, "name", this.name);
    writeExtensionsProperty(s, this.extensions);
    return s;
  }
  static fromJson(json) {
    const scene = new GLTFScene();
    scene.name = json.name;
    scene.nodes = json.nodes;
    scene.extras = json.extras;
    return scene;
  }
}

function validateTransforms(nd) {
  let flag = true;
  if (nd.matrix !== undefined) {
    if (
      nd.rotation !== undefined ||
      nd.scale !== undefined ||
      nd.translation !== undefined
    ) {
      flag = false;
    }
  } else if (
    nd.rotation === undefined &&
    nd.scale === undefined &&
    nd.translation === undefined
  ) {
    flag = false;
  }
  if (nd.rotation) {
    flag = nd.rotation.every((r) => r > 1 || r < -1);
  }
  return flag;
}
class GLTFNode extends GLTFPropertyBase {
  constructor() {
    super();
    this.children = [];
  }
  getMesh() {
    if (this.doc === undefined) {
      return null;
    }
    if (this.mesh === undefined) {
      return null;
    } else if (this.doc.meshes.length < this.mesh) {
      return null;
    }
    return this.doc.meshes[this.mesh];
  }
  validate() {
    if (!validateTransforms(this)) {
      return false;
    }
    if (this.weights && this.weights.length < 1) {
      return false;
    } else if (this.weights !== undefined && this.mesh === undefined) {
      return false;
    }
    if (this.skin !== undefined && this.mesh === undefined) {
      return false;
    }
    if (this.children && this.children.length > 1) {
      if (new Set(this.children).size !== this.children.length) return false;
    }
    return true;
  }
  json() {
    if (!this.validate()) {
      throw new Error("[GLTFNode json()] 当前 node 属性不合法，请检查属性");
    }
    const n = {};
    writeDefinedProperty(n, "mesh", this.mesh);
    writeDefinedProperty(n, "rotation", this.rotation);
    writeDefinedProperty(n, "translation", this.translation);
    writeDefinedProperty(n, "scale", this.scale);
    const m = this.matrix;
    if (m) {
      if (!(m[0] === 1 && m[5] === 1 && m[10] === 1 && m[15] === 1)) {
        writeDefinedProperty(n, "matrix", this.matrix);
      }
    }
    writeDefinedProperty(n, "weights", this.weights);
    writeDefinedProperty(n, "skin", this.skin);
    writeDefinedProperty(n, "camera", this.camera);
    writeDefinedProperty(n, "name", this.name);
    if (this.children && this.children.length !== 0) {
      writeDefinedProperty(n, "children", this.children);
    }
    writeExtensionsProperty(n, this.extensions);
    writeDefinedProperty(n, "extras", this.extras);
    return n;
  }
  static fromJson(json) {
    const node = new GLTFNode();
    node.name = json.name;
    node.mesh = json.mesh;
    node.matrix = json.matrix;
    node.rotation = json.rotation;
    node.scale = json.scale;
    node.skin = json.skin;
    node.children = json.children;
    node.weights = json.weights;
    node.translation = json.translation;
    node.camera = json.camera;
    node.extras = json.extras;
    return node;
  }
}

class GLTFPrimitiveAttribute {
  static fromJson(json) {
    const attr = new GLTFPrimitiveAttribute();
    attr.position = json.POSITION;
    attr.uv0 = json.TEXCOORD_0;
    attr.uv1 = json.TEXCOORD_1;
    attr.color0 = json.COLOR_0;
    attr.normal = json.NORMAL;
    attr.tangent = json.TANGENT;
    attr.joints0 = json.JOINTS_0;
    attr.weights0 = json.WEIGHTS_0;
    attr._batchid = json._BATCHID;
    return attr;
  }
  validate() {
    return Object.values(this).every((k) => k < 0);
  }
  json() {
    const attr = {
      POSITION: this.position,
    };
    writeDefinedProperty(attr, "NORMAL", this.normal);
    writeDefinedProperty(attr, "TANGENT", this.tangent);
    writeDefinedProperty(attr, "TEXCOORD_0", this.uv0);
    writeDefinedProperty(attr, "TEXCOORD_1", this.uv1);
    writeDefinedProperty(attr, "COLOR_0", this.color0);
    writeDefinedProperty(attr, "JOINTS_0", this.joints0);
    writeDefinedProperty(attr, "WEIGHTS_0", this.weights0);
    writeDefinedProperty(attr, "_BATCHID", this._batchid);
    return attr;
  }
}

class GLTFPrimitive extends GLTFPropertyBase {
  constructor() {
    super();
    this.attributes = new GLTFPrimitiveAttribute();
    this.mode = GLTFPrimitiveMode$1.TRIANGLES;
  }
  /**
   * 获取对应顶点属性的访问器
   * @param {string} attrName 顶点属性名，允许值是：
   * `'uv0'` | `'uv'`(等同uv0) | `'uv1'` | `'color0'` | `'color'` |
   * `'normal'` | `'tangent'` | `'joints0'` | `'joints'` | `'weights0'` |
   * `'weights'` | `'_batchid'` | `'batchid'`
   *
   * 大写小写均可，例如 `'UV0'` 和 `'uv'`、`'uv0'` 是一样的
   * @returns {GLTFAccessor | undefined}
   */
  getAccessor(attrName) {
    switch (attrName.toLowerCase()) {
      case "uv0":
      case "uv":
        if (this.attributes.uv0 !== undefined) {
          return this.doc?.accessors[this.attributes.uv0];
        }
        return undefined;
      case "uv1":
        if (this.attributes.uv1 !== undefined) {
          return this.doc?.accessors[this.attributes.uv1];
        }
        return undefined;
      case "color0":
      case "color":
        if (this.attributes.color0 !== undefined) {
          return this.doc?.accessors[this.attributes.color0];
        }
        return undefined;
      case "normal":
        if (this.attributes.normal !== undefined) {
          return this.doc?.accessors[this.attributes.normal];
        }
        return undefined;
      case "tangent":
        if (this.attributes.tangent !== undefined) {
          return this.doc?.accessors[this.attributes.tangent];
        }
        return undefined;
      case "joints0":
      case "joints":
        if (this.attributes.joints0 !== undefined) {
          return this.doc?.accessors[this.attributes.joints0];
        }
        return undefined;
      case "weights0":
      case "weights":
        if (this.attributes.weights0 !== undefined) {
          return this.doc?.accessors[this.attributes.weights0];
        }
        return undefined;
      case "_batchid":
      case "batchid":
        if (this.attributes._batchid !== undefined) {
          return this.doc?.accessors[this.attributes._batchid];
        }
        return undefined;
      default:
        return this.doc?.accessors[this.attributes.position];
    }
  }
  validate() {
    if (this.attributes.validate() === false) {
      return false;
    }
    if (this.indices < 0) {
      return false;
    }
    if (this.material < 0) {
      return false;
    }
    return true;
  }
  json() {
    const prmt = {
      attributes: this.attributes.json(),
    };
    if (
      this.mode !== GLTFPrimitiveMode$1.TRIANGLES &&
      this.mode !== undefined
    ) {
      writeDefinedProperty(prmt, "mode", this.mode);
    }
    writeDefinedProperty(prmt, "indices", this.indices);
    writeDefinedProperty(prmt, "material", this.material);
    writeExtensionsProperty(prmt, this.extensions);
    writeDefinedProperty(prmt, "extras", this.extras);
    return prmt;
  }
  static fromJson(json) {
    const prmt = new GLTFPrimitive();
    prmt.indices = json.indices;
    prmt.material = json.material;
    if (json.mode !== undefined && json.mode !== 4) {
      if (GLTFPrimitiveModeValues.includes(json.mode)) {
        prmt.mode = json.mode;
      } else {
        throw new Error(
          `[GLTFPrimitive.readFromJson()] mode：${json.mode} 不合法，请检查`
        );
      }
    }
    prmt.attributes = GLTFPrimitiveAttribute.fromJson(json.attributes);
    return prmt;
  }
}

class GLTFMesh extends GLTFPropertyBase {
  constructor() {
    super();
    this.primitives = [];
  }
  set doc(value) {
    this._doc = value;
    this.primitives.forEach((p) => (p.doc = value));
  }
  validate() {
    let flag = false;
    if (this.primitives.every((primitive) => primitive.validate())) {
      flag = true;
    }
    return flag;
  }
  json() {
    const mesh = {
      primitives: this.primitives.map((prmt) => prmt.json()),
    };
    writeDefinedProperty(mesh, "weights", this.weights);
    writeDefinedProperty(mesh, "name", this.name);
    writeExtensionsProperty(mesh, this.extensions);
    return mesh;
  }
  static fromJson(json) {
    const mesh = new GLTFMesh();
    mesh.name = json.name;
    mesh.primitives = json.primitives.map((priJson) =>
      GLTFPrimitive.fromJson(priJson)
    );
    mesh.weights = json.weights;
    mesh.extras = json.extras;
    return mesh;
  }
}

class GLTFTextureInfo extends GLTFPropertyBase {
  constructor(index, texCoord) {
    super();
    this.index = index;
    this.texCoord = texCoord;
  }
  validate() {
    return this.index < 0 || this.texCoord < 0;
  }
  json() {
    if (!this.validate()) {
      throw new Error(
        "[GLTFTextureInfo json()] 当前 textureinfo 对象属性不合法，请检查"
      );
    }
    const tinfo = {
      index: this.index,
      texCoord: this.texCoord,
    };
    return tinfo;
  }
  static fromJson(json) {
    const textureInfo = new GLTFTextureInfo(json.index, json.texCoord);
    textureInfo.extras = json.extras;
    return textureInfo;
  }
}

class GLTFNormalTextureInfo extends GLTFTextureInfo {
  constructor(index, texCoord, scale) {
    super(index, texCoord);
    this.scale = scale;
  }
  validate() {
    return true;
  }
  json() {
    if (!this.validate()) {
      throw new Error(
        "[GLTFNormalTextureInfo json()] 当前 normal textureinfo 属性不合法，请检查"
      );
    }
    const st = super.json();
    writeDefinedProperty(st, "scale", this.scale);
    writeExtensionsProperty(st, this.extensions);
    writeDefinedProperty(st, "extras", this.extras);
    return st;
  }
  static fromJson(json) {
    const normalTextureInfo = new GLTFNormalTextureInfo(
      json.index,
      json.texCoord,
      json.scale
    );
    normalTextureInfo.extras = json.extras;
    return normalTextureInfo;
  }
}

class GLTFPbr extends GLTFPropertyBase {
  constructor() {
    super();
    this.baseColorFactor = [1, 1, 1, 1];
  }
  validate() {
    if (
      this.baseColorFactor &&
      this.baseColorFactor.every((v) => v < 0 || v > 1)
    ) {
      return false;
    }
    if (this.roughnessFactor !== undefined) {
      if (this.roughnessFactor > 1 || this.roughnessFactor < 0) return false;
    }
    if (
      (this.metallicFactor !== undefined && this.metallicFactor > 1) ||
      (this.metallicFactor !== undefined && this.metallicFactor < 0)
    ) {
      return false;
    }
    if (
      this.baseColorTexture?.validate() === false ||
      this.metallicRoughnessTexture?.validate() === false
    ) {
      return false;
    }
    return true;
  }
  json() {
    if (this.validate() === false) {
      throw new Error("[GLTFPbr json()] 此 pbr 对象属性有误，请检查");
    }
    const pbr = {};
    if (
      this.baseColorFactor !== undefined &&
      this.baseColorFactor.every((v) => v !== 1.0)
    ) {
      writeDefinedProperty(pbr, "baseColorFactor", this.baseColorFactor);
    }
    writeDefinedProperty(
      pbr,
      "baseColorTexture",
      this.baseColorTexture !== undefined
        ? this.baseColorTexture.json()
        : undefined
    );
    writeDefinedProperty(
      pbr,
      "metallicFactor",
      this.metallicFactor && this.metallicFactor === 1
        ? undefined
        : this.metallicFactor
    );
    writeDefinedProperty(
      pbr,
      "roughnessFactor",
      this.roughnessFactor && this.roughnessFactor === 1
        ? undefined
        : this.roughnessFactor
    );
    writeDefinedProperty(
      pbr,
      "metallicRoughnessTexture",
      this.metallicRoughnessTexture !== undefined
        ? this.metallicRoughnessTexture.json()
        : undefined
    );
    writeExtensionsProperty(pbr, this.extensions);
    writeDefinedProperty(pbr, "extras", this.extras);
    return pbr;
  }
  static fromJson(json) {
    const pbr = new GLTFPbr();
    pbr.extras = json.extras;
    pbr.metallicFactor = json.metallicFactor;
    pbr.roughnessFactor = json.roughnessFactor;
    pbr.baseColorFactor = json.baseColorFactor;
    if (json.baseColorTexture !== undefined) {
      pbr.baseColorTexture = GLTFTextureInfo.fromJson(json.baseColorTexture);
    }
    if (json.metallicRoughnessTexture !== undefined) {
      pbr.metallicRoughnessTexture = GLTFTextureInfo.fromJson(
        json.metallicRoughnessTexture
      );
    }
    return pbr;
  }
}

class GLTFMaterial extends GLTFPropertyBase {
  constructor() {
    super();
    this.emissiveFactor = [0, 0, 0];
    this.alphaMode = GLTFAlphaMode$1.OPAQUE;
    this.alphaCutoff = 0.5;
    this.doubleSided = false;
  }
  set doc(value) {
    this._doc = value;
    if (this.pbrMetallicRoughness !== undefined) {
      this.pbrMetallicRoughness.doc = value;
    }
    if (this.normalTexture !== undefined) {
      this.normalTexture.doc = value;
    }
    if (this.emissiveTexture !== undefined) {
      this.emissiveTexture.doc = value;
    }
    if (this.occlusionTexture !== undefined) {
      this.occlusionTexture.doc = value;
    }
  }
  validate() {
    if (this.pbrMetallicRoughness?.validate() === false) {
      return false;
    }
    if (this.normalTexture?.validate() === false) {
      return false;
    }
    if (this.occlusionTexture?.validate() === false) {
      return false;
    }
    if (
      this.alphaMode === GLTFAlphaMode$1.MASK &&
      this.alphaCutoff === undefined
    ) {
      return false;
    }
    if (this.emissiveFactor?.every((v) => v < 0 || v > 1)) {
      return false;
    }
    return true;
  }
  json() {
    if (!this.validate()) {
      throw new Error(
        "[GLTFMaterial json()] 此 material 对象的属性不合法，请检查"
      );
    }
    const m = {};
    writeDefinedProperty(m, "name", this.name);
    writeDefinedProperty(
      m,
      "pbrMetallicRoughness",
      this.pbrMetallicRoughness !== undefined
        ? this.pbrMetallicRoughness.json()
        : undefined
    );
    writeDefinedProperty(
      m,
      "normalTexture",
      this.normalTexture !== undefined ? this.normalTexture.json() : undefined
    );
    writeDefinedProperty(
      m,
      "emissiveTexture",
      this.emissiveTexture !== undefined
        ? this.emissiveTexture.json()
        : undefined
    );
    writeDefinedProperty(m, "emissiveFactor", this.emissiveFactor);
    writeDefinedProperty(
      m,
      "alphaMode",
      this.alphaMode !== undefined && this.alphaMode !== GLTFAlphaMode$1.OPAQUE
        ? this.alphaMode
        : undefined
    );
    writeDefinedProperty(
      m,
      "alphaCutoff",
      this.alphaCutoff !== 0.5 && this.alphaCutoff !== undefined
        ? this.alphaCutoff
        : undefined
    );
    writeDefinedProperty(
      m,
      "alphaCutoff",
      this.doubleSided !== false && this.doubleSided !== undefined
        ? this.doubleSided
        : undefined
    );
    writeExtensionsProperty(m, this.extensions);
    writeDefinedProperty(m, "extras", this.extras);
    return m;
  }
  static fromJson(json) {
    const mtl = new GLTFMaterial();
    mtl.name = json.name;
    if (json.pbrMetallicRoughness !== undefined) {
      mtl.pbrMetallicRoughness = GLTFPbr.fromJson(json.pbrMetallicRoughness);
    }
    if (json.normalTexture !== undefined) {
      mtl.normalTexture = GLTFNormalTextureInfo.fromJson(json.normalTexture);
    }
    if (json.emissiveTexture !== undefined) {
      mtl.emissiveTexture = GLTFTextureInfo.fromJson(json.emissiveTexture);
    }
    if (
      json.alphaMode !== undefined &&
      GLTFAlphaModeValues.includes(json.alphaMode)
    ) {
      mtl.alphaMode = json.alphaMode;
    }
    mtl.doubleSided = json.doubleSided;
    mtl.emissiveFactor = json.emissiveFactor;
    mtl.alphaCutoff = json.alphaCutoff;
    mtl.extras = json.extras;
    return mtl;
  }
}

class GLTFTexture extends GLTFPropertyBase {
  constructor() {
    super();
  }
  validate() {
    if (
      this.sampler === undefined &&
      this.source === undefined &&
      this.name === undefined
    )
      return false;
    return true;
  }
  json() {
    const tx = {};
    writeDefinedProperty(tx, "name", this.name);
    writeDefinedProperty(tx, "source", this.source);
    writeDefinedProperty(tx, "sampler", this.sampler);
    writeExtensionsProperty(tx, this.extensions);
    writeDefinedProperty(tx, "extras", this.extras);
    return tx;
  }
  static fromJson(json) {
    const tx = new GLTFTexture();
    tx.name = json.name;
    tx.source = json.source;
    tx.sampler = json.sampler;
    tx.extras = json.extras;
    return tx;
  }
}

/*
 * Copyright 2017 Sam Thorogood. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
(function (scope) {
  // fail early
  if (scope["TextEncoder"] && scope["TextDecoder"]) {
    return false;
  }
  /**
   * @constructor
   * @param {string=} utfLabel
   */
  function FastTextEncoder(utfLabel = "utf-8") {
    if (utfLabel !== "utf-8") {
      throw new RangeError(
        `Failed to construct 'TextEncoder': The encoding label provided ('${utfLabel}') is invalid.`
      );
    }
  }
  Object.defineProperty(FastTextEncoder.prototype, "encoding", {
    value: "utf-8",
  });
  /**
   * @param {string} string
   * @param {{stream: boolean}=} options
   * @return {!Uint8Array}
   */
  FastTextEncoder.prototype.encode = function (
    string,
    options = { stream: false }
  ) {
    if (options.stream) {
      throw new Error(`Failed to encode: the 'stream' option is unsupported.`);
    }
    let pos = 0;
    const len = string.length;
    let at = 0; // output position
    let tlen = Math.max(32, len + (len >> 1) + 7); // 1.5x size
    let target = new Uint8Array((tlen >> 3) << 3); // ... but at 8 byte offset
    while (pos < len) {
      let value = string.charCodeAt(pos++);
      if (value >= 0xd800 && value <= 0xdbff) {
        // high surrogate
        if (pos < len) {
          const extra = string.charCodeAt(pos);
          if ((extra & 0xfc00) === 0xdc00) {
            ++pos;
            value = ((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000;
          }
        }
        if (value >= 0xd800 && value <= 0xdbff) {
          continue; // drop lone surrogate
        }
      }
      // expand the buffer if we couldn't write 4 bytes
      if (at + 4 > target.length) {
        tlen += 8; // minimum extra
        tlen *= 1.0 + (pos / string.length) * 2; // take 2x the remaining
        tlen = (tlen >> 3) << 3; // 8 byte offset
        const update = new Uint8Array(tlen);
        update.set(target);
        target = update;
      }
      if ((value & 0xffffff80) === 0) {
        // 1-byte
        target[at++] = value; // ASCII
        continue;
      } else if ((value & 0xfffff800) === 0) {
        // 2-byte
        target[at++] = ((value >> 6) & 0x1f) | 0xc0;
      } else if ((value & 0xffff0000) === 0) {
        // 3-byte
        target[at++] = ((value >> 12) & 0x0f) | 0xe0;
        target[at++] = ((value >> 6) & 0x3f) | 0x80;
      } else if ((value & 0xffe00000) === 0) {
        // 4-byte
        target[at++] = ((value >> 18) & 0x07) | 0xf0;
        target[at++] = ((value >> 12) & 0x3f) | 0x80;
        target[at++] = ((value >> 6) & 0x3f) | 0x80;
      } else {
        // FIXME: do we care
        continue;
      }
      target[at++] = (value & 0x3f) | 0x80;
    }
    return target.slice(0, at);
  };
  /**
   * @constructor
   * @param {string=} utfLabel
   * @param {{fatal: boolean}=} options
   */
  function FastTextDecoder(utfLabel = "utf-8", options = { fatal: false }) {
    if (utfLabel !== "utf-8") {
      throw new RangeError(
        `Failed to construct 'TextDecoder': The encoding label provided ('${utfLabel}') is invalid.`
      );
    }
    if (options.fatal) {
      throw new Error(
        `Failed to construct 'TextDecoder': the 'fatal' option is unsupported.`
      );
    }
  }
  Object.defineProperty(FastTextDecoder.prototype, "encoding", {
    value: "utf-8",
  });
  Object.defineProperty(FastTextDecoder.prototype, "fatal", { value: false });
  Object.defineProperty(FastTextDecoder.prototype, "ignoreBOM", {
    value: false,
  });
  /**
   * @param {(!ArrayBuffer|!ArrayBufferView)} buffer
   * @param {{stream: boolean}=} options
   */
  FastTextDecoder.prototype.decode = function (
    buffer,
    options = { stream: false }
  ) {
    if (options["stream"]) {
      throw new Error(`Failed to decode: the 'stream' option is unsupported.`);
    }
    const bytes = new Uint8Array(buffer);
    let pos = 0;
    const len = bytes.length;
    const out = [];
    while (pos < len) {
      const byte1 = bytes[pos++];
      if (byte1 === 0) {
        break; // NULL
      }
      if ((byte1 & 0x80) === 0) {
        // 1-byte
        out.push(byte1);
      } else if ((byte1 & 0xe0) === 0xc0) {
        // 2-byte
        const byte2 = bytes[pos++] & 0x3f;
        out.push(((byte1 & 0x1f) << 6) | byte2);
      } else if ((byte1 & 0xf0) === 0xe0) {
        const byte2 = bytes[pos++] & 0x3f;
        const byte3 = bytes[pos++] & 0x3f;
        out.push(((byte1 & 0x1f) << 12) | (byte2 << 6) | byte3);
      } else if ((byte1 & 0xf8) === 0xf0) {
        const byte2 = bytes[pos++] & 0x3f;
        const byte3 = bytes[pos++] & 0x3f;
        const byte4 = bytes[pos++] & 0x3f;
        // this can be > 0xffff, so possibly generate surrogates
        let codepoint =
          ((byte1 & 0x07) << 0x12) | (byte2 << 0x0c) | (byte3 << 0x06) | byte4;
        if (codepoint > 0xffff) {
          // codepoint &= ~0x10000;
          codepoint -= 0x10000;
          out.push(((codepoint >>> 10) & 0x3ff) | 0xd800);
          codepoint = 0xdc00 | (codepoint & 0x3ff);
        }
        out.push(codepoint);
      } else;
    }
    return String.fromCharCode.apply(null, out);
  };
  scope["TextEncoder"] = FastTextEncoder;
  scope["TextDecoder"] = FastTextDecoder;
})(
  typeof window !== "undefined"
    ? window
    : typeof self !== "undefined"
    ? self
    : undefined
);

var utf8_browser = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.encode = exports.decode = void 0;
  // eslint-disable-next-line import/no-unassigned-import

  const decoder = new TextDecoder("utf-8");
  function decode(bytes) {
    return decoder.decode(bytes);
  }
  exports.decode = decode;
  const encoder = new TextEncoder();
  function encode(str) {
    return encoder.encode(str);
  }
  exports.encode = encode;
  //# sourceMappingURL=utf8.browser.js.map
});

unwrapExports(utf8_browser);
utf8_browser.encode;
utf8_browser.decode;

var IOBuffer_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.IOBuffer = void 0;

  const defaultByteLength = 1024 * 8;
  class IOBuffer {
    /**
     * @param data - The data to construct the IOBuffer with.
     * If data is a number, it will be the new buffer's length<br>
     * If data is `undefined`, the buffer will be initialized with a default length of 8Kb<br>
     * If data is an ArrayBuffer, SharedArrayBuffer, an ArrayBufferView (Typed Array), an IOBuffer instance,
     * or a Node.js Buffer, a view will be created over the underlying ArrayBuffer.
     * @param options
     */
    constructor(data = defaultByteLength, options = {}) {
      let dataIsGiven = false;
      if (typeof data === "number") {
        data = new ArrayBuffer(data);
      } else {
        dataIsGiven = true;
        this.lastWrittenByte = data.byteLength;
      }
      const offset = options.offset ? options.offset >>> 0 : 0;
      const byteLength = data.byteLength - offset;
      let dvOffset = offset;
      if (ArrayBuffer.isView(data) || data instanceof IOBuffer) {
        if (data.byteLength !== data.buffer.byteLength) {
          dvOffset = data.byteOffset + offset;
        }
        data = data.buffer;
      }
      if (dataIsGiven) {
        this.lastWrittenByte = byteLength;
      } else {
        this.lastWrittenByte = 0;
      }
      this.buffer = data;
      this.length = byteLength;
      this.byteLength = byteLength;
      this.byteOffset = dvOffset;
      this.offset = 0;
      this.littleEndian = true;
      this._data = new DataView(this.buffer, dvOffset, byteLength);
      this._mark = 0;
      this._marks = [];
    }
    /**
     * Checks if the memory allocated to the buffer is sufficient to store more
     * bytes after the offset.
     * @param byteLength - The needed memory in bytes.
     * @returns `true` if there is sufficient space and `false` otherwise.
     */
    available(byteLength = 1) {
      return this.offset + byteLength <= this.length;
    }
    /**
     * Check if little-endian mode is used for reading and writing multi-byte
     * values.
     * @returns `true` if little-endian mode is used, `false` otherwise.
     */
    isLittleEndian() {
      return this.littleEndian;
    }
    /**
     * Set little-endian mode for reading and writing multi-byte values.
     */
    setLittleEndian() {
      this.littleEndian = true;
      return this;
    }
    /**
     * Check if big-endian mode is used for reading and writing multi-byte values.
     * @returns `true` if big-endian mode is used, `false` otherwise.
     */
    isBigEndian() {
      return !this.littleEndian;
    }
    /**
     * Switches to big-endian mode for reading and writing multi-byte values.
     */
    setBigEndian() {
      this.littleEndian = false;
      return this;
    }
    /**
     * Move the pointer n bytes forward.
     * @param n - Number of bytes to skip.
     */
    skip(n = 1) {
      this.offset += n;
      return this;
    }
    /**
     * Move the pointer to the given offset.
     * @param offset
     */
    seek(offset) {
      this.offset = offset;
      return this;
    }
    /**
     * Store the current pointer offset.
     * @see {@link IOBuffer#reset}
     */
    mark() {
      this._mark = this.offset;
      return this;
    }
    /**
     * Move the pointer back to the last pointer offset set by mark.
     * @see {@link IOBuffer#mark}
     */
    reset() {
      this.offset = this._mark;
      return this;
    }
    /**
     * Push the current pointer offset to the mark stack.
     * @see {@link IOBuffer#popMark}
     */
    pushMark() {
      this._marks.push(this.offset);
      return this;
    }
    /**
     * Pop the last pointer offset from the mark stack, and set the current
     * pointer offset to the popped value.
     * @see {@link IOBuffer#pushMark}
     */
    popMark() {
      const offset = this._marks.pop();
      if (offset === undefined) {
        throw new Error("Mark stack empty");
      }
      this.seek(offset);
      return this;
    }
    /**
     * Move the pointer offset back to 0.
     */
    rewind() {
      this.offset = 0;
      return this;
    }
    /**
     * Make sure the buffer has sufficient memory to write a given byteLength at
     * the current pointer offset.
     * If the buffer's memory is insufficient, this method will create a new
     * buffer (a copy) with a length that is twice (byteLength + current offset).
     * @param byteLength
     */
    ensureAvailable(byteLength = 1) {
      if (!this.available(byteLength)) {
        const lengthNeeded = this.offset + byteLength;
        const newLength = lengthNeeded * 2;
        const newArray = new Uint8Array(newLength);
        newArray.set(new Uint8Array(this.buffer));
        this.buffer = newArray.buffer;
        this.length = this.byteLength = newLength;
        this._data = new DataView(this.buffer);
      }
      return this;
    }
    /**
     * Read a byte and return false if the byte's value is 0, or true otherwise.
     * Moves pointer forward by one byte.
     */
    readBoolean() {
      return this.readUint8() !== 0;
    }
    /**
     * Read a signed 8-bit integer and move pointer forward by 1 byte.
     */
    readInt8() {
      return this._data.getInt8(this.offset++);
    }
    /**
     * Read an unsigned 8-bit integer and move pointer forward by 1 byte.
     */
    readUint8() {
      return this._data.getUint8(this.offset++);
    }
    /**
     * Alias for {@link IOBuffer#readUint8}.
     */
    readByte() {
      return this.readUint8();
    }
    /**
     * Read `n` bytes and move pointer forward by `n` bytes.
     */
    readBytes(n = 1) {
      const bytes = new Uint8Array(n);
      for (let i = 0; i < n; i++) {
        bytes[i] = this.readByte();
      }
      return bytes;
    }
    /**
     * Read a 16-bit signed integer and move pointer forward by 2 bytes.
     */
    readInt16() {
      const value = this._data.getInt16(this.offset, this.littleEndian);
      this.offset += 2;
      return value;
    }
    /**
     * Read a 16-bit unsigned integer and move pointer forward by 2 bytes.
     */
    readUint16() {
      const value = this._data.getUint16(this.offset, this.littleEndian);
      this.offset += 2;
      return value;
    }
    /**
     * Read a 32-bit signed integer and move pointer forward by 4 bytes.
     */
    readInt32() {
      const value = this._data.getInt32(this.offset, this.littleEndian);
      this.offset += 4;
      return value;
    }
    /**
     * Read a 32-bit unsigned integer and move pointer forward by 4 bytes.
     */
    readUint32() {
      const value = this._data.getUint32(this.offset, this.littleEndian);
      this.offset += 4;
      return value;
    }
    /**
     * Read a 32-bit floating number and move pointer forward by 4 bytes.
     */
    readFloat32() {
      const value = this._data.getFloat32(this.offset, this.littleEndian);
      this.offset += 4;
      return value;
    }
    /**
     * Read a 64-bit floating number and move pointer forward by 8 bytes.
     */
    readFloat64() {
      const value = this._data.getFloat64(this.offset, this.littleEndian);
      this.offset += 8;
      return value;
    }
    /**
     * Read a 1-byte ASCII character and move pointer forward by 1 byte.
     */
    readChar() {
      return String.fromCharCode(this.readInt8());
    }
    /**
     * Read `n` 1-byte ASCII characters and move pointer forward by `n` bytes.
     */
    readChars(n = 1) {
      let result = "";
      for (let i = 0; i < n; i++) {
        result += this.readChar();
      }
      return result;
    }
    /**
     * Read the next `n` bytes, return a UTF-8 decoded string and move pointer
     * forward by `n` bytes.
     */
    readUtf8(n = 1) {
      return utf8_browser.decode(this.readBytes(n));
    }
    /**
     * Write 0xff if the passed value is truthy, 0x00 otherwise and move pointer
     * forward by 1 byte.
     */
    writeBoolean(value) {
      this.writeUint8(value ? 0xff : 0x00);
      return this;
    }
    /**
     * Write `value` as an 8-bit signed integer and move pointer forward by 1 byte.
     */
    writeInt8(value) {
      this.ensureAvailable(1);
      this._data.setInt8(this.offset++, value);
      this._updateLastWrittenByte();
      return this;
    }
    /**
     * Write `value` as an 8-bit unsigned integer and move pointer forward by 1
     * byte.
     */
    writeUint8(value) {
      this.ensureAvailable(1);
      this._data.setUint8(this.offset++, value);
      this._updateLastWrittenByte();
      return this;
    }
    /**
     * An alias for {@link IOBuffer#writeUint8}.
     */
    writeByte(value) {
      return this.writeUint8(value);
    }
    /**
     * Write all elements of `bytes` as uint8 values and move pointer forward by
     * `bytes.length` bytes.
     */
    writeBytes(bytes) {
      this.ensureAvailable(bytes.length);
      for (let i = 0; i < bytes.length; i++) {
        this._data.setUint8(this.offset++, bytes[i]);
      }
      this._updateLastWrittenByte();
      return this;
    }
    /**
     * Write `value` as a 16-bit signed integer and move pointer forward by 2
     * bytes.
     */
    writeInt16(value) {
      this.ensureAvailable(2);
      this._data.setInt16(this.offset, value, this.littleEndian);
      this.offset += 2;
      this._updateLastWrittenByte();
      return this;
    }
    /**
     * Write `value` as a 16-bit unsigned integer and move pointer forward by 2
     * bytes.
     */
    writeUint16(value) {
      this.ensureAvailable(2);
      this._data.setUint16(this.offset, value, this.littleEndian);
      this.offset += 2;
      this._updateLastWrittenByte();
      return this;
    }
    /**
     * Write `value` as a 32-bit signed integer and move pointer forward by 4
     * bytes.
     */
    writeInt32(value) {
      this.ensureAvailable(4);
      this._data.setInt32(this.offset, value, this.littleEndian);
      this.offset += 4;
      this._updateLastWrittenByte();
      return this;
    }
    /**
     * Write `value` as a 32-bit unsigned integer and move pointer forward by 4
     * bytes.
     */
    writeUint32(value) {
      this.ensureAvailable(4);
      this._data.setUint32(this.offset, value, this.littleEndian);
      this.offset += 4;
      this._updateLastWrittenByte();
      return this;
    }
    /**
     * Write `value` as a 32-bit floating number and move pointer forward by 4
     * bytes.
     */
    writeFloat32(value) {
      this.ensureAvailable(4);
      this._data.setFloat32(this.offset, value, this.littleEndian);
      this.offset += 4;
      this._updateLastWrittenByte();
      return this;
    }
    /**
     * Write `value` as a 64-bit floating number and move pointer forward by 8
     * bytes.
     */
    writeFloat64(value) {
      this.ensureAvailable(8);
      this._data.setFloat64(this.offset, value, this.littleEndian);
      this.offset += 8;
      this._updateLastWrittenByte();
      return this;
    }
    /**
     * Write the charCode of `str`'s first character as an 8-bit unsigned integer
     * and move pointer forward by 1 byte.
     */
    writeChar(str) {
      return this.writeUint8(str.charCodeAt(0));
    }
    /**
     * Write the charCodes of all `str`'s characters as 8-bit unsigned integers
     * and move pointer forward by `str.length` bytes.
     */
    writeChars(str) {
      for (let i = 0; i < str.length; i++) {
        this.writeUint8(str.charCodeAt(i));
      }
      return this;
    }
    /**
     * UTF-8 encode and write `str` to the current pointer offset and move pointer
     * forward according to the encoded length.
     */
    writeUtf8(str) {
      return this.writeBytes(utf8_browser.encode(str));
    }
    /**
     * Export a Uint8Array view of the internal buffer.
     * The view starts at the byte offset and its length
     * is calculated to stop at the last written byte or the original length.
     */
    toArray() {
      return new Uint8Array(this.buffer, this.byteOffset, this.lastWrittenByte);
    }
    /**
     * Update the last written byte offset
     * @private
     */
    _updateLastWrittenByte() {
      if (this.offset > this.lastWrittenByte) {
        this.lastWrittenByte = this.offset;
      }
    }
  }
  exports.IOBuffer = IOBuffer;
  //# sourceMappingURL=IOBuffer.js.map
});

unwrapExports(IOBuffer_1);
var IOBuffer_2 = IOBuffer_1.IOBuffer;

class GLTFImage extends GLTFPropertyBase {
  constructor() {
    super();
  }
  get isEncodeWithUri() {
    return this.uri === undefined && this.bufferView !== undefined;
  }
  get getImageData() {
    if (this.validate() === false) {
      throw new Error(
        "[GLTFImage getImageData()] 当前 image 对象属性有问题，请检查"
      );
    }
    if (this.uri && this.isEncodeWithUri) {
      return base64Arraybuffer_2(this.uri);
    }
    if (this.doc === undefined) {
      throw new Error("");
    } else {
      if (this.doc.buffers.length === 0 || this.doc.bufferViews.length === 0) {
        throw new Error("");
      } else {
        const bv = this.doc.bufferViews[this.bufferView];
        const bf = this.doc.buffers[bv.buffer];
        // 有的时候 byteOffset 并不会指明，那么 bufferView 的 buffer 索引即它自己的索引
        const begin =
          bv.byteOffset === undefined
            ? this.doc.bufferViews.indexOf(bv)
            : bv.byteOffset;
        const length = bv.byteLength;
        const bufferdata = bf.bufferData;
        if (bufferdata !== undefined) {
          return new IOBuffer_2(bufferdata).skip(begin).readBytes(length)
            .buffer;
        }
      }
    }
  }
  validate() {
    if (this.uri !== undefined && this.bufferView !== undefined) {
      return false;
    }
    if (this.bufferView !== undefined) {
      if (this.mimeType === undefined) {
        return false;
      }
    }
    return true;
  }
  json() {
    const img = {};
    writeDefinedProperty(img, "name", this.name);
    writeDefinedProperty(img, "bufferView", this.bufferView);
    writeDefinedProperty(img, "uri", this.uri);
    writeDefinedProperty(img, "mimeType", this.mimeType);
    writeExtensionsProperty(img, this.extensions);
    writeDefinedProperty(img, "extras", this.extras);
    return img;
  }
  static fromJson(json) {
    const img = new GLTFImage();
    img.name = json.name;
    img.bufferView = json.bufferView;
    if (json.mimeType !== undefined) {
      if (json.mimeType in MIME$1) {
        img.mimeType = json.mimeType;
      } else {
        throw new Error("[GLTFImage.readFromJson()] 不支持的 mime 类型");
      }
    }
    img.extras = json.extras;
    return img;
  }
}

class GLTFSampler extends GLTFPropertyBase {
  constructor() {
    super();
  }
  validate() {
    // 注意默认值检查
    if (
      this.magFilter === undefined &&
      this.minFilter === undefined &&
      this.wrapS === undefined &&
      this.wrapT === undefined
    )
      return false;
    return true;
  }
  json() {
    if (!this.validate()) {
      throw new Error(
        "[GLTFSampler json()] 当前 sampler 对象的属性不合法，请检查"
      );
    }
    const spl = {};
    writeDefinedProperty(spl, "magFilter", this.magFilter);
    writeDefinedProperty(spl, "minFilter", this.minFilter);
    writeDefinedProperty(spl, "wrapS", this.wrapS);
    writeDefinedProperty(spl, "wrapT", this.wrapT);
    writeDefinedProperty(spl, "name", this.name);
    writeExtensionsProperty(spl, this.extensions);
    writeDefinedProperty(spl, "extras", this.extras);
    return spl;
  }
  static fromJson(json) {
    const spl = new GLTFSampler();
    spl.name = json.name;
    if (
      json.magFilter !== undefined &&
      GLTFFilterValues.includes(json.magFilter)
    ) {
      spl.magFilter = json.magFilter;
    }
    if (
      json.minFilter !== undefined &&
      GLTFFilterValues.includes(json.minFilter)
    ) {
      spl.minFilter = json.minFilter;
    }
    if (json.wrapS !== undefined && GLTFWrapModeValues.includes(json.wrapS)) {
      spl.wrapS = json.wrapS;
    }
    if (json.wrapT !== undefined && GLTFWrapModeValues.includes(json.wrapT)) {
      spl.wrapT = json.wrapT;
    }
    spl.extras = json.extras;
    return spl;
  }
}

var GLTFAnimationChannelTargetPath;
(function (GLTFAnimationChannelTargetPath) {
  GLTFAnimationChannelTargetPath["TRANSLATION"] = "translation";
  GLTFAnimationChannelTargetPath["ROTATION"] = "rotation";
  GLTFAnimationChannelTargetPath["SCALE"] = "scale";
  GLTFAnimationChannelTargetPath["WEIGHTS"] = "weights";
})(GLTFAnimationChannelTargetPath || (GLTFAnimationChannelTargetPath = {}));
const GLTFAnimationChannelTargetPathValues = Object.freeze(
  Object.values(GLTFAnimationChannelTargetPath)
);

class GLTFAnimationChannelTarget extends GLTFPropertyBase {
  constructor() {
    super();
  }
  validate() {
    return true;
  }
  json() {
    const act = {
      path: this.path,
    };
    writeDefinedProperty(act, "node", this.node);
    writeExtensionsProperty(act, this.extensions);
    writeDefinedProperty(act, "extras", this.extras);
    return act;
  }
  static readFromJson(json) {
    const channelTarget = new GLTFAnimationChannelTarget();
    channelTarget.extras = json.extras;
    channelTarget.node = json.node;
    if (
      json.path !== undefined &&
      GLTFAnimationChannelTargetPathValues.includes(json.path)
    ) {
      channelTarget.path = json.path;
    }
    return channelTarget;
  }
}

class GLTFAnimationChannel extends GLTFPropertyBase {
  constructor() {
    super();
  }
  validate() {
    return this.target.validate();
  }
  json() {
    if (!this.validate()) {
      throw new Error(
        "[GLTFAnimationChannel json()] 当前 animation channel 对象的属性不合法，请检查"
      );
    }
    const ac = {
      sampler: this.sampler,
      target: this.target.json(),
    };
    writeExtensionsProperty(ac, this.extensions);
    writeDefinedProperty(ac, "extras", this.extras);
    return ac;
  }
  static readFromJson(json) {
    const channel = new GLTFAnimationChannel();
    channel.sampler = json.sampler;
    channel.target = GLTFAnimationChannelTarget.readFromJson(json.target);
    channel.extras = json.extras;
    return channel;
  }
}

var GLTFAnimationInterpolation;
(function (GLTFAnimationInterpolation) {
  GLTFAnimationInterpolation["LINEAR"] = "LINEAR";
  GLTFAnimationInterpolation["STEP"] = "STEP";
  GLTFAnimationInterpolation["CUBICSPLINE"] = "CUBICSPLINE";
})(GLTFAnimationInterpolation || (GLTFAnimationInterpolation = {}));
const GLTFAnimationInterpolationValues = Object.freeze(
  Object.values(GLTFAnimationInterpolation)
);

class GLTFAnimationSampler extends GLTFPropertyBase {
  constructor() {
    super();
  }
  validate() {
    return true;
  }
  json() {
    const as = {
      input: this.input,
      output: this.output,
    };
    writeDefinedProperty(as, "interpolation", this.interpolation);
    return as;
  }
  static readFromJson(json) {
    const as = new GLTFAnimationSampler();
    as.input = json.input;
    as.output = json.output;
    if (
      json.interpolation !== undefined &&
      GLTFAnimationInterpolationValues.includes(json.interpolation)
    ) {
      as.interpolation = json.interpolation;
    }
    return as;
  }
}

class GLTFAnimation extends GLTFPropertyBase {
  constructor() {
    super();
    this.channels = [];
    this.samplers = [];
  }
  validate() {
    if (this.channels.length < 1 || this.samplers.length < 1) {
      return false;
    }
    return true;
  }
  json() {
    if (!this.validate()) {
      throw new Error(
        "[GLTFAnimation json()] 当前 animation 对象属性不合法，请检查"
      );
    }
    const ani = {};
    writeDefinedProperty(ani, "name", this.name);
    writeDefinedProperty(
      ani,
      "channels",
      this.channels.length !== 0
        ? this.channels.map((c) => c.json())
        : undefined
    );
    writeDefinedProperty(
      ani,
      "samplers",
      this.samplers.length !== 0
        ? this.samplers.map((s) => s.json())
        : undefined
    );
    writeExtensionsProperty(ani, this.extensions);
    writeDefinedProperty(ani, "extras", this.extras);
    return ani;
  }
  static fromJson(json) {
    const ani = new GLTFAnimation();
    ani.name = json.name;
    ani.channels = json.channels.map((channel) =>
      GLTFAnimationChannel.readFromJson(channel)
    );
    ani.samplers = json.samplers.map((spl) =>
      GLTFAnimationSampler.readFromJson(spl)
    );
    ani.extras = json.extras;
    return ani;
  }
}

var GLTFCameraType;
(function (GLTFCameraType) {
  GLTFCameraType["PERSPECTIVE"] = "perspective";
  GLTFCameraType["ORTHOGRAPHIC"] = "orthographic";
})(GLTFCameraType || (GLTFCameraType = {}));
const GLTFCameraTypeValues = Object.freeze(Object.values(GLTFCameraType));

class GLTFOrthographicCamera {
  validate() {
    return (
      this.znear >= 0 &&
      this.zfar >= 0 &&
      this.xmag !== 0 &&
      this.ymag !== 0 &&
      this.zfar > this.znear
    );
  }
  json() {
    if (!this.validate()) {
      throw new Error(
        "[GLTFOrthographicCamera json()] 当前 orthographic camera 对象属性不合法，请检查"
      );
    }
    const c = {
      xmag: this.xmag,
      ymag: this.ymag,
      zfar: this.zfar,
      znear: this.znear,
    };
    return c;
  }
}

class GLTFPerspectiveCamera {
  validate() {
    let flag = this.yfov >= 0 && this.znear >= 0;
    this.aspectRatio !== undefined
      ? (flag = flag && this.aspectRatio >= 0)
      : flag;
    this.zfar !== undefined ? (flag = flag && this.zfar >= 0) : flag;
    this.zfar !== undefined ? (flag = flag && this.zfar > this.znear) : flag;
    return flag;
  }
  json() {
    if (!this.validate()) {
      throw new Error(
        "[GLTFPerspectiveCamera json()] 当前对象属性有问题，请检查"
      );
    }
    const c = {
      yfov: this.yfov,
      znear: this.znear,
    };
    writeDefinedProperty(c, "aspectRatio", this.aspectRatio);
    writeDefinedProperty(c, "zfar", this.zfar);
    return c;
  }
}

class GLTFCamera extends GLTFPropertyBase {
  constructor() {
    super();
  }
  validate() {
    if (this.orthographic !== undefined && this.perspective !== undefined) {
      return false;
    }
    return true;
  }
  json() {
    if (!this.validate()) {
      throw new Error("[GLTFCamera json()] 当前 camera 对象属性不合法，请检查");
    }
    const camera = {
      type: this.type,
    };
    writeDefinedProperty(camera, "name", this.name);
    writeDefinedProperty(
      camera,
      "perspective",
      this.perspective ? this.perspective.json() : undefined
    );
    writeDefinedProperty(
      camera,
      "orthographic",
      this.orthographic ? this.orthographic.json() : undefined
    );
    writeExtensionsProperty(camera, this.extensions);
    writeDefinedProperty(camera, "extras", this.extras);
    return camera;
  }
  static fromJson(json) {
    const camera = new GLTFCamera();
    camera.name = json.name;
    if (GLTFCameraTypeValues.includes(json.type)) {
      camera.type = json.type;
    }
    let hasCamera = false;
    if (json.perspective !== undefined) {
      camera.perspective = new GLTFPerspectiveCamera();
      camera.perspective.yfov = json.perspective.yfov;
      camera.perspective.znear = json.perspective.znear;
      camera.perspective.aspectRatio = json.perspective.aspectRatio;
      camera.perspective.zfar = json.perspective.zfar;
      hasCamera = true;
    }
    if (json.orthographic !== undefined) {
      if (hasCamera) {
        throw new Error(
          "[GLTFCamera.readFromJson()] 已经有一个 perspective 相机了"
        );
      }
      camera.orthographic = new GLTFOrthographicCamera();
      camera.orthographic.xmag = json.orthographic.xmag;
      camera.orthographic.ymag = json.orthographic.ymag;
      camera.orthographic.zfar = json.orthographic.zfar;
      camera.orthographic.znear = json.orthographic.znear;
    }
    camera.extras = json.extras;
    return camera;
  }
}

class GLTFSkin extends GLTFPropertyBase {
  constructor() {
    super();
  }
  validate() {
    return this.joints.length > 1;
  }
  json() {
    if (!this.validate()) {
      throw new Error("[GLTFSkin json()] 当前 skin 属性不合法，请检查");
    }
    const sk = {};
    writeDefinedProperty(sk, "inverseBindMatrices", this.inverseBindMatrices);
    writeDefinedProperty(sk, "skeleton", this.skeleton);
    writeDefinedProperty(sk, "name", this.name);
    writeDefinedProperty(
      sk,
      "joints",
      this.joints.length !== 0 ? this.joints : undefined
    );
    writeExtensionsProperty(sk, this.extensions);
    writeDefinedProperty(sk, "extras", this.extras);
    return sk;
  }
  static fromJson(json) {
    const skin = new GLTFSkin();
    skin.joints = json.joints;
    skin.name = json.name;
    skin.inverseBindMatrices = json.inverseBindMatrices;
    skin.skeleton = json.skeleton;
    skin.extras = json.extras;
    return skin;
  }
}

class GLTFOcclusionTextureInfo extends GLTFTextureInfo {
  constructor(index, texCoord, strength) {
    super(index, texCoord);
    this.strength = strength;
  }
  validate() {
    return this.strength > 1 || this.strength < 0;
  }
  json() {
    if (!this.validate()) {
      throw new Error(
        "[GLTFOcclusionTextureInfo json()] 当前 occlusion texture info 属性不合法，请检查"
      );
    }
    const st = super.json();
    writeDefinedProperty(st, "strength", this.strength);
    writeExtensionsProperty(st, this.extensions);
    writeDefinedProperty(st, "extras", this.extras);
    return st;
  }
}

class GLTFDocument {
  constructor() {
    this.asset = new GLTFAsset();
    this.scene = 0;
    this.buffers = [];
    this.bufferViews = [];
    this.accessors = [];
    this.scenes = [];
    this.nodes = [];
    this.meshes = [];
  }
  json() {
    const gltfObj = {
      asset: this.asset.json(),
      buffers: this.buffers.map((buffer) => buffer.json()),
      bufferViews: this.bufferViews.map((bufferView) => bufferView.json()),
      accessors: this.accessors.map((acc) => acc.json()),
      scenes: this.scenes.map((scene) => scene.json()),
      nodes: this.nodes.map((node) => node.json()),
      meshes: this.meshes.map((mesh) => mesh.json()),
    };
    writeDefinedProperty(gltfObj, "scene", this.scene);
    writeDefinedProperty(
      gltfObj,
      "materials",
      this.materials !== undefined && this.materials.length !== 0
        ? this.materials.map((mt) => mt.json())
        : undefined
    );
    writeDefinedProperty(
      gltfObj,
      "textures",
      this.textures !== undefined && this.textures.length !== 0
        ? this.textures.map((tx) => tx.json())
        : undefined
    );
    writeDefinedProperty(
      gltfObj,
      "images",
      this.images !== undefined && this.images.length !== 0
        ? this.images.map((img) => img.json())
        : undefined
    );
    writeDefinedProperty(
      gltfObj,
      "samplers",
      this.samplers !== undefined && this.samplers.length !== 0
        ? this.samplers.map((spl) => spl.json())
        : undefined
    );
    writeDefinedProperty(
      gltfObj,
      "cameras",
      this.cameras !== undefined && this.cameras.length !== 0
        ? this.cameras.map((c) => c.json())
        : undefined
    );
    writeDefinedProperty(
      gltfObj,
      "animations",
      this.animations !== undefined && this.animations.length !== 0
        ? this.animations.map((ani) => ani.json())
        : undefined
    );
    writeDefinedProperty(
      gltfObj,
      "skins",
      this.skins !== undefined && this.skins.length !== 0
        ? this.skins.map((skin) => skin.json())
        : undefined
    );
    writeExtensionsProperty(gltfObj, this.extensions);
    writeDefinedProperty(gltfObj, "extras", this.extras);
    writeDefinedProperty(gltfObj, "extensionsUsed", this.extensionsUsed);
    writeDefinedProperty(
      gltfObj,
      "extensionsRequired",
      this.extensionsRequired
    );
    return gltfObj;
  }
}

class GLTFExtensionBase {
  constructor() {
    this._name = "";
  }
  get name() {
    return this._name;
  }
  validate() {
    return true;
  }
  json() {
    return;
  }
}

class ExtDraco extends GLTFExtensionBase {
  constructor() {
    super();
    this._name = "KHR_draco_mesh_compression";
  }
  validate() {
    return Number.isInteger(this.bufferView) && this.bufferView > 0;
  }
  json() {
    return {
      bufferView: this.bufferView,
      attributes: this.attributes.json(),
    };
  }
}

class ExtPbrSpecularGlossiness extends GLTFExtensionBase {
  constructor() {
    super(...arguments);
    this._name = "KHR_materials_pbrSpecularGlossiness";
  }
  validate() {
    if (this.diffuseTexture !== undefined) {
      return this.diffuseTexture.validate();
    }
    if (this.specularGlossinessTexture !== undefined) {
      this.specularGlossinessTexture.validate();
    }
    if (this.diffuseFactor !== undefined) {
      if (this.diffuseFactor.length !== 4) {
        return false;
      }
      if (this.diffuseFactor.every((v) => v > 0 && v < 1)) {
        return false;
      }
    }
    if (this.specularFactor !== undefined) {
      if (this.specularFactor.length !== 3) {
        return false;
      }
      if (this.specularFactor.every((v) => v > 1 || v < 0)) {
        return false;
      }
    }
    if (
      this.glossinessFactor !== undefined &&
      (this.glossinessFactor > 1 || this.glossinessFactor < 0)
    ) {
      return false;
    }
    return true;
  }
  json() {
    if (this.validate() === false) {
      throw new Error(
        "[ExtPbrSpecularGlossiness json()] 当前对象的属性值不合法，请检查"
      );
    }
    const ext = {};
    if (this.diffuseFactor && !this.diffuseFactor.every((v) => v === 1)) {
      writeDefinedProperty(ext, "diffuseFactor", this.diffuseFactor);
    }
    if (this.specularFactor && !this.specularFactor.every((v) => v === 1)) {
      writeDefinedProperty(ext, "diffuseFactor", this.specularFactor);
    }
    if (this.glossinessFactor !== 1.0)
      writeDefinedProperty(ext, "glossinessFactor", this.glossinessFactor);
    if (this.diffuseTexture !== undefined) {
      writeDefinedProperty(ext, "diffuseTexture", this.diffuseTexture.json());
    }
    if (this.specularGlossinessTexture !== undefined) {
      writeDefinedProperty(
        ext,
        "specularGlossinessTexture",
        this.specularGlossinessTexture.json()
      );
    }
    return ext;
  }
}

class ExtTextureWebp extends GLTFExtensionBase {
  constructor() {
    super(...arguments);
    this._name = "EXT_texture_webp";
  }
}

/**
 * @description
 * 此扩展允许 gltf texture 使用 dds 格式的贴图
 * ``` json
 * "textures": [
 *     {
 *         "source": 0,
 *         "extensions": {
 *             "MSFT_texture_dds": {
 *                 "source": 1
 *             }
 *         }
 *     }
 * ],
 * "images": [
 *     {
 *         "uri": "defaultTexture.png"
 *     },
 *     {
 *         "uri": "DDSTexture.dds"
 *     }
 * ]
 * ```
 *
 * 若 source 对象指向的是 bufferView，那么其 mime 需指明为 "image/vnd-ms.dds"
 * 也就是说，texture 允许超过 1 个贴图
 * 此扩展由微软提供
 */
class ExtTextureDDS extends GLTFExtensionBase {
  constructor() {
    super(...arguments);
    this._name = "MSFT_texture_dds";
  }
}

/**
 * @description
 * 此扩展由 Facebook 提供。它作用于 `GLTFScene` 对象。
 *
 */
class ExtGeometryMetadata extends GLTFExtensionBase {
  constructor() {
    super(...arguments);
    this._name = "FB_geometry_metadata";
  }
}

class ExtPrimitiveOutline extends GLTFExtensionBase {
  constructor() {
    super(...arguments);
    this._name = "CESIUM_primitive_outline";
  }
}

/**
 * @description 作用对象：GLTFBufferView 和 GLTFBuffer
 */
class ExtMeshOptCompression extends GLTFExtensionBase {
  constructor() {
    super(...arguments);
    this._name = "EXT_meshopt_compression";
  }
}

/**
 * @description
 * 此扩展由微软提出，作用于 `GLTFNode` 和 `GLTFMaterial`
 * 同时，要在 `GLTFNode` 的 `extras` 中附上 lod 权重数据
 * ``` json
 * "nodes": [
 *   {
 *     "name": "High_LOD",
 *     "mesh": 0,
 *     "extensions": {
 *       "MSFT_lod": {
 *         "ids": [ 1, 2 ]
 *       }
 *     },
 *     "extras": {
 *         "MSFT_screencoverage": [ 0.5, 0.2, 0.01 ]
 *     }
 *   },
 *   {
 *     "name": "Medium_LOD",
 *     "mesh": 1
 *   },
 *   {
 *     "name": "Low_LOD",
 *     "mesh": 2
 *   }
 * ]
 * ```
 */
class ExtLod extends GLTFExtensionBase {
  constructor() {
    super(...arguments);
    this._name = "MSFT_lod";
  }
}

/**
 * @description 此扩展由 adobe 提出，它解决的是 pbr 透明材质中没有表面反射的问题（玻璃完全透明，但是表面仍然是有反射的）
 */
class ExtMaterialsThinTransparency extends GLTFExtensionBase {
  constructor() {
    super(...arguments);
    this._name = "ADOBE_materials_thin_transparency";
  }
}

/**
 * GLTF 创建行为中的 `"添加动作"`，添加动作当前代表了一个完整的 GLTFPrimitive 的创建
 * 一个 `"添加动作"` 包含一个 vao，允许包括相对应的材质、贴图以及 gltf 扩展
 */
class GLTFAddAction {
  constructor(vao, material, textureImage) {
    this.type = "add";
    this.vertexArrayData = vao;
    this.material = material;
    this.textureImage = textureImage;
  }
  submit(doc) {
    try {
      // 第一步 创建 accessor，更新index  <-------------- 必须创建
      // TODO 针对每一个 VBO 创建自己的 accessor
      const acc = GLTFAccessor.fromJson({
        count: this.vertexArrayData.verticeCount,
        componentType: 5126,
        type: "vec3",
      });
      doc.accessors.push(acc);
      // 第二步，创建 bufferView <----------------------- 最好创建新的
      // 第三步 创建 primitive -> mesh -> node
      // -- primitive
      const prmt = this.vertexArrayData.asPrimitive(doc);
      // -- mesh
      const mesh = new GLTFMesh();
      mesh.primitives.push(prmt);
      mesh.doc = doc;
      const meshid = doc.meshes.push(mesh);
      // -- node
      const node = new GLTFNode();
      node.doc = doc;
      node.mesh = meshid;
      const nodeid = doc.nodes.push(node);
      // -- update scenes.nodes
      doc.scenes[doc.scene === undefined ? 0 : doc.scene].nodes.push(nodeid);
      // 可选步 创建材质、纹理、贴图以及其对象
      if (this.material !== undefined) {
        if (doc.materials === undefined) {
          doc.materials = [];
        }
        let materialStartIndex = doc.materials.length;
        prmt.material = materialStartIndex;
        // todo!!
        // material <--- 用 IGLTFMaterial 是有问题的，用户不知道索引之类的东西
        doc.materials.push(GLTFMaterial.fromJson(this.material));
      }
      // todo
      if (this.textureImage !== undefined) {
        // image，即 GLTFImage 的索引号，在这一步创建完成后，要更新材质中 纹理的source
        console.log("贴图功能正在开发...");
      }
      // 第三步 写入 buffer
      // 如何写入？创建新的？跟随某个buffer？
      // -- 写入分两步，先 vao，再 textureImage
      /* --- 获取buffer对象 --- */
      let bfData = undefined;
      if (doc.buffers.length === 0) {
        const bfIndex = doc.buffers.push(new GLTFBuffer());
        bfData = doc.buffers[bfIndex].bufferData;
      } else {
        bfData = doc.buffers[0].bufferData;
      }
      /* --- 写入vao --- */
      if (bfData !== undefined) {
        // 检查8byte对齐
        const io = new IOBuffer_2(bfData);
        this.vertexArrayData.vertexBuffers.forEach((vbo) => {
          io.writeBytes(new Uint8Array(vbo.buffer));
          // 检查8byte对齐
        });
      } else {
        const io = new IOBuffer_2();
        bfData = io.buffer;
      }
    } catch (error) {
      console.log(error);
    }
    return true;
  }
}

class GLTFDropAction {
  constructor() {
    this.type = "drop";
  }
  submit() {
    return true;
  }
}

class GLTFUpdateAction {
  constructor() {
    this.type = "update";
  }
  submit() {
    return true;
  }
}

function createAttribute(accessorStartIndex, vertexBuffers) {
  const attrs = new GLTFPrimitiveAttribute();
  vertexBuffers.forEach((vb) => {
    switch (vb.type.toString()) {
      case "position":
        attrs.position = ++accessorStartIndex;
        break;
      case "normal":
        attrs.normal = ++accessorStartIndex;
        break;
      case "uv0":
        attrs.uv0 = ++accessorStartIndex;
        break;
      case "uv1":
        attrs.uv1 = ++accessorStartIndex;
        break;
      case "joints0":
        attrs.joints0 = ++accessorStartIndex;
        break;
      case "weights0":
        attrs.weights0 = ++accessorStartIndex;
        break;
      case "tangent":
        attrs.tangent = ++accessorStartIndex;
        break;
      case "color0":
        attrs.color0 = ++accessorStartIndex;
        break;
    }
  });
  return attrs;
}
/**
 * GLTFVertexAttributes 相对于 GLTFPrimitive 的数据本体，只不过它保存的是顶点属性的真实数据
 */
class GLTFVertexAttributes {
  constructor() {
    /**
     * vertexBuffers，相当于 GLTFPrimitiveAttributes 中每一个 attribute 的数据本体
     */
    this.vertexBuffers = [];
    this.primitiveMode = GLTFPrimitiveMode$1.TRIANGLES;
  }
  /**
   * @todo 检测 indices 数量与 vertexBuffers 的数量关系是否正确
   */
  validate() {
    return false;
  }
  get verticeCount() {
    if (this.vertexBuffers.length === 0) {
      return 0;
    }
    return this.vertexBuffers[0].count;
  }
  asPrimitive(doc, materialIndex) {
    const prmt = new GLTFPrimitive();
    prmt.material = materialIndex;
    prmt.attributes = createAttribute(doc.accessors.length, this.vertexBuffers);
    if (this.indices !== undefined) {
      prmt.indices = ++doc.accessors.length;
    }
    prmt.mode = this.primitiveMode;
    prmt.doc = doc;
    return prmt;
  }
}

class GLTFVertexBuffer {
  constructor() {
    this.type = GLTFVertexAttributeType$1.POSITION;
    this.numberType = GLTFComponentType$1.FLOAT;
    this.elementType = GLTFAttributeType$1.VEC3;
  }
  /**
   * 计算顶点数量
   */
  get count() {
    const cmpSize = getComponentTypeByteSize(this.numberType);
    const numSize = getAttributeTypeElementCount(this.elementType);
    if ((this.buffer.byteLength % cmpSize) * numSize !== 0) {
      throw new Error("[GLTFVertexBuffer count] 数据与类型不匹配，请检查");
    }
    return this.buffer.byteLength / (cmpSize * numSize);
  }
}

class GLTFVertexIndices {}

function readBuffers(gltfBuffers, json) {
  for (const bfjson of json) {
    const bf = GLTFBuffer.fromJson(bfjson);
    gltfBuffers.push(bf);
  }
}
function readBufferViews(gltfBufferViews, json) {
  for (const bvjson of json) {
    const bv = GLTFBufferView.fromJson(bvjson);
    // extensions 单独处理
    gltfBufferViews.push(bv);
  }
}
function readAccessors(gltfAccessors, json) {
  for (const accjson of json) {
    const acc = GLTFAccessor.fromJson(accjson);
    // extensions 单独处理
    gltfAccessors.push(acc);
  }
}
function readScenes(gltfScenes, json) {
  for (const scenejson of json) {
    const scene = GLTFScene.fromJson(scenejson);
    gltfScenes.push(scene);
  }
}
function readNodes(gltfNodes, json) {
  for (const nodejson of json) {
    const node = GLTFNode.fromJson(nodejson);
    gltfNodes.push(node);
  }
}
function readMeshs(gltfMeshs, json) {
  for (const meshjson of json) {
    const mesh = GLTFMesh.fromJson(meshjson);
    gltfMeshs.push(mesh);
  }
}
function readTextures(gltfTextures, json) {
  for (const txjson of json) {
    const tx = GLTFTexture.fromJson(txjson);
    gltfTextures.push(tx);
  }
}
function readImages(gltfImages, json) {
  for (const imgjson of json) {
    const img = GLTFImage.fromJson(imgjson);
    gltfImages.push(img);
  }
}
function readMaterials(gltfMaterials, json) {
  for (const mtrljson of json) {
    const mtrl = GLTFMaterial.fromJson(mtrljson);
    gltfMaterials.push(mtrl);
  }
}
function readSamplers(gltfSamplers, json) {
  for (const spljson of json) {
    const spl = GLTFSampler.fromJson(spljson);
    gltfSamplers.push(spl);
  }
}
function readAnimations(gltfAnimations, json) {
  for (const anijson of json) {
    const ani = GLTFAnimation.fromJson(anijson);
    gltfAnimations.push(ani);
  }
}
function readSkins(gltfSkins, json) {
  for (const skinjson of json) {
    const skin = GLTFSkin.fromJson(skinjson);
    gltfSkins.push(skin);
  }
}
function readCameras(gltfCameras, json) {
  for (const camerajson of json) {
    const camera = GLTFCamera.fromJson(camerajson);
    gltfCameras.push(camera);
  }
}
function bind(doc) {
  doc.asset.doc = doc;
  doc.buffers.forEach((bf) => (bf.doc = doc));
  doc.bufferViews.forEach((bv) => (bv.doc = doc));
  doc.accessors.forEach((acc) => (acc.doc = doc));
  doc.scenes.forEach((scene) => (scene.doc = doc));
  doc.nodes.forEach((nd) => (nd.doc = doc));
  doc.meshes.forEach((mesh) => (mesh.doc = doc));
  if (doc.materials) doc.materials.forEach((mtl) => (mtl.doc = doc));
  if (doc.textures) doc.textures.forEach((tx) => (tx.doc = doc));
  if (doc.images) doc.images.forEach((img) => (img.doc = doc));
  if (doc.samplers) doc.samplers.forEach((spl) => (spl.doc = doc));
  if (doc.animations) doc.animations.forEach((ani) => (ani.doc = doc));
  if (doc.cameras) doc.cameras.forEach((camera) => (camera.doc = doc));
  if (doc.skins) doc.skins.forEach((skin) => (skin.doc = doc));
}
const readGLTF = (json, ...resources) => {
  const doc = new GLTFDocument();
  let resourcesLength = resources.length;
  console.log(`Resources Length is ${resourcesLength}`);
  let obj = json;
  if (typeof json === "string") {
    obj = JSON.parse(json.trim());
  }
  obj = obj;
  doc.scene = obj["scene"];
  doc.asset = GLTFAsset.readFromJson(obj["asset"]);
  readBuffers(doc.buffers, obj["buffers"]);
  readBufferViews(doc.bufferViews, obj["bufferViews"]);
  readAccessors(doc.accessors, obj["accessors"]);
  readScenes(doc.scenes, obj["scenes"]);
  readNodes(doc.nodes, obj["nodes"]);
  readMeshs(doc.meshes, obj["meshes"]);
  if (obj["textures"] !== undefined) {
    readTextures(
      doc.textures === undefined ? new Array() : doc.textures,
      obj["textures"]
    );
  }
  if (obj["images"] !== undefined) {
    readImages(
      doc.images === undefined ? new Array() : doc.images,
      obj["images"]
    );
  }
  if (obj["materials"] !== undefined) {
    readMaterials(
      doc.materials === undefined ? new Array() : doc.materials,
      obj["materials"]
    );
  }
  if (obj["samplers"] !== undefined) {
    readSamplers(
      doc.samplers === undefined ? new Array() : doc.samplers,
      obj["samplers"]
    );
  }
  if (obj["animations"] !== undefined) {
    readAnimations(
      doc.animations === undefined ? new Array() : doc.animations,
      obj["animations"]
    );
  }
  if (obj["skins"] !== undefined) {
    readSkins(doc.skins === undefined ? new Array() : doc.skins, obj["skins"]);
  }
  if (obj["cameras"] !== undefined) {
    readCameras(
      doc.cameras === undefined ? new Array() : doc.cameras,
      obj["cameras"]
    );
  }
  bind(doc);
  return doc;
};

const readGLB = (binary) => {
  /* read head */
  const io = new IOBuffer_2(binary);
  const magic = io.readChars(4);
  if (magic !== "gltf") {
    throw new Error("[readGLB()] 不是 glb 二进制");
  }
  const version = io.readUint32();
  if (version !== 2) {
    throw new Error("[readGLB()] 暂不支持其他版本，仅支持 2.0 版本");
  }
  const length = io.readUint32();
  if (length !== binary.byteLength) {
    throw new Error("[readGLB()] 数据长度异常");
  }
  /* read json */
  const jsonByteLength = io.readUint32();
  const jsonType = io.readUint32();
  console.log(`数据块 1 的类型: ${jsonType} (1=json, 0=bin)`);
  const jsonText = io.readChars(jsonByteLength);
  const json = JSON.parse(jsonText);
  /* read binarydata */
  const binByteLength = io.readUint32();
  const binType = io.readUint32();
  console.log(`数据块 2 的类型: ${binType} (1=json, 0=bin)`);
  let binarydata = undefined;
  try {
    binarydata = io.readBytes(binByteLength);
    /* read as gltfdocument */
    return readGLTF(json, binarydata);
  } catch {
    throw new Error("[readGLB()] 数据长度异常，试检查 glb binary 块有无问题");
  }
};

/**
 * 求最大最小值
 * @param {number[]} arr 数组
 * @param {boolean} [max] 若为 true 则求最大值。默认是 true。否则求最小值
 * @returns
 */
function arrayMinMax(arr, max = true) {
  const length = arr.length;
  if (length === 0) {
    throw new Error("数组不能为空");
  }
  let value = arr[0];
  for (let i = 1; i < length; i++) {
    const arri = arr[i];
    if (max ? arri > value : arri < value) {
      value = arri;
    }
  }
  return value;
}
function strideArrayMinMax(arr, dimension = 1, max = true) {
  const length = arr.length;
  if (length === 0 || length % dimension !== 0) {
    throw new Error(
      `数组为空或数组长度 length: ${length} 不能被 stride: ${dimension} 整除`
    );
  }
  if (dimension === 1) {
    return [arrayMinMax(arr, max)];
  }
  const values = [];
  const dimensionLength = length / dimension;
  // 先求 stride 个初值
  for (let i = 0; i < dimension; i++) {
    values.push(arr[i]);
  }
  // 然后对整个数组进行遍历取最值
  for (let j = 0; j < dimensionLength; j++) {
    for (let k = 0; k < dimension; k++) {
      if (max ? arr[j + k] > values[k] : arr[j + k] < values[k]) {
        values[k] = arr[j + k];
      }
    }
  }
  return values;
}

class GLTFVertexBufferObject {
  constructor(options) {
    this.name = options.name;
    this.data = options.data;
    this.elementType = options.elementType;
    this.valueType = options.valueType;
  }
  getTypedArray() {
    switch (this.valueType) {
      case GLTFComponentType$1.BYTE:
        return new Int8Array(this.data);
      case GLTFComponentType$1.UNSIGNED_BYTE:
        return new Uint8Array(this.data);
      case GLTFComponentType$1.SHORT:
        return new Int16Array(this.data);
      case GLTFComponentType$1.UNSIGNED_SHORT:
        return new Uint16Array(this.data);
      case GLTFComponentType$1.UNSIGNED_INT:
        return new Uint32Array(this.data);
      case GLTFComponentType$1.FLOAT:
        return new Float32Array(this.data);
    }
  }
}

function contact(b1, b2) {
  if (globalThis.constructor.name === "Object") {
    // nodejs
    const mergedBuffer = Buffer.concat([
      new Uint8Array(b1),
      new Uint8Array(b2),
    ]);
    return mergedBuffer.buffer;
  } else {
    const totalLength = b1.byteLength + b2.byteLength;
    const mergedBuffer = new Uint8Array(totalLength);
    mergedBuffer.set(new Uint8Array(b1), 0);
    mergedBuffer.set(new Uint8Array(b2), b1.byteLength);
    return mergedBuffer.buffer;
  }
}
function setAttribute(prmt, name, accessorIndex) {
  const attrs = prmt.attributes;
  switch (name) {
    case "position":
      attrs.position = accessorIndex;
      break;
    case "uv0":
      attrs.uv0 = accessorIndex;
      break;
    case "uv1":
      attrs.uv1 = accessorIndex;
      break;
    case "normal":
      attrs.normal = accessorIndex;
      break;
    case "_batchid":
      attrs._batchid = accessorIndex;
      break;
    case "tangent":
      attrs.tangent = accessorIndex;
      break;
    case "color0":
      attrs.color0 = accessorIndex;
      break;
    case "weights0":
      attrs.weights0 = accessorIndex;
      break;
    case "joints0":
      attrs.joints0 = accessorIndex;
      break;
  }
}
class GLTFPrimitiveBuilder {
  constructor(vertexCount) {
    this.vao = [];
    if (!Number.isInteger(vertexCount) || vertexCount <= 0) {
      throw new Error(
        `[GLTFPrimitive ctor] vertexCount: ${vertexCount} 不正确`
      );
    }
    this.count = vertexCount;
  }
  // 规定 position、uv0、normal 必须是 f32
  setPosition(data) {
    if (data.length / 3 !== this.count) {
      return false;
    }
    const positionVBO = new GLTFVertexBufferObject({
      name: "position",
      data: data.buffer,
      elementType: GLTFAttributeType$1.VEC3,
      valueType: GLTFComponentType$1.FLOAT,
    });
    this.vao.push(positionVBO);
    return true;
  }
  setUV0(data) {
    if (data.length / 2 !== this.count) {
      return false;
    }
    const uvVBO = new GLTFVertexBufferObject({
      name: "uv0",
      data: data.buffer,
      elementType: GLTFAttributeType$1.VEC2,
      valueType: GLTFComponentType$1.FLOAT,
    });
    this.vao.push(uvVBO);
    return true;
  }
  setNormal(data) {
    if (data.length / 3 !== this.count) {
      return false;
    }
    const normalVBO = new GLTFVertexBufferObject({
      name: "normal",
      data: data.buffer,
      elementType: GLTFAttributeType$1.VEC3,
      valueType: GLTFComponentType$1.FLOAT,
    });
    this.vao.push(normalVBO);
    return true;
  }
  setIndices(data) {
    console.log(data);
  }
  setOther(vertexAttributeName, data, dataType, dataValueType) {
    const vbo = new GLTFVertexBufferObject({
      name: vertexAttributeName,
      data: data,
      elementType: dataType,
      valueType: dataValueType,
    });
    this.vao.push(vbo);
  }
  set mesh(value) {
    this._mesh = value;
  }
  set material(value) {
    this._material = value;
  }
  submit(doc) {
    let meshDef;
    let nodeDef;
    let nodeIndex = -1;
    const prmt = GLTFPrimitive.fromJson({
      attributes: {
        POSITION: -1,
      },
      mode: 4,
    });
    // 若没定义 mesh
    if (this._mesh === undefined) {
      // 创建新的 mesh 和 node 并顺次推入 doc 中
      meshDef = GLTFMesh.fromJson({
        primitives: [],
      });
      doc.meshes.push(meshDef);
      nodeDef = GLTFNode.fromJson({
        children: [],
        mesh: doc.meshes.length - 1,
        matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      });
      nodeIndex = doc.nodes.push(nodeDef) - 1;
    } else {
      meshDef = this._mesh;
      // 步骤1 计算 mesh 的索引号
      let meshIdx = -1;
      if (meshDef.doc !== undefined) {
        let tempId = meshDef.doc.meshes.indexOf(meshDef);
        if (tempId !== -1) {
          meshIdx = tempId;
        } else {
          meshIdx = meshDef.doc.meshes.push(meshDef) - 1;
        }
      } else {
        meshIdx = doc.meshes.push(meshDef) - 1;
      }
      // 步骤2 遍历所有 node，查找对应的 node，若无，创建新的 node
      doc.nodes.forEach((node, index) => {
        if (node.mesh !== undefined && node.mesh === meshIdx) {
          nodeDef = node;
          nodeIndex = index;
        }
      });
      if (nodeDef === undefined) {
        nodeDef = GLTFNode.fromJson({
          children: [],
          mesh: meshIdx,
          matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        });
        nodeIndex = doc.nodes.push(nodeDef) - 1;
      }
    }
    meshDef.primitives.push(prmt);
    const scene = GLTFScene.fromJson({
      nodes: [nodeIndex],
    });
    doc.scenes.push(scene);
    // 创建 accessor 和 bufferView，同时推入 data 到 buffer[0]
    this.vao.forEach((vbo, index, originArr) => {
      const bufferView = GLTFBufferView.fromJson({
        buffer: 0,
        byteLength: vbo.data.byteLength,
        byteOffset: index === 0 ? 0 : originArr[index - 1].data.byteLength,
      });
      const bvIdx = doc.bufferViews.push(bufferView) - 1;
      const valueType = getComponentTypeByteSize(vbo.valueType);
      const elementType = getAttributeTypeElementCount(vbo.elementType);
      const dataTypedArray = vbo.getTypedArray();
      const accessor = GLTFAccessor.fromJson({
        componentType: vbo.valueType,
        count: vbo.data.byteLength / (valueType * elementType),
        type: vbo.elementType,
        bufferView: bvIdx,
        byteOffset: 0,
        max: strideArrayMinMax(dataTypedArray, elementType, true),
        min: strideArrayMinMax(dataTypedArray, elementType, false),
      });
      const accIdx = doc.accessors.push(accessor) - 1;
      setAttribute(prmt, vbo.name, accIdx);
      let bufferZero = doc.buffers[0];
      if (bufferZero === undefined) {
        bufferZero = GLTFBuffer.fromJson({
          byteLength: 0,
        });
        doc.buffers.push(bufferZero);
      }
      let bufferZeroData =
        bufferZero.bufferData === undefined
          ? new ArrayBuffer(0)
          : bufferZero.bufferData;
      bufferZero.bufferData = contact(bufferZeroData, vbo.data);
      bufferZero.byteLength += vbo.data.byteLength;
    });
    /* material 阶段 todo */
    if (this._material !== undefined) {
      // 获取 material 的索引
      if (doc.materials !== undefined) {
        const tempIdx = doc.materials.indexOf(this._material);
        if (tempIdx !== -1) {
          prmt.material = tempIdx;
        } else {
          prmt.material = doc.materials.push(this._material) - 1;
        }
      } else {
        doc.materials = [];
        prmt.material = doc.materials.push(this._material) - 1;
      }
      // 写入 image ?
    }
  }
}

class TilesetExtBase {}

class ExtBatchtableHierarchy extends TilesetExtBase {
  constructor() {
    super(...arguments);
    this.name = "3DTILES_batch_table_hierarchy";
  }
  load() {}
}

class ExtPntsDraco extends TilesetExtBase {
  constructor() {
    super(...arguments);
    this.name = "3DTILES_draco_point_compression";
  }
}

class ExtContentGLTF extends TilesetExtBase {
  constructor() {
    super(...arguments);
    this.name = "3DTILES_content_gltf";
  }
}

class ExtImplicitTiling extends TilesetExtBase {
  constructor() {
    super(...arguments);
    this.name = "3DTILES_implicit_tiling";
  }
}

class ExtLayers extends TilesetExtBase {
  constructor() {
    super(...arguments);
    this.name = "3DTILES_layers";
  }
}

class ExtMetadata extends TilesetExtBase {
  constructor() {
    super(...arguments);
    this.name = "3DTILES_metadata";
  }
}

class ExtMultipleContent extends TilesetExtBase {
  constructor() {
    super(...arguments);
    this.name = "3DTILES_multiple_contents";
  }
}

class Tile {
  constructor() {
    this.transform = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]; // wait to def as Mat4
    this.extensions = new Set();
  }
  validate() {
    return true;
  }
  /**
   * @todo
   */
  toJson() {
    if (!this.validate()) {
      throw new Error("[Tile toJson()] 验证此对象失败！");
    }
    const obj = {};
    if (this.transform !== undefined) {
      Object.defineProperty(obj, "transform", {
        value: this.transform,
      });
    }
  }
}

class Tileset {
  constructor(options) {
    this.extensions = new Set();
    this.extensionsUsed = [];
    this.extensionsRequired = [];
    this.root = options.root;
    this.geometricError = options.geometricError;
    this.uri = options.uri;
  }
  /**
   * @deprecated `Tileset.url` 已废弃，请使用 `Tileset.uri`
   */
  get url() {
    return this.uri;
  }
  set url(value) {
    this.uri = value;
  }
}

class TileBoundingVolume {
  validate() {
    const boxExist = this.box === undefined ? 1 : 0;
    const regionExist = this.region === undefined ? 1 : 0;
    const sphereExist = this.sphere === undefined ? 1 : 0;
    // === 3 意思是三个都不存在
    // === 2 意思是存在 1 个
    // === 1 意思是存在 2 个
    // === 0 意思是存在 3 个
    if (boxExist + regionExist + sphereExist !== 2) {
      return false;
    }
    if (this.box.length != 12) return false;
    if (this.region.length != 6) return false;
    if (this.sphere.length != 4) return false;
    return true;
  }
}

// import * as URI from 'uri-js'
class TileContent {
  constructor() {
    this.extensions = new Set();
  }
  /**
   * @deprecated `TileContent.url` 已废弃，请使用 `TileContent.uri`
   */
  get url() {
    return this.uri;
  }
  validate() {
    return true;
  }
}

class Property {}

class Asset {
  validate() {
    return true;
  }
}

class TileHeaderBase {
  validate() {
    return true;
  }
}

class B3dmHeader extends TileHeaderBase {
  constructor() {
    super();
  }
}

var FeatureTableType;
(function (FeatureTableType) {
  FeatureTableType["B3dm"] = "b3dm";
  FeatureTableType["I3dm"] = "i3dm";
  FeatureTableType["Pnts"] = "pnts";
  FeatureTableType["Vctr"] = "vctr";
})(FeatureTableType || (FeatureTableType = {}));
var FeatureTableType$1 = FeatureTableType;

class FeatureTable {
  validate() {
    return false; // base class always return false.
  }
}

function validateB3dmBatchTable(table) {
  return table.batchLength === undefined ? false : true;
}
function parse$7(table) {
  const json = table._json;
  table.batchLength = json["BATCH_LENGTH"];
  table.rtcCenter = json["RTC_CENTER"];
  if (json["extensions"] !== undefined) {
    table.extensions = new Set();
  }
  table.extras = json["extras"];
}
class B3dmFeatureTable extends FeatureTable {
  /**
   *
   */
  constructor() {
    super();
  }
  static createFromJSON(json, binary) {
    const ft = new B3dmFeatureTable();
    ft._json = json;
    ft._binary = binary;
    ft.featureTableType = FeatureTableType$1.B3dm;
    parse$7(ft);
    return ft;
  }
  validate() {
    return validateB3dmBatchTable(this);
  }
}

/*
  batchtable
    json: 它有可能是n个数组，每个数组的长度等于不同瓦片的 featureTableJSON.XXXLength，b3dm 是 BATCH_LENGTH，等等：
            {
              "name": ['name1', 'name2', 'name3'],
              "height": [10, 20, 5]
            }
          也有可能是对二进制 batchtable binary 的引用定义，拥有 byteOffset、componentType、type 三个属性的对象
            {
              "name": {
                byteOffset: 16, // 相对于 batchtable binary body 的偏移值
                type: "SCALAR",
                componentType: "INT"
              }
            }
          所以，batchtable 有一个弱点，不能用 binary 存储文本数据，因为第二种情况只允许存储 scalar、vec2、vec3、vec4 四种数值类型
          不过使用 byte + scalar 的方式或许可以存储字节信息。
    binary: 根据 json 中第二种定义而存储数据

  扩展：层级 batchtable：
    
 */
function parse$6(table) {
  for (const k of Object.keys(table._json)) {
    table.variables.set(k, table._json[k]);
  }
}
class BatchTable {
  constructor() {
    this.variables = new Map();
  }
  static createFromJSON(json, binary) {
    const bt = new BatchTable();
    bt._json = json;
    bt._binary = binary;
    parse$6(bt);
    return bt;
  }
  validate() {
    return true;
  }
  get variableNames() {
    return Object.keys(this._json);
  }
  get variableCounts() {
    return this.variableNames.length;
  }
  getVariable(name) {
    if (this.variables.has(name)) {
      const v = this.variables.get(name);
      return v;
    }
    throw new Error(`[BatchTable getVariable()] 没有这个值：${name}。`);
  }
}

function parseHeader$2(header, io) {
  io.rewind();
  header.magic = io.readChars(4);
  header.version = io.readUint32();
  header.byteLength = io.readUint32();
  header.featureTableJSONByteLength = io.readUint32();
  header.featureTableBinaryByteLength = io.readUint32();
  header.batchTableJSONByteLength = io.readUint32();
  header.batchTableBinaryByteLength = io.readUint32();
}
function parse$5(b3dm, buffer) {
  const iobuffer = new IOBuffer_2(buffer);
  parseHeader$2(b3dm.header, iobuffer);
  if (b3dm.byteLength % 8 != 0) {
    throw new Error("[B3dm 实例化错误] byteLength 未 8 字节对齐。");
  }
  iobuffer.rewind();
  iobuffer.skip(28);
  const ftJSON = JSON.parse(
    iobuffer.readChars(b3dm.featureTableJSONByteLength)
  );
  const ftBin = iobuffer.readBytes(b3dm.featureTableBinaryByteLength);
  b3dm.featureTable = B3dmFeatureTable.createFromJSON(ftJSON, ftBin);
  if (b3dm.batchTableJSONByteLength !== 0) {
    const btJSON = JSON.parse(
      iobuffer.readChars(b3dm.batchTableJSONByteLength)
    );
    const btBin = iobuffer.readBytes(b3dm.batchTableBinaryByteLength);
    b3dm.batchTable = BatchTable.createFromJSON(btJSON, btBin);
  }
  /* TODO: Parse GLB to GLTFDocument */
}
class B3dm {
  constructor(buffer, cacheBuffer = false) {
    this.header = new B3dmHeader();
    parse$5(this, buffer);
    if (cacheBuffer === true) {
      this.buffer = buffer;
    }
  }
  validate() {
    return true;
  }
  get magic() {
    return this.header.magic;
  }
  get byteLength() {
    return this.header.byteLength;
  }
  get version() {
    return this.header.version;
  }
  get featureTableJSONByteLength() {
    return this.header.featureTableJSONByteLength;
  }
  get featureTableBinaryByteLength() {
    return this.header.featureTableBinaryByteLength;
  }
  get batchTableJSONByteLength() {
    return this.header.batchTableJSONByteLength;
  }
  get batchTableBinaryByteLength() {
    return this.header.batchTableBinaryByteLength;
  }
  get sizeWithoutGLB() {
    return (
      28 +
      this.featureTableJSONByteLength +
      this.featureTableBinaryByteLength +
      this.batchTableJSONByteLength +
      this.batchTableBinaryByteLength
    );
  }
}

class I3dmHeader extends TileHeaderBase {
  constructor() {
    super();
  }
  validate() {
    if (this.gltfFormat !== 0 && this.gltfFormat !== 1) {
      return false;
    }
    return true;
  }
}

function validateI3dmBatchTable(table) {
  if (table.position === undefined && table.positionQuantized === undefined) {
    return false;
  }
  if (table.position !== undefined && table.positionQuantized !== undefined) {
    return false;
  }
  if (table.positionQuantized !== undefined) {
    if (
      table.quantizedVolumeOffset === undefined ||
      table.quantizedVolumeScale === undefined
    ) {
      return false;
    }
  }
  if (
    (table.normalUp === undefined && table.normalRight !== undefined) ||
    (table.normalRight === undefined && table.normalUp !== undefined)
  ) {
    return false;
  }
  if (
    (table.normalUpOct32p === undefined &&
      table.normalRightOct32p !== undefined) ||
    (table.normalRightOct32p === undefined &&
      table.normalUpOct32p !== undefined)
  ) {
    return false;
  }
  return true;
}
function parse$4(table) {
  const json = table._json;
  table.position = json["POSITION"];
  table.positionQuantized = json["POSITION_QUANTIZED"];
  table.normalUp = json["NORMAL_UP"];
  table.normalRight = json["NORMAL_RIGHT"];
  table.normalUpOct32p = json["NORMAL_UP_OCT32P"];
  table.normalRightOct32p = json["NORMAL_RIGHT_OCT32P"];
  table.scale = json["SCALE"];
  table.scaleNonUniform = json["SCALE_NON_UNIFORM"];
  table.instancesLength = json["INSTANCES_LENGTH"];
  table.rtcCenter = json["RTC_CENTER"];
  table.quantizedVolumeOffset = json["QUANTIZED_VOLUME_OFFSET"];
  table.quantizedVolumeScale = json["QUANTIZED_VOLUME_SCALE"];
  if (json["extensions"] !== undefined) {
    table.extensions = new Set();
    // todo
  }
  table.extras = json["extras"];
}
class I3dmFeatureTable extends FeatureTable {
  constructor() {
    super();
  }
  static createFromJSON(json, binary) {
    const ft = new I3dmFeatureTable();
    ft._json = json;
    ft._binary = binary;
    ft.featureTableType = FeatureTableType$1.I3dm;
    parse$4(ft);
    return ft;
  }
  validate() {
    return validateI3dmBatchTable(this);
  }
}

function parseHeader$1(header, io) {
  io.rewind();
  header.magic = io.readChars(4);
  header.version = io.readUint32();
  header.byteLength = io.readUint32();
  header.featureTableJSONByteLength = io.readUint32();
  header.featureTableBinaryByteLength = io.readUint32();
  header.batchTableJSONByteLength = io.readUint32();
  header.batchTableBinaryByteLength = io.readUint32();
  header.gltfFormat = io.readUint32();
}
function parse$3(i3dm, buffer) {
  const iobuffer = new IOBuffer_2(buffer);
  parseHeader$1(i3dm.header, iobuffer);
  if (i3dm.byteLength % 8 != 0) {
    throw new Error("[I3dm 实例化错误] byteLength 未 8 字节对齐。");
  }
  iobuffer.rewind();
  iobuffer.skip(32);
  const ftJSON = JSON.parse(
    iobuffer.readChars(i3dm.featureTableJSONByteLength)
  );
  const ftBin = iobuffer.readBytes(i3dm.featureTableBinaryByteLength);
  i3dm.featureTable = I3dmFeatureTable.createFromJSON(ftJSON, ftBin);
  if (i3dm.batchTableJSONByteLength !== 0) {
    const btJSON = JSON.parse(
      iobuffer.readChars(i3dm.batchTableJSONByteLength)
    );
    const btBin = iobuffer.readBytes(i3dm.batchTableBinaryByteLength);
    i3dm.batchTable = BatchTable.createFromJSON(btJSON, btBin);
  }
  /* TODO: Parse GLB to GLTFDocument */
}
class I3dm {
  /**
   *
   */
  constructor(buffer, cacheBuffer = false) {
    this.header = new I3dmHeader();
    parse$3(this, buffer);
    if (cacheBuffer === true) {
      this.buffer = buffer;
    }
  }
  validate() {
    return true;
  }
  get magic() {
    return this.header.magic;
  }
  get byteLength() {
    return this.header.byteLength;
  }
  get version() {
    return this.header.version;
  }
  get featureTableJSONByteLength() {
    return this.header.featureTableJSONByteLength;
  }
  get featureTableBinaryByteLength() {
    return this.header.featureTableBinaryByteLength;
  }
  get batchTableJSONByteLength() {
    return this.header.batchTableJSONByteLength;
  }
  get batchTableBinaryByteLength() {
    return this.header.batchTableBinaryByteLength;
  }
  get gltfFormat() {
    return this.header.gltfFormat;
  }
  get sizeWithoutExternalData() {
    return (
      32 +
      this.featureTableJSONByteLength +
      this.featureTableBinaryByteLength +
      this.batchTableJSONByteLength +
      this.batchTableBinaryByteLength
    );
  }
}

class PntsHeader extends TileHeaderBase {
  constructor() {
    super();
  }
}

function validatePntsFeatureTable(table) {
  if (table.position === undefined && table.positionQuantized === undefined) {
    return false;
  }
  if (table.batchId !== undefined && table.batchLength === undefined) {
    return false;
  }
  if (table.positionQuantized !== undefined) {
    if (
      table.quantizedVolumeOffset === undefined ||
      table.quantizedVolumeScale === undefined
    ) {
      return false;
    }
  }
  return true;
}
function parse$2(table) {
  const json = table._json;
  table.position = json["POSITION"];
  table.positionQuantized = json["POSITION_QUANTIZED"];
  table.rgba = json["RGBA"];
  table.rgb = json["RGB"];
  table.rgb565 = json["RGB565"];
  table.normal = json["NORMAL"];
  table.normalOct16p = json["NORMAL_OCT16P"];
  table.batchId = json["BATCH_ID"];
  table.pointsLength = json["POINTS_LENGTH"];
  table.quantizedVolumeOffset = json["QUANTIZED_VOLUME_OFFSET"];
  table.quantizedVolumeScale = json["QUANTIZED_VOLUME_SCALE"];
  table.constantRgba = json["CONSTANT_RGBA"];
  if (json["extensions"] !== undefined) {
    table.extensions = new Set();
    // todo
  }
  table.extras = json["extras"];
}
class PntsFeatureTable extends FeatureTable {
  constructor() {
    super();
  }
  static createFromJSON(json, binary) {
    const ft = new PntsFeatureTable();
    ft._json = json;
    ft._binary = binary;
    ft.featureTableType = FeatureTableType$1.Pnts;
    parse$2(ft);
    return ft;
  }
  validate() {
    return validatePntsFeatureTable(this);
  }
}

function parseHeader(header, io) {
  io.rewind();
  header.magic = io.readChars(4);
  header.version = io.readUint32();
  header.byteLength = io.readUint32();
  header.featureTableJSONByteLength = io.readUint32();
  header.featureTableBinaryByteLength = io.readUint32();
  header.batchTableJSONByteLength = io.readUint32();
  header.batchTableBinaryByteLength = io.readUint32();
}
function parse$1(pnts, buffer) {
  const iobuffer = new IOBuffer_2(buffer);
  parseHeader(pnts.header, iobuffer);
  if (pnts.byteLength % 8 != 0) {
    throw new Error("[Pnts 实例化错误] byteLength 未 8 字节对齐。");
  }
  iobuffer.rewind();
  iobuffer.skip(28);
  const ftJSON = JSON.parse(
    iobuffer.readChars(pnts.featureTableJSONByteLength)
  );
  const ftBin = iobuffer.readBytes(pnts.featureTableBinaryByteLength);
  pnts.featureTable = PntsFeatureTable.createFromJSON(ftJSON, ftBin);
  if (pnts.batchTableJSONByteLength !== 0) {
    const btJSON = JSON.parse(
      iobuffer.readChars(pnts.batchTableJSONByteLength)
    );
    const btBin = iobuffer.readBytes(pnts.batchTableBinaryByteLength);
    pnts.batchTable = BatchTable.createFromJSON(btJSON, btBin);
  }
}
class Pnts {
  constructor(buffer, cacheBuffer = false) {
    this.header = new PntsHeader();
    parse$1(this, buffer);
    if (cacheBuffer === true) {
      this.buffer = buffer;
    }
  }
  validate() {
    return true;
  }
  get magic() {
    return this.header.magic;
  }
  get byteLength() {
    return this.header.byteLength;
  }
  get version() {
    return this.header.version;
  }
  get featureTableJSONByteLength() {
    return this.header.featureTableJSONByteLength;
  }
  get featureTableBinaryByteLength() {
    return this.header.featureTableBinaryByteLength;
  }
  get batchTableJSONByteLength() {
    return this.header.batchTableJSONByteLength;
  }
  get batchTableBinaryByteLength() {
    return this.header.batchTableBinaryByteLength;
  }
  get sizeWithoutGLB() {
    return (
      28 +
      this.featureTableJSONByteLength +
      this.featureTableBinaryByteLength +
      this.batchTableJSONByteLength +
      this.batchTableBinaryByteLength
    );
  }
}

class Cmpt {}

function validateVctrFeatureTable(table) {
  if (table.region.length !== 6) {
    return false;
  }
  if (table.rtcCenter.length !== 3) {
    return false;
  }
  if (table.polygonsLength !== undefined) {
    if (
      table.polygonCounts === undefined ||
      table.polygonIndexCounts === undefined
    ) {
      return false;
    }
  }
  if (table.polylinesLength !== undefined) {
    if (table.polylineCounts === undefined) {
      return false;
    }
  }
  return true;
}
function parse(table) {
  const json = table._json;
  table.region = json["REGION"];
  table.rtcCenter = json["RTC_CENTER"];
  table.polygonsLength = json["POLYGONS_LENGTH"];
  table.polylinesLength = json["POLYLINES_LENGTH"];
  table.pointsLength = json["POINTS_LENGTH"];
  table.polygonCounts = json["POLYGON_COUNTS"];
  table.polygonIndexCounts = json["POLYGON_INDEX_COUNTS"];
  table.polygonMinimumHeights = json["POLYGON_MINIMUM_HEIGHTS"];
  table.polygonMaximumHeights = json["POLYGON_MAXIMUM_HEIGHTS"];
  table.polylineCounts = json["POLYLINE_COUNTS"];
  table.polylineBatchIds = json["POLYLINE_BATCH_IDS"];
  table.pointBatchIds = json["POINT_BATCH_IDS"];
  if (json["extensions"] !== undefined) {
    table.extensions = new Set();
    // TODO
  }
  table.extras = json["extras"];
}
class VctrFeatureTable extends FeatureTable {
  /**
   *
   */
  constructor() {
    super();
  }
  static createFromJSON(json, binary) {
    const ft = new VctrFeatureTable();
    ft._json = json;
    ft._binary = binary;
    ft.featureTableType = FeatureTableType$1.Vctr;
    parse(ft);
    return ft;
  }
  validate() {
    return validateVctrFeatureTable(this);
  }
}

var TileRefine;
(function (TileRefine) {
  TileRefine["ADD"] = "add";
  TileRefine["REPLACE"] = "replace";
})(TileRefine || (TileRefine = {}));
var TileRefine$1 = TileRefine;

exports.Asset = Asset;
exports.B3dm = B3dm;
exports.B3dmFeatureTable = B3dmFeatureTable;
exports.B3dmHeader = B3dmHeader;
exports.BatchTable = BatchTable;
exports.Cmpt = Cmpt;
exports.ExtBatchtableHierarchy = ExtBatchtableHierarchy;
exports.ExtContentGLTF = ExtContentGLTF;
exports.ExtDraco = ExtDraco;
exports.ExtGeometryMetadata = ExtGeometryMetadata;
exports.ExtImplicitTiling = ExtImplicitTiling;
exports.ExtLayers = ExtLayers;
exports.ExtLod = ExtLod;
exports.ExtMaterialsThinTransparency = ExtMaterialsThinTransparency;
exports.ExtMeshOptCompression = ExtMeshOptCompression;
exports.ExtMetadata = ExtMetadata;
exports.ExtMultipleContent = ExtMultipleContent;
exports.ExtPbrSpecularGlossiness = ExtPbrSpecularGlossiness;
exports.ExtPntsDraco = ExtPntsDraco;
exports.ExtPrimitiveOutline = ExtPrimitiveOutline;
exports.ExtTextureDDS = ExtTextureDDS;
exports.ExtTextureWebp = ExtTextureWebp;
exports.FeatureTable = FeatureTable;
exports.GLTFAccessor = GLTFAccessor;
exports.GLTFAccessorSparse = GLTFAccessorSparse;
exports.GLTFAccessorSparseIndices = GLTFAccessorSparseIndices;
exports.GLTFAccessorSparseValues = GLTFAccessorSparseValues;
exports.GLTFAddAction = GLTFAddAction;
exports.GLTFAlphaMode = GLTFAlphaMode$1;
exports.GLTFAnimation = GLTFAnimation;
exports.GLTFAnimationChannel = GLTFAnimationChannel;
exports.GLTFAnimationChannelTarget = GLTFAnimationChannelTarget;
exports.GLTFAnimationSampler = GLTFAnimationSampler;
exports.GLTFAsset = GLTFAsset;
exports.GLTFAttributeType = GLTFAttributeType$1;
exports.GLTFBuffer = GLTFBuffer;
exports.GLTFBufferView = GLTFBufferView;
exports.GLTFCamera = GLTFCamera;
exports.GLTFComponentType = GLTFComponentType$1;
exports.GLTFDocument = GLTFDocument;
exports.GLTFDropAction = GLTFDropAction;
exports.GLTFExtensionBase = GLTFExtensionBase;
exports.GLTFFilter = GLTFFilter$1;
exports.GLTFImage = GLTFImage;
exports.GLTFMaterial = GLTFMaterial;
exports.GLTFMesh = GLTFMesh;
exports.GLTFNode = GLTFNode;
exports.GLTFNormalTextureInfo = GLTFNormalTextureInfo;
exports.GLTFOcclusionTextureInfo = GLTFOcclusionTextureInfo;
exports.GLTFOrthographicCamera = GLTFOrthographicCamera;
exports.GLTFPbr = GLTFPbr;
exports.GLTFPerspectiveCamera = GLTFPerspectiveCamera;
exports.GLTFPrimitive = GLTFPrimitive;
exports.GLTFPrimitiveAttribute = GLTFPrimitiveAttribute;
exports.GLTFPrimitiveBuilder = GLTFPrimitiveBuilder;
exports.GLTFPrimitiveMode = GLTFPrimitiveMode$1;
exports.GLTFSampler = GLTFSampler;
exports.GLTFScene = GLTFScene;
exports.GLTFSkin = GLTFSkin;
exports.GLTFTexture = GLTFTexture;
exports.GLTFTextureInfo = GLTFTextureInfo;
exports.GLTFUpdateAction = GLTFUpdateAction;
exports.GLTFVersion = GLTFVersion$1;
exports.GLTFVertexAttributeType = GLTFVertexAttributeType$1;
exports.GLTFVertexAttributes = GLTFVertexAttributes;
exports.GLTFVertexBuffer = GLTFVertexBuffer;
exports.GLTFVertexBufferObject = GLTFVertexBufferObject;
exports.GLTFVertexIndices = GLTFVertexIndices;
exports.GLTFWrapMode = GLTFWrapMode$1;
exports.I3dm = I3dm;
exports.I3dmFeatureTable = I3dmFeatureTable;
exports.I3dmHeader = I3dmHeader;
exports.MIME = MIME$1;
exports.Pnts = Pnts;
exports.PntsFeatureTable = PntsFeatureTable;
exports.PntsHeader = PntsHeader;
exports.Property = Property;
exports.Tile = Tile;
exports.TileBoundingVolume = TileBoundingVolume;
exports.TileContent = TileContent;
exports.TileHeaderBase = TileHeaderBase;
exports.TileRefine = TileRefine$1;
exports.Tileset = Tileset;
exports.TilesetExtBase = TilesetExtBase;
exports.VctrFeatureTable = VctrFeatureTable;
exports.readGLB = readGLB;
exports.readGLTF = readGLTF;
//# sourceMappingURL=index.js.map
