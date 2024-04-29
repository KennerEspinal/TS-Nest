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

console.log(pokemosIds);
