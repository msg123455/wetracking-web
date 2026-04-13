"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function TechSection() {
  return (
    <section id="technology" className="py-32 relative overflow-hidden">
      {/* Fondo estático simple — sin animaciones en loop */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#f0f9ff]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-[#0b194f] tracking-tight mb-6"
            >
              ¿Cómo funciona la
              <br />
              <span className="text-[#007aed]">
                tecnología RFID?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[#0b194f]/60 mb-6 leading-relaxed"
            >
              La tecnología de <strong>Identificación por Radiofrecuencia (RFID)</strong> permite el rastreo automático de objetos mediante ondas de radio. Cada tag RFID contiene un chip con información única que es leída sin contacto físico ni línea de visión.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 mb-10"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#00ffd7]/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#007aed] font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0b194f] mb-1">Etiquetado</h4>
                  <p className="text-sm text-[#0b194f]/60">Los tags RFID se adhieren a activos, productos o equipos que desea rastrear.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#00ffd7]/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#007aed] font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0b194f] mb-1">Lectura</h4>
                  <p className="text-sm text-[#0b194f]/60">Los lectores RFID emiten señales de radio que activan los tags cercanos para transmitir su información.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#00ffd7]/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#007aed] font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0b194f] mb-1">Procesamiento</h4>
                  <p className="text-sm text-[#0b194f]/60">Nuestra plataforma SAMM procesa la información en tiempo real y genera insights automáticos.</p>
                </div>
              </div>
            </motion.div>

            <Link to={createPageUrl('TecnologiaRFID')}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 text-[#007aed] font-semibold cursor-pointer"
              >
                Conocer más sobre Tecnología RFID
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link>
          </div>

          {/* Visual - RFID Reader Animation */}
          <div className="relative flex items-center justify-center h-[420px]">
            <style>{`
              @keyframes rfid-wave-tech {
                0%   { transform: translate(-50%, -50%) scale(0.4); opacity: 0.8; }
                100% { transform: translate(-50%, -50%) scale(2.8); opacity: 0; }
              }
              .rfid-wave-tech {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 160px;
                height: 160px;
                border-radius: 50%;
                border: 2px solid #00ffd7;
                animation: rfid-wave-tech 2.4s ease-out infinite;
                pointer-events: none;
              }
              @keyframes tag-glow {
                0%, 100% { box-shadow: 0 0 0 0 rgba(0,255,215,0.4); }
                50%       { box-shadow: 0 0 0 6px rgba(0,255,215,0); }
              }
            `}</style>

            {/* Ondas */}
            <div className="rfid-wave-tech" style={{ animationDelay: '0s' }} />
            <div className="rfid-wave-tech" style={{ animationDelay: '0.6s', borderColor: '#007aed' }} />
            <div className="rfid-wave-tech" style={{ animationDelay: '1.2s' }} />
            <div className="rfid-wave-tech" style={{ animationDelay: '1.8s', borderColor: '#007aed' }} />

            {/* Contenedor relativo para lector + chips */}
            <div className="relative" style={{ width: 380, height: 320 }}>

              {/* Lector RFID central */}
              <div className="absolute z-20" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <div className="w-40 h-56 bg-gradient-to-br from-[#0b194f] to-[#007aed] rounded-2xl shadow-2xl border-2 border-[#00ffd7]/40 p-4 flex flex-col">
                  <div className="w-full flex-1 bg-[#00ffd7]/10 rounded-xl mb-3 border border-[#00ffd7]/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-[#00ffd7] text-xs font-mono mb-1 tracking-widest">LEYENDO...</div>
                      <div className="text-white text-3xl font-bold">24</div>
                      <div className="text-white/60 text-xs">Tags detectados</div>
                    </div>
                  </div>
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-1 bg-[#00ffd7] rounded-full" />
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="w-full h-4 bg-[#0b194f]/60 rounded border border-[#007aed]/30" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Tag tipo etiqueta — arriba izquierda */}
              <div className="absolute bg-white rounded-lg shadow-lg border-2 border-[#007aed]/40 overflow-hidden"
                style={{ top: 10, left: 0, width: 72, height: 48, transform: 'rotate(-12deg)', animation: 'tag-glow 2s ease-in-out infinite' }}>
                <div className="h-2 bg-gradient-to-r from-[#007aed] to-[#00ffd7] w-full" />
                <div className="p-1.5">
                  <div className="w-full h-1 bg-[#0b194f]/20 rounded mb-1" />
                  <div className="w-3/4 h-1 bg-[#0b194f]/10 rounded" />
                  <div className="flex items-center gap-1 mt-1">
                    <div className="w-3 h-3 rounded-sm bg-[#007aed]/30" />
                    <div className="w-1 h-1 rounded-full bg-[#00ffd7]" />
                  </div>
                </div>
              </div>

              {/* Tag tipo chip cuadrado — arriba derecha */}
              <div className="absolute bg-[#0b194f] rounded-lg shadow-lg border border-[#00ffd7]/40 flex items-center justify-center"
                style={{ top: 20, right: 0, width: 52, height: 52, transform: 'rotate(10deg)', animation: 'tag-glow 2s ease-in-out 0.5s infinite' }}>
                <div className="w-8 h-8 rounded bg-[#007aed]/40 border border-[#00ffd7]/60 grid grid-cols-2 gap-0.5 p-1">
                  <div className="bg-[#00ffd7]/80 rounded-sm" />
                  <div className="bg-[#00ffd7]/40 rounded-sm" />
                  <div className="bg-[#00ffd7]/40 rounded-sm" />
                  <div className="bg-[#00ffd7]/80 rounded-sm" />
                </div>
              </div>

              {/* Tag tipo pulsera/wristband — abajo izquierda */}
              <div className="absolute bg-gradient-to-r from-[#007aed] to-[#0b194f] rounded-full shadow-lg"
                style={{ bottom: 20, left: 2, width: 80, height: 28, transform: 'rotate(8deg)', animation: 'tag-glow 2s ease-in-out 1s infinite' }}>
                <div className="w-full h-full rounded-full border border-[#00ffd7]/40 flex items-center justify-center gap-1 px-2">
                  <div className="w-4 h-4 rounded-full border border-[#00ffd7]/60 bg-white/10" />
                  <div className="flex-1 h-0.5 bg-[#00ffd7]/40 rounded" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00ffd7]" />
                </div>
              </div>

              {/* Tag tipo tarjeta — abajo derecha */}
              <div className="absolute bg-white rounded-xl shadow-lg border-2 border-[#00ffd7]/40 overflow-hidden"
                style={{ bottom: 14, right: 0, width: 68, height: 46, transform: 'rotate(-16deg)', animation: 'tag-glow 2s ease-in-out 1.5s infinite' }}>
                <div className="h-1.5 bg-[#00ffd7]/60 w-full" />
                <div className="p-1.5 flex gap-1.5 items-center">
                  <div className="w-6 h-6 rounded bg-gradient-to-br from-[#007aed]/30 to-[#00ffd7]/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-sm bg-[#007aed]" />
                  </div>
                  <div className="flex-1">
                    <div className="h-1 bg-[#0b194f]/30 rounded w-full mb-1" />
                    <div className="h-1 bg-[#0b194f]/15 rounded w-2/3" />
                  </div>
                </div>
              </div>

            </div>

            {/* Glow */}
            <div className="absolute inset-0 bg-[#00ffd7]/5 rounded-3xl blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
