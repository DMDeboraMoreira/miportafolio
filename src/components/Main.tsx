import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';
import perfilImg from '../assets/images/perfil.jpg';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <div className="image-ring">
            <img src={perfilImg} alt="Débora Moreira - Full Stack Developer" />
          </div>
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/DMDeboraMoreira" target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/debo-moreira/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&to=debomoreira243@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
              <EmailIcon />
            </a>
            {/* <a href="mailto:debomoreira243@gmail.com" className="contact-link">
                <span className="contact-link-icon"><EmailIcon /></span>
                <span>debomoreira243@gmail.com</span>
              </a> */}
          </div>
          <p className="greeting">Hola, soy</p>
          <h1>Débora Moreira</h1>
          <p className="greeting">Desarrolladora Full Stack</p>

          {/* <p className="bio">
            Construyo interfaces modulares y escalables con <strong>React</strong> y <strong>Next.js</strong>,
            integro <strong>APIs REST</strong>, desarrollo backend con <strong>Node.js</strong>{' '}
            y automatizo procesos con <strong>IA</strong>. Buenos Aires, Argentina 🇦🇷
          </p> */}
          
          <div className="hero-cta">
            <a href="https://www.linkedin.com/in/debo-moreira/" target="_blank" rel="noreferrer" className="btn-primary">
              Ver LinkedIn
            </a>
            <a href="https://github.com/DMDeboraMoreira" target="_blank" rel="noreferrer" className="btn-secondary">
              <GitHubIcon style={{ fontSize: '1.1rem' }} /> GitHub
            </a>
          </div>
          <div className="mobile_social_icons">
            <a href="https://github.com/DMDeboraMoreira" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/debo-moreira/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="https://mail.google.com/mail/?view=cm&to=debomoreira243@gmail.com" target="_blank" rel="noreferrer"><EmailIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;