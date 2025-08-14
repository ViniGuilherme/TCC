import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Login enviado! Email: ${email}`);
  };

  return (
    <section style={{ maxWidth: '400px', margin: '2rem auto' }} className="card">
      <h2 style={{ textAlign: 'center', color: '#2563eb' }}>Entrar</h2>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Senha</label>
        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        <button type="submit" className="btn" style={{ width: '100%' }}>Entrar</button>
      </form>
    </section>
  );
}