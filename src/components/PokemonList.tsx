import { useEffect, useState } from "react";
import axios from "axios";
import PokemonItem from "./PokemonItem";

interface Pokemon {
  name: string;
  url: string;
}

export default function PokemonList() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [clicks, setClicks] = useState<number>(0);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
        setPokemons(response.data.results);
      } catch (error) {
        console.error("Error al obtener pokemons:", error);
      }
    };

    fetchPokemons();
  }, []);

  const handleClick = () => setClicks(clicks + 1);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Listado de Pokemons</h2>
      <p>Clicks totales: {clicks}</p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {pokemons.map((pokemon) => (
          <PokemonItem
            key={pokemon.name}
            name={pokemon.name}
            onClick={handleClick}
          />
        ))}
      </ul>
    </div>
  );
}