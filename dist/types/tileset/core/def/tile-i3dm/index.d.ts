import IValidate from "../../../../interfaces/IValidate";
import { GLTFDocument } from "../../../../gltf";
import I3dmFeatureTable from "../featuretable/featuretable-i3dm";
import I3dmHeader from "./header";
import { BatchTable } from "../batchtable";
declare class I3dm implements IValidate {
    header: I3dmHeader;
    featureTable: I3dmFeatureTable;
    batchTable?: BatchTable;
    externalData: string | GLTFDocument;
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
    get gltfFormat(): number;
    get sizeWithoutExternalData(): number;
}
export default I3dm;
