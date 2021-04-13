import IValidate from "../../../../interfaces/IValidate";
import { GLTFDocument } from "../../../..";
import PntsFeatureTable from "../featuretable/featuretable-pnts";
import PntsHeader from "./header";
import { BatchTable } from "../batchtable";
declare class Pnts implements IValidate {
    header: PntsHeader;
    featureTable: PntsFeatureTable;
    batchTable?: BatchTable;
    parsedGLTF: GLTFDocument;
    buffer?: ArrayBuffer;
    constructor(buffer: ArrayBuffer, cacheBuffer?: boolean);
    validate(): boolean;
    get magic(): string;
    get byteLength(): number;
    get version(): number;
    get featureTableJSONByteLength(): number;
    get featureTableBinaryByteLength(): number;
    get batchTableJSONByteLength(): number;
    get batchTableBinaryByteLength(): number;
    get sizeWithoutGLB(): number;
}
export default Pnts;
