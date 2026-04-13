import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function VideoSection() {
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
            <video
              className="absolute inset-0 w-full h-full object-cover"
              controls
              poster="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&q=80"
            >
              <source src="TU_VIDEO_AQUI.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>
          
          {/* Decorative glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00ffd7] to-[#007aed] opacity-20 blur-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}