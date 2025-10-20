import axios from 'axios';
import Link from 'next/link';

interface PokemonResult {
  name: string;
  url: string;
}

interface ApiResponse {
  results: PokemonResult[];
}

async function getPokemonList() {
  try {
    const response = await axios.get<ApiResponse>(
      "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0"
    );
    return response.data.results;
  } catch (error) {
    console.error("Error al obtener la lista de Pokémon:", error);
    return []; 
  }
}

export default async function HomePage() {
  const pokemonList = await getPokemonList();

  return (
    <div>
      <h2>Lista de Pokémon</h2>
      <div className="pokemon-grid">
        {pokemonList.map((pokemon) => (
          <Link 
            href={`/pokemon/${pokemon.name}`} 
            key={pokemon.name} 
            className="pokemon-card"
          >
            {pokemon.name}
          </Link>
        ))}
      </div>
    </div>
  );
}