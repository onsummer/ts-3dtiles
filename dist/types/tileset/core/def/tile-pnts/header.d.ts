import TileHeaderBase from "../tile-header-base";
declare class PntsHeader extends TileHeaderBase {
    featureTableJSONByteLength: number;
    featureTableBinaryByteLength: number;
    batchTableJSONByteLength: number;
    batchTableBinaryByteLength: number;
    constructor();
}
export default PntsHeader;
