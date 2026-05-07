import React, { useState, FormEvent } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import emailjs from '@emailjs/browser';
import '../assets/styles/Contact.scss';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus('loading');
    const templateParams = { name, email, message };

    emailjs
      .send('service_7bymypg', 'template_nepo48f', templateParams, 'm6cfnBCpJNEy1j7N9')
      .then(() => emailjs.send('service_7bymypg', 'template_id76bp6', templateParams, 'm6cfnBCpJNEy1j7N9'))
      .then(() => {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setStatus('error');
      });
  };

  return (
    <div id="contact" className="contact-section">
      <div className="items-container">
        <div className="contact-wrapper">

          <div className="contact-info">
            <h1>Contacto</h1>
            <p className="section-subtitle">¿Tenés un proyecto o querés charlar? ¡Escribime!</p>
            <h3>Conectemos</h3>
            <p>
              Estoy disponible para proyectos freelance, oportunidades laborales
              y colaboraciones. ¡No dudes en escribirme!
            </p>
            <div className="contact-links">
              <a href="https://mail.google.com/mail/?view=cm&to=debomoreira243@gmail.com" target="_blank" rel="noreferrer" className="contact-link">
                <span className="contact-link-icon"><EmailIcon /></span>
                <span>debomoreira243@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/debo-moreira/" target="_blank" rel="noreferrer" className="contact-link">
                <span className="contact-link-icon"><LinkedInIcon /></span>
                <span>linkedin.com/in/debo-moreira</span>
              </a>
              <a href="https://github.com/DMDeboraMoreira" target="_blank" rel="noreferrer" className="contact-link">
                <span className="contact-link-icon"><GitHubIcon /></span>
                <span>github.com/DMDeboraMoreira</span>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="contact-name">Tu nombre</label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Nombre completo"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Tu email</label>
              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="correo@ejemplo.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Mensaje</label>
              <textarea
                id="contact-message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Contame sobre tu proyecto o propuesta..."
                rows={5}
                required
              />
            </div>

            {status === 'success' && (
              <div className="form-feedback form-feedback--success">
                ✅ ¡Mensaje enviado! Te respondo a la brevedad.
              </div>
            )}
            {status === 'error' && (
              <div className="form-feedback form-feedback--error">
                ❌ Hubo un error al enviar. Por favor, intentá de nuevo.
              </div>
            )}

            <button type="submit" className="btn-submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}