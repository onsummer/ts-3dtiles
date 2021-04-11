declare class BinReader {
    constructor();
    read(buffer: ArrayBuffer, type: string, from: number, to: number): void;
}
export default BinReader;
