import React from "react";
import '../assets/styles/Project.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import Hearts from '../assets/images/hearts.png';
import Ecommerce from '../assets/images/E commerce.png';
import gestordeturnos from '../assets/images/gestor de turnos.png';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
};

const projects: Project[] = [
  {
    title: 'HeartsAndPaws',
    description: 'Plataforma web para ONGs de animales. Registro de mascotas, publicación de casos (adopción/donación), gestión de solicitudes y chat en tiempo real.',
    image: Hearts,
    tags: ['React', 'Next.js', 'TypeScript', 'Socket.IO', 'Tailwind'],
    github: 'https://github.com/DMDeboraMoreira/HeartsAndPawsFront',
  },
  {
    title: 'E-commerce Full Stack',
    description: 'Plataforma con gestión de productos, historial de pedidos y perfiles de usuario. Autenticación JWT, testing con Jest y deploy productivo.',
    image: Ecommerce,
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'JWT', 'Jest'],
    github: 'https://github.com/DMDeboraMoreira/Ecommerce',
  },
  {
    title: 'Gestor de Turnos',
    description: 'API REST con arquitectura backend modular. CRUD completo, middleware, validaciones y manejo de errores organizados en capas.',
    image: gestordeturnos,
    tags: ['Node.js', 'Express', 'MongoDB', 'REST API'],
    github: 'https://github.com/DMDeboraMoreira/Gestor-de-turnos',
  },
];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Proyectos</h1>
      <p className="section-subtitle">Proyectos académicos que muestran mi stack técnico.</p>
      <div className="projects-grid">
        {projects.map(({ title, description, image, tags, github }, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-wrapper">
              <img src={image} alt={`${title} proyecto`} className="project-image" />
              <div className="project-overlay">
                <a href={github} target="_blank" rel="noreferrer" className="overlay-btn">
                  <GitHubIcon fontSize="small" /> Ver código
                </a>
              </div>
            </div>
            <div className="project-info">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="project-tags">
                {tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
              <a href={github} target="_blank" rel="noreferrer" className="project-link">
                <GitHubIcon fontSize="small" /> Ver en GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;