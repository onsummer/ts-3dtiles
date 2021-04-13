import IValidate from "../../../../interfaces/IValidate";
import IFTBinaryRef from "../../../../interfaces/tileset/IFTBinaryRef";
import FeatureTable from "./featuretable-base";
declare class PntsFeatureTable extends FeatureTable implements IValidate {
    position?: IFTBinaryRef;
    positionQuantized?: IFTBinaryRef;
    rgba?: IFTBinaryRef;
    rgb?: IFTBinaryRef;
    rgb565?: IFTBinaryRef;
    normal?: IFTBinaryRef;
    normalOct16p?: IFTBinaryRef;
    pointsLength: number;
    rtcCenter?: number[];
    quantizedVolumeOffset?: number[];
    quantizedVolumeScale?: number[];
    constantRgba?: number[];
    batchId?: any;
    batchLength?: number;
    constructor();
    static createFromJSON(json: Object, binary: Uint8Array): PntsFeatureTable;
    validate(): boolean;
}
export default PntsFeatureTable;
