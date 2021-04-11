declare class Vec2 {
    protected _v1: number;
    protected _v2: number;
    get v1(): number;
    get v2(): number;
    set v1(value: number);
    set v2(value: number);
}
export declare const length: (v: Vec2) => number;
export default Vec2;
