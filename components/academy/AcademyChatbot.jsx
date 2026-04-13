"use client"
import React, { useState, useEffect, useRef } from 'react';
import { base44 } from '@/api/base44Client';
import { MessageCircle, X, Send, Loader2, Paperclip, ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

export default function AcademyChatbot({ externalOpen, onExternalOpenChange, profile }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [uploadingFile, setUploadingFile] = useState(false);
  const [pendingFile, setPendingFile] = useState(null);

  const bottomRef = useRef(null);
  const fileInputRef = useRef(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (externalOpen) setOpen(true);
  }, [externalOpen]);

  const handleClose = () => {
    setOpen(false);
    onExternalOpenChange?.(false);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (open && !initializedRef.current) {
      initializedRef.current = true;
      const welcomeContent = profile
        ? `¡Hola **${profile.full_name}**! 👋 Soy tu asistente de la Academia WeTracking.\n\nPuedo ayudarte con:\n- 📹 Dudas sobre los videos del curso\n- 📝 Preguntas sobre el examen\n- 🖥️ Uso del software SAMM\n- 🔧 Problemas técnicos\n- 💬 PQRs y sugerencias\n\n¿En qué te puedo ayudar hoy?`
        : '¡Hola! 👋 Soy tu asistente de la Academia WeTracking. ¿En qué te puedo ayudar?';
      setMessages([{ role: 'assistant', content: welcomeContent }]);
    }
  }, [open]);

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingFile(true);
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    setPendingFile({ url: file_url, name: file.name });
    setUploadingFile(false);
    e.target.value = '';
  };

  const sendMessage = async (text, fileUrl = null) => {
    if (!text.trim() && !fileUrl) return;

    const userMsg = { role: 'user', content: text || '📎 Archivo adjunto', fileUrl };
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);
    setPendingFile(null);

    const history = messages.filter(m => m.content && !m._loading);

    const response = await base44.functions.invoke('academyChat', {
      message: text || 'Analiza este archivo',
      profile,
      history,
      fileUrl
    });

    const reply = response.data?.reply || 'Lo siento, no pude procesar tu pregunta. Intenta de nuevo.';
    setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    setIsLoading(false);
  };

  const handleSend = async () => {
    if ((!input.trim() && !pendingFile) || isLoading) return;
    const text = input.trim();
    const fileUrl = pendingFile?.url || null;
    setInput('');
    await sendMessage(text, fileUrl);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => open ? handleClose() : setOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#007aed] rounded-full shadow-2xl flex items-center justify-center hover:bg-[#0b194f] transition-colors"
        aria-label="Asistente Academia"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-0 right-0 md:bottom-24 md:right-6 z-50 w-full h-[100dvh] md:w-[400px] md:h-[560px] bg-white md:rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0b194f] to-[#007aed] p-4 text-white flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00ffd7] flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#0b194f]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-sm">Asistente Academia</h3>
                  {profile && (
                    <p className="text-white/70 text-xs truncate">{profile.full_name} · {profile.company}</p>
                  )}
                </div>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#f5f7fa]">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[#007aed] text-white'
                      : 'bg-white text-[#0b194f] shadow-sm'
                  }`}>
                    {msg.fileUrl && (
                      <div className="mb-2">
                        {msg.fileUrl.match(/\.(jpg|jpeg|png|gif|webp)$/i) ? (
                          <img src={msg.fileUrl} alt="adjunto" className="rounded-xl max-h-40 object-cover" />
                        ) : (
                          <div className="flex items-center gap-2 text-xs bg-white/20 rounded-lg px-2 py-1">
                            <Paperclip className="w-3 h-3" />
                            <span>Archivo adjunto</span>
                          </div>
                        )}
                      </div>
                    )}
                    {msg.role === 'assistant' ? (
                      <ReactMarkdown
                        className="prose prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 prose-p:my-1 prose-ul:my-1 prose-li:my-0"
                        components={{
                          p: ({ children }) => <p className="my-1">{children}</p>,
                          ul: ({ children }) => <ul className="my-1 ml-4 list-disc">{children}</ul>,
                          ol: ({ children }) => <ol className="my-1 ml-4 list-decimal">{children}</ol>,
                          li: ({ children }) => <li className="my-0.5">{children}</li>,
                          strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                          code: ({ children }) => <code className="bg-gray-100 px-1 rounded text-xs">{children}</code>,
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    ) : (
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="bg-white px-4 py-3 rounded-2xl shadow-sm">
                    <Loader2 className="w-4 h-4 text-[#007aed] animate-spin" />
                  </div>
                </motion.div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-gray-100 flex-shrink-0">
              {pendingFile && (
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-2 bg-[#f5f7fa] rounded-xl px-3 py-1.5 flex-1">
                    <ImageIcon className="w-3.5 h-3.5 text-[#007aed]" />
                    <span className="text-xs text-[#0b194f] truncate">{pendingFile.name}</span>
                  </div>
                  <button type="button" onClick={() => setPendingFile(null)} className="text-gray-400 hover:text-red-400 transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
              <div className="flex items-center gap-2">
                <input ref={fileInputRef} type="file" accept="image/*,.pdf,.doc,.docx" onChange={handleFileUpload} className="hidden" />
                <motion.button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isLoading || uploadingFile}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 bg-[#f5f7fa] rounded-full flex items-center justify-center disabled:opacity-50 hover:bg-[#e8edf2] transition-colors flex-shrink-0"
                  title="Adjuntar archivo o imagen"
                >
                  {uploadingFile ? <Loader2 className="w-4 h-4 text-[#007aed] animate-spin" /> : <Paperclip className="w-4 h-4 text-[#007aed]" />}
                </motion.button>
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onPaste={async (e) => {
                    const items = Array.from(e.clipboardData?.items || []);
                    const imageItem = items.find(item => item.type.startsWith('image/'));
                    if (!imageItem) return;
                    e.preventDefault();
                    const file = imageItem.getAsFile();
                    if (!file) return;
                    setUploadingFile(true);
                    const { file_url } = await base44.integrations.Core.UploadFile({ file });
                    setPendingFile({ url: file_url, name: 'Imagen pegada' });
                    setUploadingFile(false);
                  }}
                  placeholder="Escribe tu pregunta..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-2.5 bg-[#f5f7fa] rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#007aed]/20 disabled:opacity-50"
                  style={{ fontSize: '16px' }}
                />
                <motion.button
                  onClick={handleSend}
                  disabled={(!input.trim() && !pendingFile) || isLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 bg-[#007aed] rounded-full flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#0b194f] transition-colors"
                >
                  <Send className="w-4 h-4 text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

