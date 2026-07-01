import { React, html } from '../react-setup.js';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return html`
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-logo-desc">
            <a href="#home" className="logo">
              <img src="logo.png" alt="ML InfoTech Logo" className="logo-img" style=${{ height: '50px', width: 'auto' }} />
            </a>
            <p>
              Oferecemos manutenção especializada em computadores, criação de sites e aplicativos modernos, e consultoria estratégica em TI para impulsionar o seu negócio.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navegação</h4>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Início</a></li>
              <li><a href="#services" className="footer-link">Serviços</a></li>
              <li><a href="#about" className="footer-link">Sobre nós</a></li>
              <li><a href="#contact" className="footer-link">Contato</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Serviços</h4>
            <ul className="footer-links">
              <li><a href="#services" className="footer-link">Manutenção</a></li>
              <li><a href="#services" className="footer-link">Criação de Sites</a></li>
              <li><a href="#services" className="footer-link">Criação de Apps</a></li>
              <li><a href="#services" className="footer-link">Consultoria</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Termos de Uso</a></li>
              <li><a href="#" className="footer-link">Políticas de Privacidade</a></li>
              <li><a href="#" className="footer-link">LGPD</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© ${currentYear} ML InfoTech. Todos os direitos reservados.</p>
          <p>Feito com React & PHP</p>
        </div>
      </div>
    </footer>
  `;
}
