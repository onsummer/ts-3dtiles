import { IGLTFPrimitive } from "src/interfaces/IGLTFObj";
import writeDefinedProperty from "src/utils/io/writeDefinedProperty";
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty";
import GLTFPropertyBase from "./gltf-property-base";
import GLTFPrimitiveMode, {
  GLTFPrimitiveModeValues,
} from "./enum/gltf-primitivemode";
import GLTFPrimitiveAttribute from "./gltf-primitive-attribute";

class GLTFPrimitive extends GLTFPropertyBase {
  attributes: GLTFPrimitiveAttribute = new GLTFPrimitiveAttribute();
  indices?: number;
  material?: number;
  mode?: GLTFPrimitiveMode = GLTFPrimitiveMode.TRIANGLES;

  constructor() {
    super();
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
  getAccessor(attrName: string) {
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
    if (this.indices! < 0) {
      return false;
    }
    if (this.material! < 0) {
      return false;
    }
    return true;
  }

  json() {
    const prmt = {
      attributes: this.attributes.json(),
    };
    if (this.mode !== GLTFPrimitiveMode.TRIANGLES && this.mode !== undefined) {
      writeDefinedProperty(prmt, "mode", this.mode);
    }
    writeDefinedProperty(prmt, "indices", this.indices);
    writeDefinedProperty(prmt, "material", this.material);
    writeExtensionsProperty(prmt, this.extensions);
    writeDefinedProperty(prmt, "extras", this.extras);

    return prmt;
  }

  static fromJson(json: IGLTFPrimitive) {
    const prmt = new GLTFPrimitive();
    prmt.indices = json.indices;
    prmt.material = json.material;
    if (json.mode !== undefined && json.mode !== 4) {
      if (GLTFPrimitiveModeValues.includes(json.mode)) {
        prmt.mode = json.mode as GLTFPrimitiveMode;
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

export default GLTFPrimitive;
