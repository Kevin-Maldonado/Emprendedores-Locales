import React, { useEffect, useState } from 'react';

const USUARIOS_POR_PAGINA = 20;

export default function Portafolio() {
  const [usuarios, setUsuarios] = useState([]);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=100')
      .then(res => res.json())
      .then(data => setUsuarios(data.users));
  }, []);

  // Calcular los usuarios a mostrar en la página actual
  const inicio = (pagina - 1) * USUARIOS_POR_PAGINA;
  const fin = inicio + USUARIOS_POR_PAGINA;
  const usuariosPagina = usuarios.slice(inicio, fin);

  const totalPaginas = Math.ceil(usuarios.length / USUARIOS_POR_PAGINA);

  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Portafolio de Usuarios</h2>
      <div className="usuarios-grid-4x4">
        {usuariosPagina.map(usuario => (
          <div className="usuario-card" key={usuario.id}>
            <img src={usuario.image} alt={`${usuario.firstName} ${usuario.lastName}`} className="usuario-img" />
            <h3>{usuario.firstName} {usuario.lastName}</h3>
            <p className="usuarios-ocupacion">Ocupacion: {usuario.company.title}</p>
            <p className="usuario-desc">{usuario.email}</p>
            <p className='usuario-telefono'>{usuario.phone || 'Sin teléfono'}</p>
            <p className="usuario-email">Aquí puedes poner una breve descripción del usuario.</p>
            <div className="usuario-extra">
              <span>Valoración: {(Math.random() * 4 + 1).toFixed(1)}/5⭐</span>
              <span>Likes: {usuario.bank?.cardNumber?.slice(-2) || Math.floor(Math.random()*100)}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{textAlign: 'center', margin: '2em 0'}}>
        <button
          className="boton-verde-pequeño"
          onClick={() => setPagina(pagina - 1)}
          disabled={pagina === 1}
        >
          Anterior
        </button>
        <span style={{margin: '0 1em'}}>Página {pagina} de {totalPaginas}</span>
        <button
          className="boton-verde-pequeño"
          onClick={() => setPagina(pagina + 1)}
          disabled={pagina === totalPaginas}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}