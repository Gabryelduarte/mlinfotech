import { React, html } from '../react-setup.js';

export default function Services() {
  const services = [
    {
      title: "Manutenção em Computadores e Notebooks",
      description: "Diagnóstico preciso, reparos de hardware, formatação, remoção de vírus e upgrades de hardware (SSD/RAM) para garantir o máximo desempenho dos seus equipamentos.",
      icon: html`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
          <path d="M9 10h6"></path>
        </svg>
      `
    },
    {
      title: "Criação de Sites",
      description: "Desenvolvimento de sites corporativos institucionais, landing pages de alta conversão e e-commerces rápidos, otimizados para SEO e totalmente responsivos.",
      icon: html`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      `
    },
    {
      title: "Criação de Aplicativos",
      description: "Construção de aplicativos sob medida para Android e iOS, focados em usabilidade, performance e com painéis de controle fáceis de gerenciar.",
      icon: html`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      `
    },
    {
      title: "Consultoria em TI",
      description: "Planejamento e análise estratégica para modernizar a infraestrutura, migração em nuvem segura e redução de custos com licenças e servidores.",
      icon: html`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      `
    }
  ];

  return html`
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Nossos Serviços</h2>
          <p>Soluções tecnológicas completas e eficientes para impulsionar a produtividade e a presença digital da sua empresa.</p>
        </div>
        <div className="services-grid" style=${{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          ${services.map((service, index) => html`
            <div key=${index} className="service-card">
              <div className="service-icon">
                ${service.icon}
              </div>
              <h3>${service.title}</h3>
              <p>${service.description}</p>
            </div>
          `)}
        </div>
      </div>
    </section>
  `;
}
