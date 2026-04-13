"use client"
import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Upload, Loader2, CheckCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VideoUploader({ videoKey, title }) {
  const [user, setUser] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [uploadProgress, setUploadProgress] = useState('');

  useEffect(() => {
    loadUser();
    loadCurrentVideo();
  }, []);

  const loadUser = async () => {
    try {
      const userData = await base44.auth.me();
      setUser(userData);
    } catch (error) {
      console.error('Error loading user:', error);
    }
  };

  const loadCurrentVideo = async () => {
    try {
      const videos = await base44.entities.VideoConfig.filter({ video_key: videoKey });
      if (videos.length > 0) {
        setCurrentVideo(videos[0]);
      }
    } catch (error) {
      console.error('Error loading video:', error);
    }
  };

  const handleVideoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('video/')) {
      alert('Por favor selecciona un archivo de video válido');
      return;
    }

    setIsUploading(true);
    setUploadProgress('Subiendo video...');

    try {
      // Subir el video
      const { file_url } = await base44.integrations.Core.UploadFile({ file });
      
      setUploadProgress('Guardando configuración...');

      // Guardar o actualizar la configuración
      if (currentVideo) {
        await base44.entities.VideoConfig.update(currentVideo.id, {
          video_url: file_url
        });
      } else {
        await base44.entities.VideoConfig.create({
          video_key: videoKey,
          video_url: file_url
        });
      }

      setUploadProgress('¡Video subido exitosamente!');
      setTimeout(() => {
        setUploadProgress('');
        loadCurrentVideo();
        window.location.reload();
      }, 1500);

    } catch (error) {
      console.error('Error uploading video:', error);
      alert('Error al subir el video. Por favor intenta de nuevo.');
      setUploadProgress('');
    } finally {
      setIsUploading(false);
    }
  };

  const handlePosterUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Por favor selecciona una imagen válida');
      return;
    }

    setIsUploading(true);
    setUploadProgress('Subiendo imagen de portada...');

    try {
      const { file_url } = await base44.integrations.Core.UploadFile({ file });
      
      if (currentVideo) {
        await base44.entities.VideoConfig.update(currentVideo.id, {
          poster_url: file_url
        });
      } else {
        await base44.entities.VideoConfig.create({
          video_key: videoKey,
          video_url: '',
          poster_url: file_url
        });
      }

      setUploadProgress('¡Portada actualizada!');
      setTimeout(() => {
        setUploadProgress('');
        loadCurrentVideo();
      }, 1500);

    } catch (error) {
      console.error('Error uploading poster:', error);
      alert('Error al subir la portada.');
      setUploadProgress('');
    } finally {
      setIsUploading(false);
    }
  };

  // Solo mostrar si el usuario es admin
  if (!user || user.role !== 'admin') {
    return null;
  }

  return (
    <div className="fixed bottom-32 left-6 z-50 bg-white rounded-2xl shadow-2xl p-6 max-w-sm border-2 border-[#007aed]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-[#0b194f] text-sm">Admin: {title}</h3>
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      </div>

      <div className="space-y-3">
        {/* Upload Video */}
        <label className="block">
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoUpload}
            disabled={isUploading}
            className="hidden"
          />
          <div className="px-4 py-2 bg-[#007aed] text-white rounded-lg text-sm font-medium cursor-pointer hover:bg-[#0056b3] transition-colors flex items-center gap-2 justify-center">
            <Upload className="w-4 h-4" />
            Subir Video
          </div>
        </label>

        {/* Upload Poster */}
        <label className="block">
          <input
            type="file"
            accept="image/*"
            onChange={handlePosterUpload}
            disabled={isUploading}
            className="hidden"
          />
          <div className="px-4 py-2 bg-[#00ffd7] text-[#0b194f] rounded-lg text-sm font-medium cursor-pointer hover:bg-[#00e6c3] transition-colors flex items-center gap-2 justify-center">
            <Upload className="w-4 h-4" />
            Subir Portada
          </div>
        </label>

        {/* Status */}
        <AnimatePresence>
          {uploadProgress && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2 text-xs text-[#007aed]"
            >
              {isUploading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <CheckCircle className="w-4 h-4" />
              )}
              {uploadProgress}
            </motion.div>
          )}
        </AnimatePresence>

        {currentVideo && (
          <div className="text-xs text-gray-500 pt-2 border-t">
            <p className="truncate">Video: {currentVideo.video_url ? '✓' : '✗'}</p>
            <p className="truncate">Portada: {currentVideo.poster_url ? '✓' : '✗'}</p>
          </div>
        )}
      </div>
    </div>
  );
}
