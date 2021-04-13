import IValidate from "../../../../interfaces/IValidate";
import TileHeaderBase from "../tile-header-base";
declare class I3dmHeader extends TileHeaderBase implements IValidate {
    featureTableJSONByteLength: number;
    featureTableBinaryByteLength: number;
    batchTableJSONByteLength: number;
    batchTableBinaryByteLength: number;
    gltfFormat: number;
    constructor();
    validate(): boolean;
}
export default I3dmHeader;
