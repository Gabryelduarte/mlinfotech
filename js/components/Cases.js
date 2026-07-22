import { React, html } from '../react-setup.js';

export default function Cases() {
  const cases = [
    {
      category: "Criação de Sites",
      title: "Portal Corporativo e Landing Pages de Alta Performance para Rede de Clínicas",
      description: "Desenvolvemos um portal integrado com painel administrativo fácil e landing pages de conversão focadas em captação de pacientes, com otimização completa de SEO.",
      metrics: [
        { label: "Aumento de Leads", value: "+150%" },
        { label: "Carregamento", value: "0.8s" },
        { label: "Acessos Mobile", value: "+80%" }
      ],
      icon: html`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      `
    },
    {
      category: "Criação de Aplicativos",
      title: "Aplicativo Mobile de Agendamentos e Gestão para Rede Delivery",
      description: "Construímos o aplicativo iOS e Android sob medida para simplificar pedidos e agendamentos, integrado a sistemas de pagamento modernos e de alta segurança.",
      metrics: [
        { label: "Instalações", value: "+50K" },
        { label: "Avaliação do App", value: "4.8 ★" },
        { label: "Vendas via App", value: "+40%" }
      ],
      icon: html`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      `
    },
    {
      category: "Consultoria & Suporte",
      title: "Modernização de TI e Manutenção Estruturada para Escritório de Advocacia",
      description: "Conduzimos uma auditoria de TI, atualizamos e reestruturamos o parque de computadores e notebooks (upgrades e backups), reduzindo falhas em 70%.",
      metrics: [
        { label: "Falhas em PCs", value: "-70%" },
        { label: "Produtividade", value: "+25%" },
        { label: "Uptime Garantido", value: "99.9%" }
      ],
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
    <section id="cases" className="section cases-section">
      <div className="container">
        <div className="section-header">
          <h2>Cases de Sucesso</h2>
          <p>Veja como ajudamos nossos clientes a acelerar seus negócios por meio de soluções de tecnologia escaláveis e seguras.</p>
        </div>
        
        <div className="cases-grid">
          ${cases.map((item, index) => html`
            <div key=${index} className="case-card">
              <div className="case-header">
                <span className="case-badge">${item.category}</span>
                <div className="case-icon-wrapper">${item.icon}</div>
              </div>
              <h3 className="case-title">${item.title}</h3>
              <p className="case-description">${item.description}</p>
              
              <div className="case-metrics-container">
                ${item.metrics.map((metric, mIdx) => html`
                  <div key=${mIdx} className="case-metric-item">
                    <span className="case-metric-value">${metric.value}</span>
                    <span className="case-metric-label">${metric.label}</span>
                  </div>
                `)}
              </div>
            </div>
          `)}
        </div>
      </div>
    </section>
  `;
}
