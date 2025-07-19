// components/UserCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useUserStore } from '../data/UserStore';

export const UserCard = ({ usuario }) => {
  const setUser = useUserStore((state) => state.setUser);

  return (
    <motion.div
      className="usuario-card"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300 }}
      onClick={() => setUser(usuario)}
    >
      <img src={usuario.image} alt={`${usuario.firstName} ${usuario.lastName}`} className="usuario-img" />
      <h3>{usuario.firstName} {usuario.lastName}</h3>
      <p className="usuarios-ocupacion">Ocupación: {usuario.company.title}</p>
      <p className="usuario-desc">{usuario.email}</p>
      <p className="usuario-telefono">{usuario.phone || 'Sin teléfono'}</p>
      <p className="usuario-email">Aquí puedes poner una breve descripción del usuario.</p>
      <div className="usuario-extra">
        <span>Valoración: {(Math.random() * 4 + 1).toFixed(1)}/5⭐</span>
        <span>Likes: {usuario.bank?.cardNumber?.slice(-2) || Math.floor(Math.random() * 100)}</span>
      </div>
    </motion.div>
  );
};
