"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Cpu, BarChart3, ArrowRight } from 'lucide-react';

const FlowLine = ({ delay = 0 }) => {
  return (
    <motion.div
      className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00ffd7] to-transparent"
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ 
        scaleX: [0, 1, 1],
        opacity: [0, 1, 0]
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{ transformOrigin: 'left' }}
    />
  );
};

export default function ProcessSection() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-gradient-to-b from-[#0b194f] via-[#0a1545] to-[#0b194f] relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#00ffd7 1px, transparent 1px), linear-gradient(90deg, #00ffd7 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 px-6 py-2 bg-[#00ffd7]/10 border border-[#00ffd7]/30 rounded-full"
          >
            <p className="text-[#00ffd7] font-semibold text-sm">PROCESO SIMPLIFICADO</p>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            El proceso de lectura
          </h2>
          <p className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#00ffd7] via-[#007aed] to-[#00ffd7] bg-clip-text text-transparent">
            en solo 3 pasos
          </p>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Desde el tag hasta la visualización de datos en tiempo real
          </p>
        </motion.div>

        {/* Steps Container */}
        <div className="relative">
          {/* Animated connection lines between steps */}
          <div className="hidden lg:block absolute top-1/2 left-[16.66%] right-[16.66%] -translate-y-1/2 -z-10">
            <div className="relative h-1">
              <div className="absolute inset-0 bg-gradient-to-r from-[#007aed]/20 via-[#00ffd7]/20 to-[#007aed]/20 rounded-full" />
              <FlowLine delay={0} />
              <FlowLine delay={1} />
              
              {/* Animated dots along the line */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 w-2 h-2 bg-[#00ffd7] rounded-full -translate-y-1/2"
                  initial={{ left: '0%', opacity: 0 }}
                  animate={{ 
                    left: '100%',
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-8 items-center relative">
          {/* Step 1: Asset with RFID Tag */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex flex-col"
          >
            {/* Step number badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 w-14 h-14 rounded-full bg-gradient-to-br from-[#00ffd7] to-[#007aed] flex items-center justify-center shadow-2xl border-4 border-[#0b194f]">
              <span className="text-2xl font-bold text-[#0b194f]">1</span>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-[#00ffd7]/50 transition-all duration-300 relative overflow-hidden flex-1 flex flex-col">
              {/* Icon container */}
              <div className="relative mb-8 mt-4 flex-shrink-0">
                <div className="w-28 h-28 mx-auto rounded-2xl bg-gradient-to-br from-[#00ffd7] to-[#007aed] flex items-center justify-center relative shadow-2xl">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00ffd7] to-[#007aed] blur-xl opacity-50" />
                  <Cpu className="w-14 h-14 text-white relative z-10" />
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-start">
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  Activo
                </h3>
                <p className="text-white/70 text-center leading-relaxed text-sm">
                  Cada activo lleva un tag RFID con un chip que contiene información única y 
                  puede ser leído sin contacto físico.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Step 2: RFID Reader */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative flex flex-col"
          >
            {/* Connecting arrow from left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-12"
            >
              <ArrowRight className="w-8 h-8 text-[#00ffd7]" />
            </motion.div>

            {/* Step number badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 w-14 h-14 rounded-full bg-gradient-to-br from-[#007aed] to-[#049bdc] flex items-center justify-center shadow-2xl border-4 border-[#0b194f]">
              <span className="text-2xl font-bold text-white">2</span>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-[#007aed]/50 transition-all duration-300 relative overflow-hidden flex-1 flex flex-col">
              {/* Icon */}
              <div className="relative mb-8 mt-4 flex-shrink-0">
                <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-[#007aed] to-[#00ffd7] flex items-center justify-center relative shadow-2xl">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#007aed] to-[#00ffd7] blur-xl opacity-50" />
                  <Zap className="w-14 h-14 text-white relative z-10" />
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-start">
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  Lectura
                </h3>
                <p className="text-white/70 text-center leading-relaxed text-sm">
                  El lector RFID emite ondas de radio que activan el tag, 
                  leyendo y transmitiendo su información de forma instantánea.
                </p>
              </div>
            </div>

            {/* Connecting arrow to right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-12"
            >
              <ArrowRight className="w-8 h-8 text-[#00ffd7]" />
            </motion.div>
          </motion.div>

          {/* Step 3: Data Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative flex flex-col"
          >
            {/* Step number badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 w-14 h-14 rounded-full bg-gradient-to-br from-[#00ffd7] to-[#007aed] flex items-center justify-center shadow-2xl border-4 border-[#0b194f]">
              <span className="text-2xl font-bold text-[#0b194f]">3</span>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-[#00ffd7]/50 transition-all duration-300 relative overflow-hidden flex-1 flex flex-col">
              {/* Dashboard mockup */}
              <div className="relative mb-8 mt-4 flex-shrink-0">
                <div className="w-28 h-28 mx-auto rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 p-3 relative shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ffd7]/20 to-[#007aed]/20 blur-2xl" />
                  
                  <div className="relative h-full flex flex-col gap-1">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    </div>
                    
                    <div className="flex-1 grid grid-cols-2 gap-1">
                      <div className="bg-white/5 rounded flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full border-2 border-[#00ffd7]/30 border-t-[#00ffd7]" />
                      </div>
                      
                      <div className="bg-white/5 rounded flex items-end justify-center gap-0.5 p-1">
                        {[40, 70, 50, 90, 60].map((height, i) => (
                          <div
                            key={i}
                            className="w-1.5 bg-gradient-to-t from-[#007aed] to-[#00ffd7] rounded-t"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-start">
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  Software
                </h3>
                <p className="text-white/70 text-center leading-relaxed text-sm">
                  Nuestra plataforma SAMM procesa los datos en tiempo real, 
                  generando análisis, reportes y alertas automáticas.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
}

