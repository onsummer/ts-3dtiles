import IValidate from "../../../interfaces/IValidate";
import TilesetExtBase from "../../ext/ext-base";
import TileRefine from "./enum/tile-refine";
import TileBoundingVolume from "./tile-bounding-volume";
import TileContent from "./tile-content";
declare class Tile implements IValidate {
    boundingVolume: TileBoundingVolume;
    geometricError: number;
    viewerRequestVolume?: TileBoundingVolume;
    refine?: TileRefine;
    content?: TileContent;
    transform?: number[];
    children?: Tile[];
    extensions?: Set<TilesetExtBase>;
    extras?: Object;
    validate(): boolean;
    /**
     * @todo
     */
    toJson(): void;
}
export default Tile;
