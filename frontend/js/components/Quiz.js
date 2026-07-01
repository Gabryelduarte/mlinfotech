import { React, html, useState } from '../react-setup.js';

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0); // 0: intro, 1-5: questions, 6: result
  const [answers, setAnswers] = useState([]);
  
  const questions = [
    {
      question: "Onde estão hospedados os sistemas da sua empresa?",
      options: [
        { text: "Servidor físico local na empresa (sem redundância física ou de energia)", points: 1 },
        { text: "Servidores virtuais básicos ou VPS simples (ex: DigitalOcean básico, Locaweb)", points: 2 },
        { text: "Nuvem pública estruturada (AWS, Azure ou Google Cloud) com escalabilidade", points: 3 }
      ]
    },
    {
      question: "Qual o nível de proteção dos dados contra invasões e ransomware?",
      options: [
        { text: "Usamos apenas antivírus básico e não temos políticas claras de segurança", points: 1 },
        { text: "Temos um firewall básico, mas nunca realizamos testes de invasão (pentests)", points: 2 },
        { text: "Segurança robusta, criptografia de dados críticos e conformidade total com LGPD", points: 3 }
      ]
    },
    {
      question: "Como são realizados os backups dos sistemas e bancos de dados da sua empresa?",
      options: [
        { text: "Não temos backup definido ou é feito manualmente de vez em quando em HD externo", points: 1 },
        { text: "Temos backup automático local ou em nuvem simples (ex: Google Drive, Dropbox)", points: 2 },
        { text: "Backup automatizado com redundância geográfica, testes de restauração regulares", points: 3 }
      ]
    },
    {
      question: "Como novas versões de sistemas ou atualizações são enviadas para produção?",
      options: [
        { text: "Tudo é enviado manualmente via FTP/SFTP, gerando quedas e instabilidades ocasionais", points: 1 },
        { text: "Usamos versionamento (Git) mas a publicação nos servidores ainda é manual", points: 2 },
        { text: "Esteira de CI/CD automatizada com infraestrutura como código (IaC) e deploy sem downtime", points: 3 }
      ]
    },
    {
      question: "O que ocorre quando um sistema crítico (ex: ERP, E-commerce, API) cai?",
      options: [
        { text: "A empresa para. Esperamos o técnico externo ou tentamos resolver sozinhos (pode levar horas/dias)", points: 1 },
        { text: "Temos suporte de TI básico em horário comercial, mas ficamos vulneráveis de noite e fins de semana", points: 2 },
        { text: "Temos monitoramento ativo 24/7 que detecta falhas e atua de forma proativa", points: 3 }
      ]
    }
  ];

  const handleStart = () => {
    setCurrentStep(1);
    setAnswers([]);
  };

  const handleAnswer = (points) => {
    const newAnswers = [...answers, points];
    setAnswers(newAnswers);
    
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(questions.length + 1); // Go to results
    }
  };

  const getResults = () => {
    const score = answers.reduce((acc, curr) => acc + curr, 0);
    let title = "";
    let description = "";
    let color = "";
    
    if (score <= 8) {
      title = "Maturidade TI Crítica";
      description = "Sua TI apresenta riscos operacionais graves. A ausência de redundâncias e backups confiáveis, combinada com vulnerabilidades de segurança, pode gerar grandes perdas financeiras por lentidão, invasões ou perda de dados. Recomendamos uma auditoria de diagnóstico urgente.";
      color = "#ef4444"; // red
    } else if (score <= 12) {
      title = "Maturidade TI Intermediária";
      description = "Sua empresa já possui boas práticas de tecnologia, mas ainda carece de automação (CI/CD), políticas de conformidade avançadas de segurança e monitoramento ativo 24/7. Pequenos ajustes de arquitetura de nuvem e automações podem economizar tempo e blindar seus sistemas.";
      color = "#eab308"; // yellow
    } else {
      title = "Maturidade TI Avançada";
      description = "Parabéns! Sua infraestrutura de tecnologia está bem madura. Seus processos contam com segurança ativa, nuvem estruturada e alguma automação. O foco agora deve ser na otimização fina de custos de infraestrutura e inovação contínua de software.";
      color = "#10b981"; // green
    }

    return { score, title, description, color };
  };

  const handleShareWhatsApp = (result) => {
    const message = `Olá ML InfoTech! Fiz o teste de Diagnóstico de TI e meu score foi de ${result.score}/15 (${result.title}). Gostaria de um diagnóstico detalhado com um especialista.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5531996140045?text=${encodedMessage}`, '_blank');
  };

  return html`
    <section id="quiz" className="section quiz-section">
      <div className="container">
        <div className="section-header">
          <h2>Diagnóstico de TI</h2>
          <p>Descubra o nível de maturidade tecnológica e cibersegurança da sua empresa em menos de 2 minutos.</p>
        </div>
        
        <div className="quiz-box">
          ${currentStep === 0 && html`
            <div className="quiz-intro">
              <div className="quiz-intro-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3>Mapeamento de Infraestrutura Digital</h3>
              <p>Responda a 5 perguntas rápidas formuladas por nossos engenheiros seniores e obtenha um score de maturidade tecnológica com recomendações para seu negócio.</p>
              <button className="btn btn-primary" onClick=${handleStart}>Iniciar Diagnóstico</button>
            </div>
          `}

          ${currentStep > 0 && currentStep <= questions.length && html`
            <div className="quiz-question-container">
              <div className="quiz-progress-bar">
                <div className="quiz-progress-fill" style=${{ '--progress-width': `${(currentStep / questions.length) * 100}%` }}></div>
              </div>
              <span className="quiz-step-indicator">Pergunta ${currentStep} de ${questions.length}</span>
              <h3 className="quiz-question-title">${questions[currentStep - 1].question}</h3>
              
              <div className="quiz-options-list">
                ${questions[currentStep - 1].options.map((option, idx) => html`
                  <button key=${idx} className="quiz-option-btn" onClick=${() => handleAnswer(option.points)}>
                    <span className="quiz-option-letter">${String.fromCharCode(65 + idx)}</span>
                    <span className="quiz-option-text">${option.text}</span>
                  </button>
                `)}
              </div>
            </div>
          `}

          ${currentStep > questions.length && (() => {
            const result = getResults();
            return html`
              <div className="quiz-result-container">
                <div className="quiz-result-header">
                  <h3>Seu Resultado:</h3>
                  <div className="quiz-score-badge" style=${{ '--quiz-color': result.color }}>
                    <span>${result.score}</span> / 15
                  </div>
                  <h4 className="quiz-result-title">${result.title}</h4>
                </div>
                
                <p className="quiz-result-desc">${result.description}</p>
                
                <div className="quiz-result-actions">
                  <button className="btn btn-primary" onClick=${() => handleShareWhatsApp(result)}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon-inline">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    Falar com Especialista no WhatsApp
                  </button>
                  <button className="btn btn-secondary" onClick=${handleStart}>Refazer Teste</button>
                </div>
              </div>
            `;
          })()}
        </div>
      </div>
    </section>
  `;
}
