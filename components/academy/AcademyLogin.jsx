"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { GraduationCap, CreditCard, AlertCircle, UserPlus } from 'lucide-react';

export default function AcademyLogin({ onLogin, onRegister }) {
  const [cedula, setCedula] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const clean = cedula.replace(/\D/g, '');
    if (clean.length < 5) {
      setError('Ingresa tu número de cédula para continuar');
      return;
    }
    setLoading(true);
    const response = await base44.functions.invoke('academyLoginByCedula', { cedula: clean });
    if (!response.data.found) {
      setError('No encontramos tu cédula. ¿Es tu primera vez? Regístrate.');
      setLoading(false);
      return;
    }
    onLogin(response.data.profile);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b194f] to-[#007aed] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-[#00ffd7] rounded-full flex items-center justify-center mx-auto mb-4">
            <GraduationCap className="w-10 h-10 text-[#0b194f]" />
          </div>
          <h1 className="text-3xl font-extrabold text-[#0b194f]">Academia WeTracking</h1>
          <p className="text-[#0b194f]/60 mt-2">Ingresa con tu número de cédula</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-[#0b194f]/70 mb-1">Número de Cédula</label>
            <div className="relative">
              <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0b194f]/40" />
              <input
                type="text"
                value={cedula}
                onChange={e => setCedula(e.target.value.replace(/\D/g, ''))}
                className="w-full pl-10 pr-4 py-4 border-2 border-[#0b194f]/10 rounded-xl focus:border-[#007aed] outline-none transition-colors text-lg font-semibold tracking-widest"
                placeholder="Ej: 1023456789"
                maxLength={10}
                autoFocus
              />
            </div>
          </div>

          {error && (
            <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-xl">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-[#007aed] text-white font-bold rounded-xl hover:bg-[#0b194f] transition-colors disabled:opacity-50 text-lg"
          >
            {loading ? 'Verificando...' : 'Ingresar'}
          </button>

          <div className="relative flex items-center gap-3">
            <div className="flex-1 h-px bg-[#0b194f]/10" />
            <span className="text-[#0b194f]/40 text-sm">¿Primera vez?</span>
            <div className="flex-1 h-px bg-[#0b194f]/10" />
          </div>

          <button
            type="button"
            onClick={onRegister}
            className="w-full py-4 border-2 border-[#007aed] text-[#007aed] font-bold rounded-xl hover:bg-[#007aed]/5 transition-colors flex items-center justify-center gap-2"
          >
            <UserPlus className="w-5 h-5" />
            Crear mi perfil
          </button>
        </form>
      </motion.div>
    </div>
  );
}
