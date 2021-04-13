import IValidate from "../../../../interfaces/IValidate";
import FeatureTable from "./featuretable-base";
declare class B3dmFeatureTable extends FeatureTable implements IValidate {
    batchLength: number;
    rtcCenter?: number[];
    /**
     *
     */
    constructor();
    static createFromJSON(json: Object, binary: Uint8Array): B3dmFeatureTable;
    validate(): boolean;
}
export default B3dmFeatureTable;
