export default function LoadingListPage() {
  return (
    <div>
      <h2>Cargando Pokémon...</h2>
      <div className="pokemon-grid">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="skeleton-card"></div>
        ))}
      </div>
    </div>
  );
}