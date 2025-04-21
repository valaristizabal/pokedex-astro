export interface PokemonDescriptionResponse { 
    descriptions: Description[];
}

export interface Description {
    description: string;
    language: Language;
}

export interface Language {
    name: string;
    url: string;
}
