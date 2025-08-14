import React, { useState } from "react";

function BookingForm() {
  const [name, setName] = useState("");
  const [pet, setPet] = useState("");
  const [service, setService] = useState("Banho");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Agendamento feito para ${pet} (${name}) - Serviço: ${service}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agendar Serviço</h2>
      <input
        type="text"
        placeholder="Seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Nome do pet"
        value={pet}
        onChange={(e) => setPet(e.target.value)}
        required
      />
      <select value={service} onChange={(e) => setService(e.target.value)}>
        <option value="Banho">Banho</option>
        <option value="Tosa">Tosa</option>
        <option value="Consulta Veterinária">Consulta Veterinária</option>
      </select>
      <button type="submit">Agendar</button>
    </form>
  );
}

export default BookingForm;