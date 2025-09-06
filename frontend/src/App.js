import React from 'react';
import './App.css';

function App() {
  // Función para desplazarse a la sección de contacto
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <nav className="nav container">
          <div className="logo">
            <span className="logo-icon">🍻</span>
            <span className="logo-text">ContrólCerv</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#features">Características</a></li>
            <li><a href="#benefits">Beneficios</a></li>
            <li><a href="#how-it-works">Cómo Funciona</a></li>
            <li><a href="#breweries">Clientes</a></li>
            <li><a href="#contact" className="nav-cta">Comenzar</a></li>
          </ul>
          <button className="menu-toggle">☰</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Transforma la Gestión de tu Cervecería Artesanal</h1>
            <p className="hero-subtitle">Sistema automatizado + Tienda Online + Control de inventario. Todo en una sola plataforma.</p>
            <div className="hero-cta">
              <button className="cta-button primary" onClick={scrollToContact}>Probar Gratis</button>
              <button className="cta-button secondary">Ver Demo</button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">-30%</span>
                <span className="stat-label">Pérdidas por caducidad</span>
              </div>
              <div className="stat">
                <span className="stat-number">+20%</span>
                <span className="stat-label">Aumento en ventas</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Disponible</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <span>📱 Dashboard ControlCerv</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Características Principales</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Gestión FIFO Automatizada</h3>
              <p>Control inteligente de inventario por fechas de caducidad. Nunca más pierdas productos vencidos.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛒</div>
              <h3>Tienda Online Integrada</h3>
              <p>Vende tus cervezas online con catálogo personalizado y gestión de pedidos automática.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⏰</div>
              <h3>Alertas Inteligentes</h3>
              <p>Notificaciones proactivas de productos próximos a vencer y stock bajo.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Reportes en Tiempo Real</h3>
              <p>Dashboard con métricas de ventas, rotación de inventario y rendimiento de productos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="benefits">
        <div className="container">
          <h2 className="section-title">Beneficios para tu Cervecería</h2>
          <div className="benefits-content">
            <div className="benefit-item">
              <h3>💰 Reduce Pérdidas</h3>
              <p>Hasta 30% menos de merma por caducidad con nuestro sistema FIFO automatizado.</p>
            </div>
            <div className="benefit-item">
              <h3>🚀 Aumenta Ventas</h3>
              <p>Tienda online integrada que te permite vender 24/7 sin complicaciones.</p>
            </div>
            <div className="benefit-item">
              <h3>⏱️ Ahorra Tiempo</h3>
              <p>Automatización de procesos que te libera para enfocarte en crear cerveza excepcional.</p>
            </div>
            <div className="benefit-item">
              <h3>📈 Toma Mejores Decisiones</h3>
              <p>Data en tiempo real sobre qué productos tienen mejor rotación y rentabilidad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2 className="section-title">Cómo Funciona ControlCerv</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Registra tus Lotes</h3>
              <p>Ingresa fechas de producción y caducidad de cada lote de cerveza.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Control Automatizado</h3>
              <p>El sistema prioriza automáticamente la venta de productos más antiguos.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Recibe Alertas</h3>
              <p>Notificaciones inteligentes sobre productos próximos a vencer.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Analiza y Crece</h3>
              <p>Reportes detallados para optimizar tu producción y ventas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Breweries Section - AQUÍ ESTÁ TU CÓDIGO MODIFICADO */}
      <BreweriesSection />

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>¿Listo para Transformar tu Cervecería?</h2>
          <p>Únete a las cervecerías artesanales que ya están usando ControlCerv</p>
          <button className="cta-button large" onClick={scrollToContact}>Comenzar Ahora</button>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="logo">
                <span className="logo-icon">🍻</span>
                <span className="logo-text">ControlCerv</span>
              </div>
              <p>Gestión inteligente para cervecerías artesanales</p>
            </div>
            <div className="footer-section">
              <h4>Contacto</h4>
              <p>info@controlcerv.com</p>
              <p>Quito, Ecuador</p>
            </div>
            <div className="footer-section">
              <h4>Legal</h4>
              <p>Términos de Servicio</p>
              <p>Política de Privacidad</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 ControlCerv. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Componente para la sección de cervecerías - AQUÍ ESTÁ TU CÓDIGO MODIFICADO
function BreweriesSection() {
  const [breweries, setBreweries] = React.useState([
    { 
      name: 'Cervecería Pikachu', 
      location: 'Pueblo Paleta', 
      since: '2023',
      specialty: 'Cerveza Eléctrica',
      theme: 'Pokémon'
    },
    { 
      name: 'Hulk Smash Brewing', 
      location: 'New York', 
      since: '2022',
      specialty: 'Cerveza Verde Energética',
      theme: 'Superhéroes'
    },
    { 
      name: 'Dragon Ball Z Brews', 
      location: 'Capsule Corp', 
      since: '2023',
      specialty: 'Cerveza Ultra Instinto',
      theme: 'Anime'
    },
    { 
      name: 'Star Wars Cantina', 
      location: 'Tatooine', 
      since: '2022',
      specialty: 'Cerveza de la Fuerza',
      theme: 'Películas'
    }
  ]);

  return (
    <section id="breweries" className="breweries-section">
      <div className="container">
        <h2 className="section-title">Nuestros Clientes: Cervecerías Artesanales</h2>
        <p className="section-subtitle">Inspírate con estas cervecerías que usan sistemas similares a ContrólCerv</p>
    
        <div className="breweries-grid">
          {breweries.map((brewery, index) => (
            <div key={index} className="brewery-card">
              <h3>{brewery.name}</h3>
              <p>📍 {brewery.location}</p>
              <p>🏷️ {brewery.specialty}</p>
              <p>🎭 Tema: {brewery.theme}</p>
              <p>Clientes desde {brewery.since}</p>
            </div>
          ))}
        </div>
    
        <div className="breweries-cta">
          <p>¿Quieres que tu cervecería aparezca aquí?</p>
          <button className="cta-button" onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({
                behavior: 'smooth'
              });
            }
          }}>Contáctanos</button>
        </div>
      </div>
    </section>
  );
}

// Componente para la sección de contacto
function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    brewery: '',
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
    alert('¡Gracias por tu interés! Te contactaremos pronto.');
    setFormData({
      name: '',
      email: '',
      brewery: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contacta con Nosotros</h2>
        <p className="section-subtitle">¿Listo para optimizar tu cervecería? Déjanos tus datos y te contactaremos</p>
        
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="brewery">Nombre de tu Cervecería</label>
              <input 
                type="text" 
                id="brewery" 
                name="brewery"
                value={formData.brewery}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required 
              ></textarea>
            </div>
            <button type="submit" className="cta-button primary">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default App;