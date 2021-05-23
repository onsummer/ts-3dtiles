import GLTFExtensionBase from "../gltf-extension-base";
declare class ExtTechniquesWebGL extends GLTFExtensionBase {
  _name: string;
  target: string;
  programs: any[];
  shaders: any[];
  techniques: any[];
  technique: number;
  values: {
    [key: string]: number | boolean | number[] | boolean[];
  };
  /**
   * @todo
   */
  validate(): boolean;
}
export default ExtTechniquesWebGL;
