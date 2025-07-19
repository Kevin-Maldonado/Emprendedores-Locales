import React, { useState } from 'react';

export default function Contacto() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    ocupacion: '',
    foto: '',
    descripcion: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'foto') {
      setForm({ ...form, foto: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Formulario enviado!\n' + JSON.stringify(form, null, 2));
    setMostrarFormulario(false);
    setForm({
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      ocupacion: '',
      foto: '',
      descripcion: ''
    });
  };

  return (
    <div className="contacto-container">
      <h2>Contactanos</h2>
      <div className="contacto-info">
        <p><strong>Teléfono:</strong> +52 123 456 7890</p>
        <p><strong>Correo:</strong> contacto@emprendedores.com</p>
      </div>
      <button className="boton-verde" onClick={() => setMostrarFormulario(true)}>
        ÚNETE
      </button>
      {mostrarFormulario && (
        <form className="form-unete" onSubmit={handleSubmit}>
          <h3>Formulario de Registro</h3>
          <div className="form-row">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={form.nombre}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={form.apellido}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              name="correo"
              placeholder="Correo"
              value={form.correo}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              value={form.telefono}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="ocupacion"
            placeholder="Ocupación"
            value={form.ocupacion}
            onChange={handleChange}
            required
          />
         <label className="label-foto">
            Foto
            <input
            type="file"
            name="foto"
            accept="image/*"
            onChange={handleChange}
             style={{marginLeft: '1em'}}
             />
         </label>
          <textarea
            name="descripcion"
            placeholder="Breve descripción"
            value={form.descripcion}
            onChange={handleChange}
            required
            rows={3}
          />
          <div className="form-row">
            <button className="boton-verde" type="submit">Enviar</button>
            <button className="boton-cancelar" type="button" onClick={() => setMostrarFormulario(false)}>Cancelar</button>
          </div>
        </form>
      )}
    </div>
  );
}