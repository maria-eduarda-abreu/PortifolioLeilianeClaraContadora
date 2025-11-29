// --- Dados dos Serviços (Data-Driven) ---
// Isso facilita adicionar ou remover serviços sem mexer no HTML
const servicesData = [
  { icon: "🗂️", title: "Regularização de Empresas", desc: "Colocamos sua MEI, ME ou EPP em dia com todas as obrigações." },
  { icon: "📄", title: "Abertura de Empresas", desc: "Processo completo para abertura de sua empresa de forma rápida." },
  { icon: "🛡️", title: "Certificado Digital", desc: "Emissão e renovação de certificados digitais para sua empresa." },
  { icon: "💵", title: "Parcelamentos", desc: "Negociação e parcelamento de débitos fiscais e previdenciários." },
  { icon: "👨‍💼", title: "Desenquadramento", desc: "Apoio na transição de MEI para ME quando seu negócio crescer." },
  { icon: "🧾", title: "Emissão de Guias", desc: "Emissão de guias de pagamento e documentos fiscais mensais." }
];

// --- Componentes Menores ---

const Header = () => (
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
);

const Hero = () => (
  <div id="inicio" className="hero-section">
    <div className="hero-content">
      <h1>Leiliane Clara</h1>
      {/* Texto atualizado para incluir ME e EPP conforme seu pedido */}
      <p>Contabilidade especializada para <strong>MEI, ME e EPP</strong>. Mais de 5 anos de experiência oferecendo segurança e tranquilidade para o seu negócio.</p>
      <div className="hero-buttons">
        <a href="#servicos" className="btn btn-primary">Conheça os Serviços</a>
        <a href="#contato" className="btn btn-secondary">Entre em Contato</a>
      </div>
    </div>
    <div className="hero-image">
      <img src="./img/fotoLeiliane.png" alt="Leiliane Clara" />
    </div>
  </div>
);

const About = () => (
  <section id="sobre" className="about-me-section">
    <div className="about-me-container">
      <h2>Sobre Mim</h2>
      <div className="about-me-content">
        <div className="about-me-info">
          <h3>Leiliane Martins Clara</h3>
          <div className="info-item"><span className="icon">📍</span><p>Mineira, graduada pela FIEMG</p></div>
          <div className="info-item"><span className="icon">📜</span><p>CRC MG-131730/0-7</p></div>
          <div className="info-item"><span className="icon">⏱️</span><p>Mais de 5 anos de experiência</p></div>
          <p>Especialista em regularização, abertura e gestão tributária para micro e pequenas empresas (Simples Nacional).</p>
        </div>
        <div className="services-offered-box">
          <p>Serviços personalizados</p>
        </div>
      </div>
    </div>
  </section>
);

// Aqui usamos o map() para gerar os cards automaticamente baseados na lista lá de cima
const Services = () => (
  <section id="servicos" className="services-section">
    <div className="services-container">
      <h2>Nossos Serviços</h2>
      <p className="services-subtitle">Soluções completas para MEIs, Microempresas (ME) e Empresas de Pequeno Porte (EPP)</p>
      
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>

      <div className="specialized-card">
        <h3>Atendimento Especializado</h3>
        <p>Foco total no Simples Nacional</p>
        <div className="experience-badge">
          <span className="icon-check">✅</span> Mais de 5 anos de experiência
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contato" className="contact-section">
    <div className="contact-content">
      <h2>Entre em Contato</h2>
      <p className="contact-subtitle">Vamos regularizar ou abrir sua empresa? Chame agora!</p>
      <div className="contact-cards">
        <div className="contact-card">
          <span className="contact-icon">📱</span>
          <h3>WhatsApp</h3>
          <p><a href="https://wa.me/5531987945753" style={{color: '#d78a1d', textDecoration: 'none'}}>+55 (31) 9 8794-5753</a></p>
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
      <a href="https://wa.me/5531987945753" className="quote-button">
        Falar com a Contadora
        <span>Solicite um orçamento sem compromisso</span>
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="main-footer">
    <div className="footer-content">
      <img src="./img/Logo.png" alt="Logo Leiliane Clara" />
      <p className="footer-title">Contadora CRC MG-131730/0-7</p>
      <p className="footer-copyright">© {new Date().getFullYear()} Leiliane Clara. Todos os direitos reservados.</p>
    </div>
  </footer>
);

// --- Componente Principal ---
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);