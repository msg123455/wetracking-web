"use client"
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Shield, Clock, TrendingUp, Users, FileText, Wrench, BarChart3, Settings, Zap, Calendar, ClipboardList, DollarSign, Activity, Target, GitBranch, Database } from 'lucide-react';
import { createPageUrl } from '@/utils';
import GlassNavbar from '@/components/navigation/GlassNavbar';
import Footer from '@/components/footer/Footer';
export default function Activos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const trazabilidadTypes = [
    {
      icon: GitBranch,
      title: 'Trazabilidad hacia Adelante',
      description: 'Seguimiento del activo desde su origen hasta su ubicación y estado actual. Registro de todos los movimientos, mantenimientos y modificaciones.',
      color: 'from-[#007aed] to-[#0b194f]'
    },
    {
      icon: Database,
      title: 'Trazabilidad hacia Atrás',
      description: 'Historial completo del activo: origen, adquisición, proveedores, costos iniciales y toda la documentación desde su entrada al sistema.',
      color: 'from-[#00ffd7] to-[#007aed]'
    },
    {
      icon: FileText,
      title: 'Hoja de Vida Digital',
      description: 'Registro detallado de cada activo: especificaciones técnicas, mantenimientos realizados, costos acumulados, responsables, ubicaciones históricas y estado actual.',
      color: 'from-[#049bdc] to-[#00ffd7]'
    }
  ];

  const softwareFeatures = [
    {
      icon: FileText,
      title: 'Hoja de Vida Completa',
      description: 'Documentación detallada de cada activo con historial completo de eventos'
    },
    {
      icon: Calendar,
      title: 'Programación de Tareas',
      description: 'Planificación automatizada de mantenimientos y actividades operativas'
    },
    {
      icon: BarChart3,
      title: 'KPIs en Gráficas',
      description: 'Visualización en tiempo real de indicadores clave de desempeño'
    },
    {
      icon: ClipboardList,
      title: 'Órdenes de Trabajo',
      description: 'Gestión completa del ciclo de vida de órdenes de mantenimiento'
    },
    {
      icon: DollarSign,
      title: 'Reportes de Costos',
      description: 'Costos asociados por activo: mantenimientos, repuestos e insumos'
    },
    {
      icon: Wrench,
      title: 'Solicitudes de Mantenimiento',
      description: 'Sistema de tickets y priorización de solicitudes operativas'
    }
  ];

  const integracionBenefits = [
    {
      title: 'Integración Operarios-Software',
      description: 'Los operarios usan tecnología RFID para interactuar directamente con el software, registrando cada acción en tiempo real.',
      icon: Users,
      stat: '100%',
      label: 'Trazabilidad'
    },
    {
      title: 'Cultura de la Información',
      description: 'Registro automático de qué operario realizó cada acción, cuándo y sobre qué activo, generando información cruzada valiosa.',
      icon: Activity,
      stat: '24/7',
      label: 'Monitoreo'
    },
    {
      title: 'Cronogramas Inteligentes',
      description: 'Programación de mantenimiento preventivo y rutinas de actividades por operario, optimizando la gestión del tiempo.',
      icon: Calendar,
      stat: 'Auto',
      label: 'Programación'
    }
  ];

  const adaptabilityFeatures = [
    'Módulos personalizables según industria',
    'Campos y formularios adaptados a tus necesidades',
    'Flujos de trabajo configurables',
    'Integraciones con sistemas existentes',
    'Dashboards personalizados por rol',
    'Escalable desde 10 hasta 100,000+ activos'
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
                <span className="text-[#007aed]"> Activos con RFID</span>
              </h1>
              
              <p className="text-lg text-[#0b194f]/70 mb-8 leading-relaxed">
                Trazabilidad completa, hoja de vida digital y control total sobre tus activos. 
                Software adaptable que se moldea a las necesidades de tu empresa, integrando 
                operarios, mantenimientos y costos en una sola plataforma.
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
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
                  alt="Asset Management"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#007aed]/20 to-transparent" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
              >
                <span className="text-sm font-bold text-[#007aed]">Trazabilidad Total</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ¿Qué es la Trazabilidad? */}
      <section className="py-20 px-6 lg:px-8 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b194f] mb-4">
              ¿Qué es la Trazabilidad?
            </h2>
            <p className="text-xl text-[#0b194f]/60 max-w-3xl mx-auto">
              Es la capacidad de seguir el historial, ubicación y trayectoria completa de un activo 
              a lo largo de su ciclo de vida en tu organización.
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
              Plataforma completa para la gestión inteligente de activos
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
                    <div className="absolute inset-0 bg-[#00ffd7] rounded-xl opacity-20" />
                    <div className="relative w-full h-full rounded-xl border-3 border-[#007aed] flex items-center justify-center bg-white">
                      <Icon className="w-7 h-7 text-[#007aed]" />
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
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#007aed] to-[#0b194f] rounded-full blur-md opacity-40" />
                      <div className="relative w-full h-full bg-gradient-to-br from-[#007aed] to-[#0b194f] rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
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
                El sistema registra automáticamente cada interacción: qué operario realizó qué acción, 
                sobre qué activo, cuándo y dónde. Esto genera datos valiosos para optimizar procesos 
                y tomar decisiones basadas en información real.
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
                    <span className="text-sm text-[#0b194f]/80">Cronograma de actividades por operario</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-[#0b194f]/80">Reportes y observaciones registradas</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#f5f7fa] rounded-2xl p-6">
                <h4 className="font-bold text-[#0b194f] mb-3">Registro Activos</h4>
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
                    <span className="text-sm text-[#0b194f]/80">Costos asociados detallados</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Costos Asociados */}
      <section className="py-20 px-6 lg:px-8 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b194f] mb-4">
              Control Total de Costos
            </h2>
            <p className="text-xl text-[#0b194f]/60">
              Asocia todos los costos a cada activo para tomar mejores decisiones
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-[#0b194f] mb-4 flex items-center gap-3">
                  <DollarSign className="w-6 h-6 text-[#007aed]" />
                  Costos por Activo
                </h3>
                <p className="text-[#0b194f]/70 mb-4">
                  Cada activo tiene asociados todos sus costos históricos:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#007aed] flex-shrink-0 mt-2" />
                    <span className="text-[#0b194f]/80"><strong>Mantenimientos:</strong> Preventivos y correctivos con mano de obra</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#007aed] flex-shrink-0 mt-2" />
                    <span className="text-[#0b194f]/80"><strong>Repuestos:</strong> Piezas y componentes reemplazados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#007aed] flex-shrink-0 mt-2" />
                    <span className="text-[#0b194f]/80"><strong>Insumos:</strong> Consumibles utilizados en mantenimientos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#007aed] flex-shrink-0 mt-2" />
                    <span className="text-[#0b194f]/80"><strong>Tiempo de inactividad:</strong> Costos asociados a paradas</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#007aed] to-[#0b194f] rounded-2xl p-6 shadow-lg text-white">
                <h4 className="font-bold mb-3">Reportes Claros</h4>
                <p className="text-white/90 leading-relaxed">
                  Genera reportes detallados de costos por activo, departamento o categoría. 
                  Identifica qué activos consumen más recursos y optimiza tu presupuesto.
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
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop"
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
                  Software Adaptable a tu Empresa
                </h2>
                <p className="text-lg text-[#0b194f]/70 leading-relaxed mb-8">
                  No adaptamos tu empresa al software, adaptamos el software a tu empresa. 
                  Cada implementación es única, moldeada según tus necesidades específicas.
                </p>
              </div>

              <div className="bg-[#f5f7fa] rounded-2xl p-6">
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
                  Analizamos tus procesos actuales, identificamos necesidades específicas y 
                  configuramos el software con los módulos exactos que necesitas. Habilitamos, 
                  modificamos y adaptamos funcionalidades para tu operación.
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
              ¿Listo para transformar tu gestión de activos?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Descubre cómo nuestro software adaptable puede revolucionar el control 
              de activos en tu empresa.
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
