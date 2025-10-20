import Link from 'next/link';

export default function PokemonNotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h2>¡Ups! Pokémon no encontrado</h2>
      <p>No pudimos encontrar el Pokémon que estás buscando.</p>
      <br />
      <Link href="/" className="back-link">
        Volver a la lista
      </Link>
    </div>
  );
}