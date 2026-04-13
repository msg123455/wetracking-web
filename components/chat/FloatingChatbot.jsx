import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Loader2, Globe } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [conversation, setConversation] = useState(null);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: '¡Hola! 👋 Soy el asistente de WeTracking. Puedo ayudarte con:\n\n🌐 Información sobre la empresa y tecnología RFID\n🏭 Soluciones por industria (bodegas, clubes, manufactura...)\n📦 Software SAMM y cómo funciona\n\n¿En qué puedo ayudarte hoy?',
      suggestions: [
        '¿Qué es el RFID y cómo funciona?',
        '¿Qué soluciones ofrece WeTracking?',
        '¿Cómo funciona el software SAMM?',
        '¿En qué industrias trabajan?'
      ]
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const streamingContentRef = useRef('');
  const streamingTimerRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const initConversation = async () => {
    if (conversation) return conversation;
    const conv = await base44.agents.createConversation({
      agent_name: 'wetracking_assistant',
      metadata: { name: 'Chat WeTracking' }
    });
    setConversation(conv);

    base44.agents.subscribeToConversation(conv.id, (data) => {
      const agentMessages = data.messages.filter(m => m.role !== 'system');
      if (agentMessages.length === 0) return;
      const last = agentMessages[agentMessages.length - 1];
      if (last.role !== 'assistant' || !last.content) return;

      streamingContentRef.current = last.content;

      if (streamingTimerRef.current) clearTimeout(streamingTimerRef.current);
      streamingTimerRef.current = setTimeout(() => {
        const finalContent = streamingContentRef.current;
        setMessages(prev => {
          const clean = prev.filter(m => !m._loading);
          const lastMsg = clean[clean.length - 1];
          if (lastMsg?.role === 'assistant' && lastMsg?.content === finalContent) return clean;
          const streamIdx = clean.findIndex(m => m._streaming);
          if (streamIdx >= 0) {
            const updated = [...clean];
            updated[streamIdx] = { role: 'assistant', content: finalContent };
            return updated;
          }
          return [...clean, { role: 'assistant', content: finalContent }];
        });
        streamingContentRef.current = '';
        setIsLoading(false);
      }, 600);
    });

    return conv;
  };

  const sendMessage = async (text) => {
    if (!text.trim() || isLoading) return;
    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setIsLoading(true);
    const conv = await initConversation();
    await base44.agents.addMessage(conv, { role: 'user', content: text });
  };

  const handleSuggestionClick = (suggestion) => {
    if (isLoading) return;
    sendMessage(suggestion);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;
    const text = inputMessage.trim();
    setInputMessage('');
    sendMessage(text);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#007aed] rounded-full shadow-2xl flex items-center justify-center group hover:shadow-[#007aed]/50 transition-all duration-300"
        aria-label="Abrir chatbot"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageSquare className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-[#0b194f] text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Asistente Virtual
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-8 border-transparent border-t-[#0b194f]" />
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-0 right-0 md:bottom-24 md:right-6 z-50 w-full h-[100dvh] md:w-[400px] md:h-[600px] bg-white md:rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#007aed] to-[#0b194f] p-5 text-white flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-base">Asistente WeTracking</h3>
                  <span className="flex items-center gap-1 text-xs text-white/70 mt-0.5">
                    <Globe className="w-3 h-3" /> Empresa & Soluciones RFID
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f5f7fa]">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col ${message.role === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div className={`max-w-[85%] px-4 py-3 rounded-2xl ${
                    message.role === 'user' ? 'bg-[#007aed] text-white' : 'bg-white text-[#0b194f] shadow-sm'
                  }`}>
                    {message.content && (
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                    )}
                  </div>
                  {message.suggestions && (
                    <div className="flex flex-col gap-2 mt-2 w-full">
                      {message.suggestions.map((suggestion, i) => (
                        <motion.button
                          key={i}
                          onClick={() => handleSuggestionClick(suggestion)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-4 py-2 bg-white text-[#007aed] text-sm rounded-xl border-2 border-[#007aed]/20 hover:border-[#007aed] hover:bg-[#007aed]/5 transition-all text-left shadow-sm"
                        >
                          {suggestion}
                        </motion.button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              {isLoading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="bg-white px-4 py-3 rounded-2xl shadow-sm">
                    <Loader2 className="w-5 h-5 text-[#007aed] animate-spin" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-100 safe-area-bottom flex-shrink-0">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Escribe tu pregunta..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-3 bg-[#f5f7fa] rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#007aed]/20 disabled:opacity-50"
                  style={{ fontSize: '16px' }}
                />
                <motion.button
                  type="submit"
                  disabled={!inputMessage.trim() || isLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-[#007aed] rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#0056b3] transition-colors"
                >
                  <Send className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}