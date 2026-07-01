import React from 'react';
import ReactDOM from 'react-dom/client';
import { html } from './react-setup.js';

// Importa os componentes do site
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Services from './components/Services.js';
import About from './components/About.js';
import Faq from './components/Faq.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {
  return html`
    <div>
      <${Header} />
      <main>
        <${Hero} />
        <${Services} />
        <${About} />
        <${Faq} />
        <${Contact} />
      </main>
      <${Footer} />
      
      <!-- Botão Flutuante do WhatsApp -->
      <a href="https://wa.me/5531996140045" className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>
    </div>
  `;
}

// Inicializa a aplicação React no elemento #root
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(html`<${App} />`);
}
