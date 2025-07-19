// components/UserModal.tsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUserStore } from '../data/UserStore';

export const UserModal = () => {
  const { selectedUser, setUser } = useUserStore();

  return (
    <AnimatePresence>
      {selectedUser && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setUser(null)}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={() => setUser(null)}>✕</button>
            <h2>{selectedUser.firstName} {selectedUser.lastName}</h2>
            <img src={selectedUser.image} alt="user" className="modal-img" />
            <p>{selectedUser.email}</p>
            <p>Teléfono: {selectedUser.phone}</p>
            <p>Ocupación: {selectedUser.company.title}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
