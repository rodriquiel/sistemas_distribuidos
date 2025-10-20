import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation'; 

interface PokemonType {
  type: { name: string; };
}
interface PokemonSprites {
  front_default: string;
}
interface PokemonDetail {
  name: string;
  height: number;
  weight: number;
  sprites: PokemonSprites;
  types: PokemonType[];
}

interface DetailPageProps {
  params: {
    name: string; 
  };
}


async function getPokemonDetail(name: string) {
  try {
    const response = await axios.get<PokemonDetail>(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    return response.data;
  } catch (error) {
    notFound(); 
  }
}

export default async function PokemonDetailPage({ params }: DetailPageProps) {
  const { name } = params;
  const pokemon = await getPokemonDetail(name);

  return (
    <div className="pokemon-detail">
      <Link href="/" className="back-link">
        &larr; Volver a la lista
      </Link>
      
      <h1>{pokemon.name}</h1>
      
      <Image
        src={pokemon.sprites.front_default}
        alt={`Sprite de ${pokemon.name}`}
        width={150}
        height={150}
      />
      
      <h2>Tipos</h2>
      <ul>
        {pokemon.types.map((typeInfo) => (
          <li key={typeInfo.type.name}>{typeInfo.type.name}</li>
        ))}
      </ul>

      <h2>Datos</h2>
      <p>Altura: {pokemon.height / 10} m</p>
      <p>Peso: {pokemon.weight / 10} kg</p>
    </div>
  );
}