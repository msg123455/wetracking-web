"use client"
import React, { useRef, useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { FileText, Download, BookOpen } from 'lucide-react';

export default function VideoPlayer({ video, userEmail, onCompleted, onProgress, progressData }) {
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(progressData?.percent_watched || 0);
  const [completed, setCompleted] = useState(progressData?.completed || false);
  const lastSaved = useRef(0);
  // maxReached tracks the furthest point the user has organically watched
  const maxReached = useRef((progressData?.percent_watched || 0) / 100);

  useEffect(() => {
    const pct = progressData?.percent_watched || 0;
    setProgress(pct);
    setCompleted(progressData?.completed || false);
    lastSaved.current = 0;
    maxReached.current = pct / 100;
  }, [video.id, progressData]);

  const saveProgress = async (pct) => {
    const res = await base44.functions.invoke('academySaveProgress', {
      user_email: userEmail,
      video_id: video.id,
      percent_watched: pct
    });

    onProgress && onProgress(video.id, pct);
    if (res.data?.completed && !completed) {
      setCompleted(true);
      onCompleted && onCompleted(video.id);
    }
  };

  const handleTimeUpdate = async () => {
    const vid = videoRef.current;
    if (!vid || vid.duration === 0) return;

    // Prevent seeking forward beyond what's been watched
    if (vid.currentTime > maxReached.current * vid.duration + 1) {
      vid.currentTime = maxReached.current * vid.duration;
      return;
    }

    // Update maxReached organically
    if (vid.currentTime > maxReached.current * vid.duration) {
      maxReached.current = vid.currentTime / vid.duration;
    }

    const pct = Math.floor((vid.currentTime / vid.duration) * 100);
    setProgress(pct);

    if (pct - lastSaved.current >= 5 || pct === 100) {
      lastSaved.current = pct;
      await saveProgress(pct);
    }
  };

  const handlePause = async () => {
    const vid = videoRef.current;
    if (!vid || vid.duration === 0) return;
    const pct = Math.floor((vid.currentTime / vid.duration) * 100);
    if (pct > lastSaved.current) {
      lastSaved.current = pct;
      await saveProgress(pct);
    }
  };

  const handleSeeking = () => {
    const vid = videoRef.current;
    if (!vid || vid.duration === 0) return;
    // Block any seek beyond max reached (+ 1s tolerance)
    const allowed = maxReached.current * vid.duration;
    if (vid.currentTime > allowed + 1) {
      vid.currentTime = allowed;
    }
  };

  // Attach a direct seeking listener with capture to block drags immediately
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const onSeeking = () => {
      if (!vid.duration) return;
      const allowed = maxReached.current * vid.duration;
      if (vid.currentTime > allowed + 1) {
        vid.currentTime = allowed;
      }
    };

    // Repeatedly enforce during seeking drag
    let interval = null;
    const onMouseDown = () => {
      interval = setInterval(() => {
        if (!vid.duration) return;
        const allowed = maxReached.current * vid.duration;
        if (vid.currentTime > allowed + 1) {
          vid.currentTime = allowed;
        }
      }, 50);
    };
    const onMouseUp = () => {
      if (interval) { clearInterval(interval); interval = null; }
    };

    vid.addEventListener('seeking', onSeeking, true);
    vid.addEventListener('mousedown', onMouseDown, true);
    document.addEventListener('mouseup', onMouseUp, true);
    vid.addEventListener('touchstart', onMouseDown, true);
    document.addEventListener('touchend', onMouseUp, true);

    return () => {
      vid.removeEventListener('seeking', onSeeking, true);
      vid.removeEventListener('mousedown', onMouseDown, true);
      document.removeEventListener('mouseup', onMouseUp, true);
      vid.removeEventListener('touchstart', onMouseDown, true);
      document.removeEventListener('touchend', onMouseUp, true);
      if (interval) clearInterval(interval);
    };
  }, [video.id]);

  return (
    <div className="w-full">

      {/* Summary and PDF section */}
      {(video.summary || video.pdf_url) && (
        <div className="mb-5 space-y-3">
          {video.summary && (
            <div className="bg-blue-50 border border-[#007aed]/20 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-[#007aed]" />
                <span className="font-bold text-[#0b194f] text-sm">Resumen del video</span>
              </div>
              <p className="text-[#0b194f]/70 text-sm leading-relaxed whitespace-pre-wrap">{video.summary}</p>
            </div>
          )}
          {video.pdf_url && (
            <a
              href={video.pdf_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white border-2 border-[#007aed]/30 hover:border-[#007aed] rounded-2xl p-4 transition-all group"
            >
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-red-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-[#0b194f] text-sm">Manual de instrucciones</p>
                <p className="text-[#0b194f]/50 text-xs truncate">{video.pdf_name || 'Guía paso a paso'}</p>
              </div>
              <Download className="w-5 h-5 text-[#007aed] group-hover:scale-110 transition-transform" />
            </a>
          )}
        </div>
      )}

      <div className="relative rounded-2xl overflow-hidden bg-black shadow-xl">
        <video
          ref={videoRef}
          src={video.video_url}
          controls
          onTimeUpdate={handleTimeUpdate}
          onPause={handlePause}
          onSeeking={handleSeeking}
          className="w-full aspect-video"
          controlsList="nodownload"
        />
      </div>

      <div className="mt-3">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-[#0b194f]/60">Progreso del video</span>
          <span className={`font-bold ${completed ? 'text-green-600' : 'text-[#007aed]'}`}>
            {progress}% {completed ? '✓ Completado' : ''}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${completed ? 'bg-green-500' : 'bg-[#007aed]'}`}
            style={{ width: `${progress}%` }}
          />
        </div>
        {!completed && (
          <p className="text-xs text-[#0b194f]/50 mt-1">⚠️ No puedes adelantar el video. Debes verlo completo para desbloquear el siguiente.</p>
        )}
      </div>
    </div>
  );
}

