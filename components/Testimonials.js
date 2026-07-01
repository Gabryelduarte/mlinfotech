import { React, html } from '../react-setup.js';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Renato Santos",
      role: "CTO",
      company: "PayFast Fintech",
      text: "A migração para a nuvem conduzida pela ML InfoTech foi impecável. Eles entenderam perfeitamente nossos requisitos de segurança e conseguiram reduzir nossos custos em mais de 30% mantendo alta disponibilidade.",
      rating: 5
    },
    {
      name: "Mariana Alencar",
      role: "Diretora de Operações",
      company: "MegaShop E-commerce",
      text: "Automatizar nosso pipeline de deploy era um desafio antigo. A equipe estruturou tudo de forma limpa usando Terraform e Docker. Hoje nosso time foca apenas no código, sem medo de colocar deploys no ar.",
      rating: 5
    },
    {
      name: "Dr. Roberto Dias",
      role: "CIO",
      company: "MedGrupo Saúde",
      text: "Excelente consultoria em cibersegurança e LGPD. O trabalho de Pentest identificou vulnerabilidades que nem sabíamos que existiam. A blindagem dos dados foi feita sem impactar a rotina dos hospitais.",
      rating: 5
    }
  ];

  return html`
    <section id="testimonials" className="section" style=${{ background: 'rgba(4, 7, 13, 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <h2>O que Nossos Clientes Dizem</h2>
          <p>A satisfação de quem confia a infraestrutura e a segurança de sua empresa à ML InfoTech.</p>
        </div>
        
        <div className="testimonials-grid">
          ${testimonials.map((item, index) => html`
            <div key=${index} className="testimonial-card">
              <div className="testimonial-stars">
                ${Array(item.rating).fill().map((_, i) => html`
                  <span key=${i} style=${{ color: '#fbbf24', fontSize: '1.2rem', marginRight: '2px' }}>★</span>
                `)}
              </div>
              <p className="testimonial-text">"${item.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  ${item.name.charAt(0)}
                </div>
                <div className="testimonial-meta">
                  <span className="testimonial-name">${item.name}</span>
                  <span className="testimonial-role">${item.role} @ ${item.company}</span>
                </div>
              </div>
            </div>
          `)}
        </div>
      </div>
    </section>
  `;
}
