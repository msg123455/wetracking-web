import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Plus, Trash2, Upload, Video, Image, FileText, ChevronDown, ChevronUp, Pencil, X } from 'lucide-react';
import { motion } from 'framer-motion';

const EMPTY_FORM = { title: '', description: '', summary: '', video_url: '', thumbnail_url: '', pdf_url: '', pdf_name: '', group: 'operativo', section_id: '', company_ids: [] };

export default function AdminVideoManager({ videos, onUpdate }) {
  const [adding, setAdding] = useState(false);
  const [editingVideo, setEditingVideo] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [uploadingVideo, setUploadingVideo] = useState(false);
  const [uploadingThumb, setUploadingThumb] = useState(false);
  const [uploadingPdf, setUploadingPdf] = useState(false);
  const [saving, setSaving] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [sections, setSections] = useState([]);
  const [expandedGroup, setExpandedGroup] = useState({ operativo: true, administrativo: true });

  useEffect(() => {
    Promise.all([
      base44.entities.Company.filter({ is_active: true }),
      base44.entities.AcademySection.list('order')
    ]).then(([comps, secs]) => {
      setCompanies(comps);
      setSections(secs.filter(s => s.is_active !== false));
    });
  }, []);

  const toggleCompany = (id) => {
    setForm(f => ({
      ...f,
      company_ids: f.company_ids.includes(id)
        ? f.company_ids.filter(c => c !== id)
        : [...f.company_ids, id]
    }));
  };

  const handleFileUpload = async (e, type = 'video') => {
    const file = e.target.files[0];
    if (!file) return;
    if (type === 'thumbnail') setUploadingThumb(true);
    else if (type === 'pdf') setUploadingPdf(true);
    else setUploadingVideo(true);
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    if (type === 'thumbnail') { setForm(f => ({ ...f, thumbnail_url: file_url })); setUploadingThumb(false); }
    else if (type === 'pdf') { setForm(f => ({ ...f, pdf_url: file_url, pdf_name: file.name })); setUploadingPdf(false); }
    else { setForm(f => ({ ...f, video_url: file_url })); setUploadingVideo(false); }
  };

  const openEdit = (video) => {
    setEditingVideo(video);
    setForm({
      title: video.title || '',
      description: video.description || '',
      summary: video.summary || '',
      video_url: video.video_url || '',
      thumbnail_url: video.thumbnail_url || '',
      pdf_url: video.pdf_url || '',
      pdf_name: video.pdf_name || '',
      group: video.group || 'operativo',
      section_id: video.section_id || '',
      company_ids: video.company_ids || []
    });
    setAdding(false);
  };

  const closeForm = () => {
    setAdding(false);
    setEditingVideo(null);
    setForm(EMPTY_FORM);
  };

  const handleAdd = async () => {
    if (!form.title || !form.video_url) return alert('Título y video son obligatorios');
    setSaving(true);
    const groupVideos = videos.filter(v => v.group === form.group);
    await base44.entities.AcademyVideo.create({
      title: form.title,
      description: form.description,
      summary: form.summary,
      video_url: form.video_url,
      thumbnail_url: form.thumbnail_url || '',
      pdf_url: form.pdf_url || '',
      pdf_name: form.pdf_name || '',
      order: groupVideos.length + 1,
      group: form.group,
      section_id: form.section_id || '',
      company_ids: form.company_ids,
      is_active: true
    });
    closeForm();
    setSaving(false);
    onUpdate();
  };

  const handleSaveEdit = async () => {
    if (!form.title || !form.video_url) return alert('Título y video son obligatorios');
    setSaving(true);
    await base44.entities.AcademyVideo.update(editingVideo.id, {
      title: form.title,
      description: form.description,
      summary: form.summary,
      video_url: form.video_url,
      thumbnail_url: form.thumbnail_url || '',
      pdf_url: form.pdf_url || '',
      pdf_name: form.pdf_name || '',
      group: form.group,
      section_id: form.section_id || '',
      company_ids: form.company_ids
    });
    closeForm();
    setSaving(false);
    onUpdate();
  };

  const handleDelete = async (id) => {
    if (!confirm('¿Eliminar este video?')) return;
    await base44.entities.AcademyVideo.update(id, { is_active: false });
    onUpdate();
  };

  const operativoVideos = videos.filter(v => v.group === 'operativo' || !v.group);
  const administrativoVideos = videos.filter(v => v.group === 'administrativo');

  const VideoGroup = ({ label, groupVideos, groupKey }) => (
    <div className="mb-6">
      <button
        onClick={() => setExpandedGroup(p => ({ ...p, [groupKey]: !p[groupKey] }))}
        className="flex items-center gap-2 w-full text-left mb-3"
      >
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${groupKey === 'operativo' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>{label}</span>
        <span className="text-[#0b194f]/40 text-sm">{groupVideos.length} videos</span>
        {expandedGroup[groupKey] ? <ChevronUp className="w-4 h-4 text-[#0b194f]/30 ml-auto" /> : <ChevronDown className="w-4 h-4 text-[#0b194f]/30 ml-auto" />}
      </button>
      {expandedGroup[groupKey] && (
        <div className="space-y-3">
          {groupVideos.map((video, i) => {
            const videoCompanies = (video.company_ids || []).map(cid => companies.find(c => c.id === cid)?.name).filter(Boolean);
            return (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                className="bg-white rounded-2xl p-5 shadow-sm flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-[#007aed]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-[#007aed]">{i + 1}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[#0b194f]">{video.title}</p>
                  {videoCompanies.length > 0 ? (
                    <p className="text-xs text-[#0b194f]/40 mt-0.5">Empresas: {videoCompanies.join(', ')}</p>
                  ) : (
                    <p className="text-xs text-green-600 mt-0.5">Disponible para todas las empresas</p>
                  )}
                </div>
                {video.section_id && (
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">
                    {sections.find(s => s.id === video.section_id)?.name || ''}
                  </span>
                )}
                {video.video_url && <Video className="w-5 h-5 text-green-500" />}
                {video.pdf_url && <FileText className="w-5 h-5 text-blue-400" />}
                <button onClick={() => openEdit(video)} className="p-2 text-[#007aed] hover:bg-blue-50 rounded-lg transition-colors">
                  <Pencil className="w-5 h-5" />
                </button>
                <button onClick={() => handleDelete(video.id)} className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 className="w-5 h-5" />
                </button>
              </motion.div>
            );
          })}
          {groupVideos.length === 0 && (
            <div className="bg-white rounded-2xl p-8 text-center text-[#0b194f]/30 text-sm">
              No hay videos en este grupo
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[#0b194f]">Gestión de Videos</h2>
        <button
          onClick={() => setAdding(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#007aed] text-white font-semibold rounded-xl hover:bg-[#0b194f] transition-colors"
        >
          <Plus className="w-5 h-5" />
          Agregar video
        </button>
      </div>

      {(adding || editingVideo) && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-6 shadow-sm mb-6 border-2 border-[#007aed]/20"
        >
          <h3 className="font-bold text-[#0b194f] mb-4">{editingVideo ? `Editando: ${editingVideo.title}` : 'Nuevo video'}</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Título del video"
              value={form.title}
              onChange={e => setForm({ ...form, title: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#007aed] outline-none"
            />
            <textarea
              placeholder="Descripción (opcional)"
              value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#007aed] outline-none resize-none h-20"
            />
            <textarea
              placeholder="Resumen del video (se mostrará al estudiante al abrir el video)"
              value={form.summary}
              onChange={e => setForm({ ...form, summary: e.target.value })}
              className="w-full px-4 py-3 border-2 border-[#007aed]/30 rounded-xl focus:border-[#007aed] outline-none resize-none h-24 bg-blue-50"
            />

            {/* Grupo */}
            <div>
              <label className="block text-sm font-semibold text-[#0b194f]/70 mb-2">Grupo de usuarios</label>
              <div className="flex gap-3">
                {['operativo', 'administrativo'].map(g => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setForm(f => ({ ...f, group: g }))}
                    className={`flex-1 py-3 rounded-xl font-semibold text-sm border-2 transition-all capitalize ${
                      form.group === g
                        ? g === 'operativo' ? 'bg-blue-100 border-blue-400 text-blue-700' : 'bg-purple-100 border-purple-400 text-purple-700'
                        : 'border-gray-200 text-[#0b194f]/50 hover:border-gray-400'
                    }`}
                  >
                    {g === 'operativo' ? '👷 Operativo' : '💼 Administrativo'}
                  </button>
                ))}
              </div>
            </div>

            {/* Sección */}
            <div>
              <label className="block text-sm font-semibold text-[#0b194f]/70 mb-2">Sección</label>
              <select
                value={form.section_id}
                onChange={e => setForm(f => ({ ...f, section_id: e.target.value }))}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#007aed] outline-none bg-white"
              >
                <option value="">Sin sección asignada</option>
                {sections.filter(s => s.group === form.group).map(s => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
              {sections.filter(s => s.group === form.group).length === 0 && (
                <p className="text-xs text-[#0b194f]/40 mt-1 italic">No hay secciones creadas para este grupo. Ve a la pestaña "Secciones" para agregar.</p>
              )}
            </div>

            {/* Empresas */}
            <div>
              <label className="block text-sm font-semibold text-[#0b194f]/70 mb-2">
                Empresas que pueden ver este video
                <span className="ml-2 text-xs font-normal text-[#0b194f]/40">(sin selección = todas)</span>
              </label>
              {companies.length === 0 ? (
                <p className="text-sm text-[#0b194f]/40 italic">No hay empresas creadas aún. Ve a la pestaña "Empresas" para agregar.</p>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  {companies.map(c => (
                    <label key={c.id} className="flex items-center gap-2 cursor-pointer p-3 rounded-xl border-2 transition-all hover:border-[#007aed]/30"
                      style={{ borderColor: form.company_ids.includes(c.id) ? '#007aed' : '#e5e7eb', background: form.company_ids.includes(c.id) ? '#eff6ff' : '#fff' }}>
                      <input
                        type="checkbox"
                        checked={form.company_ids.includes(c.id)}
                        onChange={() => toggleCompany(c.id)}
                        className="accent-[#007aed] w-4 h-4"
                      />
                      <span className="text-sm font-medium text-[#0b194f]">{c.name}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Video upload */}
            <div>
              <label className="block text-sm font-semibold text-[#0b194f]/60 mb-2">Archivo de video</label>
              {form.video_url ? (
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-200">
                  <Video className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 text-sm font-medium">Video cargado correctamente</span>
                  <button onClick={() => setForm(f => ({ ...f, video_url: '' }))} className="ml-auto text-red-400 text-sm hover:text-red-600">Eliminar</button>
                </div>
              ) : (
                <label className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-8 cursor-pointer transition-colors ${uploadingVideo ? 'border-[#007aed] bg-[#007aed]/5' : 'border-gray-300 hover:border-[#007aed]'}`}>
                  {uploadingVideo ? (
                    <div className="w-8 h-8 border-4 border-[#007aed] border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <><Upload className="w-8 h-8 text-gray-400 mb-2" /><span className="text-gray-500 text-sm">Haz clic para subir un video</span></>
                  )}
                  <input type="file" accept="video/*" className="hidden" onChange={e => handleFileUpload(e, 'video')} disabled={uploadingVideo} />
                </label>
              )}
            </div>

            {/* Thumbnail */}
            <div>
              <label className="block text-sm font-semibold text-[#0b194f]/60 mb-2">Thumbnail (imagen de portada)</label>
              {form.thumbnail_url ? (
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-200">
                  <img src={form.thumbnail_url} alt="thumbnail" className="w-12 h-8 object-cover rounded" />
                  <span className="text-green-700 text-sm font-medium">Thumbnail cargado</span>
                  <button onClick={() => setForm(f => ({ ...f, thumbnail_url: '' }))} className="ml-auto text-red-400 text-sm hover:text-red-600">Eliminar</button>
                </div>
              ) : (
                <label className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-6 cursor-pointer transition-colors ${uploadingThumb ? 'border-[#007aed] bg-[#007aed]/5' : 'border-gray-300 hover:border-[#007aed]'}`}>
                  {uploadingThumb ? (
                    <div className="w-8 h-8 border-4 border-[#007aed] border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <><Image className="w-7 h-7 text-gray-400 mb-2" /><span className="text-gray-500 text-sm">Haz clic para subir una imagen de portada</span></>
                  )}
                  <input type="file" accept="image/*" className="hidden" onChange={e => handleFileUpload(e, 'thumbnail')} disabled={uploadingThumb} />
                </label>
              )}
            </div>

            {/* PDF */}
            <div>
              <label className="block text-sm font-semibold text-[#0b194f]/60 mb-2">Manual PDF (paso a paso, opcional)</label>
              {form.pdf_url ? (
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-200">
                  <FileText className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 text-sm font-medium truncate">{form.pdf_name || 'PDF cargado'}</span>
                  <button onClick={() => setForm(f => ({ ...f, pdf_url: '', pdf_name: '' }))} className="ml-auto text-red-400 text-sm hover:text-red-600 flex-shrink-0">Eliminar</button>
                </div>
              ) : (
                <label className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-6 cursor-pointer transition-colors ${uploadingPdf ? 'border-[#007aed] bg-[#007aed]/5' : 'border-gray-300 hover:border-[#007aed]'}`}>
                  {uploadingPdf ? (
                    <div className="w-8 h-8 border-4 border-[#007aed] border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <><FileText className="w-7 h-7 text-gray-400 mb-2" /><span className="text-gray-500 text-sm">Haz clic para subir el manual PDF</span></>
                  )}
                  <input type="file" accept=".pdf" className="hidden" onChange={e => handleFileUpload(e, 'pdf')} disabled={uploadingPdf} />
                </label>
              )}
            </div>

            <div className="flex gap-3">
              <button
                onClick={editingVideo ? handleSaveEdit : handleAdd}
                disabled={saving || !form.video_url}
                className="px-6 py-2.5 bg-[#007aed] text-white font-bold rounded-xl hover:bg-[#0b194f] transition-colors disabled:opacity-50"
              >
                {saving ? 'Guardando...' : editingVideo ? 'Guardar cambios' : 'Guardar'}
              </button>
              <button onClick={closeForm} className="px-6 py-2.5 border-2 border-gray-200 text-[#0b194f]/60 font-semibold rounded-xl hover:border-gray-400 transition-colors">
                Cancelar
              </button>
            </div>
          </div>
        </motion.div>
      )}

      <VideoGroup label="👷 Operativo" groupVideos={operativoVideos} groupKey="operativo" />
      <VideoGroup label="💼 Administrativo" groupVideos={administrativoVideos} groupKey="administrativo" />
    </div>
  );
}