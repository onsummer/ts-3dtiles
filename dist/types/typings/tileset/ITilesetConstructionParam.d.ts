import Tile from "../../tileset/core/def/tile";
export default interface ITilesetConstructionParam {
    root: Tile;
    geometricError: number;
    uri: string;
}
