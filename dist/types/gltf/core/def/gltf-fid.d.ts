declare class GLTFFid {
    _value: number;
    constructor(value: number);
    static fromNumber(v: number): GLTFFid;
    get value(): number;
    set value(value: number);
}
export default GLTFFid;
