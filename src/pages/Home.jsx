import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section style={{ textAlign: 'center', margin: '4rem 0' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#2563eb' }}>Agende cuidados para seu pet com facilidade</h1>
      <p style={{ fontSize: '1.1rem', margin: '1rem 0' }}>Banho, tosa e muito mais nos melhores petshops perto de você.</p>
      <Link to="/petshops" className="btn">Ver petshops disponíveis</Link>
    </section>
  );
}