"use client"
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, TrendingUp, Shield, Zap, ArrowRight } from 'lucide-react';
import GlassNavbar from '@/components/navigation/GlassNavbar';
import Footer from '@/components/footer/Footer';

export default function Nosotros() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const valores = [
    {
      icon: Shield,
      title: 'Confiabilidad',
      description: 'Tecnología probada y respaldada por años de experiencia en la industria'
    },
    {
      icon: Zap,
      title: 'Innovación',
      description: 'Siempre a la vanguardia con las últimas tecnologías RFID y IoT'
    },
    {
      icon: Users,
      title: 'Compromiso',
      description: 'Acompañamos a nuestros clientes en cada paso de su transformación digital'
    },
    {
      icon: Award,
      title: 'Excelencia',
      description: 'Soluciones de clase mundial con los más altos estándares de calidad'
    }
  ];

  const stats = [
    { number: '10+', label: 'Clientes Satisfechos' },
    { number: '5+', label: 'Años de Experiencia' },
    { number: '10.000+', label: 'Activos Rastreados' },
    { number: '99.9%', label: 'Precisión' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <GlassNavbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-gradient-to-b from-[#f5f7fa] to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#0b194f] mb-6">
              Sobre
              <span className="text-[#007aed]"> WeTracking</span>
            </h1>
            <p className="text-xl text-[#0b194f]/70 max-w-3xl mx-auto">
              Líderes en soluciones de trazabilidad y gestión de activos con tecnología RFID
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=400&fit=crop"
              alt="WeTracking Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b194f]/60 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#007aed] rounded-3xl p-10 text-white"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                Transformar la manera en que las empresas gestionan sus activos, 
                proporcionando soluciones tecnológicas innovadoras que optimizan 
                operaciones, reducen pérdidas y mejoran la eficiencia en tiempo real.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0b194f] rounded-3xl p-10 text-white"
            >
              <div className="w-14 h-14 bg-[#00ffd7]/20 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-[#00ffd7]" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Nuestra Visión</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                Ser el líder regional en soluciones de trazabilidad inteligente, 
                reconocidos por nuestra innovación, confiabilidad y el impacto positivo 
                que generamos en las operaciones de nuestros clientes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 lg:px-8 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b194f] mb-4">
              Impacto en números
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-extrabold text-[#007aed] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#0b194f]/70 font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b194f] mb-4">
              Nuestros valores
            </h2>
            <p className="text-xl text-[#0b194f]/70 max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo diario
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {valores.map((valor, index) => {
              const Icon = valor.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border-2 border-[#007aed]/20 rounded-3xl p-8 hover:border-[#007aed] transition-all duration-300 hover:shadow-xl"
                >
                  <div className="w-14 h-14 bg-[#007aed] rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0b194f] mb-3">
                    {valor.title}
                  </h3>
                  <p className="text-[#0b194f]/70 leading-relaxed">
                    {valor.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 bg-[#007aed]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para transformar tu operación?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Únete a cientos de empresas que ya optimizan sus procesos con WeTracking
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/573117001527?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20las%20soluciones%20RFID%20de%20WeTracking" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-[#00ffd7] text-[#0b194f] font-bold rounded-full shadow-xl hover:bg-white transition-colors text-lg flex items-center gap-2"
                >
                  Contáctanos
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
