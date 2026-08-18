import { React, html } from '../react-setup.js';

const systems = [
  {
    id: 'ml-promocoes',
    title: 'ML Promoções',
    type: 'Sistema Web',
    description: 'Plataforma de ofertas e promoções com foco em experiência do cliente, gestão de campanhas e integração rápida.',
    url: 'https://mlofertas.web.app/',
    buttonText: 'Abrir sistema'
  }
];

export default function Systems() {
  return html`
    <section id="sistemas" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Sistemas</h2>
          <p>Confira os sistemas desenvolvidos pela ML InfoTech e acesse diretamente o projeto disponível no GitHub.</p>
        </div>

        <div className="systems-grid">
          ${systems.map((system) => html`
            <article key=${system.id} className="system-card">
              <div className="system-card-header">
                <span className="system-badge">${system.type}</span>
              </div>
              <h3>${system.title}</h3>
              <p>${system.description}</p>
              <a href=${system.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                ${system.buttonText}
              </a>
            </article>
          `)}
        </div>
      </div>
    </section>
  `;
}
