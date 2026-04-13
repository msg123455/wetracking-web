"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Package, Warehouse, Tag, Layers, Shield, TrendingUp, Gauge, X, MousePointerClick, Box, ListChecks, BarChart3 } from 'lucide-react';
import { createPageUrl } from '@/utils';
import GlassNavbar from '@/components/navigation/GlassNavbar';
import Footer from '@/components/footer/Footer';


export default function Bodegas() {
  const [flippedCards, setFlippedCards] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const models = [
    {
      id: 'individual',
      icon: Tag,
      title: 'Trazabilidad Individual',
      subtitle: 'Para productos de alto valor',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80',
      description: 'Cada producto recibe su propio chip RFID desde la importación o llegada a bodega.',
      steps: [
        'Producto llega a bodega (importación)',
        'Se adhiere chip RFID único al producto',
        'Registro automático en sistema SAMM',
        'Trazabilidad completa de movimientos',
        'Control preciso de ubicación y estado'
      ],
      examples: 'Partes metálicas, rollos de tela, maquinaria, equipos especializados'
    },
    {
      id: 'bulk',
      icon: Layers,
      title: 'Gestión por Estiva',
      subtitle: 'Para productos de alto volumen',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
      description: 'El chip se coloca en la estiva/rack, gestionando el inventario por lotes.',
      steps: [
        'Stock inicial: 20,000 unidades en estiva',
        'Chip RFID adherido a la estiva completa',
        'Al retirar productos, se escanea la estiva',
        'Se registra cantidad retirada (ej: 100 unidades)',
        'Sistema calcula: 20,000 - 100 = 19,900 restantes'
      ],
      examples: 'Botones, insumos pequeños, tornillos, componentes de bajo costo'
    }
  ];

  const problems = [
    {
      title: 'Inventarios desactualizados',
      before: 'Conteos manuales con errores frecuentes',
      after: 'Actualización automática en tiempo real'
    },
    {
      title: 'Pérdida de productos',
      before: 'Sin trazabilidad de movimientos',
      after: 'Rastreo completo desde entrada hasta salida'
    },
    {
      title: 'Productos mal ubicados',
      before: 'Horas buscando items en bodega',
      after: 'Localización instantánea con RFID'
    },
    {
      title: 'Control de stock impreciso',
      before: 'Diferencias entre físico y sistema',
      after: 'Sincronización automática y precisa'
    }
  ];

  const benefits = [
    {
      icon: Package,
      title: 'Control de Inventario',
      description: 'Gestión precisa de stock en tiempo real, con actualización automática de entradas y salidas.'
    },
    {
      icon: Shield,
      title: 'Reducción de Pérdidas',
      description: 'Trazabilidad completa que elimina extravíos y mejora la seguridad de productos.'
    },
    {
      icon: TrendingUp,
      title: 'Optimización de Espacio',
      description: 'Mejor aprovechamiento del espacio con ubicaciones precisas y gestión eficiente.'
    },
    {
      icon: Gauge,
      title: 'Agilidad Operativa',
      description: 'Aceleración de procesos de entrada, salida y reubicación de productos.'
    }
  ];

  const adaptability = [
    {
      icon: ListChecks,
      title: 'Campos Personalizables',
      description: 'Adaptamos los campos de datos según las necesidades específicas de tu operación.'
    },
    {
      icon: BarChart3,
      title: 'Reportes a Medida',
      description: 'Configuramos reportes y análisis según los indicadores clave de tu negocio.'
    },
    {
      icon: Box,
      title: 'Integración Flexible',
      description: 'Nos integramos con tus sistemas existentes (ERP, WMS, contabilidad).'
    }
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
              className="order-2 lg:order-1"
            >
              <h1 className="text-5xl md:text-6xl font-extrabold text-[#0b194f] mb-6 leading-tight">
                RFID para
                <span className="text-[#007aed]"> Bodegas y Almacenes</span>
              </h1>
              
              <p className="text-lg text-[#0b194f]/70 mb-8 leading-relaxed">
                Optimiza la gestión de inventario con dos modelos de trazabilidad: individual 
                para productos de alto valor, o por estiva para insumos de alto volumen. 
                Adaptamos la solución a tu operación específica.
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
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop"
                  alt="Warehouse"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#007aed]/20 to-transparent" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
              >
                <span className="text-sm font-bold text-[#007aed]">RFID Bodegas</span>
              </motion.div>
            </motion.div>
          </div>
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
              Desafíos en la gestión de bodegas
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
              Dos modelos de operación
            </h2>
            <p className="text-xl text-[#0b194f]/60">
              Adaptamos la tecnología RFID según el tipo de producto
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

      {/* Proceso Visual - Gestión por Estiva */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b194f] mb-4">
              Gestión por Estiva: Proceso Completo
            </h2>
            <p className="text-xl text-[#0b194f]/60">
              Visualiza cómo funciona el sistema desde la entrada hasta la gestión de salidas
            </p>
          </motion.div>

          {/* Proceso de Entrada */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-[#f5f7fa] rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-[#0b194f] mb-12 text-center">
                Proceso de Entrada
              </h3>
              
              <div className="grid md:grid-cols-4 gap-6 items-stretch">
                {[
                  { icon: Package, title: 'Llega nuevo stock a la bodega' },
                  { icon: Warehouse, title: 'Tags RFID con información de los rollos' },
                  { icon: Gauge, title: 'Lectura del Chip' },
                  { icon: Check, title: 'Registro de que llegó nuevo stock y se asignan los debidos KPIs', isFinal: true }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col items-center"
                    >
                      <div className={`w-full rounded-2xl p-8 shadow-lg flex flex-col items-center gap-4 h-full min-h-[200px] ${
                        item.isFinal ? 'bg-[#007aed]' : 'bg-white'
                      }`}>
                        <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
                          item.isFinal ? 'bg-white/20' : 'bg-[#007aed]/10'
                        }`}>
                          <Icon className={`w-10 h-10 ${
                            item.isFinal ? 'text-white' : 'text-[#007aed]'
                          }`} />
                        </div>
                        <p className={`text-sm font-semibold text-center ${
                          item.isFinal ? 'text-white' : 'text-[#0b194f]/80'
                        }`}>
                          {item.title}
                        </p>
                      </div>
                      {index < 3 && (
                        <div className="py-3 md:hidden">
                          <ArrowRight className="w-6 h-6 text-[#007aed] rotate-90" />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Proceso de Gestión (Salida) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#f5f7fa] rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-[#0b194f] mb-12 text-center">
                Proceso de Gestión (Salida)
              </h3>
              
              <div className="grid md:grid-cols-4 gap-6 items-stretch mb-10">
                {[
                  { icon: Warehouse, title: 'Tags con información de rollos', label: 'Stock Inicial' },
                  { icon: Gauge, title: 'Lectura del Chip', label: 'Reporte de Stock Sacado' },
                  { icon: Package, title: 'Registrar el metraje (u otro indicador) que se sacó', label: 'Cantidad Retirada' },
                  { icon: BarChart3, title: 'Dashboard de cuanto queda en el inventario y cuanto sale', label: 'Stock Restante', isFinal: true }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col items-center"
                    >
                      <div className={`w-full rounded-2xl p-8 shadow-lg flex flex-col items-center gap-4 h-full min-h-[200px] ${
                        item.isFinal ? 'bg-[#007aed]' : 'bg-white'
                      }`}>
                        <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
                          item.isFinal ? 'bg-white/20' : 'bg-[#007aed]/10'
                        }`}>
                          <Icon className={`w-10 h-10 ${
                            item.isFinal ? 'text-white' : 'text-[#007aed]'
                          }`} />
                        </div>
                        <p className={`text-sm font-semibold text-center ${
                          item.isFinal ? 'text-white' : 'text-[#0b194f]/80'
                        }`}>
                          {item.title}
                        </p>
                      </div>
                      {item.label && (
                        <div className="mt-4 w-full">
                          <div className={`rounded-xl px-4 py-3 text-center ${
                            index === 0 ? 'bg-[#00ffd7]/10' :
                            index === 2 ? 'bg-red-50' :
                            'bg-[#007aed]'
                          }`}>
                            <p className={`text-xs uppercase font-bold mb-1 ${
                              index === 3 ? 'text-white/80' : 'text-[#0b194f]/60'
                            }`}>
                              {item.label}
                            </p>
                            <p className={`text-2xl font-bold ${
                              index === 0 ? 'text-[#0b194f]' :
                              index === 1 ? 'text-[#0b194f]' :
                              index === 2 ? 'text-red-600' :
                              'text-white'
                            }`}>
                              {index === 0 ? '20,000' : index === 1 ? '100 unidades' : index === 2 ? '100' : '19,900'}
                            </p>
                          </div>
                        </div>
                      )}
                      {index < 3 && (
                        <div className="py-3 md:hidden">
                          <ArrowRight className="w-6 h-6 text-[#007aed] rotate-90" />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b194f] mb-4">
              Beneficios clave para tu bodega
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

      {/* Adaptabilidad */}
      <section className="py-20 px-6 lg:px-8 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b194f] mb-4">
              Nos adaptamos a tu negocio
            </h2>
            <p className="text-xl text-[#0b194f]/60 max-w-3xl mx-auto">
              Cada bodega es única. Personalizamos la solución según tus necesidades específicas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {adaptability.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-[#00ffd7] flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-[#0b194f]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0b194f] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[#0b194f]/70 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-white rounded-3xl p-8 shadow-lg border-2 border-[#007aed]/20"
          >
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-[#007aed] flex items-center justify-center flex-shrink-0">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0b194f] mb-3">
                  Adaptación completa a tu operación
                </h3>
                <p className="text-[#0b194f]/70 leading-relaxed text-lg">
                  Abrimos campos personalizados en el software, revisamos tus procesos específicos, 
                  adaptamos vectores de datos, configuramos alertas según tus KPIs, y creamos 
                  dashboards que reflejen exactamente lo que necesitas ver. Tu bodega, tus reglas.
                </p>
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
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para optimizar tu bodega?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Agenda una reunión con nuestros especialistas y descubre cómo WeTracking 
              puede transformar la gestión de inventario en tu operación.
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

