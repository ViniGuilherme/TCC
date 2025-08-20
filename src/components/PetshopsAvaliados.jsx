import React from "react";
import { Link } from "react-router-dom";

const PetshopsAvaliados = () => {
  // Dados mockados dos petshops melhor avaliados
  const petshopsAvaliados = [
    {
      id: 1,
      nome: "Pet Spa Premium",
      avaliacao: 4.9,
      totalAvaliacoes: 127,
      endereco: "Rua das Flores, 123 - Centro",
      servicos: ["Banho", "Tosa", "Spa"],
      imagem: "https://images.unsplash.com/photo-1601758228041-3caa53d83420?w=400&h=300&fit=crop",
      preco: "A partir de R$ 45"
    },
    {
      id: 2,
      nome: "Cão & Cia",
      avaliacao: 4.8,
      totalAvaliacoes: 89,
      endereco: "Av. Principal, 456 - Jardim",
      servicos: ["Banho", "Tosa", "Veterinário"],
      imagem: "https://images.unsplash.com/photo-1587764379873-97837921fd44?w=400&h=300&fit=crop",
      preco: "A partir de R$ 35"
    },
    {
      id: 3,
      nome: "Pet Care Express",
      avaliacao: 4.7,
      totalAvaliacoes: 156,
      endereco: "Rua do Comércio, 789 - Vila Nova",
      servicos: ["Banho", "Tosa", "Hospedagem"],
      imagem: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&h=300&fit=crop",
      preco: "A partir de R$ 40"
    },
    {
      id: 4,
      nome: "Amigo Fiel",
      avaliacao: 4.6,
      totalAvaliacoes: 203,
      endereco: "Rua dos Animais, 321 - Bairro",
      servicos: ["Banho", "Tosa", "Adestramento"],
      imagem: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop",
      preco: "A partir de R$ 38"
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push("⭐");
    }
    
    if (hasHalfStar) {
      stars.push("⭐");
    }

    return stars.join("");
  };

  return (
    <section style={{
      padding: '3rem 2rem',
      backgroundColor: '#ffffff',
      margin: '2rem 0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: '2.2rem',
            color: '#1e293b',
            marginBottom: '0.5rem',
            fontWeight: 'bold'
          }}>
            Petshops Melhor Avaliados
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Descubra os petshops mais bem avaliados pelos nossos clientes
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {petshopsAvaliados.map((petshop) => (
                         <div
               key={petshop.id}
               style={{
                 backgroundColor: '#ffffff',
                 borderRadius: '16px',
                 boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                 border: '1px solid #e2e8f0',
                 overflow: 'hidden'
               }}
             >
              <div style={{
                position: 'relative',
                height: '200px',
                overflow: 'hidden'
              }}>
                <img
                  src={petshop.imagem}
                  alt={petshop.nome}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  backgroundColor: '#10b981',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}>
                  {petshop.avaliacao} ⭐
                </div>
              </div>

              <div style={{
                padding: '1.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  color: '#1e293b',
                  marginBottom: '0.5rem',
                  fontWeight: '600'
                }}>
                  {petshop.nome}
                </h3>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '0.75rem'
                }}>
                  <span style={{
                    fontSize: '1rem',
                    marginRight: '0.5rem'
                  }}>
                    {renderStars(petshop.avaliacao)}
                  </span>
                  <span style={{
                    fontSize: '0.9rem',
                    color: '#64748b'
                  }}>
                    ({petshop.totalAvaliacoes} avaliações)
                  </span>
                </div>

                <p style={{
                  fontSize: '0.9rem',
                  color: '#64748b',
                  marginBottom: '0.75rem',
                  lineHeight: '1.4'
                }}>
                  📍 {petshop.endereco}
                </p>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1rem'
                }}>
                  {petshop.servicos.map((servico, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: '#f1f5f9',
                        color: '#475569',
                        padding: '4px 8px',
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                        fontWeight: '500'
                      }}
                    >
                      {servico}
                    </span>
                  ))}
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    fontSize: '1rem',
                    color: '#059669',
                    fontWeight: '600'
                  }}>
                    {petshop.preco}
                  </span>
                                     <Link
                     to={`/petshop/${petshop.id}`}
                     style={{
                       backgroundColor: '#3b82f6',
                       color: 'white',
                       padding: '8px 16px',
                       borderRadius: '8px',
                       textDecoration: 'none',
                       fontSize: '0.9rem',
                       fontWeight: '500'
                     }}
                   >
                     Ver Detalhes
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          textAlign: 'center'
        }}>
                     <Link
             to="/petshops"
             style={{
               backgroundColor: '#1e293b',
               color: 'white',
               padding: '12px 24px',
               borderRadius: '8px',
               textDecoration: 'none',
               fontSize: '1rem',
               fontWeight: '500',
               display: 'inline-block'
             }}
           >
             Ver Todos os Petshops
           </Link>
        </div>
      </div>
    </section>
  );
};

export default PetshopsAvaliados;
