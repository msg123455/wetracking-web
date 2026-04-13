"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import InlineVideoUpload from '@/components/admin/InlineVideoUpload';

export default function AdminVideoSection({ videoKey = 'home_main', title = 'Video Principal' }) {
  const [videoConfig, setVideoConfig] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadVideo();
  }, [videoKey]);

  const loadVideo = async () => {
    try {
      const videos = await base44.entities.VideoConfig.filter({ video_key: videoKey });
      if (videos.length > 0) {
        setVideoConfig(videos[0]);
      }
    } catch (error) {
      console.error('Error loading video:', error);
    } finally {
      setLoading(false);
    }
  };

  const defaultPoster = "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&q=80";

  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0b194f] tracking-tight mb-4"
          >
            Mira cómo se aplica
            <br />
            <span className="text-[#007aed]">
              a la vida real
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[#0b194f]/60 max-w-2xl mx-auto"
          >
            Descubre cómo nuestras soluciones RFID transforman operaciones reales en diferentes industrias.
          </motion.p>
        </div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#0b194f]/10"
        >
          <div className="relative aspect-video bg-black">
            {loading ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-[#007aed] border-t-transparent rounded-full animate-spin" />
              </div>
            ) : videoConfig?.video_url ? (
              <video
                className="absolute inset-0 w-full h-full object-cover"
                controls
                poster={videoConfig.poster_url || defaultPoster}
              >
                <source src={videoConfig.video_url} type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
            ) : (
              <InlineVideoUpload videoKey={videoKey} onUpdate={loadVideo} />
            )}
          </div>
          
          {/* Decorative glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00ffd7] to-[#007aed] opacity-20 blur-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
