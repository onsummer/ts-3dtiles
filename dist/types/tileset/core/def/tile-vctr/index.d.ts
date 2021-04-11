import IValidate from "../../../../typings/IValidate";
import { BatchTable } from "../batchtable";
import { FeatureTable } from "../featuretable";
import VctrHeader from "./header";
declare class Vctr implements IValidate {
    header: VctrHeader;
    featureTable: FeatureTable;
    batchTable: BatchTable;
    indices: any;
    positions: any;
    buffer?: ArrayBuffer;
    /**
     *
     */
    constructor(buffer: ArrayBuffer, cacheBuffer?: boolean);
    validate(): boolean;
    get magic(): string;
    get byteLength(): number;
    get version(): number;
    get featureTableJSONByteLength(): number;
    get featureTableBinaryByteLength(): number;
    get batchTableJSONByteLength(): number;
    get batchTableBinaryByteLength(): number;
    get polygonIndicesByteLength(): number;
    get polygonPositionsByteLength(): number;
    get polylinePositionsByteLengt(): number;
    get pointPositionsByteLength(): number;
}
export default Vctr;
