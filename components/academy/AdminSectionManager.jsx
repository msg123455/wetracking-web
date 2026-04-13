"use client"
import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Plus, Trash2, Pencil, Save, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdminSectionManager() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(null); // 'operativo' | 'administrativo' | null
  const [newName, setNewName] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => { load(); }, []);

  const load = async () => {
    setLoading(true);
    const data = await base44.entities.AcademySection.list('order');
    setSections(data.filter(s => s.is_active !== false));
    setLoading(false);
  };

  const handleAdd = async (group) => {
    if (!newName.trim()) return;
    setSaving(true);
    const groupSections = sections.filter(s => s.group === group);
    await base44.entities.AcademySection.create({
      name: newName.trim(),
      group,
      order: groupSections.length + 1,
      is_active: true
    });
    setNewName('');
    setAdding(null);
    setSaving(false);
    load();
  };

  const handleEdit = async (id) => {
    if (!editName.trim()) return;
    setSaving(true);
    await base44.entities.AcademySection.update(id, { name: editName.trim() });
    setEditingId(null);
    setSaving(false);
    load();
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Eliminar esta sección? Los videos y exámenes asociados quedarán sin sección.')) return;
    await base44.entities.AcademySection.update(id, { is_active: false });
    load();
  };

  const SectionGroup = ({ group, label, color }) => {
    const groupSections = sections.filter(s => s.group === group);
    return (
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${color}`}>{label}</span>
            <span className="text-[#0b194f]/40 text-sm">{groupSections.length} secciones</span>
          </div>
          <button
            onClick={() => { setAdding(group); setNewName(''); }}
            className="flex items-center gap-2 px-4 py-2 bg-[#007aed] text-white text-sm font-semibold rounded-xl hover:bg-[#0b194f] transition-colors"
          >
            <Plus className="w-4 h-4" /> Agregar sección
          </button>
        </div>

        {adding === group && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3 mb-4">
            <input
              autoFocus
              value={newName}
              onChange={e => setNewName(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleAdd(group)}
              placeholder="Nombre de la sección..."
              className="flex-1 px-4 py-2 border-2 border-[#007aed] rounded-xl outline-none text-sm"
            />
            <button onClick={() => handleAdd(group)} disabled={saving} className="px-4 py-2 bg-[#007aed] text-white font-semibold rounded-xl hover:bg-[#0b194f] transition-colors disabled:opacity-50 text-sm">
              {saving ? '...' : 'Guardar'}
            </button>
            <button onClick={() => setAdding(null)} className="px-3 py-2 border-2 border-gray-200 text-gray-500 rounded-xl hover:bg-gray-50 transition-colors">
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        <div className="space-y-2">
          <AnimatePresence>
            {groupSections.map((section, i) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ delay: i * 0.03 }}
                className="flex items-center gap-3 p-3 bg-[#f5f7fa] rounded-xl"
              >
                <span className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-xs font-bold text-[#007aed] shadow-sm flex-shrink-0">
                  {i + 1}
                </span>
                {editingId === section.id ? (
                  <>
                    <input
                      autoFocus
                      value={editName}
                      onChange={e => setEditName(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && handleEdit(section.id)}
                      className="flex-1 px-3 py-1 border-2 border-[#007aed] rounded-lg outline-none text-sm"
                    />
                    <button onClick={() => handleEdit(section.id)} disabled={saving} className="p-1.5 bg-[#007aed] text-white rounded-lg hover:bg-[#0b194f] transition-colors">
                      <Save className="w-4 h-4" />
                    </button>
                    <button onClick={() => setEditingId(null)} className="p-1.5 border border-gray-200 text-gray-500 rounded-lg hover:bg-gray-100 transition-colors">
                      <X className="w-4 h-4" />
                    </button>
                  </>
                ) : (
                  <>
                    <span className="flex-1 font-semibold text-[#0b194f] text-sm">{section.name}</span>
                    <button onClick={() => { setEditingId(section.id); setEditName(section.name); }} className="p-1.5 text-[#007aed] hover:bg-blue-50 rounded-lg transition-colors">
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleDelete(section.id)} className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
          {groupSections.length === 0 && !adding && (
            <p className="text-center text-sm text-[#0b194f]/30 py-4">No hay secciones creadas para este grupo</p>
          )}
        </div>
      </div>
    );
  };

  if (loading) return <div className="text-center py-12 text-[#0b194f]/40">Cargando...</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#0b194f] mb-6">Gestión de Secciones</h2>
      <SectionGroup group="operativo" label="👷 Operativo" color="bg-blue-100 text-blue-700" />
      <SectionGroup group="administrativo" label="💼 Administrativo" color="bg-purple-100 text-purple-700" />
    </div>
  );
}
