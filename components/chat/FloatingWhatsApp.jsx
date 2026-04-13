"use client"
import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '573117001527';
    const message = encodeURIComponent('Hola, me interesa conocer más sobre las soluciones RFID de WeTracking');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-24 z-50 w-14 h-14 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center group hover:shadow-[#25D366]/50 transition-all duration-300"
      aria-label="Contactar por WhatsApp"
    >
      {/* Logo de WhatsApp */}
      <svg className="w-8 h-8 text-white" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-4.713 1.262 1.262-4.669-0.321-0.527c-1.329-2.17-2.030-4.652-2.030-7.204 0-7.51 6.11-13.62 13.62-13.62s13.62 6.11 13.62 13.62-6.11 13.62-13.62 13.62zM21.305 19.26c-0.346-0.174-2.049-1.007-2.366-1.123-0.318-0.117-0.549-0.174-0.78 0.174s-0.896 1.123-1.099 1.349c-0.202 0.231-0.405 0.26-0.751 0.087-0.346-0.174-1.461-0.539-2.785-1.722-1.031-0.922-1.726-2.061-1.929-2.407-0.202-0.346-0.022-0.533 0.152-0.705 0.156-0.156 0.346-0.405 0.518-0.608 0.174-0.202 0.231-0.346 0.346-0.578 0.117-0.231 0.058-0.433-0.028-0.608-0.087-0.174-0.78-1.88-1.069-2.574-0.281-0.676-0.567-0.584-0.78-0.596-0.202-0.010-0.433-0.012-0.663-0.012s-0.608 0.087-0.927 0.433c-0.318 0.346-1.216 1.189-1.216 2.901s1.245 3.364 1.42 3.595c0.174 0.231 2.459 3.761 5.959 5.271 0.833 0.361 1.484 0.577 1.991 0.738 0.837 0.267 1.599 0.229 2.2 0.139 0.671-0.101 2.049-0.839 2.337-1.649 0.289-0.81 0.289-1.504 0.202-1.649s-0.318-0.231-0.663-0.405z"/>
      </svg>
      
      {/* Tooltip */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-[#0b194f] text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chatea con nosotros
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-8 border-transparent border-t-[#0b194f]" />
      </div>

      {/* Pulse effect */}
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-[#25D366] rounded-full"
      />
    </motion.button>
  );
}
