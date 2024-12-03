import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo Samm" />
      </div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#sammweb">SammWeb</a>
        <a href="#sammapi">SammApi</a>
        <a href="#apptecnicos">AppTecnicos</a>
        <a href="#sammai">SammAI</a>
      </nav>
    </header>
  );
};

export default Header;
