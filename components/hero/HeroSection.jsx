import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { createPageUrl } from '@/utils';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background image - full bleed */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=75&fm=webp&auto=format"
          srcSet="
            https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=480&q=70&fm=webp&auto=format 480w,
            https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=75&fm=webp&auto=format 800w,
            https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=75&fm=webp&auto=format 1200w
          "
          sizes="100vw"
          alt="WeTracking RFID"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b194f]/90 via-[#0b194f]/70 to-[#007aed]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b194f]/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="max-w-2xl">

          {/* Headline */}
          <motion.h1
            className="text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="block text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Rastreo Inteligente
            </span>
            <span className="block text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              de Activos con
            </span>
            <span className="block text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-[#00ffd7]">
              Tecnología RFID
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-white/75 max-w-lg mb-10 leading-relaxed"
          >
            Soluciones RFID completas con hardware, software (SAMM) e implementación
            personalizada. Rastree y gestione sus activos con precisión y facilidad.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <a
              href="https://wa.me/573117001527?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20las%20soluciones%20RFID%20de%20WeTracking"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="group relative px-8 py-4 bg-[#00ffd7] text-[#0b194f] font-semibold rounded-full shadow-xl hover:bg-white transition-colors flex items-center gap-2">
                Contáctanos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>

            <a href={createPageUrl('TecnologiaRFID')}>
              <button className="px-6 py-4 text-white font-semibold border border-white/30 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2">
                Ver Tecnología RFID
              </button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex items-center gap-10 pt-8 border-t border-white/20"
          >
            {[
              { value: '99.9%', label: 'Precisión de Lectura' },
              { value: '10K+', label: 'Activos Rastreados' },
              { value: '< 4 sem', label: 'Implementación' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}