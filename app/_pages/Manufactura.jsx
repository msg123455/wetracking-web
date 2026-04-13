"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Package, Scissors, Tag, Layers, Shield, TrendingUp, Users, X, MousePointerClick, Factory, Shirt, Calendar, BarChart3, CheckCircle } from 'lucide-react';
import { createPageUrl } from '@/utils';
import GlassNavbar from '@/components/navigation/GlassNavbar';
import Footer from '@/components/footer/Footer';


export default function Manufactura() {
  const [flippedCards, setFlippedCards] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const models = [
    {
      id: 'individual',
      icon: Tag,
      title: 'Trazabilidad Individual por Prenda',
      subtitle: 'Para control detallado',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
      description: 'Cada prenda recibe su chip RFID desde el inicio del proceso, con toda la información de telas y cortes asignados.',
      steps: [
        'Asignación de chip RFID único a cada prenda',
        'Registro de tela utilizada y metraje',
        'Cronograma de corte y personal asignado',
        'Seguimiento completo del proceso productivo',
        'Trazabilidad total desde materia prima hasta producto final'
      ],
      examples: 'Prendas premium, uniformes corporativos, pedidos personalizados'
    },
    {
      id: 'bulk',
      icon: Layers,
      title: 'Gestión por Lote de Producción',
      subtitle: 'Para producción en masa',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
      description: 'El chip RFID se asigna al lote completo de producción, gestionando todo el conjunto de prendas.',
      steps: [
        'Lote de 500 prendas con chip RFID',
        'Registro de telas y materiales del lote',
        'Cronograma de corte para el lote completo',
        'Control de avance por etapas de producción',
        'Conteo automático de prendas completadas'
      ],
      examples: 'Producción en masa, prendas estándar, colecciones completas'
    }
  ];

  const problems = [
    {
      title: 'Pérdida de trazabilidad',
      before: 'Sin visibilidad de qué tela se usó en cada prenda',
      after: 'Registro automático de cada material utilizado'
    },
    {
      title: 'Desorden en producción',
      before: 'No hay control de cronogramas de corte',
      after: 'Cronogramas digitales con asignación de personal'
    },
    {
      title: 'Retrasos sin detectar',
      before: 'Problemas se descubren al final del proceso',
      after: 'Alertas en tiempo real de cualquier desviación'
    },
    {
      title: 'Control de calidad manual',
      before: 'Revisiones lentas y propensas a errores',
      after: 'Seguimiento automatizado en cada etapa'
    }
  ];

  const benefits = [
    {
      icon: Shirt,
      title: 'Trazabilidad Completa',
      description: 'Conoce exactamente qué tela, metraje y proceso se usó en cada prenda del inicio al fin.'
    },
    {
      icon: Scissors,
      title: 'Control de Corte',
      description: 'Gestiona cronogramas de corte, asigna personal y monitorea el avance en tiempo real.'
    },
    {
      icon: Users,
      title: 'Gestión de Personal',
      description: 'Asigna operarios a cada lote, rastrea productividad y optimiza la distribución de trabajo.'
    },
    {
      icon: TrendingUp,
      title: 'Optimización de Procesos',
      description: 'Identifica cuellos de botella y mejora continuamente tus tiempos de producción.'
    }
  ];

  const caseStudy = {
    company: 'ArcFire SAS',
    industry: 'Industria Textil',
    challenge: 'Falta de trazabilidad en prendas y control de materiales',
    solution: 'Implementación de RFID para trazabilidad completa',
    results: [
      {
        icon: CheckCircle,
        title: '100% Trazabilidad',
        description: 'Control total de telas asignadas a cada prenda'
      },
      {
        icon: Calendar,
        title: 'Cronogramas Digitales',
        description: 'Gestión eficiente de corte y personal'
      },
      {
        icon: BarChart3,
        title: 'Mejora de Productividad',
        description: 'Reducción de tiempos y optimización de recursos'
      }
    ]
  };

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
              className="order-2 lg:order-1"
            >
              <h1 className="text-5xl md:text-6xl font-extrabold text-[#0b194f] mb-6 leading-tight">
                RFID para
                <span className="text-[#007aed]"> Manufactura Textil</span>
              </h1>
              
              <p className="text-lg text-[#0b194f]/70 mb-8 leading-relaxed">
                Trazabilidad completa de prendas desde la materia prima hasta el producto final. 
                Control de telas asignadas, cronogramas de corte y gestión de personal con tecnología RFID.
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
              className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-2"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <img
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=600&fit=crop"
                  alt="Manufacturing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#007aed]/20 to-transparent" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
              >
                <span className="text-sm font-bold text-[#007aed]">RFID Manufactura</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Caso de Éxito ArcFire */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-[#007aed] to-[#0b194f]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-[#00ffd7] px-6 py-2 rounded-full mb-6">
              <span className="text-[#0b194f] font-bold">CASO DE ÉXITO</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {caseStudy.company}
            </h2>
            <p className="text-xl text-white/80">
              {caseStudy.industry}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-4">El Desafío</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                {caseStudy.challenge}. Sin control sobre qué telas se usaban en cada prenda, 
                cronogramas de corte desorganizados y falta de visibilidad en el proceso productivo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#00ffd7]/10 backdrop-blur-sm rounded-3xl p-8 border border-[#00ffd7]/30"
            >
              <h3 className="text-2xl font-bold text-[#00ffd7] mb-4">La Solución</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                {caseStudy.solution}. Cada prenda ahora tiene un chip RFID que registra 
                automáticamente telas asignadas, cronogramas de corte y todo el ciclo productivo.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {caseStudy.results.map((result, index) => {
              const Icon = result.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#007aed] flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-[#0b194f] mb-3">
                    {result.title}
                  </h4>
                  <p className="text-[#0b194f]/70">
                    {result.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Problemas - Antes y Después */}
      <section className="py-20 px-6 lg:px-8 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b194f] mb-4">
              Desafíos en la manufactura textil
            </h2>
            <p className="text-xl text-[#0b194f]/60">
              Antes y después de implementar WeTracking
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="bg-white rounded-3xl p-8 border-4 border-red-500">
              <h3 className="text-2xl font-bold text-[#0b194f] mb-8 text-center">ANTES</h3>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <X className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0b194f] mb-1">{problem.title}</h4>
                      <p className="text-[#0b194f]/70 text-sm">{problem.before}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border-4 border-[#007aed]">
              <h3 className="text-2xl font-bold text-[#007aed] mb-8 text-center">DESPUÉS</h3>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#007aed] flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0b194f] mb-1">{problem.title}</h4>
                      <p className="text-[#0b194f]/70 text-sm">{problem.after}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modelos de Operación */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b194f] mb-4">
              Dos modelos de trazabilidad
            </h2>
            <p className="text-xl text-[#0b194f]/60">
              Adaptamos la tecnología RFID según tu tipo de producción
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {models.map((model, index) => {
              const Icon = model.icon;
              const isFlipped = flippedCards.includes(model.id);
              
              const toggleFlip = () => {
                setFlippedCards(prev => 
                  prev.includes(model.id)
                    ? prev.filter(id => id !== model.id)
                    : [...prev, model.id]
                );
              };
              
              return (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-[500px]"
                  style={{ perspective: '1000px' }}
                >
                  <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="relative w-full h-full cursor-pointer"
                    style={{ transformStyle: 'preserve-3d' }}
                    onClick={toggleFlip}
                  >
                    {/* Front - Imagen */}
                    <div
                      className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <img 
                        src={model.image} 
                        alt={model.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b194f]/80 to-transparent" />
                      
                      {/* Contenido */}
                      <div className="absolute inset-0 flex flex-col justify-end p-8">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-14 h-14 rounded-full bg-[#00ffd7] flex items-center justify-center shadow-lg">
                            <Icon className="w-7 h-7 text-[#0b194f]" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{model.title}</h3>
                            <p className="text-white/80 text-sm">{model.subtitle}</p>
                          </div>
                        </div>
                        <p className="text-white/90 text-sm mt-3">{model.description}</p>
                      </div>

                      {/* Botón de clic */}
                      <motion.div 
                        className="absolute top-6 right-6"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, -10, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1
                        }}
                      >
                        <div className="relative">
                          <motion.div
                            className="absolute inset-0 rounded-full bg-[#00ffd7] blur-md"
                            animate={{ 
                              opacity: [0.5, 1, 0.5],
                              scale: [1, 1.3, 1]
                            }}
                            transition={{ 
                              duration: 1.5,
                              repeat: Infinity
                            }}
                          />
                          <div className="relative w-12 h-12 rounded-full bg-[#00ffd7] flex items-center justify-center shadow-lg">
                            <MousePointerClick className="w-6 h-6 text-[#0b194f]" />
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Back - Proceso paso a paso */}
                    <div
                      className={`absolute inset-0 rounded-3xl overflow-hidden shadow-xl p-8 ${
                        index % 2 === 0 ? 'bg-[#007aed]' : 'bg-white'
                      }`}
                      style={{ 
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      <div className="flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-12 h-12 rounded-full bg-[#00ffd7] flex items-center justify-center">
                            <Icon className={`w-6 h-6 ${index % 2 === 0 ? 'text-[#0b194f]' : 'text-[#007aed]'}`} />
                          </div>
                          <h3 className={`text-2xl font-bold ${index % 2 === 0 ? 'text-white' : 'text-[#0b194f]'}`}>
                            {model.title}
                          </h3>
                        </div>
                        
                        <h4 className={`font-bold mb-4 ${index % 2 === 0 ? 'text-white/90' : 'text-[#0b194f]'}`}>
                          Proceso paso a paso:
                        </h4>
                        <ul className="space-y-3 mb-6 flex-1 overflow-y-auto">
                          {model.steps.map((step, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                                index % 2 === 0 ? 'bg-[#00ffd7] text-[#0b194f]' : 'bg-[#007aed] text-white'
                              } font-bold text-xs`}>
                                {i + 1}
                              </div>
                              <span className={`text-sm ${index % 2 === 0 ? 'text-white/90' : 'text-[#0b194f]/80'}`}>
                                {step}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <div className={`pt-4 border-t ${index % 2 === 0 ? 'border-white/20' : 'border-[#0b194f]/20'}`}>
                          <p className={`text-xs ${index % 2 === 0 ? 'text-white/70' : 'text-[#0b194f]/60'} mb-2`}>
                            Ejemplos:
                          </p>
                          <p className={`text-sm font-semibold ${index % 2 === 0 ? 'text-white' : 'text-[#0b194f]'}`}>
                            {model.examples}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proceso de Trazabilidad con Telas */}
      <section className="py-20 px-6 lg:px-8 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b194f] mb-4">
              Trazabilidad Completa: Tela + Prenda
            </h2>
            <p className="text-xl text-[#0b194f]/60">
              Registro automático de telas y materiales en cada prenda
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { 
                icon: Shirt, 
                title: 'Registro de Tela',
                description: 'Se escanea el chip de la tela al iniciar'
              },
              { 
                icon: Scissors, 
                title: 'Asignación de Corte',
                description: 'Cronograma y personal asignado automáticamente'
              },
              { 
                icon: Tag, 
                title: 'Tag en Prenda',
                description: 'Chip RFID adherido con toda la información'
              },
              { 
                icon: CheckCircle, 
                title: 'Trazabilidad Total',
                description: 'Historial completo de materiales y proceso',
                isFinal: true
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-3xl p-8 shadow-lg text-center ${
                    item.isFinal ? 'bg-[#007aed]' : 'bg-white'
                  }`}
                >
                  <div className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center ${
                    item.isFinal ? 'bg-white/20' : 'bg-[#007aed]/10'
                  }`}>
                    <Icon className={`w-10 h-10 ${
                      item.isFinal ? 'text-white' : 'text-[#007aed]'
                    }`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${
                    item.isFinal ? 'text-white' : 'text-[#0b194f]'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm ${
                    item.isFinal ? 'text-white/90' : 'text-[#0b194f]/70'
                  }`}>
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b194f] mb-4">
              Beneficios clave para tu manufactura
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#007aed]/10 hover:border-[#007aed]/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#007aed] flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0b194f] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-[#0b194f]/60 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
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
              ¿Listo para transformar tu manufactura?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Agenda una reunión con nuestros especialistas y descubre cómo WeTracking 
              puede transformar tu producción textil con trazabilidad total.
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
