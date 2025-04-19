export interface PokemonSpriteResponse {
    official_artwork: OfficialArtwork[];
}

export interface OfficialArtwork {
    front_default: string;
    front_shiny: string;
}