import { React, html } from '../react-setup.js';

export default function About() {
  const commitments = [
    { title: "Uptime de 99.9%", desc: "Estruturas planejadas para máxima estabilidade e sistemas sempre online." },
    { title: "Suporte Ágil", desc: "Atendimento dedicado para solucionar incidentes técnicos sem perda de tempo." },
    { title: "Segurança de Dados", desc: "Foco total na proteção dos seus arquivos e conformidade com boas práticas." },
    { title: "Transparência", desc: "Comunicação direta, relatórios claros e foco na melhor solução para o seu orçamento." }
  ];

  return html`
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <h2>Sobre a ML InfoTech</h2>
          <p>Foco na produtividade e no crescimento do seu negócio por meio de soluções de TI sob medida.</p>
        </div>

        <div className="about-centered">
          <p className="about-text">
            Nascemos com a missão de descomplicar a infraestrutura de tecnologia para pequenas e médias empresas. Acreditamos que a TI deve ser um acelerador de produtividade, agindo nos bastidores para que você foque apenas no crescimento do seu negócio.
          </p>
          <p className="about-text">
            Localizada em Mateus Leme - MG e oferecendo atendimento remoto para todo o Brasil, entregamos soluções eficientes, criação de sites, desenvolvimento de aplicativos e consultoria estratégica em TI.
          </p>
        </div>

        <div className="stats-grid">
          ${commitments.map((item, index) => html`
            <div key=${index} className="stat-item">
              <span className="stat-number">${item.title}</span>
              <span className="stat-label">${item.desc}</span>
            </div>
          `)}
        </div>
      </div>
    </section>
  `;
}
