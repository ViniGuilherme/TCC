import { useParams } from "react-router-dom";

export default function Agendamento() {
  const { id } = useParams();

  return (
    <section style={{ maxWidth: '600px', margin: '2rem auto' }} className="card">
      <h2 style={{ color: '#2563eb' }}>Agendar Serviço - Petshop #{id}</h2>
      <form>
        <label>Nome do Pet</label>
        <input type="text" placeholder="Nome do Pet" required />
        <label>Serviço</label>
        <select>
          <option>Banho</option>
          <option>Tosa</option>
          <option>Consulta</option>
        </select>
        <label>Data</label>
        <input type="date" required />
        <label>Hora</label>
        <input type="time" required />
        <label>Nome do Dono</label>
        <input type="text" placeholder="Nome do Dono" required />
        <label>Telefone</label>
        <input type="tel" placeholder="Telefone para Contato" required />
        <button type="submit" className="btn">Confirmar Agendamento</button>
      </form>
    </section>
  );
}