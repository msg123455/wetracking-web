import React, { useEffect, useState } from 'react';
// useState kept for flippedCards
import { motion } from 'framer-motion';
import { ArrowRight, Check, Droplet, ChevronDown, Package, Wrench, Truck, CircleDot, Shield, TrendingUp, Gauge, X, Settings, MousePointerClick } from 'lucide-react';
import { createPageUrl } from '@/utils';
import GlassNavbar from '@/components/navigation/GlassNavbar';
import Footer from '@/components/footer/Footer';


export default function IndustriaPetrolera() {
  const [flippedCards, setFlippedCards] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const solutions = [
    {
      id: 'herramientas',
      icon: Wrench,
      title: 'Herramientas',
      image: 'https://seqpetrol.com/ui/css/images/perfoarion_workover_produccion.png',
      benefits: [
        'Localización instantánea de herramientas en planta',
        'Reduce tiempo de búsqueda en hasta 80%',
        'Control de préstamo y devolución automático',
        'Alertas de mantenimiento preventivo',
        'Trazabilidad completa del uso'
      ]
    },
    {
      id: 'spools',
      icon: CircleDot,
      title: 'Spools y Tubería',
      image: 'https://image.made-in-china.com/202f0j00fQMcmHJyMLqK/Spool-Drilling-Equipment-From-6A-Drilling-Spool.webp',
      benefits: [
        'Identificación única de cada spool',
        'Rastreo desde fabricación hasta instalación',
        'Control de certificaciones y especificaciones',
        'Reducción de pérdidas y extravíos',
        'Optimización de almacenamiento'
      ]
    },
    {
      id: 'neumaticos',
      icon: CircleDot,
      title: 'Neumáticos',
      image: 'https://motor.elpais.com/wp-content/uploads/2019/01/2019_01_24_neumaticos-falsos-1200x675.jpg',
      benefits: [
        'Control de vida útil y kilometraje',
        'Programación de rotación y cambio',
        'Historial completo de mantenimiento',
        'Reducción de costos operativos',
        'Optimización de inventario'
      ]
    },
    {
      id: 'maquinaria',
      icon: Settings,
      title: 'Maquinaria y Equipos',
      image: 'https://st.depositphotos.com/1043957/1378/i/450/depositphotos_13784176-stock-photo-oil-well-pump.jpg',
      benefits: [
        'Monitoreo en tiempo real de ubicación',
        'Control de mantenimientos programados',
        'Historial de uso y operación',
        'Reducción de tiempos muertos',
        'Optimización de utilización de equipos'
      ]
    }
  ];

  const problems = [
    {
      title: 'Pérdida de herramientas costosas',
      before: 'Búsqueda manual que detiene operaciones',
      after: 'Localización instantánea con RFID'
    },
    {
      title: 'Control de spools y tubería',
      before: 'Extravíos frecuentes y falta de trazabilidad',
      after: 'Rastreo completo del ciclo de vida'
    },
    {
      title: 'Gestión de neumáticos',
      before: 'Sin control de vida útil ni mantenimiento',
      after: 'Programación automática y optimización'
    },
    {
      title: 'Mantenimiento de equipos',
      before: 'Paros no planificados por falta de control',
      after: 'Mantenimiento predictivo y preventivo'
    }
  ];

  const benefits = [
    {
      icon: Package,
      title: 'Control de Inventarios',
      description: 'Gestión precisa de herramientas, spools, neumáticos y equipos en tiempo real.'
    },
    {
      icon: Shield,
      title: 'Seguridad Operacional',
      description: 'Cumplimiento de certificaciones y trazabilidad completa de activos críticos.'
    },
    {
      icon: TrendingUp,
      title: 'Optimización de Costos',
      description: 'Reducción de pérdidas, mejor utilización de equipos y control de mantenimientos.'
    },
    {
      icon: Gauge,
      title: 'Eficiencia Operativa',
      description: 'Eliminación de tiempos muertos por búsqueda de herramientas y equipos.'
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
                <span className="text-[#007aed]"> Industria Petrolera</span>
              </h1>
              
              <p className="text-lg text-[#0b194f]/70 mb-8 leading-relaxed">
                Optimiza el control de herramientas, spools, neumáticos y maquinaria pesada 
                con trazabilidad en tiempo real. Reduce pérdidas y mejora la eficiencia operacional 
                en ambientes petroleros exigentes.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="https://albtriallawyers.com/wp-content/uploads/2024/01/Heavy-Equipment-in-the-Oilfield-1.jpg" target="_blank" rel="noopener noreferrer">
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
                  src="https://albtriallawyers.com/wp-content/uploads/2024/01/Heavy-Equipment-in-the-Oilfield-1.jpg"
                  alt="Oil Industry"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#007aed]/20 to-transparent" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
              >
                <span className="text-sm font-bold text-[#007aed]">RFID Petrolera</span>
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
              Desafíos en la industria petrolera
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

      {/* Soluciones Específicas */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b194f] mb-4">
              Soluciones RFID especializadas
            </h2>
            <p className="text-xl text-[#0b194f]/60">
              Haz clic en cada solución para ver los beneficios
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              const isFlipped = flippedCards.includes(solution.id);
              
              const toggleFlip = () => {
                setFlippedCards(prev => 
                  prev.includes(solution.id)
                    ? prev.filter(id => id !== solution.id)
                    : [...prev, solution.id]
                );
              };
              
              return (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-[400px]"
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
                        src={solution.image} 
                        alt={solution.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b194f]/70 to-transparent" />
                      
                      {/* Título e ícono principal */}
                      <div className="absolute bottom-6 left-6 flex items-center gap-3">
                        <div className="w-14 h-14 rounded-full bg-[#00ffd7] flex items-center justify-center shadow-lg">
                          <Icon className="w-7 h-7 text-[#0b194f]" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                      </div>

                      {/* Botón de clic con animación */}
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

                    {/* Back - Beneficios */}
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
                            {solution.title}
                          </h3>
                        </div>
                        
                        <h4 className={`font-bold mb-4 ${index % 2 === 0 ? 'text-white/90' : 'text-[#0b194f]'}`}>
                          Qué logramos:
                        </h4>
                        <ul className="space-y-3 flex-1 overflow-y-auto">
                          {solution.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                                index % 2 === 0 ? 'text-[#00ffd7]' : 'text-[#007aed]'
                              }`} />
                              <span className={`text-sm ${index % 2 === 0 ? 'text-white/90' : 'text-[#0b194f]/80'}`}>
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
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
              ¿Por qué RFID en la industria petrolera?
            </h2>
            <p className="text-lg text-[#0b194f]/60 max-w-2xl mx-auto">
              Beneficios clave de implementar trazabilidad inteligente
            </p>
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
              ¿Listo para optimizar tus operaciones petroleras?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Agenda una reunión con nuestros especialistas y descubre cómo WeTracking 
              puede transformar la gestión de activos en tu operación.
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