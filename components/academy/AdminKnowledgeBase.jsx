"use client"
import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Plus, Trash2, FileText, Upload, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = [
  { value: 'empresa', label: '🏢 Empresa' },
  { value: 'tecnologia', label: '📡 Tecnología RFID' },
  { value: 'academia', label: '🎓 Academia' },
  { value: 'producto', label: '📦 Producto/Software' },
  { value: 'soporte', label: '🛠 Soporte' },
  { value: 'faq', label: '❓ Preguntas Frecuentes' },
];

export default function AdminKnowledgeBase() {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [uploadingPdf, setUploadingPdf] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({ title: '', category: 'empresa', content: '', pdf_url: '', pdf_name: '' });

  useEffect(() => { load(); }, []);

  const load = async () => {
    const data = await base44.entities.KnowledgeBase.list('-created_date', 100);
    setDocs(data.filter(d => d.is_active !== false));
    setLoading(false);
  };

  const handlePdfUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploadingPdf(true);
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    setForm(f => ({ ...f, pdf_url: file_url, pdf_name: file.name }));
    setUploadingPdf(false);
  };

  const handleSave = async () => {
    if (!form.title || !form.content) return alert('Título y contenido son obligatorios');
    setSaving(true);
    await base44.entities.KnowledgeBase.create({ ...form, is_active: true });
    setForm({ title: '', category: 'empresa', content: '', pdf_url: '', pdf_name: '' });
    setAdding(false);
    setSaving(false);
    load();
  };

  const handleDelete = async (id) => {
    if (!confirm('¿Eliminar este documento?')) return;
    await base44.entities.KnowledgeBase.update(id, { is_active: false });
    load();
  };

  if (loading) return <div className="flex justify-center py-12"><div className="w-8 h-8 border-4 border-[#007aed] border-t-transparent rounded-full animate-spin" /></div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-[#0b194f]">Base de Conocimiento</h2>
          <p className="text-[#0b194f]/50 text-sm mt-1">El asistente virtual usa esta información para responder a los usuarios.</p>
        </div>
        <button
          onClick={() => setAdding(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#007aed] text-white font-semibold rounded-xl hover:bg-[#0b194f] transition-colors"
        >
          <Plus className="w-5 h-5" />
          Agregar
        </button>
      </div>

      <AnimatePresence>
        {adding && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-white rounded-2xl p-6 shadow-sm mb-6 border-2 border-[#007aed]/20"
          >
            <h3 className="font-bold text-[#0b194f] mb-4">Nuevo documento</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Título del documento"
                  value={form.title}
                  onChange={e => setForm({ ...form, title: e.target.value })}
                  className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#007aed] outline-none"
                />
                <select
                  value={form.category}
                  onChange={e => setForm({ ...form, category: e.target.value })}
                  className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#007aed] outline-none bg-white"
                >
                  {CATEGORIES.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                </select>
              </div>
              <textarea
                placeholder="Contenido de la información (puede ser tan detallado como necesites — el asistente leerá esto para responder)"
                value={form.content}
                onChange={e => setForm({ ...form, content: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#007aed] outline-none resize-none h-40"
              />
              <div>
                <label className="block text-sm font-semibold text-[#0b194f]/60 mb-2">PDF adjunto (opcional)</label>
                {form.pdf_url ? (
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-200">
                    <FileText className="w-5 h-5 text-green-600" />
                    <span className="text-green-700 text-sm font-medium truncate">{form.pdf_name}</span>
                    <button onClick={() => setForm(f => ({ ...f, pdf_url: '', pdf_name: '' }))} className="ml-auto text-red-400 text-sm hover:text-red-600">Eliminar</button>
                  </div>
                ) : (
                  <label className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-5 cursor-pointer transition-colors ${uploadingPdf ? 'border-[#007aed] bg-[#007aed]/5' : 'border-gray-300 hover:border-[#007aed]'}`}>
                    {uploadingPdf ? (
                      <div className="w-7 h-7 border-4 border-[#007aed] border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Upload className="w-6 h-6 text-gray-400 mb-1" />
                        <span className="text-gray-500 text-sm">Subir PDF</span>
                      </>
                    )}
                    <input type="file" accept=".pdf" className="hidden" onChange={handlePdfUpload} disabled={uploadingPdf} />
                  </label>
                )}
              </div>
              <div className="flex gap-3">
                <button onClick={handleSave} disabled={saving} className="px-6 py-2.5 bg-[#007aed] text-white font-bold rounded-xl hover:bg-[#0b194f] transition-colors disabled:opacity-50">
                  {saving ? 'Guardando...' : 'Guardar'}
                </button>
                <button onClick={() => { setAdding(false); setForm({ title: '', category: 'empresa', content: '', pdf_url: '', pdf_name: '' }); }} className="px-6 py-2.5 border-2 border-gray-200 text-[#0b194f]/60 font-semibold rounded-xl hover:border-gray-400 transition-colors">
                  Cancelar
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-3">
        {docs.map((doc, i) => (
          <motion.div key={doc.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }} className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="flex items-center gap-4 p-5">
              <div className="w-10 h-10 bg-[#007aed]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 text-[#007aed]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-[#0b194f]">{doc.title}</p>
                <p className="text-[#0b194f]/50 text-xs">{CATEGORIES.find(c => c.value === doc.category)?.label || doc.category}</p>
              </div>
              {doc.pdf_url && <FileText className="w-5 h-5 text-blue-400 flex-shrink-0" />}
              <button onClick={() => setExpanded(expanded === doc.id ? null : doc.id)} className="p-2 text-[#0b194f]/40 hover:text-[#007aed] transition-colors">
                {expanded === doc.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              <button onClick={() => handleDelete(doc.id)} className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
            <AnimatePresence>
              {expanded === doc.id && (
                <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="px-5 pb-5 pt-0 border-t border-gray-100">
                    <p className="text-sm text-[#0b194f]/70 whitespace-pre-wrap mt-3">{doc.content}</p>
                    {doc.pdf_url && (
                      <a href={doc.pdf_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-3 text-[#007aed] text-sm font-semibold hover:underline">
                        <FileText className="w-4 h-4" /> Ver PDF adjunto
                      </a>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
        {docs.length === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center text-[#0b194f]/40">
            No hay documentos aún. Agrega el primero para que el asistente pueda responder mejor.
          </div>
        )}
      </div>
    </div>
  );
}

