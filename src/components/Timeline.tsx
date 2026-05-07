import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faFolderOpen, faGraduationCap, faGavel } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

type ItemType = 'work' | 'project' | 'education' | 'legal';

type TimelineItem = {
  type: ItemType;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  tags?: string[];
  link?: string;
};

const timelineItems: TimelineItem[] = [
  {
    type: 'work',
    title: 'Desarrolladora Web & Automatización',
    subtitle: 'MMI Analytics – Media Monitor Internacional',
    date: 'Dic. 2025 – Mar. 2026',
    description: 'Gestión técnica de sitios WordPress (Grupo ICC, Fundación Emprende, Enrique Farez). Automatizaciones con n8n para publicación en blogs corporativos. Integración de modelos de IA vía OpenRouter. Flujos con Synthesia y Brandwatch.',
    tags: ['WordPress', 'n8n', 'OpenRouter', 'IA', 'Brandwatch'],
  },
  // {
  //   type: 'project',
  //   title: 'HeartsAndPaws – Full Stack Developer',
  //   subtitle: 'Proyecto Final Grupal | ONG',
  //   date: 'Jun. – Jul. 2025',
  //   description: 'Aplicación web para ONGs que ayudan a animales. Registro de mascotas, publicación de casos (adopción/donación), gestión de solicitudes y chat en tiempo real. Diseño responsive centrado en UX.',
  //   tags: ['React', 'Next.js', 'TypeScript', 'Socket.IO'],
  //   link: 'https://github.com/DMDeboraMoreira/HeartsAndPawsFront',
  // },
  // {
  //   type: 'project',
  //   title: 'E-commerce Full Stack',
  //   subtitle: 'Proyecto Académico',
  //   date: 'May. – Jun. 2025',
  //   description: 'Plataforma con gestión de productos, historial de pedidos y perfiles de usuario. Autenticación con JWT, testing con Jest y deploy en entorno productivo. API REST estructurada.',
  //   tags: ['Next.js', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Jest'],
  //   link: 'https://github.com/DMDeboraMoreira/Ecommerce',
  // },
  // {
  //   type: 'project',
  //   title: 'Gestión de Turnos – API REST',
  //   subtitle: 'Proyecto Académico',
  //   date: 'Mar. – Abr. 2025',
  //   description: 'Arquitectura backend modular con CRUD completo, middleware, validaciones y manejo de errores. Organización por capas: routes, controllers, services.',
  //   tags: ['Node.js', 'Express', 'MongoDB', 'REST API'],
  //   link: 'https://github.com/DMDeboraMoreira/Gestor-de-turnos',
  // },
  {
    type: 'education',
    title: 'n8n + MCP: Automatización y Agentes de IA',
    subtitle: 'Udemy – 18 horas',
    date: '2026',
    description: 'Automatización avanzada de flujos con n8n e integración de agentes de IA mediante Model Context Protocol (MCP).',
    tags: ['n8n', 'MCP', 'IA', 'Automatización'],
  },
  {
    type: 'education',
    title: 'Desarrollo Full Stack Web',
    subtitle: 'Soy Henry – Bootcamp intensivo',
    date: '2025',
    description: 'Formación intensiva en desarrollo de aplicaciones web full stack. +800 horas de código con foco en proyectos reales y metodologías ágiles.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'SCRUM'],
  },
  // {
  //   type: 'legal',
  //   title: 'Abogada Laboralista',
  //   subtitle: 'Estudio Jurídico Clich & Asociados – Buenos Aires',
  //   date: '2014 – 2025',
  //   description: 'Gestión de casos complejos y análisis técnico normativo. Desarrollé pensamiento lógico estructurado, argumentación técnica y comunicación clara en contextos de alta responsabilidad.',
  //   tags: ['Derecho Laboral', 'Análisis técnico', 'Comunicación'],
  // },
];

const typeConfig: Record<ItemType, { icon: any; color: string }> = {
  work:      { icon: faBriefcase,     color: '#5000ca' },
  project:   { icon: faFolderOpen,    color: '#7c3aed' },
  education: { icon: faGraduationCap, color: '#3b82f6' },
  legal:     { icon: faGavel,         color: '#8b5cf6' },
};

type Props = { mode?: string };

function Timeline({ mode }: Props) {
  const isDark = mode !== 'light';

  const cardStyle = isDark
    ? {
        background: '#161b22',
        color: '#fff',
        border: '1px solid #30363d',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        borderRadius: '12px',
      }
    : {
        background: '#ffffff',
        color: '#0d1116',
        border: '1px solid #e5e7eb',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        borderRadius: '12px',
      };

  const arrowStyle = isDark
    ? { borderRight: '7px solid #30363d' }
    : { borderRight: '7px solid #e5e7eb' };

  return (
    <div id="history">
      <div className="items-container">
        <h1>Trayectoria</h1>
        <p className="section-subtitle">Experiencia profesional, proyectos y formación.</p>
        <VerticalTimeline>
          {timelineItems.map(({ type, title, subtitle, date, description, tags, link }, index) => {
            const config = typeConfig[type];
            return (
              <VerticalTimelineElement
                key={index}
                className={`vertical-timeline-element--${type}`}
                contentStyle={cardStyle}
                contentArrowStyle={arrowStyle}
                date={date}
                iconStyle={{
                  background: config.color,
                  color: 'white',
                  boxShadow: `0 0 0 4px ${config.color}55`,
                }}
                icon={<FontAwesomeIcon icon={config.icon} />}
              >
                <h3 className="vertical-timeline-element-title">{title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
                <p>{description}</p>
                {tags && (
                  <div className="timeline-tags">
                    {tags.map((tag, i) => (
                      <span key={i} className="timeline-tag">{tag}</span>
                    ))}
                  </div>
                )}
                {link && (
                  <a href={link} target="_blank" rel="noopener noreferrer" className="timeline-link">
                    Ver código →
                  </a>
                )}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;