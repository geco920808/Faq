import React, { useState } from 'react';
import './Registro.css';

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    contraseña: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos al servidor o API
    console.log('Formulario de registro enviado', formData);
  };

  return (
    <div className="registro-container">
      <h2>Registro De Preguntas Frecuentes</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Error">Pregunta o Novedad</label>
          <input
            type="text"
            id="Error"
            name="Error"
            value={formData.Error}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="erro_codigo">Codigo</label>
          <input
            type="text"
            id="erro_codigo"
            name="erro_codigo"
            value={formData.erro_codigo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="descripcion">Descripcion de la Novedad</label>
          <input
            type="text"
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="producto">producto</label>
          <input
            type="text"
            id="id_producto"
            name="producto"
            value={formData.contraseña}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="solucion">Solucion</label>
          <input
            type="text"
            id="solucion"
            name="solucion"
            value={formData.solucion}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="link_video">Link del video </label>
          <input
            type="link"
            id="link_video"
            name="link_video"
            value={formData.link_video}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Registro;
