import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Banner de Boas-Vindas */}
      <section className="banner">
        <h1>Bem-vindo ao Meu Portfólio</h1>
      </section>

      {/* Sobre Mim */}
      <section className="about-me">
        <p>
          Sou uma desenvolvedora apaixonada por criar soluções criativas e
          eficientes para problemas complexos.
        </p>
        <p>
          Tenho experiência em desenvolvimento de sistemas, desenvolvimento web,
          banco de dados e modelagem de dados.
        </p>
        <p>
          Sempre busco aprender novas tecnologias para entregar o melhor
          resultado possível.
        </p>
      </section>

      {/* Galeria de Projetos */}
      <section className="projects">
        <h2>Meus Projetos</h2>
        <div className="project-gallery">
          <div className="project-card">
            <h3>Projeto 1</h3>
            <p>Descrição breve do projeto. Veja mais detalhes!</p>
          </div>
          <div className="project-card">
            <h3>Projeto 2</h3>
            <p>Descrição breve do projeto. Veja mais detalhes!</p>
          </div>
          <div className="project-card">
            <h3>Projeto 3</h3>
            <p>Descrição breve do projeto. Veja mais detalhes!</p>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="contact-cta">
        <h2>Entre em Contato</h2>
        <p>
          Tem um projeto em mente ou quer colaborar? Fique à vontade para me
          enviar uma mensagem!
        </p>
        <button onClick={() => (window.location.href = "/contact")}>
          Fale Comigo
        </button>
      </section>
    </div>
  );
}

export default Home;
