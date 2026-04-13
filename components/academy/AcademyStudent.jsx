"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { GraduationCap, ArrowLeft, LogOut, MessageCircle } from 'lucide-react';
import VideoPlayer from './VideoPlayer.jsx';
import ExamComponent from './ExamComponent.jsx';
import VideoDashboard from './VideoDashboard.jsx';

export default function AcademyStudent({ profile, onLogout, onOpenChat }) {
  const [videos, setVideos] = useState([]);
  const [sections, setSections] = useState([]);
  const [exams, setExams] = useState([]);
  const [progressMap, setProgressMap] = useState({});
  const [examResultsMap, setExamResultsMap] = useState({});
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const response = await base44.functions.invoke('academyGetContent', {
      user_email: profile.user_email,
      user_type: profile.user_type || 'operativo',
      company_id: profile.company_id || ''
    });

    const { videos: vids, sections: secs, exams: allExams, progresses, examResults } = response.data;

    setVideos(vids || []);
    setSections(secs || []);
    setExams(allExams || []);

    const pMap = {};
    (progresses || []).forEach(p => { pMap[p.video_id] = p; });
    setProgressMap(pMap);

    const rMap = {};
    (examResults || []).forEach(r => {
      if (!rMap[r.exam_id] || r.score > rMap[r.exam_id].score) rMap[r.exam_id] = r;
    });
    setExamResultsMap(rMap);
    setLoading(false);
  };

  const handleVideoCompleted = (videoId) => {
    setProgressMap(prev => ({ ...prev, [videoId]: { ...prev[videoId], completed: true, percent_watched: 100 } }));
  };

  const handleVideoProgress = (videoId, pct) => {
    setProgressMap(prev => ({
      ...prev,
      [videoId]: { ...prev[videoId], percent_watched: pct }
    }));
  };

  const totalProgress = videos.length === 0 ? 0 :
    Math.round(videos.reduce((sum, v) => sum + (progressMap[v.id]?.percent_watched || 0), 0) / videos.length);

  if (loading) return (
    <div className="min-h-screen bg-[#0b194f] flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-[#00ffd7] border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      {/* Top bar */}
      <div className="bg-[#0b194f] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {selected && (
            <button onClick={() => setSelected(null)} className="text-white/60 hover:text-white mr-2 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <div className="w-8 h-8 bg-[#00ffd7] rounded-full flex items-center justify-center">
            <GraduationCap className="w-4 h-4 text-[#0b194f]" />
          </div>
          <div>
            <span className="text-white font-bold">Academia WeTracking</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Progress pill */}
          <div className="hidden sm:flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5">
            <div className="w-16 bg-white/20 rounded-full h-1.5">
              <div className="bg-[#00ffd7] h-1.5 rounded-full transition-all" style={{ width: `${totalProgress}%` }} />
            </div>
            <span className="text-white text-xs font-bold">{totalProgress}%</span>
          </div>

          <span className="text-white/60 text-sm hidden sm:block">{profile.full_name}</span>

          <button onClick={onLogout} className="text-white/50 hover:text-white transition-colors flex items-center gap-1 text-sm">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 lg:p-10">
        {!selected ? (
          <VideoDashboard
            videos={videos}
            sections={sections}
            progressMap={progressMap}
            exams={exams}
            examResultsMap={examResultsMap}
            onSelectVideo={(video) => setSelected({ type: 'video', data: video })}
            onSelectExam={(exam) => setSelected({ type: 'exam', data: exam })}
            onOpenChat={onOpenChat}
          />
        ) : selected.type === 'video' ? (
          <motion.div key={selected.data.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0b194f] mb-2">{selected.data.title}</h2>
            {selected.data.description && (
              <p className="text-[#0b194f]/60 mb-6">{selected.data.description}</p>
            )}
            <VideoPlayer
              video={selected.data}
              userEmail={profile.user_email}
              progressData={progressMap[selected.data.id]}
              onCompleted={handleVideoCompleted}
              onProgress={handleVideoProgress}
            />
          </motion.div>
        ) : (
          <motion.div key="exam" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl mx-auto">
            <ExamComponent
              exam={selected.data}
              profile={profile}
              existingResult={examResultsMap[selected.data.id]?.passed ? examResultsMap[selected.data.id] : null}
              onResult={(res) => {
                setExamResultsMap(prev => ({ ...prev, [res.exam_id]: res }));
              }}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}
