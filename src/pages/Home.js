import React from "react";
import "../styles/Home.css";
import Projects from "./ProjectsHome.js"; // Importando o componente Projects

function Home() {
  return (
    <div className="home-container">
      {/* Banner de Boas-Vindas */}
      <section className="banner" aria-labelledby="welcome-banner">
        <h1 id="welcome-banner">Bem-vindo ao Meu Portfólio</h1>
      </section>

      {/* Sobre Mim */}
      <section className="about-section" aria-labelledby="about-section">
        <h2 id="about-section">Sobre Mim</h2>
        <p>
          Sou uma desenvolvedora apaixonada por transformar ideias em soluções
          criativas e eficientes, enfrentando desafios complexos com inovação e
          dedicação.
        </p>
        <p>
          Com experiência em <strong>desenvolvimento de sistemas</strong>,{" "}
          <strong>desenvolvimento web</strong>, <strong>banco de dados</strong>{" "}
          e <strong>modelagem de dados</strong>, tenho a habilidade de criar
          soluções completas e funcionais que atendem às necessidades de
          negócios.
        </p>
        <p>
          Estou sempre em busca de novas tecnologias e metodologias para
          aprimorar meus conhecimentos e garantir que minhas entregas superem as
          expectativas.
        </p>
        <button
          onClick={() => (window.location.href = "/about")}
          aria-label="Ler mais sobre mim"
        >
          Ler Mais
        </button>
      </section>

      {/* Galeria de Projetos */}
      <section className="projects-section" aria-labelledby="projects-section">
        <h2 id="projects-section">Meus Projetos</h2>
        <Projects />{" "}
        {/* Componente de Projetos, onde os dados serão exibidos */}
      </section>

      {/* Contato */}
      <section className="contact-section" aria-labelledby="contact-section">
        <h2 id="contact-section">Entre em Contato</h2>
        <p>
          Tem um projeto em mente ou quer colaborar? Fique à vontade para me
          enviar uma mensagem!
        </p>
        <button
          onClick={() => (window.location.href = "/contact")}
          aria-label="Entrar em contato"
        >
          Fale Comigo
        </button>
      </section>
    </div>
  );
}

export default Home;
