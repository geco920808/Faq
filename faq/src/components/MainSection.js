import React from 'react';
import './MainSection.css';

const MainSection = () => {
  return (
    <main className="main-section">
      <div className="text-content">
        <h1>¿Qué son las Preguntas Frecuentes Samm?</h1>
        <p>
          Son aquellas dudas o novedades que tenemos frecuentemente al momento
          de usar nuestro programa Samm. Esta guía te permitirá conocer
          novedades o mensajes de errores que pueden presentarse en la
          plataforma y cuáles puedes dar una solución.
        </p>
        <p>
          Dirigidas a todos los productos que manejamos y son algunas
          recomendaciones basándonos en una parametrización estándar o en
          novedades frecuentes que se pueden presentar.
        </p>
      </div>
      <div className="image-content">
        <img src="/faqs.jpg" alt="Preguntas frecuentes" />
      </div>
    </main>
  );
};

export default MainSection;
