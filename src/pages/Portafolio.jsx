import React, { useEffect, useState } from 'react';
import { UserCard } from '../components/usercard';
import { UserModal } from '../components/UserModal';

const USUARIOS_POR_PAGINA = 20;

export default function Portafolio() {
  const [usuarios, setUsuarios] = useState([]);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=100')
      .then(res => res.json())
      .then(data => setUsuarios(data.users));
  }, []);

  const inicio = (pagina - 1) * USUARIOS_POR_PAGINA;
  const fin = inicio + USUARIOS_POR_PAGINA;
  const usuariosPagina = usuarios.slice(inicio, fin);
  const totalPaginas = Math.ceil(usuarios.length / USUARIOS_POR_PAGINA);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Portafolio de Usuarios</h2>
      <div className="usuarios-grid-4x4">
        {usuariosPagina.map(usuario => (
          <UserCard key={usuario.id} usuario={usuario} />
        ))}
      </div>

      <UserModal />

      <div style={{ textAlign: 'center', margin: '2em 0' }}>
        <button
          className="boton-verde-pequeno"
          onClick={() => setPagina(pagina - 1)}
          disabled={pagina === 1}
        >
          Anterior
        </button>
        <span style={{ margin: '0 1em' }}>Página {pagina} de {totalPaginas}</span>
        <button
          className="boton-verde-pequeno"
          onClick={() => setPagina(pagina + 1)}
          disabled={pagina === totalPaginas}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}