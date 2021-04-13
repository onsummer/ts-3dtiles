import IValidate from "../../../../interfaces/IValidate";
import { GLTFDocument } from "../../../../gltf";
import B3dmHeader from "./header";
import B3dmFeatureTable from '../featuretable/featuretable-b3dm';
import { BatchTable } from "../batchtable";
declare class B3dm implements IValidate {
    header: B3dmHeader;
    featureTable: B3dmFeatureTable;
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
export default B3dm;
