import Header from './components/Header';
import { useState } from 'react';
import Footer from './components/Footer';
import Inicio from './pages/Home';
import Servicios from './pages/Servicios';
import FormularioContacto from './pages/Contacto';
import GaleriaPortafolio from './pages/Portafolio';

export default function App() {
  const [pagina, setPagina] = useState('home');
  return (
    <>
      <Header setPage={setPagina} />

      <main>{renderPagina()}</main>

      <Footer />
    </>
  );
  function renderPagina() {
    switch (pagina) {
      case 'servicios':
        return <Servicios />;
      case 'portafolio':
        return <GaleriaPortafolio />;
      case 'contacto':
        return <FormularioContacto />;
      default:
        return <Inicio />;

    }
  }
 }
   
  