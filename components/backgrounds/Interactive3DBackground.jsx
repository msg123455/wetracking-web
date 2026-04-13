import React from 'react';

// Background estático con CSS puro — sin Three.js para máximo rendimiento
export default function Interactive3DBackground() {
  return (
    <div 
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(11,25,79,0.07) 1px, transparent 0)`,
        backgroundSize: '28px 28px',
        backgroundColor: '#ffffff'
      }}
    />
  );
}