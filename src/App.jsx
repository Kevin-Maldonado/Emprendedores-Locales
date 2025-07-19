import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Home';
import FormularioContacto from './pages/Contacto';
import GaleriaPortafolio from './pages/Portafolio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServiciosContainer from './components/ServiciosContainer';
import React from 'react';
export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<ServiciosContainer />} />
          <Route path="/portafolio" element={<GaleriaPortafolio />} />
          <Route path="/contacto" element={<FormularioContacto />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

