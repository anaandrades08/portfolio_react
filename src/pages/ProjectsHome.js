//ProjectsHome.js
import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCardHome.js"; // Importando o componente

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      //console.log("Iniciando a busca dos projetos...");
      try {
        const response = await fetch("https://kdtxsr-3000.csb.app/projects");
        if (!response.ok) {
          throw new Error("Erro ao buscar os projetos.");
        }
        const data = await response.json();
        //console.log("Dados recebidos da API:", data);
        setProjects(data);
      } catch (error) {
        //console.error("Erro durante a busca dos projetos:", error.message);
        console.error(error.message);
      } finally {
        setLoading(false);
        //console.log("Finalizado o carregamento dos projetos.");
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!projects.length) {
    return <p>Nenhum projeto encontrado.</p>;
  }

  return (
    <div>
      <ProjectCard projects={projects} />{" "}
      {/* Passando os dados de projetos para o ExibirProjetos */}
    </div>
  );
};

export default Projects;
