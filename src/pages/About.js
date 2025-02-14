import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-about" role="region" aria-labelledby="about-me">
        <h2 id="about-title">Olá! Eu sou Ana Andrades</h2>
        <p>
          Sou desenvolvedora web com uma forte paixão por criar soluções
          interativas e de alto desempenho. Ao longo da minha carreira, tive a
          oportunidade de trabalhar em diversos projetos desafiadores, que me
          permitiram explorar uma ampla gama de tecnologias.
        </p>
        <p>
          Meu foco está em{" "}
          <strong>entregar experiências de usuário excepcionais</strong> e
          garantir <strong>código limpo e eficiente</strong>. Tenho experiência
          tanto no desenvolvimento de sites dinâmicos quanto na criação de
          aplicativos modernos, sempre com a intenção de resolver problemas
          reais de maneira criativa.
        </p>
        <p>
          Neste portfólio, você encontrará uma seleção dos meus trabalhos mais
          recentes, bem como as tecnologias que utilizo para construir soluções
          inovadoras. Vamos juntos criar algo incrível!
        </p>
      </div>
      <div className="about-tecno" role="region" aria-labelledby="skills-title">
        <h3 id="skills-title">Habilidades</h3>
        <p>C++ | C# | JAVA | Delphi | Node.JS | PHP | Python</p>
        <p>CSS | HTML | Javascript | TypeScript</p>
        <p>React | Laravel | Django</p>
        <p>SQL Server | MySql | SQLite | PostgreSQL</p>
      </div>
      <div
        className="portfolio-about"
        role="region"
        aria-describedby="portfolio-description"
      >
        <p id="portfolio-description">
          Este Portfólio está sendo desenvolvido com Front-End React, Back-End
          Node.JS e BD PostgreSQL.
        </p>
      </div>
    </section>
  );
};

export default About;
