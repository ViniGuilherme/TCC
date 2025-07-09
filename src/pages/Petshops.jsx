import PetshopCard from "../components/PetshopCard";

const fakePetshops = [
  { id: 1, nome: "Pet Feliz", avaliacao: 4.8, servicos: ["Banho", "Tosa"] },
  { id: 2, nome: "Cão e Gato", avaliacao: 4.6, servicos: ["Tosa", "Consulta"] },
  { id: 3, nome: "Mundo Pet", avaliacao: 4.9, servicos: ["Banho", "Veterinário"] },
];

export default function Petshops() {
  return (
    <section style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', maxWidth: '1000px', margin: 'auto' }}>
      {fakePetshops.map((p) => (
        <PetshopCard key={p.id} petshop={p} />
      ))}
    </section>
  );
}