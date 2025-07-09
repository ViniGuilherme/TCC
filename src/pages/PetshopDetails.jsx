import { useParams, Link } from "react-router-dom";

const fakePetshops = [
  { id: 1, nome: "Pet Feliz", descricao: "Atendimento carinhoso para seu pet.", avaliacao: 4.8, servicos: ["Banho", "Tosa"] },
  { id: 2, nome: "Cão e Gato", descricao: "Seu pet em boas mãos.", avaliacao: 4.6, servicos: ["Tosa", "Consulta"] },
  { id: 3, nome: "Mundo Pet", descricao: "Tudo para seu pet em um só lugar.", avaliacao: 4.9, servicos: ["Banho", "Veterinário"] },
];

export default function PetshopDetails() {
  const { id } = useParams();
  const petshop = fakePetshops.find((p) => p.id === parseInt(id));

  if (!petshop) return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Petshop não encontrado.</p>;

  return (
    <section style={{ maxWidth: '600px', margin: '2rem auto' }} className="card">
      <h2 style={{ color: '#2563eb', fontSize: '2rem' }}>{petshop.nome}</h2>
      <p>{petshop.descricao}</p>
      <p style={{ fontWeight: 'bold', margin: '0.5rem 0' }}>⭐ {petshop.avaliacao}</p>
      <p>Serviços: {petshop.servicos.join(", ")}</p>
      <Link to={`/agendamento/${petshop.id}`} className="btn" style={{ marginTop: '1rem', display: 'inline-block' }}>Agendar agora</Link>
    </section>
  );
}