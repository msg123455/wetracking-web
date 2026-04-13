"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, X, Package, Zap, TrendingUp, MapPin, Clock, Shield, Truck, BarChart3, Layers, Tag, MousePointerClick, Grid3x3 } from 'lucide-react';
import { createPageUrl } from '@/utils';
import GlassNavbar from '@/components/navigation/GlassNavbar';
import Footer from '@/components/footer/Footer';
import { base44 } from '@/api/base44Client';
import InlineVideoUpload from '@/components/admin/InlineVideoUpload';

export default function Inventarios() {
  const [videoConfig, setVideoConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [flippedCards, setFlippedCards] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    loadVideo();
  }, []);

  const loadVideo = async () => {
    try {
      const videos = await base44.entities.VideoConfig.filter({ video_key: 'inventarios_main' });
      if (videos.length > 0) {
        setVideoConfig(videos[0]);
      }
    } catch (error) {
      console.error('Error loading video:', error);
    } finally {
      setLoading(false);
    }
  };

  const comparisonData = [
    {
      feature: 'Velocidad de Lectura',
      rfid: 'Hasta 1000+ tags/segundo',
      barcode: '1 código a la vez',
      qr: '1 código a la vez',
      manual: 'Muy lento',
      rfidBest: true
    },
    {
      feature: 'Distancia de Lectura',
      rfid: 'Hasta 10+ metros',
      barcode: 'Contacto cercano (<30cm)',
      qr: 'Contacto cercano (<30cm)',
      manual: 'N/A',
      rfidBest: true
    },
    {
      feature: 'Lectura Simultánea',
      rfid: 'Múltiples items al mismo tiempo',
      barcode: 'Uno por uno',
      qr: 'Uno por uno',
      manual: 'Uno por uno',
      rfidBest: true
    },
    {
      feature: 'Línea de Vista',
      rfid: 'No requiere',
      barcode: 'Requiere',
      qr: 'Requiere',
      manual: 'Requiere',
      rfidBest: true
    },
    {
      feature: 'Durabilidad',
      rfid: 'Alta (resistente a suciedad)',
      barcode: 'Baja (se daña fácil)',
      qr: 'Baja (se daña fácil)',
      manual: 'N/A',
      rfidBest: true
    },
    {
      feature: 'Automatización',
      rfid: 'Completamente automático',
      barcode: 'Semi-automático',
      qr: 'Semi-automático',
      manual: 'Manual',
      rfidBest: true
    },
    {
      feature: 'Tiempo de Inventario',
      rfid: 'Minutos',
      barcode: 'Horas',
      qr: 'Horas',
      manual: 'Días',
      rfidBest: true
    },
    {
      feature: 'Precisión',
      rfid: '99.9%+',
      barcode: '95-98%',
      qr: '95-98%',
      manual: '70-85%',
      rfidBest: true
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Lectura Masiva Instantánea',
      description: 'Lee cientos de productos simultáneamente sin necesidad de escanear uno por uno.'
    },
    {
      icon: MapPin,
      title: 'Trazabilidad Completa',
      description: 'Registra cada movimiento: entrada, salida, transferencias entre bodegas y ubicaciones exactas.'
    },
    {
      icon: Truck,
      title: 'Gestión Logística',
      description: 'Controla el flujo de productos en toda la cadena de suministro en tiempo real.'
    },
    {
      icon: Clock,
      title: 'Inventarios en Minutos',
      description: 'Completa inventarios físicos que antes tomaban días, ahora en solo minutos.'
    },
    {
      icon: Shield,
      title: 'Reducción de Errores',
      description: 'Elimina errores humanos con automatización completa del proceso de conteo.'
    },
    {
      icon: TrendingUp,
      title: 'Visibilidad en Tiempo Real',
      description: 'Dashboard actualizado al instante con stock, ubicaciones y movimientos.'
    }
  ];

  const useCases = [
    {
      title: 'Retail & Comercio',
      description: 'Control de inventario en tiendas, bodegas centrales y puntos de venta.',
      icon: Package
    },
    {
      title: 'Manufactura',
      description: 'Trazabilidad de materias primas, productos en proceso y productos terminados.',
      icon: Layers
    },
    {
      title: 'Logística & Distribución',
      description: 'Seguimiento de envíos, recepción de mercancía y gestión de almacenes.',
      icon: Truck
    },
    {
      title: 'E-commerce',
      description: 'Gestión de fulfillment, preparación de pedidos y control de devoluciones.',
      icon: BarChart3
    }
  ];

  const models = [
    {
      id: 'individual',
      icon: Tag,
      title: 'Lectura Individual',
      subtitle: 'Para productos de alto valor',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80',
      description: 'Cada producto recibe su propio chip RFID para trazabilidad individual completa.',
      steps: [
        'Cada producto lleva un tag RFID único',
        'Lectura individual o masiva con pistola',
        'Registro automático de cada movimiento',
        'Trazabilidad completa por producto',
        'Ideal para items de alto valor unitario'
      ],
      examples: 'Electrónica, repuestos automotrices, textiles premium, medicamentos'
    },
    {
      id: 'bulk',
      icon: Layers,
      title: 'Gestión por Estiva',
      subtitle: 'Para productos de alto volumen',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
      description: 'El chip se coloca en la estiva/pallet completo para gestionar inventario por lotes.',
      steps: [
        'Tag RFID adherido a estiva/pallet',
        'Stock inicial registrado por lote',
        'Al retirar productos, se escanea la estiva',
        'Sistema registra cantidad retirada',
        'Cálculo automático de stock restante'
      ],
      examples: 'Insumos pequeños, commodities, productos de bajo costo unitario'
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
            >
              <h1 className="text-5xl md:text-6xl font-extrabold text-[#0b194f] mb-6 leading-tight">
                Solución RFID para
                <span className="text-[#007aed]"> Inventarios Inteligentes</span>
              </h1>
              
              <p className="text-lg text-[#0b194f]/70 mb-8 leading-relaxed">
                Transforma tu gestión de inventario con lectura masiva instantánea y trazabilidad 
                completa. Reduce tiempos de inventario de días a minutos y obtén visibilidad total 
                de tu stock en tiempo real.
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
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
                  alt="Inventory Management"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#007aed]/20 to-transparent" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
              >
                <span className="text-sm font-bold text-[#007aed]">RFID Inventarios</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabla Comparativa */}
      <section className="py-20 px-6 lg:px-8 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b194f] mb-4">
              RFID vs Otros Métodos
            </h2>
            <p className="text-xl text-[#0b194f]/60">
              Compara la tecnología RFID con métodos tradicionales de inventario
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#0b194f] text-white">
                    <th className="px-6 py-4 text-left font-bold">Característica</th>
                    <th className="px-6 py-4 text-center font-bold bg-[#007aed]">RFID</th>
                    <th className="px-6 py-4 text-center font-bold">Código de Barras</th>
                    <th className="px-6 py-4 text-center font-bold">Código QR</th>
                    <th className="px-6 py-4 text-center font-bold">Manual</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-[#f5f7fa]' : 'bg-white'}>
                      <td className="px-6 py-4 font-semibold text-[#0b194f]">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <Check className="w-5 h-5 text-green-600" />
                          <span className="text-sm font-semibold text-[#007aed]">{row.rfid}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-[#0b194f]/70">{row.barcode}</td>
                      <td className="px-6 py-4 text-center text-sm text-[#0b194f]/70">{row.qr}</td>
                      <td className="px-6 py-4 text-center text-sm text-[#0b194f]/70">{row.manual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección Explicación + Video Vertical */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b194f] mb-4">
              Cómo funciona la lectura RFID
            </h2>
            <p className="text-xl text-[#0b194f]/60">
              Visualiza la velocidad y eficiencia de la tecnología RFID en acción
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Explicación */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-[#0b194f] mb-6">
                  Lectura con Pistola RFID
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#007aed] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0b194f] mb-2">Lectura Masiva</h4>
                      <p className="text-[#0b194f]/70">
                        Apunta la pistola hacia un área y lee instantáneamente cientos de tags 
                        RFID sin necesidad de escanear cada producto individualmente.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#007aed] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0b194f] mb-2">Sin Línea de Vista</h4>
                      <p className="text-[#0b194f]/70">
                        Lee productos dentro de cajas, en estanterías altas o en cualquier 
                        ubicación sin necesidad de acceso visual directo.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#007aed] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0b194f] mb-2">Actualización Automática</h4>
                      <p className="text-[#0b194f]/70">
                        Los datos se sincronizan automáticamente con el sistema SAMM, 
                        actualizando inventarios y ubicaciones en tiempo real.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#007aed] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0b194f] mb-2">Trazabilidad Completa</h4>
                      <p className="text-[#0b194f]/70">
                        Cada lectura registra quién, cuándo y dónde se realizó el conteo, 
                        creando un historial completo de movimientos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#f5f7fa] rounded-2xl p-6">
                <h4 className="font-bold text-[#0b194f] mb-3">Resultado:</h4>
                <p className="text-[#0b194f]/70 mb-4">
                  Inventarios que antes tomaban <strong className="text-red-600">días o semanas</strong> 
                  {' '}ahora se completan en <strong className="text-green-600">minutos u horas</strong>.
                </p>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-red-600">48h</p>
                    <p className="text-xs text-[#0b194f]/60">Método Manual</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-[#007aed]" />
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-600">2h</p>
                    <p className="text-xs text-[#0b194f]/60">Con RFID</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Video Vertical */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[400px]">
                <div className="absolute -inset-1 bg-gradient-to-b from-[#007aed] to-[#00ffd7] rounded-[3rem] blur-lg opacity-30" />
                
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-black border-8 border-[#0b194f]">
                  <div className="aspect-[9/16] relative">
                    {loading ? (
                      <div className="w-full h-full flex items-center justify-center bg-gray-900">
                        <div className="w-12 h-12 border-4 border-[#007aed] border-t-transparent rounded-full animate-spin" />
                      </div>
                    ) : videoConfig?.video_url ? (
                      <video
                        className="w-full h-full object-cover"
                        controls
                        poster={videoConfig.poster_url}
                      >
                        <source src={videoConfig.video_url} type="video/mp4" />
                        Tu navegador no soporta la reproducción de video.
                      </video>
                    ) : (
                      <div className="w-full h-full">
                        <InlineVideoUpload videoKey="inventarios_main" onUpdate={loadVideo} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Decoración de smartphone */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 px-6 lg:px-8 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b194f] mb-4">
              Qué logramos en Inventarios
            </h2>
            <p className="text-xl text-[#0b194f]/60">
              Beneficios clave de implementar RFID en tu gestión de inventario
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
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative w-16 h-16 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#007aed] to-[#00ffd7] rounded-full blur-sm opacity-50" />
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#007aed] to-[#00ffd7] flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
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

      {/* Modelos de Inventarios */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b194f] mb-4">
              Modelos de Inventarios con WeTracking
            </h2>
            <p className="text-xl text-[#0b194f]/60">
              Soluciones adaptadas a tu tipo de producto y volumen
            </p>
          </motion.div>
        </div>

        {/* Lectura Individual - FONDO BLANCO */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-start mb-16"
            >
              {/* Imagen cuadrada */}
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80" 
                  alt="Lectura Individual"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenido */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#0b194f] mb-3">
                    Lectura Individual
                  </h3>
                  <p className="text-xl text-[#007aed] font-semibold mb-6">
                    Para productos de alto valor
                  </p>
                  <p className="text-lg text-[#0b194f]/70 leading-relaxed mb-6">
                    Cada producto recibe su propio chip RFID para trazabilidad individual completa. 
                    Ideal para items con alto valor unitario o que requieren seguimiento detallado.
                  </p>
                  <div>
                    <p className="text-sm text-[#0b194f]/60 mb-2">Ejemplos:</p>
                    <p className="text-base font-semibold text-[#0b194f]">
                      Electrónica, repuestos automotrices, textiles premium, medicamentos
                    </p>
                  </div>
                </div>

                {/* Proceso paso a paso */}
                <div className="bg-[#f5f7fa] rounded-2xl p-6">
                  <h4 className="font-bold text-[#0b194f] mb-4">Proceso paso a paso:</h4>
                  <ul className="space-y-3">
                    {models[0].steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#007aed] flex items-center justify-center flex-shrink-0 text-white font-bold text-xs">
                          {i + 1}
                        </div>
                        <span className="text-sm text-[#0b194f]/80">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Cómo funciona - Separado y más grande */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h4 className="text-2xl font-bold text-[#0b194f] mb-8 text-center">Cómo funciona</h4>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#007aed]/20 text-center">
                  <div className="w-20 h-20 rounded-full bg-[#007aed] flex items-center justify-center mx-auto mb-4">
                    <Tag className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-lg font-bold text-[#0b194f]">Lector</p>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#007aed]/20 text-center">
                  <div className="w-20 h-20 rounded-full bg-[#007aed] flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-lg font-bold text-[#0b194f]">Inventariado Masivo</p>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#007aed]/20 text-center">
                  <div className="w-20 h-20 rounded-full bg-[#007aed] flex items-center justify-center mx-auto mb-4">
                    <Check className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-lg font-bold text-[#0b194f]">Gestión</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Gestión por Estiva - FONDO GRIS */}
        <div className="bg-[#f5f7fa] py-16 w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-start mb-16"
            >
              {/* Imagen cuadrada */}
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" 
                  alt="Gestión por Estiva"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenido */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#0b194f] mb-3">
                    Gestión por Estiva
                  </h3>
                  <p className="text-xl text-[#007aed] font-semibold mb-6">
                    Para productos de alto volumen
                  </p>
                  <p className="text-lg text-[#0b194f]/70 leading-relaxed mb-6">
                    El chip se coloca en la estiva/pallet completo para gestionar inventario por lotes. 
                    Perfecto para productos de bajo costo unitario o alto volumen.
                  </p>
                  <div>
                    <p className="text-sm text-[#0b194f]/60 mb-2">Ejemplos:</p>
                    <p className="text-base font-semibold text-[#0b194f]">
                      Insumos pequeños, commodities, productos de bajo costo unitario
                    </p>
                  </div>
                </div>

                {/* Proceso paso a paso */}
                <div className="bg-white rounded-2xl p-6">
                  <h4 className="font-bold text-[#0b194f] mb-4">Proceso paso a paso:</h4>
                  <ul className="space-y-3">
                    {models[1].steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#007aed] flex items-center justify-center flex-shrink-0 text-white font-bold text-xs">
                          {i + 1}
                        </div>
                        <span className="text-sm text-[#0b194f]/80">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Cómo funciona - Separado y más grande */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h4 className="text-2xl font-bold text-[#0b194f] mb-8 text-center">Cómo funciona</h4>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-[#00ffd7] flex items-center justify-center mx-auto mb-3">
                      <Package className="w-8 h-8 text-[#0b194f]" />
                    </div>
                    <p className="text-lg font-bold text-[#0b194f]">Entrada</p>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-[#f5f7fa] rounded-lg p-4 text-center">
                      <p className="text-sm text-[#0b194f]/60 mb-1">Stock Inicial</p>
                      <p className="text-3xl font-bold text-[#007aed]">1000</p>
                    </div>
                    <p className="text-sm text-[#0b194f]/70 text-center">Lectura del Chip</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-[#00ffd7] flex items-center justify-center mx-auto mb-3">
                      <Truck className="w-8 h-8 text-[#0b194f]" />
                    </div>
                    <p className="text-lg font-bold text-[#0b194f]">Salida</p>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-[#f5f7fa] rounded-lg p-4 text-center">
                      <p className="text-sm text-[#0b194f]/60 mb-1">Cantidad Retirada</p>
                      <p className="text-3xl font-bold text-red-600">350</p>
                    </div>
                    <p className="text-sm text-[#0b194f]/70 text-center">Reporte de Stock Sacado</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-[#00ffd7] flex items-center justify-center mx-auto mb-3">
                      <BarChart3 className="w-8 h-8 text-[#0b194f]" />
                    </div>
                    <p className="text-lg font-bold text-[#0b194f]">Cálculo</p>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-[#f5f7fa] rounded-lg p-4 text-center">
                      <p className="text-sm text-[#0b194f]/60 mb-1">Stock Restante</p>
                      <p className="text-3xl font-bold text-green-600">650</p>
                    </div>
                    <p className="text-sm text-[#0b194f]/70 text-center">1000 - 350 = 650</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Estanterías Inteligentes - FONDO AZUL */}
      <section className="py-20 px-6 lg:px-8 bg-[#007aed]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Estanterías Inteligentes
            </h2>
            <p className="text-xl text-white/80">
              Con lectores RFID que gestionan el inventario de sus overoles
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Imagen a la izquierda */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693c7294336e4d84a582bd72/64d670b4f_ChipRFID4.png"
                alt="Estantería Inteligente RFID"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Contenido a la derecha */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="w-16 h-16 rounded-full bg-[#007aed] flex items-center justify-center mb-6">
                  <Grid3x3 className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#0b194f] mb-4">
                  Control Automático 24/7
                </h3>
                
                <p className="text-[#0b194f]/70 mb-6 leading-relaxed">
                  Las estanterías inteligentes con tecnología RFID leen automáticamente 
                  todos los productos en tiempo real, sin intervención humana.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-[#0b194f]">Inventario Perpetuo</p>
                      <p className="text-sm text-[#0b194f]/70">
                        Actualización instantánea cuando se coloca o retira un producto
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-[#0b194f]">Alertas Automáticas</p>
                      <p className="text-sm text-[#0b194f]/70">
                        Notificaciones de stock bajo, productos faltantes o mal ubicados
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-[#0b194f]">Zero Touch</p>
                      <p className="text-sm text-[#0b194f]/70">
                        Sin necesidad de conteos manuales ni escaneos periódicos
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-[#0b194f]">Análisis de Rotación</p>
                      <p className="text-sm text-[#0b194f]/70">
                        Datos precisos sobre qué productos rotan más y cuáles quedan estancados
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Ideal para, Beneficio Clave y Escalabilidad en fila */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-bold text-[#0b194f] mb-3">Ideal para:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#007aed]" />
                  <span className="text-[#0b194f]/80 text-sm">Retail de alto volumen</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#007aed]" />
                  <span className="text-[#0b194f]/80 text-sm">Bibliotecas y archivos</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#007aed]" />
                  <span className="text-[#0b194f]/80 text-sm">Almacenes farmacéuticos</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#007aed]" />
                  <span className="text-[#0b194f]/80 text-sm">Centros de distribución</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#00ffd7] to-[#049bdc] rounded-2xl p-6 shadow-lg">
              <h4 className="font-bold text-[#0b194f] mb-3">Beneficio Clave:</h4>
              <p className="text-[#0b194f]/90 leading-relaxed text-sm">
                Reduce costos operativos al eliminar la necesidad de conteos manuales 
                periódicos y permite que tu personal se enfoque en tareas de mayor valor.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#007aed] to-[#0b194f] rounded-2xl p-6 shadow-lg">
              <h4 className="font-bold text-white mb-3">Escalabilidad:</h4>
              <p className="text-white/90 leading-relaxed text-sm">
                Sistema completamente modular que se adapta desde una sola estantería 
                hasta complejos con miles de posiciones de almacenamiento.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b194f] mb-4">
              Casos de Uso
            </h2>
            <p className="text-xl text-[#0b194f]/60">
              Industrias que transforman su inventario con RFID
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#f5f7fa] rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl border-4 border-[#007aed] flex items-center justify-center mx-auto mb-4 bg-white">
                    <Icon className="w-8 h-8 text-[#007aed]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0b194f] mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-[#0b194f]/70">
                    {useCase.description}
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
              ¿Listo para revolucionar tu inventario?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Agenda una reunión con nuestros especialistas y descubre cómo WeTracking 
              puede transformar tu gestión de inventario.
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
