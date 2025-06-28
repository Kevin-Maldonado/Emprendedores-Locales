export default function Navbar({ setPage }) { return <nav className="menu ">
      <button onClick={() => setPage('home')}>Inicio</button>
      <button onClick={() => setPage('servicios')}>Servicios</button>
      <button onClick={() => setPage('portafolio')}>Portafolio</button>
      <button onClick={() => setPage('contacto')}>Contacto</button>
    </nav>;
}