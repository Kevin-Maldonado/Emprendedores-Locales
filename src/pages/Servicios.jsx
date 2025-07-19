import React, { useState } from 'react';
import { UserCard } from '../components/usercard';
import { UserModal } from '../components/UserModal';

export default function Servicios({ servicios }) {
  const [servicioSeleccionado, setServicioSeleccionado] = useState('');
  const [usuariosFiltrados, setUsuariosFiltrados] = useState([]);

  const handleBuscar = () => {
    // Filtra los usuarios que coincidan con el servicio seleccionado
    const filtrados = servicios.filter(
      (servicio) => servicio.company.title === servicioSeleccionado
    );
    setUsuariosFiltrados(filtrados);
  };

const titulosUnicos = [
    ...new Set(
      (Array.isArray(servicios) ? servicios : []).map(
        (servicio) => servicio.company.title
      )
    ),
  ];
  return (
    <div>
      <h2 align="center">BUSCA MEDIANTE LOS SERVICIOS DISPONIBLES</h2>
      <div className="servicios-barra">
        <select
          className="servicios-select"
          value={servicioSeleccionado}
          onChange={(e) => setServicioSeleccionado(e.target.value)}
        >
          <option value="" disabled>
            Elige un servicio
          </option>
          {titulosUnicos.map((titulo) => (
            <option key={titulo} value={titulo}>
              {titulo}
            </option>
          ))}
        </select>
        <button className="boton-verde" onClick={handleBuscar}>
          BUSCAR
        </button>
      </div>
     {usuariosFiltrados.length > 0 && (
  <div className="usuarios-grid">
    {usuariosFiltrados.map((usuario) => (
      <div className="usuario-card" key={usuario.id}>
        <img src={usuario.image} alt={`${usuario.firstName} ${usuario.lastName}`} className="usuario-img" />
        <h3>{usuario.firstName} {usuario.lastName}</h3>
        <p className="usuario-desc">{usuario.email}</p>
        <p className='usuario-telefono'>{usuario.phone || 'Sin teléfono'}</p>
        <p className="usuario-email">Aqui se muestra una breve descripcion de los servicios que ofrece el usuario. Puedes incluir detalles como su experiencia, especialidades o cualquier otra información relevante.</p>
        <div className="usuario-extra">
          <span>Valoración: {(Math.random() * 4 + 1).toFixed(1)}/5⭐</span>
          <span>Likes: {usuario.bank?.cardNumber?.slice(-2) || Math.floor(Math.random()*100)}</span>
        </div>
      </div>
    ))}
  </div>
      )}
    </div>
  );
}
