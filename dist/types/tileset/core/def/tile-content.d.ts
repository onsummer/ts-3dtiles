import IValidate from "../../../interfaces/IValidate";
import TilesetExtBase from "../../ext/ext-base";
import TileBoundingVolume from "./tile-bounding-volume";
declare class TileContent implements IValidate {
    boundingVolume?: TileBoundingVolume;
    uri: string;
    extensions?: Set<TilesetExtBase>;
    extras?: any;
    /**
     * @deprecated `TileContent.url` 已废弃，请使用 `TileContent.uri`
     */
    get url(): string;
    validate(): boolean;
}
export default TileContent;
