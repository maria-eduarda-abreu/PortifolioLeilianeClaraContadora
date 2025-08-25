function App() {
  return (
    <div>
      <header className="main-header">
        <div className="logo-container">
          <img src="./img/Logo.png" alt="Leiliane Clara Contadora" />
        </div>
        <nav className="main-nav">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <div className="hero-section">
        <div className="hero-content">
          <h1>Leiliane Clara</h1>
          <p>Mais de 5 anos de experiência em contabilidade, oferecendo soluções completas para MEIs e empresas do Simples Nacional.</p>
          <div className="hero-buttons">
            <a href="#servicos" className="btn btn-primary">Conheça os Serviços</a>
            <a href="#contato" className="btn btn-secondary">Entre em Contato</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="./img/fotoLeiliane.png" alt="Leiliane Clara" />
        </div>
      </div>
      
      <section className="about-me-section">
        <div className="about-me-container">
          <h2>Sobre Mim</h2>
          <div className="about-me-content">
            <div className="about-me-info">
              <h3>Leiliane Martins Clara</h3>
              <div className="info-item">
                <span className="icon">📍</span>
                <p>Mineira, graduada pela FIEMG</p>
              </div>
              <div className="info-item">
                <span className="icon">📜</span>
                <p>CRC MG-131730/0-7</p>
              </div>
              <div className="info-item">
                <span className="icon">⏱️</span>
                <p>Mais de 5 anos de experiência</p>
              </div>
              <p>Especialista em regularização de empresas; abertura e fechamento de empresas, certificado digital, parcelamentos, desenquadramento; emissão de guias e serviços gerais para MEIs e empresas do Simples Nacional.</p>
            </div>
            <div className="services-offered-box">
              <p>Serviços oferecidos</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="services-container">
          <h2>Nossos Serviços</h2>
          <p className="services-subtitle">Oferecemos soluções completas em contabilidade para MEIs e empresas do Simples Nacional</p>
          <div className="services-grid">
            <div className="service-card">
              <span className="service-icon">🗂️</span>
              <h3>Regularização de Empresas</h3>
              <p>Colocamos sua empresa em dia com todas as obrigações legais e fiscais.</p>
            </div>
            <div className="service-card">
              <span className="service-icon">📄</span>
              <h3>Abertura de Empresas</h3>
              <p>Processo completo para abertura de sua empresa de forma rápida e segura.</p>
            </div>
            <div className="service-card">
              <span className="service-icon">🛡️</span>
              <h3>Certificado Digital</h3>
              <p>Emissão e renovação de certificados digitais para sua empresa.</p>
            </div>
            <div className="service-card">
              <span className="service-icon">💵</span>
              <h3>Parcelamentos</h3>
              <p>Negociação e parcelamento de débitos fiscais e previdenciários.</p>
            </div>
            <div className="service-card">
              <span className="service-icon">👨‍💼</span>
              <h3>Desenquadramento</h3>
              <p>Processo de desenquadramento do Simples Nacional quando necessário.</p>
            </div>
            <div className="service-card">
              <span className="service-icon">🧾</span>
              <h3>Emissão de Guias</h3>
              <p>Emissão de guias de pagamento e documentos fiscais.</p>
            </div>
          </div>
          <div className="specialized-card">
            <h3>Atendimento Especializado</h3>
            <p>Serviços gerais para MEIs e empresas do Simples Nacional</p>
            <div className="experience-badge">
              <span className="icon-check">✅</span> Mais de 5 anos de experiência
            </div>
          </div>
        </div>
      </section>

      {/* Nova Seção: Contato e Footer */}
      <section className="contact-section">
        <div className="contact-content">
          <h2>Entre em Contato</h2>
          <p className="contact-subtitle">Estou pronta para ajudar sua empresa. Entre em contato e vamos conversar!</p>
          <div className="contact-cards">
            <div className="contact-card">
              <span className="contact-icon">📱</span>
              <h3>WhatsApp</h3>
              <p>+55 (31) 9 8794-5753</p>
            </div>
            <div className="contact-card">
              <span className="contact-icon">📧</span>
              <h3>E-mail</h3>
              <p>contatoleilianecontadora@gmail.com</p>
            </div>
            <div className="contact-card">
              <span className="contact-icon">📷</span>
              <h3>Instagram</h3>
              <p>@leilianeclaracontadora</p>
            </div>
          </div>
          <a href="#" className="quote-button">
            Pronta para Atender
            <span>Solicite um orçamento sem compromisso</span>
          </a>
        </div>
      </section>

      <footer className="main-footer">
        <div className="footer-content">
          <img src="./img/Logo.png" alt="Logo Leiliane Clara Contadora" />
          <p className="footer-title">Contadora CRC MG-131730/0-7</p>
          <p className="footer-copyright">© {new Date().getFullYear()} Leiliane Clara. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);