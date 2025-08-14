import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PetshopCard from "../components/PetshopCard";

const fakePetshops = [
  { id: 1, nome: "Pet Feliz", avaliacao: 4.8, servicos: ["Banho", "Tosa"] },
  { id: 2, nome: "Cão e Gato", avaliacao: 4.6, servicos: ["Tosa", "Consulta"] },
  { id: 3, nome: "Mundo Pet", avaliacao: 4.9, servicos: ["Banho", "Veterinário"] },
];

export default function Petshops() {
  const [searchParams] = useSearchParams();
  const buscaParam = searchParams.get("busca") || "";
  const [busca, setBusca] = useState(buscaParam);

  useEffect(() => {
    setBusca(buscaParam);
  }, [buscaParam]);

  const filtrados = fakePetshops.filter(p =>
    p.nome.toLowerCase().includes(busca.toLowerCase()) ||
    p.servicos.some(s => s.toLowerCase().includes(busca.toLowerCase()))
  );

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar por nome ou serviço..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>
      <section style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', maxWidth: '1000px', margin: 'auto' }}>
        {filtrados.length > 0 ? (
          filtrados.map((p) => (
            <PetshopCard key={p.id} petshop={p} />
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center' }}>Nenhum petshop encontrado.</p>
        )}
      </section>
    </>
  );
}
