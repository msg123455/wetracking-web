"use client"
import React from 'react';
import { motion } from 'framer-motion';
import {
  Radio,
  Laptop,
  Tags,
  Shield,
  BarChart3,
  Package,
  Settings,
  Workflow } from
'lucide-react';
import FeatureCard from './FeatureCard';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const servicios = [
{
  icon: Radio,
  title: 'Industria Petrolera',
  description: 'Soluciones RFID especializadas para el control de herramientas, equipos y activos en operaciones petroleras complejas.',
  gradient: 'from-[#007aed] to-[#049bdc]',
  size: 'normal',
  link: createPageUrl('IndustriaPetrolera')

},
{
  icon: Settings,
  title: 'Manufactura',
  description: 'Optimice su línea de producción con rastreo en tiempo real de materias primas, productos en proceso y terminados.',
  gradient: 'from-[#00ffd7] to-[#049bdc]',
  size: 'normal',
  link: createPageUrl('Manufactura')
},
{
  icon: Package,
  title: 'Bodegas',
  description: 'Control total de inventarios con localización exacta de productos y automatización de procesos de entrada y salida.',
  gradient: 'from-[#049bdc] to-[#007aed]',
  size: 'normal',
  link: createPageUrl('Bodegas')

},
{
  icon: Shield,
  title: 'Clubes',
  description: 'Control de acceso inteligente y gestión de lockers con tecnología RFID para una experiencia premium.',
  gradient: 'from-[#00ffd7] to-[#007aed]',
  size: 'normal',
  link: createPageUrl('Clubes')
}];



export default function FeatureGrid() {
  return (
    <section id="solutions" className="py-32 relative">
      {/* Section background */}
      <div className="bg-gradient-to-b absolute inset-0 from-transparent via-[#f5f7fa]/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-20">
          











          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0b194f] tracking-tight mb-6">

            Servicios y Soluciones RFID
            <br />
            <span className="text-[#007aed]">
              para cada industria
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[#0b194f]/60 max-w-2xl mx-auto">

            Soluciones especializadas por industria y herramientas versátiles para la gestión integral de sus operaciones.
          </motion.p>
        </div>

        {/* Servicios Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-[#0b194f] mb-8">

            Servicios por Industria
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {servicios.map((servicio, index) =>
            servicio.link ?
            <Link key={index} to={servicio.link}>
                  <FeatureCard
                icon={servicio.icon}
                title={servicio.title}
                description={servicio.description}
                gradient={servicio.gradient}
                size={servicio.size}
                delay={index * 0.1} />

                </Link> :

            <FeatureCard
              key={index}
              icon={servicio.icon}
              title={servicio.title}
              description={servicio.description}
              gradient={servicio.gradient}
              size={servicio.size}
              delay={index * 0.1} />


            )}
          </div>
        </div>
      </div>
    </section>);

}
