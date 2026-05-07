import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://github.com/DMDeboraMoreira" target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/debo-moreira/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&to=debomoreira243@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
          <EmailIcon />
        </a>
      </div>
      <p className="footer-text">
        Diseñado y desarrollado con 💜 por <strong>Débora Moreira</strong>
      </p>
      <p className="footer-sub">Buenos Aires, Argentina · {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
