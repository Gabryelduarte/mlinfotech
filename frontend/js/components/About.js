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
        <div className="about-grid">
          <div className="about-content">
            <h2>Sobre a ML InfoTech</h2>
            <p className="about-text">
              Nascemos com a missão de descomplicar a infraestrutura de tecnologia para pequenas e médias empresas. Acreditamos que a TI deve ser um acelerador de produtividade, agindo nos bastidores para que você foque apenas no crescimento do seu negócio.
            </p>
            <p className="about-text about-text-large">
              Baseados em Mateus Leme - MG e oferecendo atendimento remoto para todo o Brasil, entregamos soluções eficientes em suporte de hardware, criação de sites, desenvolvimento de aplicativos e consultoria estratégica em TI.
            </p>
            
            <div className="stats-grid">
              ${commitments.map((item, index) => html`
                <div key=${index} className="stat-item">
                  <span className="stat-number">${item.title}</span>
                  <span className="stat-label">${item.desc}</span>
                </div>
              `)}
            </div>
          </div>
          <div className="about-visual">
            <svg width="80%" height="80%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="serverGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="rgba(59, 130, 246, 0.4)" />
                  <stop offset="100%" stop-color="rgba(129, 140, 248, 0.2)" />
                </linearGradient>
              </defs>
              <!-- Conexões de Rede Background -->
              <path d="M50,150 L150,50 L250,150 L350,50" stroke="rgba(255, 255, 255, 0.03)" stroke-width="2" />
              <path d="M50,250 L150,150 L250,250 L350,150" stroke="rgba(255, 255, 255, 0.03)" stroke-width="2" />

              <!-- Servidor 1 (Topo) -->
              <rect x="80" y="40" width="240" height="48" rx="8" fill="url(#serverGrad)" stroke="rgba(59,130,246,0.3)" stroke-width="1.5" />
              <circle cx="110" cy="64" r="5" fill="#10b981" />
              <rect x="130" y="61" width="40" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
              <rect x="180" y="61" width="60" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
              <circle cx="280" cy="64" r="4" fill="#3b82f6" />
              <circle cx="295" cy="64" r="4" fill="#818cf8" />

              <!-- Servidor 2 (Meio) -->
              <rect x="80" y="110" width="240" height="48" rx="8" fill="url(#serverGrad)" stroke="rgba(59,130,246,0.3)" stroke-width="1.5" />
              <circle cx="110" cy="134" r="5" fill="#10b981" />
              <rect x="130" y="131" width="40" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
              <rect x="180" y="131" width="60" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
              <circle cx="280" cy="134" r="4" fill="#3b82f6" />
              <circle cx="295" cy="134" r="4" fill="#818cf8" />

              <!-- Servidor 3 (Base) -->
              <rect x="80" y="180" width="240" height="48" rx="8" fill="url(#serverGrad)" stroke="rgba(59,130,246,0.3)" stroke-width="1.5" />
              <circle cx="110" cy="204" r="5" fill="#3b82f6" />
              <rect x="130" y="201" width="40" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
              <rect x="180" y="201" width="60" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
              <circle cx="280" cy="204" r="4" fill="#3b82f6" />
              <circle cx="295" cy="204" r="4" fill="#818cf8" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  `;
}
