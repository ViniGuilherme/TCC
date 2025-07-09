import { Link } from "react-router-dom";

export default function PetshopCard({ petshop }) {
  return (
    <div className="card">
      <h3 style={{ color: '#2563eb', fontSize: '1.25rem' }}>{petshop.nome}</h3>
      <p style={{ fontSize: '0.9rem', margin: '0.5rem 0' }}>⭐ {petshop.avaliacao} - {petshop.servicos.join(", ")}</p>
      <Link to={`/petshop/${petshop.id}`} className="btn">Ver detalhes</Link>
    </div>
  );
}