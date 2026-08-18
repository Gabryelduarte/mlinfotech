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

  const navigate = (hash) => {
    closeMenu();

    if (window.location.hash !== hash) {
      window.location.hash = hash;
      return;
    }

    window.dispatchEvent(new Event('hashchange'));
  };

  return html`
    <div>
      <div className=${'nav-overlay ' + (mobileMenuOpen ? 'open' : '')} onClick=${closeMenu}></div>
      <header className=${'header ' + (scrolled ? 'header-scrolled' : '')}>
        <div className="container nav-container">
          <a href="#home" className="logo" onClick=${(event) => {
            event.preventDefault();
            navigate('#home');
          }}>
            <img src="assets/logo.png" alt="ML InfoTech Logo" className="logo-img" />
          </a>

          <button className="nav-toggle" onClick=${toggleMobileMenu} aria-label="Alternar Menu">
            ${mobileMenuOpen ? '✕' : '☰'}
          </button>

          <ul className=${'nav-menu ' + (mobileMenuOpen ? 'open' : '')}>
            <li><a href="#home" className="nav-link" onClick=${(event) => {
              event.preventDefault();
              navigate('#home');
            }}>Início</a></li>
            <li><a href="#services" className="nav-link" onClick=${(event) => {
              event.preventDefault();
              navigate('#services');
            }}>Serviços</a></li>
            <li><a href="#about" className="nav-link" onClick=${(event) => {
              event.preventDefault();
              navigate('#about');
            }}>Sobre</a></li>
            <li><a href="#contact" className="nav-link" onClick=${(event) => {
              event.preventDefault();
              navigate('#contact');
            }}>Contato</a></li>
            <li>
              <a href="#sistemas" className="btn btn-system" onClick=${(event) => {
                event.preventDefault();
                navigate('#sistemas');
              }}>
                Sistemas
              </a>
            </li>
            <li>
              <a href="https://wa.me/5531996140045" target="_blank" rel="noopener noreferrer" className="btn btn-primary consult-link" onClick=${closeMenu}>
                Falar com Consultor
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  `;
}
