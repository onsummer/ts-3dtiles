import IValidate from "../../../../typings/IValidate";
import IFTBinaryRef from "../../../../typings/tileset/IFTBinaryRef";
import FeatureTable from "./featuretable-base";
declare class I3dmFeatureTable extends FeatureTable implements IValidate {
    position?: IFTBinaryRef;
    positionQuantized?: IFTBinaryRef;
    normalUp?: IFTBinaryRef;
    normalRight?: IFTBinaryRef;
    normalUpOct32p?: IFTBinaryRef;
    normalRightOct32p?: IFTBinaryRef;
    scale?: IFTBinaryRef;
    batchId?: IFTBinaryRef;
    scaleNonUniform?: IFTBinaryRef;
    instancesLength: number;
    rtcCenter?: number[];
    quantizedVolumeOffset?: number[];
    quantizedVolumeScale?: number[];
    eastNorthUp?: boolean;
    constructor();
    static createFromJSON(json: Object, binary: Uint8Array): I3dmFeatureTable;
    validate(): boolean;
}
export default I3dmFeatureTable;
