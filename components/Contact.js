import { React, html, useState } from '../react-setup.js';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.subject || !formData.message) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Cria o texto da mensagem formatado para o WhatsApp
    const messageText = `Olá ML InfoTech! \n\n*Nome:* ${formData.name}\n*Assunto:* ${formData.subject}\n\n*Mensagem:* \n${formData.message}`;
    const encodedMessage = encodeURIComponent(messageText);
    
    // Abre a aba com o WhatsApp do cliente
    window.open(`https://wa.me/5531996140045?text=${encodedMessage}`, '_blank');
  };

  return html`
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Entre em Contato</h2>
          <p>Fale diretamente com nossos consultores de tecnologia via WhatsApp. Preencha os campos abaixo para iniciar a conversa.</p>
        </div>
        
        <div className="contact-grid">
          <!-- Info de Contato -->
          <div className="contact-info">
            <div className="contact-info-title">
              <h3>Canais de Atendimento</h3>
              <p>Clique abaixo para nos ligar ou iniciar uma conversa direta no WhatsApp.</p>
            </div>
            
            <ul className="contact-details">
              <li className="contact-detail-item">
                <div className="contact-detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-detail-content">
                  <h4>Telefone / WhatsApp</h4>
                  <a href="https://wa.me/5531996140045" target="_blank" rel="noopener noreferrer" style=${{ color: 'var(--primary)' }}>
                    +55 (31) 99614-0045
                  </a>
                </div>
              </li>
              <li className="contact-detail-item">
                <div className="contact-detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-detail-content">
                  <h4>Localização</h4>
                  <p>Mateus Leme - MG / Atendimento Remoto Nacional</p>
                </div>
              </li>
            </ul>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/gabryel-duarte/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://www.instagram.com/infotech.mateusleme" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          <!-- Formulário -->
          <div className="contact-form-container">
            <h3 style=${{ marginBottom: '24px', fontSize: '1.25rem' }}>Enviar Mensagem rápida</h3>
            <form onSubmit=${handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Seu Nome *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="form-input" 
                  value=${formData.name} 
                  onChange=${handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Assunto *</label>
                <select 
                  id="subject" 
                  name="subject" 
                  className="form-input" 
                  style=${{ background: 'var(--bg-surface-hover)' }}
                  value=${formData.subject} 
                  onChange=${handleChange}
                  required 
                >
                  <option value="">Selecione o assunto...</option>
                  <option value="Manutenção em Computadores/Notebooks">Manutenção em Computadores/Notebooks</option>
                  <option value="Criação de Sites">Criação de Sites</option>
                  <option value="Criação de Aplicativos">Criação de Aplicativos</option>
                  <option value="Consultoria em TI">Consultoria em TI</option>
                  <option value="Outro assunto">Outro assunto</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Mensagem *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  className="form-input" 
                  value=${formData.message} 
                  onChange=${handleChange}
                  placeholder="Escreva brevemente o que precisa..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style=${{ width: '100%', gap: '8px' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style=${{ verticalAlign: 'middle' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                Conversar pelo WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}
