import React, { useState } from 'react';
import { UserCard } from '../components/usercard';
import { UserModal } from '../components/UserModal';
import { useUserStore } from '../data/UserStore';

export default function Servicios({ servicios }) {
  const [servicioSeleccionado, setServicioSeleccionado] = useState('');
  const [usuariosFiltrados, setUsuariosFiltrados] = useState([]);
  const setUsuarioSeleccionado = useUserStore(state => state.setUsuarioSeleccionado);

  const handleBuscar = () => {
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
            <div
              key={usuario.id}
              onClick={() => setUsuarioSeleccionado(usuario)}
              style={{ cursor: 'pointer' }}
            >
              <UserCard usuario={usuario} />
            </div>
          ))}
        </div>
      )}

      {/* Modal que se abre al hacer clic en una tarjeta */}
      <UserModal />
    </div>
  );
}
