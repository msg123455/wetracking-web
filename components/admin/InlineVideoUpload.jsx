"use client"
import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Upload, Loader2, Image, Film, Link } from 'lucide-react';
import { motion } from 'framer-motion';

export default function InlineVideoUpload({ videoKey, onUpdate }) {
  const [user, setUser] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadType, setUploadType] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [isSavingUrl, setIsSavingUrl] = useState(false);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const userData = await base44.auth.me();
      setUser(userData);
    } catch (error) {
      console.error('Error loading user:', error);
    }
  };

  const saveToDb = async (field, value) => {
    const videos = await base44.entities.VideoConfig.filter({ video_key: videoKey });
    if (videos.length > 0) {
      await base44.entities.VideoConfig.update(videos[0].id, { [field]: value });
    } else {
      await base44.entities.VideoConfig.create({
        video_key: videoKey,
        video_url: field === 'video_url' ? value : '',
        poster_url: field === 'poster_url' ? value : ''
      });
    }
  };

  const handleFileUpload = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Por favor selecciona una imagen válida');
      return;
    }

    setIsUploading(true);
    setUploadType(type);

    try {
      const { file_url } = await base44.integrations.Core.UploadFile({ file });
      await saveToDb('poster_url', file_url);
      if (onUpdate) onUpdate();
      setTimeout(() => window.location.reload(), 500);
    } catch (error) {
      console.error('Error uploading:', error);
      alert('Error al subir la imagen. Intenta de nuevo.');
    } finally {
      setIsUploading(false);
      setUploadType('');
    }
  };

  const handleSaveVideoUrl = async () => {
    if (!videoUrl.trim()) return;
    setIsSavingUrl(true);
    try {
      await saveToDb('video_url', videoUrl.trim());
      if (onUpdate) onUpdate();
      setTimeout(() => window.location.reload(), 500);
    } catch (error) {
      console.error('Error saving URL:', error);
      alert('Error al guardar la URL. Intenta de nuevo.');
    } finally {
      setIsSavingUrl(false);
    }
  };

  if (!user || user.role !== 'admin') {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-10"
    >
      <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full mx-4">
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-[#007aed]/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <Upload className="w-6 h-6 text-[#007aed]" />
          </div>
          <h3 className="text-xl font-bold text-[#0b194f] mb-2">Subir Contenido</h3>
          <p className="text-sm text-gray-600">Solo visible para administradores</p>
        </div>

        <div className="space-y-3">
          {/* Video por URL */}
          {!showUrlInput ? (
            <button
              onClick={() => setShowUrlInput(true)}
              className="w-full px-6 py-4 bg-[#007aed] text-white rounded-xl font-semibold hover:bg-[#0056b3] transition-all flex items-center justify-center gap-3"
            >
              <Link className="w-5 h-5" />
              Pegar URL del Video
            </button>
          ) : (
            <div className="space-y-2">
              <input
                type="url"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="https://... (URL directa del video .mp4)"
                className="w-full px-4 py-3 border-2 border-[#007aed]/30 rounded-xl text-sm focus:outline-none focus:border-[#007aed]"
              />
              <div className="flex gap-2">
                <button
                  onClick={handleSaveVideoUrl}
                  disabled={isSavingUrl || !videoUrl.trim()}
                  className="flex-1 px-4 py-3 bg-[#007aed] text-white rounded-xl font-semibold hover:bg-[#0056b3] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSavingUrl ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                  Guardar URL
                </button>
                <button
                  onClick={() => setShowUrlInput(false)}
                  className="px-4 py-3 bg-gray-100 text-gray-600 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                >
                  Cancelar
                </button>
              </div>
              <p className="text-xs text-gray-500 text-center">
                Usa Google Drive (enlace directo), Dropbox, o cualquier URL pública de video
              </p>
            </div>
          )}

          {/* Thumbnail por archivo */}
          <label className="block">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e, 'poster')}
              disabled={isUploading}
              className="hidden"
            />
            <div className="px-6 py-4 bg-[#00ffd7] text-[#0b194f] rounded-xl font-semibold cursor-pointer hover:bg-[#00e6c3] transition-all flex items-center justify-center gap-3">
              {isUploading && uploadType === 'poster' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Subiendo portada...
                </>
              ) : (
                <>
                  <Image className="w-5 h-5" />
                  Subir Thumbnail
                </>
              )}
            </div>
          </label>
        </div>
      </div>
    </motion.div>
  );
}

