import { React, html, useState, useEffect } from '../react-setup.js';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return html`
    <header className=${`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo" onClick=${closeMenu}>
          <img src="logo.png" alt="ML InfoTech Logo" className="logo-img" />
        </a>

        <button className="nav-toggle" onClick=${toggleMobileMenu} aria-label="Alternar Menu">
          ${mobileMenuOpen ? '✕' : '☰'}
        </button>

        <ul className=${`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <li><a href="#home" className="nav-link" onClick=${closeMenu}>Início</a></li>
          <li><a href="#services" className="nav-link" onClick=${closeMenu}>Serviços</a></li>
          <li><a href="#about" className="nav-link" onClick=${closeMenu}>Sobre</a></li>
          <li><a href="#contact" className="nav-link" onClick=${closeMenu}>Contato</a></li>
          <li>
            <a href="https://wa.me/5531996140045" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style=${{ padding: '8px 20px', fontSize: '0.9rem' }} onClick=${closeMenu}>
              Falar com Consultor
            </a>
          </li>
        </ul>
      </div>
    </header>
  `;
}
