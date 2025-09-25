import React, { useState } from "react";
import BeerList from "./components/BeerList/BeerList.js";
import "./App.css";
import emailjs from "@emailjs/browser"; // Import EmailJS

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brewery: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      // Enviar formulario a EmailJS
      await emailjs.send(
        "TU_SERVICIO_ID",      // reemplaza con tu Service ID
        "TU_TEMPLATE_ID",      // reemplaza con tu Template ID
        formData,              // datos del formulario como JSON
        "TU_PUBLIC_KEY"        // reemplaza con tu Public Key
      );

      setStatus("¡Formulario enviado con éxito!");
      setFormData({ name: "", email: "", brewery: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Error al enviar. Intenta nuevamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" id="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="brewery">Nombre de tu Cervecería</label>
        <input type="text" id="brewery" value={formData.brewery} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="message">Mensaje</label>
        <textarea id="message" value={formData.message} onChange={handleChange} required />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <button type="submit" className="cta-button primary">Enviar Mensaje</button>
        <a
          href="https://wa.me/59395539504?text=Hola,%20me%20gustaría%20solicitar%20una%20demo%20de%20ControlCerv"
          className="cta-button whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contactar por WhatsApp
        </a>
        {status && <p style={{ color: "white", marginTop: "0.5rem" }}>{status}</p>}
      </div>
    </form>
  );
}

function App() {
  const [showBeerManagement, setShowBeerManagement] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <nav className="nav container">
          <div className="logo">
            <span className="logo-icon">🍻</span>
            <span className="logo-text">ControlCerv</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#features">Características</a></li>
            <li><a href="#benefits">Beneficios</a></li>
            <li><a href="#how-it-works">Cómo Funciona</a></li>
            <li><a href="#breweries">Clientes</a></li>
            <li>
              <button
                className="nav-cta"
                onClick={() => setShowBeerManagement(v => !v)}
                style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
              >
                {showBeerManagement ? 'Volver al Inicio' : 'Gestión de Cervezas'}
              </button>
            </li>
          </ul>
          <button className="menu-toggle">☰</button>
        </nav>
      </header>

      {/* Contenido */}
      {showBeerManagement ? (
        <main style={{ paddingTop: 100 }}>
          <div className="container">
            <h1 className="section-title">Gestión de Cervezas</h1>
          </div>
          <BeerList />
        </main>
      ) : (
        <>
          {/* Aquí irían Hero, Features, Benefits, How It Works, Breweries, CTA Sections */}
          
          {/* Contact Section */}
          <section id="contact" className="contact-section">
            <div className="container">
              <h2 className="section-title">Contacta con Nosotros</h2>
              <p className="section-subtitle">¿Listo para optimizar tu cervecería? Déjanos tus datos y te contactaremos</p>
              <ContactForm />
            </div>
          </section>

          {/* Footer */}
          {/* ... sin cambios */}
        </>
      )}
    </div>
  );
}

export default App;
