import IValidate from "../../../../interfaces/IValidate";
import IFTBinaryRef from "../../../../interfaces/tileset/IFTBinaryRef";
import FeatureTable from "./featuretable-base";
declare class VctrFeatureTable extends FeatureTable implements IValidate {
    region: number[];
    rtcCenter?: number[];
    polygonsLength?: number;
    polylinesLength?: number;
    pointsLength?: number;
    polygonCounts?: IFTBinaryRef;
    polygonIndexCounts?: IFTBinaryRef;
    polygonMinimumHeights?: IFTBinaryRef;
    polygonMaximumHeights?: IFTBinaryRef;
    polygonBatchIds?: IFTBinaryRef;
    polylineCounts?: IFTBinaryRef;
    polylineBatchIds?: IFTBinaryRef;
    pointBatchIds?: IFTBinaryRef;
    /**
     *
     */
    constructor();
    static createFromJSON(json: Object, binary: Uint8Array): VctrFeatureTable;
    validate(): boolean;
}
export default VctrFeatureTable;
