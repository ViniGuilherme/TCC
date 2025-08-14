import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [busca, setBusca] = useState("");
  const navigate = useNavigate();

  const handleBuscar = (e) => {
    e.preventDefault();
    navigate(`/petshops?busca=${encodeURIComponent(busca)}`);
  };

  return (
    <section style={{ textAlign: 'center', margin: '4rem 0' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#2563eb' }}>Agende cuidados para seu pet com facilidade</h1>
      <p style={{ fontSize: '1.1rem', margin: '1rem 0' }}>Banho, tosa e muito mais nos melhores petshops perto de você.</p>
      <form onSubmit={handleBuscar} className="search-bar">
        <input
          type="text"
          placeholder="Buscar por nome ou serviço..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <button className="btn" type="submit">Buscar</button>
      </form>
      <Link to="/petshops" className="btn">Ver todos os petshops</Link>
    </section>
  );
}