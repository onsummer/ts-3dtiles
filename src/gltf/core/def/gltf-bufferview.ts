import { IGLTFBufferView } from "src/interfaces/IGLTFObj";
import writeDefinedProperty from "src/utils/io/writeDefinedProperty";
import writeExtensionsProperty from "src/utils/io/writeExtensionsProperty";
import GLTFPropertyBase from "./gltf-property-base";
import GLTFBufferViewTarget, {
  GLTFBufferViewTargetValues,
} from "./enum/gltf-bufferview-target";

class GLTFBufferView extends GLTFPropertyBase {
  buffer: number = 0;
  byteLength: number = 1;
  byteOffset?: number = 0;
  byteStride?: number = 4;
  target?: GLTFBufferViewTarget;

  constructor() {
    super();
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
      this.target === GLTFBufferViewTarget.ARRAY_BUFFER ||
      this.target === GLTFBufferViewTarget.ELEMENT_ARRAY_BUFFER
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

  static fromJson(json: IGLTFBufferView) {
    const bv = new GLTFBufferView();
    bv.buffer = json.buffer;
    bv.byteLength = json.byteLength;
    bv.byteOffset = json.byteOffset;
    bv.extras = json.extras;
    if (
      json.target !== undefined &&
      GLTFBufferViewTargetValues.includes(json.target)
    ) {
      bv.target = json.target as GLTFBufferViewTarget;
    }
    return bv;
  }
}

export default GLTFBufferView;
