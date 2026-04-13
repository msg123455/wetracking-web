"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Shield, Clock, TrendingUp, Users, FileText, Wrench, BarChart3, Settings, Zap, Calendar, ClipboardList, DollarSign, Activity, Target, GitBranch, Database, Building2, MapPin, Layers } from 'lucide-react';
import { createPageUrl } from '@/utils';
import GlassNavbar from '@/components/navigation/GlassNavbar';
import Footer from '@/components/footer/Footer';
import { base44 } from '@/api/base44Client';
import InlineVideoUpload from '@/components/admin/InlineVideoUpload';

export default function Locativos() {
  const [videoConfig, setVideoConfig] = useState(null);
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    }
  };

  const trazabilidadTypes = [
    {
      icon: GitBranch,
      title: 'Trazabilidad hacia Adelante',
      description: 'Seguimiento del área desde su configuración inicial hasta su estado actual. Registro de todos los mantenimientos, modificaciones e intervenciones realizadas.',
      color: 'from-[#007aed] to-[#0b194f]'
    },
    {
      icon: Database,
      title: 'Trazabilidad hacia Atrás',
      description: 'Historial completo del área: fecha de construcción, remodelaciones previas, proveedores de mantenimiento y toda la documentación histórica.',
      color: 'from-[#00ffd7] to-[#007aed]'
    },
    {
      icon: FileText,
      title: 'Hoja de Vida Digital',
      description: 'Registro detallado de cada área o zona: características técnicas, mantenimientos realizados, costos acumulados, responsables asignados y estado actual de conservación.',
      color: 'from-[#049bdc] to-[#00ffd7]'
    }
  ];

  const softwareFeatures = [
    {
      icon: FileText,
      title: 'Hoja de Vida por Área',
      description: 'Documentación completa de cada zona con historial de intervenciones'
    },
    {
      icon: Calendar,
      title: 'Programación de Mantenimientos',
      description: 'Planificación automatizada de mantenimientos preventivos por área'
    },
    {
      icon: BarChart3,
      title: 'KPIs de Instalaciones',
      description: 'Visualización en tiempo real del estado de tus áreas y zonas'
    },
    {
      icon: ClipboardList,
      title: 'Órdenes de Trabajo',
      description: 'Gestión completa de órdenes de mantenimiento locativo'
    },
    {
      icon: DollarSign,
      title: 'Reportes de Costos',
      description: 'Costos asociados por área: mantenimientos, materiales e insumos'
    },
    {
      icon: Wrench,
      title: 'Solicitudes de Mantenimiento',
      description: 'Sistema de tickets para reportar daños o necesidades de mantenimiento'
    }
  ];

  const integracionBenefits = [
    {
      title: 'Integración Operarios-Software',
      description: 'Los operarios usan tecnología RFID para interactuar con áreas específicas, registrando cada intervención en tiempo real.',
      icon: Users,
      stat: '100%',
      label: 'Trazabilidad'
    },
    {
      title: 'Cultura de la Información',
      description: 'Registro automático de qué operario realizó cada mantenimiento, en qué área, cuándo y qué trabajo se ejecutó.',
      icon: Activity,
      stat: '24/7',
      label: 'Monitoreo'
    },
    {
      title: 'Cronogramas por Zona',
      description: 'Programación de mantenimiento preventivo y rutinas de limpieza por área, optimizando recursos y tiempos.',
      icon: Calendar,
      stat: 'Auto',
      label: 'Programación'
    }
  ];

  const adaptabilityFeatures = [
    'Configuración de áreas y zonas personalizadas',
    'Categorización por tipo de espacio',
    'Flujos de trabajo adaptados a tu operación',
    'Integraciones con sistemas de facilities',
    'Dashboards por departamento o edificio',
    'Escalable desde una oficina hasta complejos completos'
  ];

  const areasExamples = [
    'Oficinas y áreas administrativas',
    'Zonas comunes y pasillos',
    'Baños y vestuarios',
    'Áreas verdes y jardines',
    'Estacionamientos',
    'Cafeterías y comedores',
    'Salones de reuniones',
    'Bodegas y almacenes',
    'Áreas de producción',
    'Instalaciones eléctricas',
    'Sistemas de climatización',
    'Sistemas hidráulicos'
  ];

  return (
    <div className="min-h-screen bg-white">
      <GlassNavbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-extrabold text-[#0b194f] mb-6 leading-tight">
                Gestión Inteligente de
                <span className="text-[#007aed]"> Locativos con RFID</span>
              </h1>
              
              <p className="text-lg text-[#0b194f]/70 mb-8 leading-relaxed">
                Trazabilidad completa de áreas y zonas, hoja de vida digital por espacio y control 
                total sobre tus instalaciones. Software adaptable que gestiona mantenimientos, 
                costos y operarios en una sola plataforma.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/573117001527?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20las%20soluciones%20RFID%20de%20WeTracking" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-[#00ffd7] text-[#0b194f] font-bold rounded-full shadow-lg hover:bg-[#049bdc] transition-colors flex items-center gap-2"
                  >
                    Contáctanos
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </a>
                <a href={createPageUrl('TecnologiaRFID')}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-[#0b194f] text-white font-bold rounded-full hover:bg-[#0b194f]/90 transition-colors"
                  >
                    Ver Tecnología
                  </motion.button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                  alt="Facility Management"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#007aed]/20 to-transparent" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
              >
                <span className="text-sm font-bold text-[#007aed]">Control de Instalaciones</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ¿Qué es la Trazabilidad en Locativos? */}
      <section className="py-20 px-6 lg:px-8 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b194f] mb-4">
              ¿Qué es la Trazabilidad en Locativos?
            </h2>
            <p className="text-xl text-[#0b194f]/60 max-w-3xl mx-auto">
              Es la capacidad de seguir el historial completo de mantenimientos, intervenciones y 
              estado de conservación de cada área o zona de tus instalaciones.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {trazabilidadTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${type.color} rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity`} />
                  <div className="relative bg-white rounded-3xl p-8 shadow-lg border-2 border-transparent hover:border-[#007aed]/20 transition-all duration-300">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0b194f] mb-3">
                      {type.title}
                    </h3>
                    <p className="text-[#0b194f]/70 leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
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
              Gestión de Locativos en Acción
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Mira cómo nuestro software transforma la gestión de instalaciones con trazabilidad 
              completa y automatización inteligente.
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
                {loading ? (
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

      {/* Funcionalidades del Software */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b194f] mb-4">
              Funcionalidades del Software
            </h2>
            <p className="text-xl text-[#0b194f]/60">
              Plataforma completa para la gestión de instalaciones y áreas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#007aed]/10 hover:border-[#007aed]/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative w-16 h-16 mb-6">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#007aed] via-[#00ffd7] to-[#007aed] rounded-2xl blur-sm opacity-60" />
                    <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-[#007aed] to-[#049bdc] flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0b194f] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#0b194f]/60 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integración Operarios + Software */}
      <section className="py-20 px-6 lg:px-8 bg-[#007aed]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Integración Operarios + Software
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Generamos una cultura de la información donde operarios y software trabajan juntos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {integracionBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-xl"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-xl border-4 border-[#007aed] bg-white flex items-center justify-center">
                      <Icon className="w-8 h-8 text-[#007aed]" />
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-[#007aed]">{benefit.stat}</p>
                      <p className="text-sm text-[#0b194f]/60">{benefit.label}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0b194f] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-[#0b194f]/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Información Cruzada */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-white rounded-3xl p-8 shadow-xl"
          >
            <div className="text-center mb-8">
              <Target className="w-16 h-16 text-[#007aed] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#0b194f] mb-3">
                Información Cruzada Completa
              </h3>
              <p className="text-[#0b194f]/70 max-w-3xl mx-auto">
                El sistema registra automáticamente cada intervención: qué operario realizó qué trabajo, 
                en qué área, cuándo y con qué materiales. Esto genera datos valiosos para optimizar 
                mantenimientos y presupuestos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#f5f7fa] rounded-2xl p-6">
                <h4 className="font-bold text-[#0b194f] mb-3">Registro Operarios</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-[#0b194f]/80">Quién realizó cada mantenimiento</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-[#0b194f]/80">Cronograma de rutinas por operario</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-[#0b194f]/80">Reportes y observaciones registradas</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#f5f7fa] rounded-2xl p-6">
                <h4 className="font-bold text-[#0b194f] mb-3">Registro Áreas</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-[#0b194f]/80">Mantenimiento preventivo programado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-[#0b194f]/80">Historial completo de intervenciones</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-[#0b194f]/80">Costos de mantenimiento detallados</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Áreas que Puedes Gestionar */}
      <section className="py-20 px-6 lg:px-8 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b194f] mb-4">
              Áreas y Zonas que Puedes Gestionar
            </h2>
            <p className="text-xl text-[#0b194f]/60">
              Cualquier espacio físico de tus instalaciones puede ser gestionado con nuestro sistema
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areasExamples.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#007aed] to-[#00ffd7]" />
                  <span className="text-[#0b194f] font-semibold">{area}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Control de Costos */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b194f] mb-4">
              Control Total de Costos por Área
            </h2>
            <p className="text-xl text-[#0b194f]/60">
              Asocia todos los costos de mantenimiento a cada área para optimizar tu presupuesto
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-[#f5f7fa] rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-[#0b194f] mb-4 flex items-center gap-3">
                  <DollarSign className="w-6 h-6 text-[#007aed]" />
                  Costos por Área
                </h3>
                <p className="text-[#0b194f]/70 mb-4">
                  Cada área tiene asociados todos sus costos de mantenimiento:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#007aed] flex-shrink-0 mt-2" />
                    <span className="text-[#0b194f]/80"><strong>Mantenimientos:</strong> Preventivos y correctivos con mano de obra</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#007aed] flex-shrink-0 mt-2" />
                    <span className="text-[#0b194f]/80"><strong>Materiales:</strong> Insumos y materiales utilizados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#007aed] flex-shrink-0 mt-2" />
                    <span className="text-[#0b194f]/80"><strong>Servicios:</strong> Contratos de limpieza, seguridad y otros</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#007aed] flex-shrink-0 mt-2" />
                    <span className="text-[#0b194f]/80"><strong>Remodelaciones:</strong> Inversiones en mejoras del área</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#007aed] to-[#0b194f] rounded-2xl p-6 shadow-lg text-white">
                <h4 className="font-bold mb-3">Reportes Claros</h4>
                <p className="text-white/90 leading-relaxed">
                  Genera reportes detallados de costos por área, edificio o tipo de espacio. 
                  Identifica qué zonas consumen más recursos y optimiza tu presupuesto de facilities.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=800&fit=crop"
                alt="Cost Management"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#007aed]/30 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Adaptabilidad */}
      <section className="py-20 px-6 lg:px-8 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=800&fit=crop"
                alt="Customizable Software"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00ffd7]/30 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 order-1 lg:order-2"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0b194f] mb-6">
                  Software Adaptable a tus Instalaciones
                </h2>
                <p className="text-lg text-[#0b194f]/70 leading-relaxed mb-8">
                  Cada empresa tiene instalaciones únicas. Adaptamos el software a tu estructura 
                  organizacional, tipos de áreas y procesos de mantenimiento específicos.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-[#0b194f] mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-[#007aed]" />
                  Personalización Completa
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {adaptabilityFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#0b194f]/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#00ffd7] to-[#007aed] rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-[#0b194f] mb-3">Proceso de Implementación</h4>
                <p className="text-[#0b194f]/90 leading-relaxed">
                  Analizamos tu estructura de instalaciones, identificamos áreas críticas y 
                  configuramos el software con los módulos exactos que necesitas para gestionar 
                  tus espacios de manera eficiente.
                </p>
              </div>
            </motion.div>
          </div>
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
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para transformar tu gestión de instalaciones?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Descubre cómo nuestro software adaptable puede revolucionar el mantenimiento 
              de tus áreas y zonas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/573117001527?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20las%20soluciones%20RFID%20de%20WeTracking" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#00ffd7] text-[#0b194f] font-bold rounded-full shadow-xl hover:bg-white transition-colors flex items-center justify-center gap-2 text-lg"
                >
                  Contáctanos
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </a>
              <a href={createPageUrl('TecnologiaRFID')}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#0b194f] text-white font-bold rounded-full hover:bg-[#0b194f]/90 transition-colors text-lg"
                >
                  Ver Tecnología
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

