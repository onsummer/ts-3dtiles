import { IGLTFMesh } from "src/interfaces/IGLTFObj";
import GLTFPropertyBase from "./gltf-property-base";
import GLTFPrimitive from "./gltf-primitive";
import { GLTFDocument } from "..";
declare class GLTFMesh extends GLTFPropertyBase {
  primitives: GLTFPrimitive[];
  weights?: number[];
  name?: string;
  constructor();
  set doc(value: GLTFDocument);
  validate(): boolean;
  json(): {
    primitives: {
      attributes: {
        POSITION: number;
      };
    }[];
  };
  static fromJson(json: IGLTFMesh): GLTFMesh;
}
export default GLTFMesh;
