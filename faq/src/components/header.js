import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom para la navegación
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo Samm" />
      </div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#sammWeb">SammWeb</a>
        <a href="#sammNew">SammNew</a>
        <a href="#sammApi">SammApi</a>
        <a href="#appTecnicos">AppTecnicos</a>
        <a href="#sammAi">SammAI</a>
        <Link to="/registro">Registro</Link>  {/* Enlace a la página de registro */}
      </nav>
    </header>
  );
};

export default Header;
