import React from "react";

const services = [
  { name: "Banho", price: "R$50" },
  { name: "Tosa", price: "R$40" },
  { name: "Consulta Veterinária", price: "R$100" }
];

function ServiceList() {
  return (
    <section>
      <h2>Serviços Disponíveis</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service.name} - {service.price}</li>
        ))}
      </ul>
    </section>
  );
}

export default ServiceList;