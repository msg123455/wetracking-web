import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Pencil, Save, X, Trash2, Search, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdminUserManager() {
  const [profiles, setProfiles] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState('');
  const [progressMap, setProgressMap] = useState({});
  const [reloadingId, setReloadingId] = useState(null);
  const [reloadingAll, setReloadingAll] = useState(false);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    setLoading(true);
    const [profs, comps, allVideos, allProgress] = await Promise.all([
      base44.entities.AcademyProfile.list(),
      base44.entities.Company.filter({ is_active: true }),
      base44.entities.AcademyVideo.filter({ is_active: true }),
      base44.entities.AcademyProgress.list()
    ]);
    setProfiles(profs);
    setCompanies(comps);
    // Calcular progreso por usuario (promedio de percent_watched)
    const map = {};
    for (const prof of profs) {
      const userVideos = allVideos.filter(v =>
        v.group === prof.user_type &&
        (v.company_ids?.length === 0 || v.company_ids?.includes(prof.company_id))
      );
      if (userVideos.length === 0) { map[prof.id] = { pct: 0, total: 0 }; continue; }
      const totalPct = userVideos.reduce((sum, v) => {
        const p = allProgress.find(pr => pr.user_email === prof.user_email && pr.video_id === v.id);
        return sum + (p?.percent_watched || 0);
      }, 0);
      const pct = Math.round(totalPct / userVideos.length);
      map[prof.id] = { pct, total: userVideos.length };
    }
    setProgressMap(map);
    setLoading(false);
  };

  const reloadUserProgress = async (prof) => {
    setReloadingId(prof.id);
    const [allVideos, allProgress] = await Promise.all([
      base44.entities.AcademyVideo.filter({ is_active: true }),
      base44.entities.AcademyProgress.filter({ user_email: prof.user_email })
    ]);
    const userVideos = allVideos.filter(v =>
      v.group === prof.user_type &&
      (v.company_ids?.length === 0 || v.company_ids?.includes(prof.company_id))
    );
    if (userVideos.length === 0) { setReloadingId(null); return; }
    const totalPct = userVideos.reduce((sum, v) => {
      const p = allProgress.find(pr => pr.video_id === v.id);
      return sum + (p?.percent_watched || 0);
    }, 0);
    const pct = Math.round(totalPct / userVideos.length);
    setProgressMap(prev => ({ ...prev, [prof.id]: { pct, total: userVideos.length } }));
    setReloadingId(null);
  };

  const startEdit = (profile) => {
    setEditingId(profile.id);
    setEditForm({
      full_name: profile.full_name || '',
      cedula: profile.cedula || '',
      company: profile.company || '',
      company_id: profile.company_id || '',
      user_type: profile.user_type || 'operativo'
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({});
  };

  const saveEdit = async (id) => {
    setSaving(true);
    await base44.entities.AcademyProfile.update(id, editForm);
    setSaving(false);
    setEditingId(null);
    load();
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Eliminar este perfil? Esta acción no se puede deshacer.')) return;
    await base44.entities.AcademyProfile.delete(id);
    load();
  };

  const handleCompanyChange = (companyId) => {
    const company = companies.find(c => c.id === companyId);
    setEditForm(f => ({
      ...f,
      company_id: companyId,
      company: company ? company.name : f.company
    }));
  };

  const filtered = profiles.filter(p => {
    const q = search.toLowerCase();
    return (
      p.full_name?.toLowerCase().includes(q) ||
      p.user_email?.toLowerCase().includes(q) ||
      p.cedula?.toLowerCase().includes(q) ||
      p.company?.toLowerCase().includes(q)
    );
  });

  if (loading) return (
    <div className="flex items-center justify-center py-20">
      <div className="w-10 h-10 border-4 border-[#007aed] border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold text-[#0b194f]">Usuarios registrados</h2>
          <button
            onClick={async () => { setReloadingAll(true); await load(); setReloadingAll(false); }}
            disabled={reloadingAll}
            title="Actualizar todos los progresos"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#007aed]/10 hover:bg-[#007aed]/20 text-[#007aed] rounded-xl text-xs font-bold transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${reloadingAll ? 'animate-spin' : ''}`} />
            Actualizar datos
          </button>
        </div>
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar usuario..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#007aed] w-56"
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#f5f7fa] text-left">
              <th className="px-5 py-4 font-semibold text-[#0b194f]/60">Nombre</th>
              <th className="px-5 py-4 font-semibold text-[#0b194f]/60">Email</th>
              <th className="px-5 py-4 font-semibold text-[#0b194f]/60">Cédula</th>
              <th className="px-5 py-4 font-semibold text-[#0b194f]/60">Empresa</th>
              <th className="px-5 py-4 font-semibold text-[#0b194f]/60">Tipo</th>
              <th className="px-5 py-4 font-semibold text-[#0b194f]/60">Progreso</th>
              <th className="px-5 py-4 font-semibold text-[#0b194f]/60">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {filtered.map((p, i) => (
                <motion.tr
                  key={p.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={i % 2 === 0 ? 'bg-white' : 'bg-[#f9fafb]'}
                >
                  {editingId === p.id ? (
                    <>
                      <td className="px-5 py-3">
                        <input
                          value={editForm.full_name}
                          onChange={e => setEditForm(f => ({ ...f, full_name: e.target.value }))}
                          className="border border-gray-200 rounded-lg px-3 py-1.5 w-full focus:outline-none focus:border-[#007aed]"
                        />
                      </td>
                      <td className="px-5 py-3 text-[#0b194f]/50">{p.user_email}</td>
                      <td className="px-5 py-3">
                        <input
                          value={editForm.cedula}
                          onChange={e => setEditForm(f => ({ ...f, cedula: e.target.value }))}
                          className="border border-gray-200 rounded-lg px-3 py-1.5 w-full focus:outline-none focus:border-[#007aed]"
                        />
                      </td>
                      <td className="px-5 py-3">
                        <select
                          value={editForm.company_id}
                          onChange={e => handleCompanyChange(e.target.value)}
                          className="border border-gray-200 rounded-lg px-3 py-1.5 w-full focus:outline-none focus:border-[#007aed]"
                        >
                          <option value="">Sin empresa</option>
                          {companies.map(c => (
                            <option key={c.id} value={c.id}>{c.name}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-5 py-3">
                        <select
                          value={editForm.user_type}
                          onChange={e => setEditForm(f => ({ ...f, user_type: e.target.value }))}
                          className="border border-gray-200 rounded-lg px-3 py-1.5 w-full focus:outline-none focus:border-[#007aed]"
                        >
                          <option value="operativo">Operativo</option>
                          <option value="administrativo">Administrativo</option>
                        </select>
                      </td>
                      <td className="px-5 py-3 text-[#0b194f]/50 text-xs">—</td>
                      <td className="px-5 py-3">
                        <div className="flex gap-2">
                          <button onClick={() => saveEdit(p.id)} disabled={saving} className="p-2 bg-[#007aed] text-white rounded-lg hover:bg-[#0b194f] transition-colors">
                            <Save className="w-4 h-4" />
                          </button>
                          <button onClick={cancelEdit} className="p-2 border border-gray-200 text-gray-500 rounded-lg hover:bg-gray-50 transition-colors">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-5 py-4 font-semibold text-[#0b194f]">{p.full_name}</td>
                      <td className="px-5 py-4 text-[#0b194f]/60">{p.user_email}</td>
                      <td className="px-5 py-4 text-[#0b194f]/70">{p.cedula || '—'}</td>
                      <td className="px-5 py-4 text-[#0b194f]/70">{p.company || '—'}</td>
                      <td className="px-5 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                          p.user_type === 'administrativo'
                            ? 'bg-purple-100 text-purple-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {p.user_type === 'administrativo' ? 'Administrativo' : 'Operativo'}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        {progressMap[p.id] ? (
                          <div className="flex items-center gap-2 min-w-[120px]">
                            <div className="flex-1 bg-gray-100 rounded-full h-2">
                              <div
                                className="h-2 rounded-full bg-[#007aed] transition-all duration-500"
                                style={{ width: `${progressMap[p.id].pct}%` }}
                              />
                            </div>
                            <span className="text-xs font-bold text-[#0b194f] w-10 text-right">
                              {progressMap[p.id].pct}%
                            </span>
                            <button
                              onClick={() => reloadUserProgress(p)}
                              disabled={reloadingId === p.id}
                              title="Recalcular progreso"
                              className="p-1.5 text-[#007aed] hover:bg-blue-50 rounded-lg transition-colors"
                            >
                              <RefreshCw className={`w-3.5 h-3.5 ${reloadingId === p.id ? 'animate-spin' : ''}`} />
                            </button>
                          </div>
                        ) : (
                          <span className="text-xs text-gray-400">—</span>
                        )}
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex gap-2">
                          <button onClick={() => startEdit(p)} className="p-2 text-[#007aed] hover:bg-blue-50 rounded-lg transition-colors">
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button onClick={() => handleDelete(p.id)} className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </>
                  )}
                </motion.tr>
              ))}
            </AnimatePresence>
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-[#0b194f]/40">
                  {search ? 'No se encontraron usuarios con esa búsqueda' : 'Sin usuarios registrados aún'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}