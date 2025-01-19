import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Link to="/">Meu Portfólio</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/projects">Projetos</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
