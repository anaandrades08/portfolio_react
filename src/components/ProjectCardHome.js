//ProjectCardHome.js

import React, { useState } from "react";

const ExibirProjetos = ({ projects }) => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleDetails = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  // Limita para exibir apenas os 3 ultimos projetos
  const projectsToDisplay = projects.slice(0, 3);

  return (
    <div
      className="project-section-gallery"
      role="region"
      aria-label="Galeria de Projetos"
    >
      {projectsToDisplay.map((project) => (
        <div
          className="project-section-card"
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
        </div>
      ))}
    </div>
  );
};

export default ExibirProjetos;
