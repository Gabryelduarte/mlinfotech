import { React, html } from '../react-setup.js';

export default function Hero() {
  return html`
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="badge">
              <span>Tecnologia de Próxima Geração</span>
            </div>
            <h1 className="hero-title">
              Impulsionamos sua Empresa com <span className="gradient-text-accent">Soluções de TI</span> Inteligentes
            </h1>
            <p className="hero-description">
              De manutenção preventiva e corretiva de computadores à criação de sites e aplicativos modernos, oferecemos suporte e consultoria sob medida para impulsionar o seu negócio.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Fale Conosco</a>
              <a href="#services" className="btn btn-secondary">Nossos Serviços</a>
            </div>
          </div>
          <div className="hero-visual">
            <svg className="glowing-globe" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#3b82f6" />
                  <stop offset="100%" stop-color="#818cf8" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="15" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <!-- Círculos de Órbita -->
              <circle cx="250" cy="250" r="180" stroke="rgba(255,255,255,0.03)" stroke-width="2" />
              <circle cx="250" cy="250" r="120" stroke="rgba(59,130,246,0.1)" stroke-width="2" />
              <circle cx="250" cy="250" r="60" stroke="rgba(129,140,248,0.2)" stroke-width="1.5" stroke-dasharray="5 5" />
              
              <!-- Elementos Conectivos -->
              <line x1="250" y1="250" x2="140" y2="140" stroke="rgba(59, 130, 246, 0.3)" stroke-width="1" />
              <line x1="250" y1="250" x2="360" y2="140" stroke="rgba(59, 130, 246, 0.3)" stroke-width="1" />
              <line x1="250" y1="250" x2="250" y2="380" stroke="rgba(129, 140, 248, 0.3)" stroke-width="1" />
              <line x1="250" y1="250" x2="110" y2="280" stroke="rgba(129, 140, 248, 0.2)" stroke-width="1" />
              <line x1="250" y1="250" x2="390" y2="280" stroke="rgba(129, 140, 248, 0.2)" stroke-width="1" />

              <!-- Globo/Nó Central -->
              <circle cx="250" cy="250" r="40" fill="url(#gradient1)" filter="url(#glow)" />
              
              <!-- Nós Satélites -->
              <circle cx="140" cy="140" r="12" fill="#3b82f6" />
              <circle cx="360" cy="140" r="16" fill="#818cf8" />
              <circle cx="250" cy="380" r="10" fill="#10b981" />
              <circle cx="110" cy="280" r="8" fill="#818cf8" />
              <circle cx="390" cy="280" r="14" fill="#3b82f6" />

              <!-- Efeitos de Brilho Extras nos Nós -->
              <circle cx="140" cy="140" r="22" stroke="rgba(59,130,246,0.2)" stroke-width="1" />
              <circle cx="360" cy="140" r="28" stroke="rgba(129,140,248,0.2)" stroke-width="1" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  `;
}
