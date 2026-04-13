"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import {
  GraduationCap, Users, Video, ClipboardList, Plus, Trash2,
  Upload, LogOut, ChevronDown, ChevronUp, CheckCircle, XCircle, Edit3, BookOpen, Building2, Layers, RefreshCw
} from 'lucide-react';
import AdminVideoManager from './AdminVideoManager.jsx';
import AdminExamManager from './AdminExamManager.jsx';
import AdminKnowledgeBase from './AdminKnowledgeBase.jsx';
import AdminCompanyManager from './AdminCompanyManager.jsx';
import AdminUserManager from './AdminUserManager.jsx';
import AdminSectionManager from './AdminSectionManager.jsx';

export default function AcademyAdmin({ user, profile }) {
  const [tab, setTab] = useState('dashboard');
  const [students, setStudents] = useState([]);
  const [videos, setVideos] = useState([]);
  const [progresses, setProgresses] = useState([]);
  const [examResults, setExamResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const [profs, vids, progs, results] = await Promise.all([
      base44.entities.AcademyProfile.list(),
      base44.entities.AcademyVideo.list('order'),
      base44.entities.AcademyProgress.list(),
      base44.entities.AcademyExamResult.list('-created_date')
    ]);
    setStudents(profs);
    setVideos(vids.filter(v => v.is_active !== false));
    setProgresses(progs);
    setExamResults(results);
    setLoading(false);
  };

  const getStudentProgress = (student) => {
    // Solo videos que le corresponden a este estudiante
    const studentVideos = videos.filter(v =>
      v.group === student.user_type &&
      (v.company_ids?.length === 0 || v.company_ids?.includes(student.company_id))
    );
    const completedCount = studentVideos.filter(v =>
      progresses.find(p => p.user_email === student.user_email && p.video_id === v.id && p.completed)
    ).length;
    const totalPct = studentVideos.length === 0 ? 0 :
      Math.round(
        studentVideos.reduce((sum, v) => {
          const p = progresses.find(pr => pr.user_email === student.user_email && pr.video_id === v.id);
          return sum + (p?.percent_watched || 0);
        }, 0) / studentVideos.length
      );
    const bestExam = examResults
      .filter(r => r.user_email === student.user_email)
      .reduce((best, r) => (!best || r.score > best.score) ? r : best, null);
    return { completedVideos: completedCount, totalVideos: studentVideos.length, totalPct, bestExam };
  };

  if (loading) return (
    <div className="min-h-screen bg-[#0b194f] flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-[#00ffd7] border-t-transparent rounded-full animate-spin" />
    </div>
  );

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Users },
    { id: 'users', label: 'Usuarios', icon: Edit3 },
    { id: 'sections', label: 'Secciones', icon: Layers },
    { id: 'videos', label: 'Videos', icon: Video },
    { id: 'exam', label: 'Exámenes', icon: ClipboardList },
    { id: 'knowledge', label: 'Base de Conocimiento', icon: BookOpen },
    { id: 'companies', label: 'Empresas', icon: Building2 }
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fa] flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#0b194f] flex flex-col">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#00ffd7] rounded-full flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-[#0b194f]" />
            </div>
            <div>
              <h1 className="text-white font-bold leading-tight">Academia WeTracking</h1>
              <p className="text-[#00ffd7] text-xs font-semibold">Admin Panel</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {tabs.map(t => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  tab === t.id ? 'bg-[#007aed] text-white' : 'text-white/70 hover:bg-white/10'
                }`}
              >
                <Icon className="w-5 h-5" />
                {t.label}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <p className="text-white/50 text-xs px-4 mb-2">{profile.full_name}</p>
          <button
            onClick={() => base44.auth.logout()}
            className="w-full flex items-center gap-2 text-white/50 hover:text-white text-sm px-4 py-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Cerrar sesión
          </button>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 p-8 overflow-y-auto">
        {tab === 'dashboard' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#0b194f]">Progreso de Estudiantes</h2>
              <button
                onClick={load}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#007aed]/10 hover:bg-[#007aed]/20 text-[#007aed] rounded-xl text-xs font-bold transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Actualizar datos
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { label: 'Estudiantes', value: students.length },
                { label: 'Videos activos', value: videos.length },
                { label: 'Intentos aprobados', value: examResults.filter(r => r.passed).length }
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                  <p className="text-4xl font-extrabold text-[#007aed]">{s.value}</p>
                  <p className="text-[#0b194f]/60 mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#f5f7fa] text-left">
                    <th className="px-6 py-4 font-semibold text-[#0b194f]/60 text-sm">Estudiante</th>
                    <th className="px-6 py-4 font-semibold text-[#0b194f]/60 text-sm">Empresa</th>
                    <th className="px-6 py-4 font-semibold text-[#0b194f]/60 text-sm">Videos completados</th>
                    <th className="px-6 py-4 font-semibold text-[#0b194f]/60 text-sm">Progreso</th>
                    <th className="px-6 py-4 font-semibold text-[#0b194f]/60 text-sm">Examen</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((s, i) => {
                    const { completedVideos, totalVideos, totalPct, bestExam } = getStudentProgress(s);
                    return (
                      <tr key={s.id} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f9fafb]'}>
                        <td className="px-6 py-4">
                          <p className="font-semibold text-[#0b194f]">{s.full_name}</p>
                          <p className="text-xs text-[#0b194f]/50">{s.user_email}</p>
                        </td>
                        <td className="px-6 py-4 text-[#0b194f]/70">{s.company}</td>
                        <td className="px-6 py-4">
                          <span className="font-bold text-[#007aed]">{completedVideos}</span>
                          <span className="text-[#0b194f]/40"> / {totalVideos}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex-1 bg-gray-200 rounded-full h-2 w-24">
                              <div className="bg-[#007aed] h-2 rounded-full" style={{ width: `${totalPct}%` }} />
                            </div>
                            <span className="text-sm font-semibold text-[#0b194f]">{totalPct}%</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          {bestExam ? (
                            <div className="flex items-center gap-2">
                              {bestExam.passed
                                ? <CheckCircle className="w-5 h-5 text-green-500" />
                                : <XCircle className="w-5 h-5 text-red-400" />}
                              <span className={`font-bold text-sm ${bestExam.passed ? 'text-green-600' : 'text-red-500'}`}>
                                {bestExam.score}%
                              </span>
                            </div>
                          ) : (
                            <span className="text-[#0b194f]/30 text-sm">Sin intentos</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                  {students.length === 0 && (
                    <tr><td colSpan={5} className="px-6 py-12 text-center text-[#0b194f]/40">Sin estudiantes registrados aún</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === 'users' && <AdminUserManager />}
        {tab === 'sections' && <AdminSectionManager />}
        {tab === 'videos' && <AdminVideoManager videos={videos} onUpdate={load} />}
        {tab === 'exam' && <AdminExamManager onUpdate={load} />}
        {tab === 'knowledge' && <AdminKnowledgeBase />}
        {tab === 'companies' && <AdminCompanyManager />}
      </div>
    </div>
  );
}
