import React from "react";
import { Linkedin, Github } from "lucide-react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <p>© 2025 Ana Andrades Portfólio. Todos os direitos reservados.</p>
      <div className="social-icons">
        <a
          href="https://linkedin.com/in/anaandrades08"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visite meu perfil no LinkedIn"
        >
          <Linkedin size={32} color="#0077b5" />
        </a>
        <a
          href="https://github.com/anaandrades08"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visite meu perfil no GitHub"
        >
          <Github size={32} color="#000" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
