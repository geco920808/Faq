import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/piePag';
import Registro from './components/Registro'; // Componente para el formulario de registro
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/registro" element={<Registro />} /> {/* Ruta para el formulario de registro */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
