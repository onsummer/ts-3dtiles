import IValidate from "../../../interfaces/IValidate";
import TilesetExtBase from "../../ext/ext-base";
declare class Asset implements IValidate {
    version: string;
    tilesetVersion?: string;
    extensions?: Set<TilesetExtBase>;
    extras?: Object;
    validate(): boolean;
}
export default Asset;
