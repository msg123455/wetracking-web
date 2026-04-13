import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Plus, Trash2, Save, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const EMPTY_FORM = { title: '', min_score: 70, group: 'operativo', section_id: '', company_ids: [], questions: [] };

export default function AdminExamManager({ onUpdate }) {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState(null); // null = new, id = editing existing
  const [form, setForm] = useState(EMPTY_FORM);
  const [sections, setSections] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [expandedGroup, setExpandedGroup] = useState({ operativo: true, administrativo: true });

  useEffect(() => { load(); }, []);

  const load = async () => {
    const [examData, secs, comps] = await Promise.all([
      base44.entities.AcademyExam.filter({ is_active: true }),
      base44.entities.AcademySection.list('order'),
      base44.entities.Company.filter({ is_active: true })
    ]);
    setExams(examData);
    setSections(secs.filter(s => s.is_active !== false));
    setCompanies(comps);
    setLoading(false);
  };

  const startNew = () => {
    setEditingId('new');
    setForm(EMPTY_FORM);
  };

  const startEdit = (exam) => {
    setEditingId(exam.id);
    setForm({
      title: exam.title,
      min_score: exam.min_score || 70,
      group: exam.group || 'operativo',
      section_id: exam.section_id || '',
      company_ids: exam.company_ids || [],
      questions: exam.questions || []
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm(EMPTY_FORM);
  };

  const addQuestion = () => {
    setForm(f => ({
      ...f,
      questions: [...f.questions, { question: '', options: ['', '', '', ''], correct_index: 0 }]
    }));
  };

  const updateQuestion = (qi, field, value) => {
    const qs = [...form.questions];
    qs[qi] = { ...qs[qi], [field]: value };
    setForm({ ...form, questions: qs });
  };

  const updateOption = (qi, oi, value) => {
    const qs = [...form.questions];
    const opts = [...qs[qi].options];
    opts[oi] = value;
    qs[qi] = { ...qs[qi], options: opts };
    setForm({ ...form, questions: qs });
  };

  const removeQuestion = (qi) => {
    setForm(f => ({ ...f, questions: f.questions.filter((_, i) => i !== qi) }));
  };

  const toggleCompany = (id) => {
    setForm(f => ({
      ...f,
      company_ids: f.company_ids.includes(id)
        ? f.company_ids.filter(c => c !== id)
        : [...f.company_ids, id]
    }));
  };

  const handleSave = async () => {
    if (!form.title) return alert('El examen necesita un título');
    if (form.questions.length === 0) return alert('Agrega al menos una pregunta');
    setSaving(true);
    const data = {
      title: form.title,
      min_score: form.min_score,
      group: form.group,
      section_id: form.section_id || '',
      company_ids: form.company_ids,
      questions: form.questions,
      is_active: true
    };
    if (editingId && editingId !== 'new') {
      await base44.entities.AcademyExam.update(editingId, data);
    } else {
      await base44.entities.AcademyExam.create(data);
    }
    setSaving(false);
    setEditingId(null);
    setForm(EMPTY_FORM);
    onUpdate && onUpdate();
    await load();
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Eliminar este examen?')) return;
    await base44.entities.AcademyExam.update(id, { is_active: false });
    load();
  };

  if (loading) return <div className="text-center py-12 text-[#0b194f]/40">Cargando...</div>;

  const ExamGroup = ({ group, label, color }) => {
    const groupExams = exams.filter(e => e.group === group);
    return (
      <div className="mb-6">
        <button
          onClick={() => setExpandedGroup(p => ({ ...p, [group]: !p[group] }))}
          className="flex items-center gap-2 w-full text-left mb-3"
        >
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${color}`}>{label}</span>
          <span className="text-[#0b194f]/40 text-sm">{groupExams.length} exámenes</span>
          {expandedGroup[group] ? <ChevronUp className="w-4 h-4 text-[#0b194f]/30 ml-auto" /> : <ChevronDown className="w-4 h-4 text-[#0b194f]/30 ml-auto" />}
        </button>
        {expandedGroup[group] && (
          <div className="space-y-3">
            {groupExams.map(exam => {
              const section = sections.find(s => s.id === exam.section_id);
              const examCompanies = (exam.company_ids || []).map(cid => companies.find(c => c.id === cid)?.name).filter(Boolean);
              return (
                <div key={exam.id} className="bg-white rounded-2xl p-5 shadow-sm flex items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-[#0b194f]">{exam.title}</p>
                    <div className="flex gap-2 mt-1 flex-wrap">
                      {section && <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{section.name}</span>}
                      {examCompanies.length > 0
                        ? <span className="text-xs text-[#0b194f]/40">Empresas: {examCompanies.join(', ')}</span>
                        : <span className="text-xs text-green-600">Todas las empresas</span>}
                      <span className="text-xs text-[#0b194f]/40">{exam.questions?.length || 0} preguntas · mín {exam.min_score || 70}%</span>
                    </div>
                  </div>
                  <button onClick={() => startEdit(exam)} className="px-4 py-2 text-[#007aed] border border-[#007aed] rounded-xl text-sm font-semibold hover:bg-blue-50 transition-colors">
                    Editar
                  </button>
                  <button onClick={() => handleDelete(exam.id)} className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              );
            })}
            {groupExams.length === 0 && (
              <div className="bg-white rounded-2xl p-6 text-center text-[#0b194f]/30 text-sm">
                No hay exámenes en este grupo
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[#0b194f]">Gestión de Exámenes</h2>
        {!editingId && (
          <button onClick={startNew} className="flex items-center gap-2 px-5 py-2.5 bg-[#007aed] text-white font-semibold rounded-xl hover:bg-[#0b194f] transition-colors">
            <Plus className="w-5 h-5" /> Nuevo examen
          </button>
        )}
      </div>

      {editingId && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl p-6 shadow-sm mb-6 border-2 border-[#007aed]/20">
          <h3 className="font-bold text-[#0b194f] mb-4">{editingId === 'new' ? 'Nuevo examen' : 'Editando examen'}</h3>

          <div className="space-y-4 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#0b194f]/60 mb-1">Título del examen</label>
                <input type="text" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#007aed] outline-none"
                  placeholder="Ej: Evaluación Sección 1 - Operativo" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0b194f]/60 mb-1">Puntaje mínimo (%)</label>
                <input type="number" min="1" max="100" value={form.min_score} onChange={e => setForm({ ...form, min_score: Number(e.target.value) })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#007aed] outline-none" />
              </div>
            </div>

            {/* Grupo */}
            <div>
              <label className="block text-sm font-semibold text-[#0b194f]/70 mb-2">Grupo de usuarios</label>
              <div className="flex gap-3">
                {['operativo', 'administrativo'].map(g => (
                  <button key={g} type="button" onClick={() => setForm(f => ({ ...f, group: g, section_id: '' }))}
                    className={`flex-1 py-3 rounded-xl font-semibold text-sm border-2 transition-all capitalize ${
                      form.group === g
                        ? g === 'operativo' ? 'bg-blue-100 border-blue-400 text-blue-700' : 'bg-purple-100 border-purple-400 text-purple-700'
                        : 'border-gray-200 text-[#0b194f]/50 hover:border-gray-400'
                    }`}>
                    {g === 'operativo' ? '👷 Operativo' : '💼 Administrativo'}
                  </button>
                ))}
              </div>
            </div>

            {/* Sección */}
            <div>
              <label className="block text-sm font-semibold text-[#0b194f]/70 mb-2">Sección</label>
              <select value={form.section_id} onChange={e => setForm(f => ({ ...f, section_id: e.target.value }))}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#007aed] outline-none bg-white">
                <option value="">Sin sección asignada</option>
                {sections.filter(s => s.group === form.group).map(s => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </div>

            {/* Empresas */}
            <div>
              <label className="block text-sm font-semibold text-[#0b194f]/70 mb-2">
                Empresas habilitadas
                <span className="ml-2 text-xs font-normal text-[#0b194f]/40">(sin selección = todas)</span>
              </label>
              {companies.length === 0 ? (
                <p className="text-sm text-[#0b194f]/40 italic">No hay empresas creadas aún.</p>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  {companies.map(c => (
                    <label key={c.id} className="flex items-center gap-2 cursor-pointer p-3 rounded-xl border-2 transition-all"
                      style={{ borderColor: form.company_ids.includes(c.id) ? '#007aed' : '#e5e7eb', background: form.company_ids.includes(c.id) ? '#eff6ff' : '#fff' }}>
                      <input type="checkbox" checked={form.company_ids.includes(c.id)} onChange={() => toggleCompany(c.id)} className="accent-[#007aed] w-4 h-4" />
                      <span className="text-sm font-medium text-[#0b194f]">{c.name}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Questions */}
          <div className="space-y-4 mb-6">
            {form.questions.map((q, qi) => (
              <div key={qi} className="bg-[#f5f7fa] rounded-2xl p-5 border-l-4 border-[#007aed]">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-[#007aed] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1 text-sm">{qi + 1}</span>
                  <div className="flex-1">
                    <input type="text" value={q.question} onChange={e => updateQuestion(qi, 'question', e.target.value)}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-[#007aed] outline-none font-semibold mb-3 bg-white"
                      placeholder="Escribe la pregunta..." />
                    <div className="space-y-2">
                      {q.options.map((opt, oi) => (
                        <div key={oi} className="flex items-center gap-3">
                          <input type="radio" name={`correct-${qi}`} checked={q.correct_index === oi} onChange={() => updateQuestion(qi, 'correct_index', oi)} className="w-4 h-4 accent-[#007aed]" />
                          <input type="text" value={opt} onChange={e => updateOption(qi, oi, e.target.value)}
                            className="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#007aed] outline-none text-sm bg-white"
                            placeholder={`Opción ${oi + 1}`} />
                          {q.correct_index === oi && <span className="text-xs text-green-600 font-bold whitespace-nowrap">✓ Correcta</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                  <button onClick={() => removeQuestion(qi)} className="p-2 text-red-400 hover:text-red-600 hover:bg-red-100 rounded-lg transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button onClick={addQuestion}
            className="w-full py-4 border-2 border-dashed border-[#007aed]/40 rounded-2xl text-[#007aed] font-semibold hover:border-[#007aed] hover:bg-[#007aed]/5 transition-all flex items-center justify-center gap-2 mb-4">
            <Plus className="w-5 h-5" /> Agregar pregunta
          </button>

          <div className="flex gap-3">
            <button onClick={handleSave} disabled={saving} className="flex items-center gap-2 px-5 py-2.5 bg-[#007aed] text-white font-semibold rounded-xl hover:bg-[#0b194f] transition-colors disabled:opacity-50">
              <Save className="w-5 h-5" /> {saving ? 'Guardando...' : 'Guardar examen'}
            </button>
            <button onClick={cancelEdit} className="px-5 py-2.5 border-2 border-gray-200 text-[#0b194f]/60 font-semibold rounded-xl hover:border-gray-400 transition-colors">
              Cancelar
            </button>
          </div>
        </motion.div>
      )}

      <ExamGroup group="operativo" label="👷 Operativo" color="bg-blue-100 text-blue-700" />
      <ExamGroup group="administrativo" label="💼 Administrativo" color="bg-purple-100 text-purple-700" />
    </div>
  );
}