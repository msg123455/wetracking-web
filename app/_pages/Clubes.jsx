"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Dumbbell, MapPin, Package, Shield, Users, Clock, TrendingUp, X, AlertCircle, Star } from 'lucide-react';
import { createPageUrl } from '@/utils';
import GlassNavbar from '@/components/navigation/GlassNavbar';
import Footer from '@/components/footer/Footer';
import { base44 } from '@/api/base44Client';
import InlineVideoUpload from '@/components/admin/InlineVideoUpload';


export default function Clubes() {
  const [videoConfig, setVideoConfig] = useState(null);
  const [loadingVideo, setLoadingVideo] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    loadVideo();
  }, []);

  const loadVideo = async () => {
    try {
      const videos = await base44.entities.VideoConfig.filter({ video_key: 'locativos_main' });
      if (videos.length > 0) {
        setVideoConfig(videos[0]);
      }
    } catch (error) {
      console.error('Error loading video:', error);
    } finally {
      setLoadingVideo(false);
    }
  };
  const clients = [
  {
    name: 'Club de Golf de Panamá',
    logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693c7294336e4d84a582bd72/17ca4fc8f_image.png'
  },
  {
    name: 'Los Lagartos',
    logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693c7294336e4d84a582bd72/71855e774_image.png'
  }];


  const problems = [
  {
    title: 'Pérdida de equipos y herramientas',
    before: 'Búsqueda manual que consume horas del personal',
    after: 'Localización instantánea con RFID'
  },
  {
    title: 'Inventarios desactualizados',
    before: 'Conteos manuales largos y propensos a errores',
    after: 'Inventario automático en minutos'
  },
  {
    title: 'Control deficiente de toallas',
    before: 'Alto índice de pérdidas y costos elevados',
    after: 'Trazabilidad completa y reducción de pérdidas'
  },
  {
    title: 'Falta de visibilidad en campo',
    before: 'No saber dónde están los equipos o el personal',
    after: 'Seguimiento GPS del personal con app móvil'
  }];


  const benefits = [
  {
    icon: Package,
    title: 'Control de Inventarios',
    description: 'Gestión en tiempo real de equipos deportivos, toallas, uniformes y materiales del club.'
  },
  {
    icon: MapPin,
    title: 'Seguimiento GPS de Personal',
    description: 'Localiza a tu equipo en campo mediante la app móvil. Ideal para mantenimiento y operaciones.'
  },
  {
    icon: Users,
    title: 'Control de Accesos',
    description: 'Registro automático de entrada y salida de socios y personal con tecnología RFID.'
  },
  {
    icon: Shield,
    title: 'Seguridad de Activos',
    description: 'Protección contra pérdidas y robos de equipamiento valioso del club.'
  },
  {
    icon: Clock,
    title: 'Optimización de Tiempo',
    description: 'Reducción del tiempo de búsqueda de equipos y agilización de operaciones diarias.'
  },
  {
    icon: TrendingUp,
    title: 'Auditorías Automáticas',
    description: 'Inventarios completos en minutos sin necesidad de conteos manuales.'
  }];


  const features = [
  'Rastreo de carritos de golf y equipamiento deportivo',
  'Control de toallas y uniformes con lavandería',
  'Gestión de casilleros y lockers inteligentes',
  'Inventario de bar, restaurante y pro shop',
  'Control de herramientas de mantenimiento',
  'Seguimiento GPS del personal en campo',
  'Reportes automáticos y análisis de uso'];


  return (
    <div className="min-h-screen bg-white">
      <GlassNavbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1">
              
              <h1 className="text-5xl md:text-6xl font-extrabold text-[#0b194f] mb-6 leading-tight">
                Tecnología RFID para
                <span className="text-[#007aed]"> Clubes Deportivos</span>
              </h1>
              
              <p className="text-lg text-[#0b194f]/70 mb-8 leading-relaxed">
                Optimiza la gestión de tu club con trazabilidad en tiempo real de equipos, 
                inventarios y activos. Reduce pérdidas, agiliza operaciones y mejora la 
                experiencia de tus socios.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/573117001527?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20las%20soluciones%20RFID%20de%20WeTracking" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-[#00ffd7] text-[#0b194f] font-bold rounded-full shadow-lg hover:bg-[#049bdc] transition-colors flex items-center gap-2">
                    Contáctanos
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </a>
                <a href={createPageUrl('TecnologiaRFID')}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-[#0b194f] text-white font-bold rounded-full hover:bg-[#0b194f]/90 transition-colors">
                    Ver Tecnología
                  </motion.button>
                </a>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-2">

              <motion.div
                animate={{
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full h-full">

                <img
                  src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&h=600&fit=crop"
                  alt="Golf Club"
                  className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-tr from-[#007aed]/20 to-transparent" />
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">

                <span className="text-sm font-bold text-[#007aed]">RFID</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">

                <span className="text-sm font-bold text-[#0b194f]">Trazabilidad 24/7</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problemas Comunes - Antes y Después */}
      <section className="py-20 px-6 lg:px-8 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold text-[#0b194f] mb-4">
              Los problemas más comunes en clubes
            </h2>
            <p className="text-xl text-[#0b194f]/60">
              Antes y después de implementar WeTracking
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8">

            {/* Columna ANTES */}
            <div className="bg-white rounded-3xl p-8 border-4 border-red-500">
              <h3 className="text-2xl font-bold text-[#0b194f] mb-8 text-center">ANTES</h3>
              <div className="space-y-4">
                {problems.map((problem, index) =>
                <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <X className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0b194f] mb-1">{problem.title}</h4>
                      <p className="text-[#0b194f]/70 text-sm">{problem.before}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Columna DESPUÉS */}
            <div className="bg-white rounded-3xl p-8 border-4 border-[#007aed]">
              <h3 className="text-2xl font-bold text-[#007aed] mb-8 text-center">DESPUÉS</h3>
              <div className="space-y-4">
                {problems.map((problem, index) =>
                <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#007aed] flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0b194f] mb-1">{problem.title}</h4>
                      <p className="text-[#0b194f]/70 text-sm">{problem.after}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clientes del Sector */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-[#0b194f] mb-4">
              Clubes que confían en nosotros
            </h2>
            <p className="text-lg text-[#0b194f]/60">
              Líderes del sector que ya optimizan sus operaciones con WeTracking
            </p>
          </motion.div>

          <div className="flex justify-center items-center gap-16 flex-wrap">
            {clients.map((client, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>

                <img
                src={client.logo}
                alt={client.name}
                className="h-24 w-auto object-contain" />

              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Caso de Éxito */}
      <section className="py-20 px-6 lg:px-8 bg-[#0b194f]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Respuesta de un Cliente en Clubes
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-6">

            {/* Recomendación */}
            <div className="bg-white rounded-2xl p-8">
              <p className="text-[#0b194f]/60 text-sm mb-4">De 1 al 10 nos recomiendan:</p>
              <div className="flex gap-1">
                {[...Array(10)].map((_, i) =>
                <Star key={i} className="w-8 h-8 fill-[#007aed] text-[#007aed]" />
                )}
              </div>
            </div>

            {/* Área Optimizada */}
            <div className="bg-white rounded-2xl p-8">
              <p className="text-[#0b194f]/60 text-sm mb-2">Área más optimizada dentro del Club:</p>
              <p className="text-3xl font-bold text-[#007aed]">Mantenimiento</p>
            </div>

            {/* Ampliación */}
            <div className="bg-white rounded-2xl p-8">
              <p className="text-[#0b194f]/60 text-sm mb-2">Ampliaría la operación en más zonas del Club:</p>
              <p className="text-6xl font-bold text-[#007aed] mb-0">100%</p>
            </div>

            {/* Mejor Logro */}
            <div className="bg-white rounded-2xl p-8">
              <p className="text-[#0b194f]/60 text-sm mb-2">Que es lo que mejor logramos dentro del Club:</p>
              <p className="text-2xl font-bold text-[#007aed] leading-tight">Mejor gestión, trazabilidad en cada proceso</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">

            <h2 className="text-3xl md:text-4xl font-bold text-[#0b194f] mb-4">
              ¿Cómo ayudamos a tu club?
            </h2>
            <p className="text-lg text-[#0b194f]/60 max-w-2xl mx-auto">
              Soluciones diseñadas específicamente para las necesidades únicas de clubes deportivos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#007aed]/10 hover:border-[#007aed]/30 transition-all duration-300 hover:-translate-y-1">

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#007aed] to-[#049bdc] flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0b194f] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-[#0b194f]/60 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>);

            })}
          </div>
        </div>
      </section>

      {/* Qué incluye la solución */}
      <section className="py-20 px-6 lg:px-8 bg-[#f5f7fa]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>

              <h2 className="text-3xl md:text-4xl font-bold text-[#0b194f] mb-6">
                Solución completa de trazabilidad
              </h2>
              <p className="text-lg text-[#0b194f]/70 mb-8 leading-relaxed">
                Implementamos un sistema integral que te permite rastrear cada activo de tu club 
                en tiempo real. Además, mediante nuestra app móvil, tu personal puede registrar 
                su ubicación GPS en campo, ideal para operaciones de mantenimiento y gestión.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) =>
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3">

                    <div className="w-2 h-2 rounded-full bg-[#00ffd7] flex-shrink-0 mt-2" />
                    <span className="text-[#0b194f]/80">{feature}</span>
                  </motion.div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6">

              <div className="bg-[#007aed] rounded-3xl p-8 shadow-xl">
                <h3 className="text-white text-2xl font-bold mb-4">Software SAMM</h3>
                <p className="text-white/90 leading-relaxed">
                  Plataforma web y móvil para gestión completa de tus activos. 
                  Dashboard en tiempo real, reportes automáticos, alertas inteligentes 
                  y análisis de uso. Incluye seguimiento GPS del personal en campo.
                </p>
              </div>
              
              <div className="bg-[#00ffd7] rounded-3xl p-8 shadow-xl">
                <h3 className="text-[#0b194f] text-2xl font-bold mb-4">Hardware RFID</h3>
                <p className="text-[#0b194f]/90 leading-relaxed">
                  Lectores fijos y portátiles, tags especializados para cada tipo de activo, 
                  antenas de última generación y portales de lectura automática.
                </p>
              </div>

              <div className="bg-[#0b194f] rounded-3xl p-8 shadow-xl">
                <h3 className="text-white text-2xl font-bold mb-4">Implementación</h3>
                <p className="text-white/90 leading-relaxed">
                  Instalación completa, configuración personalizada, capacitación del personal 
                  y soporte técnico continuo.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Demo */}
      <section className="py-20 px-6 lg:px-8 bg-[#0b194f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#00ffd7] rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#007aed] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              WeTracking en Acción
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Mira cómo nuestra solución transforma la gestión de locativos en clubes deportivos con trazabilidad completa y automatización inteligente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00ffd7] via-[#007aed] to-[#00ffd7] rounded-3xl blur-xl opacity-30" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
              <div className="aspect-video relative">
                {loadingVideo ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-[#007aed] border-t-transparent rounded-full animate-spin" />
                  </div>
                ) : videoConfig?.video_url ? (
                  (() => {
                    const url = videoConfig.video_url;
                    const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]{11})/);
                    if (ytMatch) {
                      const videoId = ytMatch[1];
                      const poster = videoConfig.poster_url || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
                      return (
                        <a
                          href={`https://www.youtube.com/watch?v=${videoId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative w-full h-full block group"
                        >
                          <img src={poster} alt="Video thumbnail" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                              <svg className="w-8 h-8 text-white ml-1" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                          </div>
                        </a>
                      );
                    }
                    return (
                      <video className="w-full h-full object-cover" controls poster={videoConfig.poster_url || ""}>
                        <source src={url} type="video/mp4" />
                      </video>
                    );
                  })()
                ) : (
                  <InlineVideoUpload videoKey="locativos_main" onUpdate={loadVideo} />
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 lg:px-8 bg-[#007aed] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para transformar tu club?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Agenda una reunión con nuestro equipo y descubre cómo WeTracking 
              puede optimizar las operaciones de tu club.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/573117001527?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20las%20soluciones%20RFID%20de%20WeTracking" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#00ffd7] text-[#0b194f] font-bold rounded-full shadow-xl hover:bg-white transition-colors flex items-center justify-center gap-2 text-lg">
                  Contáctanos
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </a>
              <a href={createPageUrl('TecnologiaRFID')}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#0b194f] text-white font-bold rounded-full hover:bg-[#0b194f]/90 transition-colors text-lg">
                  Ver Tecnología
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      </div>);

      }

