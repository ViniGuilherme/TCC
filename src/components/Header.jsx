import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>🐾 PetBook</Link>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/petshops">Petshops</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}