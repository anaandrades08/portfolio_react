import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header" role="banner">
      <div className="header-titulo">
        <h1 id="Ana Andrades | Portfólio">
          <Link to="/" aria-label="Página inicial do portfólio de Ana Andrades">
            Ana Andrades | Portfólio
          </Link>
        </h1>
        <p>Desenvolvimento & Tecnologia</p>
      </div>
      <div className="header-links">
        <nav aria-label="Menu de navegação">
          <ul>
            <li id="Sobre" aria-label="Sobre">
              <Link to="/about">Sobre</Link>
            </li>
            <li id="Projetos" aria-label="Projetos">
              <Link to="/projects">Projetos</Link>
            </li>
            <li id="Contato" aria-label="Contato">
              <Link to="/contact">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
