export const pokemosIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface Pokemon {
    id: number;
    name: string;
    type: string;
    base_experience: number;
    height: number;
    weight: number;
    abilities: string[];
    stats: {
        hp: number;
        attack: number;
        defense: number;
        speed: number;
        special_attack: number;
        special_defense: number;
    };
}

export const Bolbasor:Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    type: 'Grass',
    base_experience: 64,
    height: 7,
    weight: 69,
    abilities: ['Overgrow', 'Chlorophyll'],
    stats: {
        hp: 45,
        attack: 49,
        defense: 49,
        speed: 45,
        special_attack: 65,
        special_defense: 65,
    },    
}

export const Charmander:Pokemon = {
    id: 4,
    name: 'Charmander',
    type: 'Fire',
    base_experience: 62,
    height: 6,
    weight: 85,
    abilities: ['Blaze', 'Solar Power'],
    stats: {
        hp: 39,
        attack: 52,
        defense: 43,
        speed: 65,
        special_attack: 60,
        special_defense: 50,
    },    
}

export const pokemons: Pokemon[] = [];

pokemons.push(Bolbasor, Charmander);
console.log(pokemons);

