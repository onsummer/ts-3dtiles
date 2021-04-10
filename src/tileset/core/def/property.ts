import TilesetExtBase from "../../ext/ext-base"

class Property {
  maximum: number
  minimum: number
  extensions?: Set<TilesetExtBase>
  extras?: any
}

export default Property