"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import LoadingListPage from './loading'; 

interface PokemonResult {
  name: string;
  url: string;
}

interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResult[];
}

async function getPokemonList(limit: number): Promise<ApiResponse> {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`
    );
    if (!response.ok) {
      throw new Error("Error al obtener la lista de Pokémon");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default function HomePage() {
  const [limit, setLimit] = useState(30);

  const { data, isLoading, isError, error } = useQuery<ApiResponse>({
    queryKey: ["pokemonList", limit], 
    queryFn: () => getPokemonList(limit),
    placeholderData: keepPreviousData,
  });

  if (isLoading && !data) {
    return <LoadingListPage />;
  }

  if (isError) {
    return <p>Error al cargar los Pokémon: {error.message}</p>;
  }

  return (
    <div>
      <h2>Lista de Pokémon</h2>
      <div className="pokemon-grid">
        {data?.results.map((pokemon) => (
          <Link
            href={`/pokemon/${pokemon.name}`}
            key={pokemon.name}
            className="pokemon-card"
          >
            {pokemon.name}
          </Link>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button
          onClick={() => setLimit((prevLimit) => prevLimit + 30)}
          className="back-link" 
          disabled={isLoading}
        >
          {isLoading ? 'Cargando...' : 'Cargar más Pokémon'}
        </button>
      </div>
    </div>
  );
}