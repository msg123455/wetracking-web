"use client"
import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Plus, Trash2, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminCompanyManager() {
  const [companies, setCompanies] = useState([]);
  const [newName, setNewName] = useState('');
  const [saving, setSaving] = useState(false);

  const load = async () => {
    const all = await base44.entities.Company.list();
    setCompanies(all.filter(c => c.is_active !== false));
  };

  useEffect(() => { load(); }, []);

  const handleAdd = async () => {
    if (!newName.trim()) return;
    setSaving(true);
    await base44.entities.Company.create({ name: newName.trim(), is_active: true });
    setNewName('');
    setSaving(false);
    load();
  };

  const handleDelete = async (id) => {
    if (!confirm('¿Eliminar esta empresa?')) return;
    await base44.entities.Company.update(id, { is_active: false });
    load();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#0b194f] mb-6">Gestión de Empresas</h2>

      <div className="flex gap-3 mb-8">
        <div className="relative flex-1">
          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0b194f]/30" />
          <input
            type="text"
            value={newName}
            onChange={e => setNewName(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleAdd()}
            placeholder="Nombre de la empresa"
            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#007aed] outline-none"
          />
        </div>
        <button
          onClick={handleAdd}
          disabled={saving || !newName.trim()}
          className="flex items-center gap-2 px-5 py-3 bg-[#007aed] text-white font-semibold rounded-xl hover:bg-[#0b194f] transition-colors disabled:opacity-50"
        >
          <Plus className="w-5 h-5" />
          {saving ? 'Guardando...' : 'Agregar'}
        </button>
      </div>

      <div className="space-y-3">
        {companies.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.04 }}
            className="bg-white rounded-2xl p-5 shadow-sm flex items-center gap-4"
          >
            <div className="w-10 h-10 bg-[#007aed]/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Building2 className="w-5 h-5 text-[#007aed]" />
            </div>
            <p className="flex-1 font-semibold text-[#0b194f]">{c.name}</p>
            <button onClick={() => handleDelete(c.id)} className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
              <Trash2 className="w-5 h-5" />
            </button>
          </motion.div>
        ))}
        {companies.length === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center text-[#0b194f]/40">
            No hay empresas registradas. Agrega la primera.
          </div>
        )}
      </div>
    </div>
  );
}

