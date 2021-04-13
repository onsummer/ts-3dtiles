import IValidate from "../../../interfaces/IValidate";
declare class TileHeaderBase implements IValidate {
    magic: string;
    version: number;
    byteLength: number;
    validate(): boolean;
}
export default TileHeaderBase;
