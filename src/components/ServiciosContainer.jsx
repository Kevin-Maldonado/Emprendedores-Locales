import React, { useEffect, useState } from 'react';
import Servicios from '../pages/Servicios';

export default function ServiciosContainer() {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        setServicios(data.users);
      });
  }, []);
  return <Servicios servicios={servicios} />;
}