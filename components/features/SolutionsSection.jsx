import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Package, BarChart3, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const solutions = [
  {
    title: 'Inventarios',
    description: 'Control automatizado de stock con conteos rápidos y precisos. Actualización en tiempo real de cada movimiento de productos en tu bodega. Alertas automáticas de reabastecimiento y auditorías instantáneas que eliminan los errores humanos.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=70&fm=webp&auto=format',
    icon: BarChart3,
    stats: { value: '99%', label: 'Precisión' },
    link: createPageUrl('Inventarios')
  },
  {
    title: 'Activos',
    description: 'Rastreo completo del ciclo de vida de activos fijos, herramientas y equipos. Registro automático de cada movimiento, asignación de responsables, historial de mantenimiento, depreciación y alertas de calibración o renovación.',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&q=70&fm=webp&auto=format',
    icon: Package,
    stats: { value: '24/7', label: 'Monitoreo' },
    link: createPageUrl('Activos')
  },
  {
    title: 'Locativos',
    description: 'Gestión inteligente de espacios, zonas y ubicaciones con mapeo en tiempo real. Control de recursos por área, asignación de personal a locaciones específicas, análisis de ocupación y optimización del uso de instalaciones.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=70&fm=webp&auto=format',
    icon: Workflow,
    stats: { value: '100%', label: 'Visibilidad' },
    link: createPageUrl('Locativos')
  }
];

export default function SolutionsSection() {
  return (
    <section className="py-32 relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b194f] mb-4">
            Soluciones Integrales
          </h2>
          <p className="text-xl text-[#0b194f]/60 max-w-3xl mx-auto">
            Herramientas versátiles para la gestión completa de tus operaciones
          </p>
        </motion.div>

        <div className="space-y-24">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const isReversed = index % 2 === 1;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:grid-flow-dense' : ''}`}
              >
                {/* Imagen */}
                <div className={`relative ${isReversed ? 'lg:col-start-2' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                  >
                    <div className="aspect-[4/3] relative">
                      <img 
                        src={solution.image} 
                        alt={solution.title}
                        width="800"
                        height="600"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                      {/* Eliminado el overlay azul */}
                    </div>
                    
                    {/* Badge flotante */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-3xl font-extrabold text-[#007aed]">{solution.stats.value}</span>
                        <span className="text-sm font-medium text-[#0b194f]/60">{solution.stats.label}</span>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-[#007aed]/5 rounded-3xl blur-2xl -z-10" />
                </div>

                {/* Contenido */}
                <div className={isReversed ? 'lg:col-start-1' : ''}>
                  <motion.div
                    initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#007aed] to-[#00ffd7] flex items-center justify-center shadow-lg">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-4xl font-extrabold text-[#0b194f]">
                        {solution.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-[#0b194f]/70 leading-relaxed mb-8">
                      {solution.description}
                    </p>

                    <Link to={solution.link}>
                      <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-[#007aed] text-white font-bold rounded-full shadow-lg hover:bg-[#0056b3] transition-all duration-300"
                      >
                        <span>Conocer más</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}