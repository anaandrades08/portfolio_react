//ProjectCard.js
import React, { useState, useEffect } from "react";

const ExibirProjetos = ({ projects }) => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleDetails = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <div className="projects">
      <h2 id="projects-title">Meus Projetos</h2>
      <div className="projects-wrapper">
        <div className="projects-scroll">
          {projects.map((project) => (
            <div
              className="project-card"
              key={project.id_proj}
              role="article"
              aria-labelledby={`project-name-${project.id_proj}`}
              aria-describedby={`project-description-${project.id_proj}`}
            >
              <h3
                id={`project-name-${project.id_proj}`}
                aria-label={project.nome_proj}
              >
                {project.nome_proj}
              </h3>
              <p
                id={`project-description-${project.id_proj}`}
                aria-label={project.descricao_proj}
              >
                {project.descricao_proj}
              </p>
              <button
                onClick={() => toggleDetails(project.id_proj)}
                aria-expanded={expandedProject === project.id_proj}
                aria-controls={`project-id-${project.id_proj}`}
                aria-labelledby={`project-name-${project.nome_proj} project-button-${project.id_proj}`}
              >
                {expandedProject === project.id_proj
                  ? "Esconder Detalhes"
                  : "Ver Detalhes"}
              </button>
              {expandedProject === project.id_proj && (
                <p
                  id={`project-details-${project.id_proj}`}
                  aria-label={project.tecnologia_proj}
                >
                  {project.tecnologia_proj}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <p
        id="project-length"
        aria-describedby={`project-length-${projects.length}`}
      >
        Total de projetos: {projects.length}
      </p>
    </div>
  );
};

export default ExibirProjetos;
