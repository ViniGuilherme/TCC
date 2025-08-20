import React from "react";

const ComoFunciona = () => {
  const steps = [
    {
      id: 1,
      icon: "🔍",
      title: "Busque o serviço",
      description: "Encontre o petshop ideal perto de você ou busque por serviços específicos"
    },
    {
      id: 2,
      icon: "📅",
      title: "Escolha o dia e horário",
      description: "Selecione a data e horário que melhor se adequam à sua agenda"
    },
    {
      id: 3,
      icon: "✅",
      title: "Confirme o agendamento",
      description: "Revise os detalhes do serviço e confirme sua reserva"
    },
    {
      id: 4,
      icon: "🎉",
      title: "Pronto! Seu pet está agendado",
      description: "Receba a confirmação e aguarde o dia do atendimento"
    }
  ];

  return (
    <section style={{
      padding: '4rem 2rem',
      backgroundColor: '#f8fafc',
      margin: '2rem 0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          color: '#1e293b',
          marginBottom: '1rem',
          fontWeight: 'bold'
        }}>
          Como Funciona
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#64748b',
          marginBottom: '3rem',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Agendar cuidados para seu pet nunca foi tão fácil. Siga estes passos simples:
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {steps.map((step) => (
            <div
              key={step.id}
              style={{
                backgroundColor: '#ffffff',
                padding: '2rem',
                borderRadius: '16px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                border: '1px solid #e2e8f0',
                position: 'relative'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#3b82f6',
                color: 'white',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: 'bold'
              }}>
                {step.id}
              </div>
              
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem',
                marginTop: '1rem'
              }}>
                {step.icon}
              </div>
              
              <h3 style={{
                fontSize: '1.25rem',
                color: '#1e293b',
                marginBottom: '0.75rem',
                fontWeight: '600'
              }}>
                {step.title}
              </h3>
              
              <p style={{
                fontSize: '0.95rem',
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div style={{
          marginTop: '3rem',
          padding: '2rem',
          backgroundColor: '#dbeafe',
          borderRadius: '12px',
          border: '1px solid #93c5fd'
        }}>
          <p style={{
            fontSize: '1.1rem',
            color: '#1e40af',
            margin: '0',
            fontWeight: '500'
          }}>
            💡 <strong>Dica:</strong> Mantenha seus dados atualizados para receber lembretes e confirmações por email ou WhatsApp!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
