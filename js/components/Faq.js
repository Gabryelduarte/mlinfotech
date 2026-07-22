import { React, html, useState } from '../react-setup.js';

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Quais serviços a empresa oferece?",
      answer: "Oferecemos suporte técnico para computadores e notebooks, manutenção preventiva e corretiva, remoção de vírus, formatação, montagem de computadores, desenvolvimento de sites e aplicativos, além de consultoria em Tecnologia da Informação para empresas e profissionais."
    },
    {
      question: "Vocês atendem empresas e clientes residenciais?",
      answer: "Sim. Prestamos serviços tanto para empresas quanto para clientes residenciais, oferecendo soluções personalizadas conforme a necessidade de cada cliente."
    },
    {
      question: "Quanto tempo leva para concluir um serviço?",
      answer: "O prazo varia de acordo com o tipo de serviço. Manutenções simples geralmente são concluídas no mesmo dia ou em até 24 horas. Projetos de desenvolvimento e consultoria possuem prazos definidos após a análise das necessidades do cliente."
    },
    {
      question: "Como funciona o suporte técnico?",
      answer: "Realizamos atendimento presencial e, quando possível, suporte remoto para resolver problemas de forma rápida e eficiente. Nossa equipe busca identificar a causa do problema e oferecer a melhor solução com agilidade e transparência."
    },
    {
      question: "Como posso solicitar um orçamento?",
      answer: "Você pode entrar em contato pelo WhatsApp, Instagram ou pelo formulário disponível em nosso site. Após entendermos sua necessidade, enviaremos um orçamento sem compromisso."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return html`
    <section id="faq" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Perguntas Frequentes</h2>
          <p>Tire suas dúvidas sobre nosso suporte técnico de informática, desenvolvimento e consultoria em TI.</p>
        </div>
        
        <div className="faq-container">
          ${faqData.map((item, index) => html`
            <div key=${index} className=${`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <button className="faq-question" onClick=${() => toggleAccordion(index)}>
                <span>${item.question}</span>
                <span className="faq-icon">${activeIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>${item.answer}</p>
              </div>
            </div>
          `)}
        </div>
      </div>
    </section>
  `;
}
