import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  
  const closeModal = () => {
    setShowLogin(false);
    setShowRegister(false);
  };
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-title">
          <h1>Emprendedores Unidos</h1>
        </div>
        <div className="header-buttons">
          <button className="boton-header"  onClick={() => {
            setShowLogin(true);
            setShowRegister(false);
          }}>Inicio de sesión</button>

          <button className="boton-header"  onClick={() => {
            setShowRegister(true);
            setShowLogin(false);
          }}>Registro</button>
        </div>
        {(showLogin || showRegister) && (
        <div className="overlay" onClick={closeModal}>
          <div className="formulario" onClick={(e) => e.stopPropagation()}>
             <button className="close-button" onClick={closeModal}>✕</button>
            <h2>{showLogin ? 'Inicio de Sesión' : 'Registro'}</h2>
            <input type="text" placeholder="Usuario" required />
            {showRegister && <input type="email" placeholder="Correo" required />}
            <input type="password" placeholder="Contraseña" required />
            <button type="submit" className="submit-button">
              {showLogin ? 'Entrar' : 'Registrarse'}
            </button>
          </div>
        </div>
      )}
      </div>
      <nav className="menu">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/servicios">Servicios</Link>
          </li>
          <li>
            <Link to="/portafolio">Portafolio</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}