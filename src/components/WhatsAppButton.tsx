import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/WhatsAppButton.scss';

// Número Argentina: +54 11 7634-3424
const WA_LINK = 'https://wa.me/5491176343424?text=Hola%20D%C3%A9bora!%20Vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte.';

function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="wa-wrapper">
      {hovered && (
        <span className="wa-tooltip">¡Hablemos! 💬</span>
      )}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        className="wa-btn"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  );
}

export default WhatsAppButton;
