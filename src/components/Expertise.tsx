import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const frontendTechs = ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "SASS"];
const backendTechs = ["Node.js", "Express", "PostgreSQL", "MongoDB", "JWT", "Jest", "REST API"];
const toolsTechs = ["Git", "GitHub", "Postman", "VS Code", "SCRUM", "WordPress"];
const aiTechs = ["n8n", "OpenRouter", "Synthesia", "Brandwatch", "MCP", "IA Generativa"];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Mis Tecnologías</h1>
        <p className="section-subtitle">Stack técnico y herramientas que uso en el día a día.</p>
        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-icon">
              <FontAwesomeIcon icon={faReact} size="2x" />
            </div>
            <h3>Frontend</h3>
            <p>
              Construyo interfaces dinámicas y accesibles con React y Next.js,
              con foco en rendimiento, diseño responsive y componentes reutilizables.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {frontendTechs.map((tech, index) => (
                <Chip key={index} className="chip" label={tech} />
              ))}
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <FontAwesomeIcon icon={faNodeJs} size="2x" />
            </div>
            <h3>Backend</h3>
            <p>
              Desarrollo APIs REST robustas con Node.js y Express, gestión de bases de datos
              SQL y NoSQL, autenticación con JWT y testing con Jest.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {backendTechs.map((tech, index) => (
                <Chip key={index} className="chip" label={tech} />
              ))}
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <FontAwesomeIcon icon={faWordpress} size="2x" />
            </div>
            <h3>Herramientas & CMS</h3>
            <p>
              Control de versiones con Git, gestión y optimización de sitios WordPress,
              testing de APIs con Postman y trabajo en equipo con metodologías ágiles.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {toolsTechs.map((tech, index) => (
                <Chip key={index} className="chip" label={tech} />
              ))}
            </div>
          </div>

          <div className="skill-card skill-card--highlight">
            <div className="skill-icon">
              <FontAwesomeIcon icon={faRobot} size="2x" />
            </div>
            <h3>IA & Automatización</h3>
            <p>
              Diseño e implementación de flujos automatizados con n8n, integración de
              modelos de IA vía OpenRouter y generación de contenido con Synthesia y Brandwatch.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {aiTechs.map((tech, index) => (
                <Chip key={index} className="chip" label={tech} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Expertise;