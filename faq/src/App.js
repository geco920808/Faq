import logo from './logo.svg';
import React from 'react';
import Header from './components/header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
