import React, { useState } from "react";
import "../styles/Projects.css";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const projects = [
    {
      id: 1,
      title: "Projeto 1",
      description: "Descrição do Projeto 1.",
      details: "Tecnologias: Angular, Spring Boot, MySQL.",
    },
    {
      id: 2,
      title: "Projeto 2",
      description: "Descrição do Projeto 2.",
      details: "Tecnologias: Angular, Spring Boot, MySQL.",
    },
    {
      id: 3,
      title: "Projeto 3",
      description: "Descrição do Projeto 3.",
      details: "Tecnologias: Angular, Spring Boot, MySQL.",
    },
    {
      id: 4,
      title: "Projeto 4",
      description: "Descrição do Projeto 4.",
      details: "Tecnologias: Angular, Spring Boot, MySQL.",
    },
    {
      id: 5,
      title: "Projeto 5",
      description: "Descrição do Projeto 5.",
      details: "Tecnologias: Angular, Spring Boot, MySQL.",
    },
    {
      id: 6,
      title: "Projeto 6",
      description: "Descrição do Projeto 6.",
      details: "Tecnologias: Angular, Spring Boot, MySQL.",
    },
    {
      id: 7,
      title: "Projeto 7",
      description: "Descrição do Projeto 7.",
      details: "Tecnologias: Angular, Spring Boot, MySQL.",
    },
    {
      id: 8,
      title: "Projeto 8",
      description: "Descrição do Projeto 8.",
      details: "Tecnologias: Angular, Spring Boot, MySQL.",
    },
    {
      id: 9,
      title: "Projeto 9",
      description: "Descrição do Projeto 9.",
      details: "Tecnologias: Angular, Spring Boot, MySQL.",
    },
    {
      id: 10,
      title: "Projeto 10",
      description: "Descrição do Projeto 10.",
      details: "Tecnologias: Angular, Spring Boot, MySQL.",
    },
  ];

  const toggleDetails = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section className="projects">
      <h2>Meus Projetos</h2>
      <div className="projects-wrapper">
        <div className="projects-scroll">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button
                className="details-button"
                onClick={() => toggleDetails(project.id)}
              >
                {expandedProject === project.id
                  ? "Esconder Detalhes"
                  : "Ver Detalhes"}
              </button>
              {expandedProject === project.id && (
                <div className="project-details">
                  <p>{project.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
