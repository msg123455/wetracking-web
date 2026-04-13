"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Lock, CheckCircle, ClipboardList, MessageCircle, Flame, Trophy, ChevronDown, ChevronUp } from 'lucide-react';

export default function VideoDashboard({ videos, sections = [], progressMap, exams, examResultsMap, onSelectVideo, onSelectExam, onOpenChat }) {

  const completedCount = videos.filter(v => progressMap[v.id]?.completed).length;
  const totalCount = videos.length;
  const overallPct = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  const motivationalMessages = [
    { minPct: 0,   maxPct: 0,   text: '¡Bienvenido! Comienza tu primer video hoy.', icon: <PlayCircle className="w-5 h-5 text-[#007aed]" /> },
    { minPct: 1,   maxPct: 24,  text: '¡Buen comienzo! Sigue así, cada video te acerca más.', icon: <Flame className="w-5 h-5 text-orange-500" /> },
    { minPct: 25,  maxPct: 49,  text: '¡Ya llevas un cuarto del curso! No pares ahora.', icon: <Flame className="w-5 h-5 text-orange-500" /> },
    { minPct: 50,  maxPct: 74,  text: '¡Vas a la mitad! Ya casi terminas.', icon: <Flame className="w-5 h-5 text-red-500" /> },
    { minPct: 75,  maxPct: 99,  text: '¡Ya casi terminas! ¡No te rindas!', icon: <Trophy className="w-5 h-5 text-yellow-500" /> },
    { minPct: 100, maxPct: 100, text: '¡Felicitaciones! Completaste todos los videos. ¡Ahora haz los exámenes!', icon: <Trophy className="w-5 h-5 text-green-500" /> },
  ];
  const motivational = motivationalMessages.find(m => overallPct >= m.minPct && overallPct <= m.maxPct) || motivationalMessages[0];

  // Group videos by section. Videos without section go to a "general" group.
  const videosWithSection = videos.filter(v => v.section_id);
  const videosNoSection = videos.filter(v => !v.section_id);

  const usedSectionIds = [...new Set(videosWithSection.map(v => v.section_id))];
  const usedSections = usedSectionIds
    .map(id => sections.find(s => s.id === id))
    .filter(Boolean)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  // Build a flat ordered list of all videos for unlock logic
  const orderedVideos = [
    ...usedSections.flatMap(sec => videos.filter(v => v.section_id === sec.id)),
    ...videosNoSection
  ];

  const isVideoUnlocked = (videoId) => {
    const idx = orderedVideos.findIndex(v => v.id === videoId);
    if (idx === 0) return true;
    return progressMap[orderedVideos[idx - 1]?.id]?.completed === true;
  };

  const isSectionCompleted = (sectionId) => {
    const sectionVideos = videos.filter(v => v.section_id === sectionId);
    return sectionVideos.length > 0 && sectionVideos.every(v => progressMap[v.id]?.completed);
  };

  const VideoCard = ({ video }) => {
    const unlocked = isVideoUnlocked(video.id);
    const done = progressMap[video.id]?.completed;
    const pct = progressMap[video.id]?.percent_watched || 0;
    const idx = orderedVideos.findIndex(v => v.id === video.id);

    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={() => unlocked && onSelectVideo(video)}
        className={`relative rounded-2xl overflow-hidden shadow-md border-2 transition-all duration-200 ${
          unlocked ? 'cursor-pointer hover:shadow-xl hover:-translate-y-1 border-transparent' : 'cursor-not-allowed border-transparent opacity-60'
        } ${done ? 'border-green-400' : ''}`}
      >
        <div className="relative aspect-video bg-gradient-to-br from-[#0b194f] to-[#007aed] flex items-center justify-center">
          {video.thumbnail_url
            ? <img src={video.thumbnail_url} alt={video.title} className="w-full h-full object-cover" />
            : <PlayCircle className="w-12 h-12 text-white/40" />}
          <div className={`absolute inset-0 flex items-center justify-center ${unlocked ? 'bg-black/20 hover:bg-black/40' : 'bg-black/50'}`}>
            {done
              ? <div className="bg-green-500 rounded-full p-2"><CheckCircle className="w-8 h-8 text-white" /></div>
              : unlocked
              ? <div className="bg-white/90 rounded-full p-1.5"><PlayCircle className="w-5 h-5 text-[#007aed]" /></div>
              : <div className="bg-black/50 rounded-full p-2"><Lock className="w-8 h-8 text-white/70" /></div>}
          </div>
          <div className="absolute bottom-2 right-2 w-6 h-6 bg-[#0b194f] text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md">
            {idx + 1}
          </div>
        </div>
        <div className="bg-white p-4">
          <h3 className="font-bold text-[#0b194f] text-sm leading-tight mb-2 line-clamp-2">{video.title}</h3>
          <div className="w-full bg-gray-100 rounded-full h-1.5">
            <div className={`h-1.5 rounded-full transition-all ${done ? 'bg-green-400' : 'bg-[#007aed]'}`} style={{ width: `${pct}%` }} />
          </div>
          <p className="text-xs mt-1 font-semibold" style={{ color: done ? '#16a34a' : '#007aed' }}>
            {done ? '✓ Completado' : pct > 0 ? `${pct}% visto` : unlocked ? 'Sin ver' : 'Bloqueado'}
          </p>
        </div>
      </motion.div>
    );
  };

  const ExamCard = ({ exam }) => {
    const sectionId = exam.section_id;
    const sectionDone = sectionId ? isSectionCompleted(sectionId) : true;
    const result = examResultsMap?.[exam.id];
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={() => sectionDone && onSelectExam(exam)}
        className={`relative rounded-2xl overflow-hidden shadow-md border-2 transition-all duration-200 ${
          sectionDone ? 'cursor-pointer hover:shadow-xl hover:-translate-y-1 border-transparent' : 'cursor-not-allowed border-transparent opacity-60'
        } ${result?.passed ? 'border-green-400' : ''}`}
      >
        <div className="relative aspect-video bg-gradient-to-br from-[#00ffd7] to-[#007aed] flex items-center justify-center">
          <div className={`rounded-full p-4 ${sectionDone ? 'bg-white/90' : 'bg-black/30'}`}>
            {result?.passed
              ? <CheckCircle className="w-10 h-10 text-green-500" />
              : <ClipboardList className={`w-10 h-10 ${sectionDone ? 'text-[#0b194f]' : 'text-white/70'}`} />}
          </div>
        </div>
        <div className="bg-white p-4">
          <h3 className="font-bold text-[#0b194f] text-sm leading-tight mb-1">{exam.title}</h3>
          <p className={`text-xs font-semibold ${result?.passed ? 'text-green-600' : sectionDone ? 'text-[#007aed]' : 'text-gray-400'}`}>
            {result?.passed ? `✓ Aprobado — ${result.score}%` : sectionDone ? 'Disponible' : 'Completa los videos de la sección'}
          </p>
        </div>
      </motion.div>
    );
  };

  const SectionBlock = ({ section }) => {
    const sectionVideos = videos.filter(v => v.section_id === section.id);
    const sectionExams = (exams || []).filter(e => e.section_id === section.id);
    const completed = isSectionCompleted(section.id);
    const [open, setOpen] = useState(true);

    return (
      <div className="mb-8">
        <button onClick={() => setOpen(o => !o)} className="flex items-center gap-3 mb-4 w-full text-left group">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${completed ? 'bg-green-100' : 'bg-[#007aed]/10'}`}>
            {completed
              ? <CheckCircle className="w-5 h-5 text-green-500" />
              : <div className="w-4 h-4 rounded-full border-2 border-[#007aed]" />}
            <span className={`font-bold text-sm ${completed ? 'text-green-700' : 'text-[#007aed]'}`}>{section.name}</span>
          </div>
          <span className="text-[#0b194f]/40 text-xs">{sectionVideos.length} videos · {sectionExams.length} examen(es)</span>
          <span className="ml-auto text-[#0b194f]/30">{open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}</span>
        </button>

        {open && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sectionVideos.map(video => <VideoCard key={video.id} video={video} />)}
            {sectionExams.map(exam => <ExamCard key={exam.id} exam={exam} />)}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header + progress */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <h2 className="text-2xl font-extrabold text-[#0b194f] mb-1">Contenido del curso</h2>
            <p className="text-[#0b194f]/50">Completa cada video en orden antes de avanzar.</p>
          </div>
          <div className="flex items-center gap-2 text-[#0b194f]/50 text-sm flex-shrink-0">
            <MessageCircle className="w-4 h-4 flex-shrink-0" />
            <span>¿Dudas? Usa el asistente <span className="font-semibold text-[#007aed]">↘ abajo a la derecha</span></span>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-5 border border-[#007aed]/10">
          <div className="flex items-center gap-3 mb-3">
            {motivational.icon}
            <p className="text-[#0b194f] font-semibold text-sm sm:text-base">{motivational.text}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-gray-100 rounded-full h-4 overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: `${overallPct}%` }} transition={{ duration: 0.8, ease: 'easeOut' }}
                className={`h-4 rounded-full ${overallPct === 100 ? 'bg-gradient-to-r from-green-400 to-green-500' : 'bg-gradient-to-r from-[#007aed] to-[#00ffd7]'}`} />
            </div>
            <span className="text-[#0b194f] font-extrabold text-lg w-14 text-right">{overallPct}%</span>
          </div>
          <p className="text-xs text-[#0b194f]/40 mt-1">{completedCount} de {totalCount} videos completados</p>
        </div>
      </div>

      {/* Secciones */}
      {usedSections.map(section => <SectionBlock key={section.id} section={section} />)}

      {/* Videos sin sección */}
      {videosNoSection.length > 0 && (
        <div className="mb-8">
          {usedSections.length > 0 && (
            <p className="text-sm font-semibold text-[#0b194f]/40 mb-4">Videos generales</p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {videosNoSection.map(video => <VideoCard key={video.id} video={video} />)}
            {/* Exámenes sin sección */}
            {(exams || []).filter(e => !e.section_id).map(exam => <ExamCard key={exam.id} exam={exam} />)}
          </div>
        </div>
      )}

      {/* If no sections and no videos at all */}
      {videos.length === 0 && (
        <div className="text-center py-16 text-[#0b194f]/30">No hay contenido disponible para tu perfil aún.</div>
      )}
    </div>
  );
}
