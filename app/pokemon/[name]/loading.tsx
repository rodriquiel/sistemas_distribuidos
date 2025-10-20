export default function LoadingDetailPage() {
  return (
    <div className="pokemon-detail" style={{ opacity: 0.7 }}>
      <p className="back-link">Cargando...</p>
      <h1>Cargando Pokémon...</h1>
      <div style={{
        backgroundColor: '#e0e0e0',
        borderRadius: '50%',
        width: '150px',
        height: '150px',
        margin: '0 auto 1rem auto',
        animation: 'pulse 1.5s infinite ease-in-out'
      }}></div>
      <h2>Tipos</h2>
      <ul>
        <li>Cargando...</li>
      </ul>
    </div>
  );
}