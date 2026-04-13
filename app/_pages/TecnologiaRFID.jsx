"use client"
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Radio, Zap, Shield, Gauge, Wifi, ChevronRight, Sparkles } from 'lucide-react';
import GlassNavbar from '@/components/navigation/GlassNavbar';
import Footer from '@/components/footer/Footer';

export default function TecnologiaRFID() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const benefits = [
    {
      icon: Zap,
      title: 'Lectura Rápida',
      description: 'Identifica múltiples tags simultáneamente en fracciones de segundo, sin necesidad de contacto físico ni línea de visión directa.'
    },
    {
      icon: Shield,
      title: 'Alta Precisión',
      description: 'Precisión de lectura del 99.9% con capacidad de almacenar información detallada en cada tag RFID.'
    },
    {
      icon: Gauge,
      title: 'Largo Alcance',
      description: 'Lectura a distancia de hasta 12 metros dependiendo del tipo de tag y configuración del sistema.'
    },
    {
      icon: Wifi,
      title: 'Sin Línea de Visión',
      description: 'A diferencia de códigos de barras, los tags RFID pueden leerse a través de materiales como cartón, plástico y tela.'
    },
    {
      icon: Shield,
      title: 'Durabilidad',
      description: 'Tags resistentes a condiciones extremas: agua, polvo, temperatura, vibraciones y productos químicos.'
    },
    {
      icon: Sparkles,
      title: 'Automatización Total',
      description: 'Elimina procesos manuales permitiendo rastreo automático y actualización en tiempo real de inventarios.'
    }
  ];

  const applications = [
    {
      title: 'Gestión de Inventarios',
      description: 'Control preciso de stock en tiempo real, reduciendo pérdidas y optimizando reposiciones.',
      industries: ['Retail', 'Manufactura', 'Logística']
    },
    {
      title: 'Rastreo de Activos',
      description: 'Localización instantánea de equipos, herramientas y maquinaria en instalaciones grandes.',
      industries: ['Hospitales', 'Clubes', 'Construcción']
    },
    {
      title: 'Control de Acceso',
      description: 'Identificación automática de personal y visitantes con registro de entrada/salida.',
      industries: ['Oficinas', 'Eventos', 'Seguridad']
    },
    {
      title: 'Trazabilidad',
      description: 'Seguimiento completo del ciclo de vida de productos desde fabricación hasta entrega.',
      industries: ['Farmacéutica', 'Alimenticia', 'Textil']
    }
  ];

  const rfidTypes = [
    {
      type: 'NFC',
      frequency: '13.56 MHz',
      range: 'Hasta 30 cm',
      bestFor: 'Control de Activos y Maquinaria',
      description: 'Ideal para registro individual de activos. Requiere proximidad para lectura, lo que garantiza precisión en el control.',
      useCases: ['Maquinaria pesada', 'Equipos médicos', 'Herramientas especializadas', 'Control de acceso'],
      color: 'from-[#007aed] to-[#0b194f]'
    },
    {
      type: 'HF / UHF',
      frequency: '860-960 MHz',
      range: 'Hasta 12m',
      bestFor: 'Inventario Masivo',
      description: 'Lectura rápida y a distancia. Perfecta para escanear múltiples items simultáneamente.',
      useCases: ['Retail', 'Logística', 'Almacenes', 'Cadena de suministro'],
      color: 'from-[#00ffd7] to-[#007aed]'
    }
  ];

  const readers = [
    {
      name: 'Lector Pistola',
      description: 'Portátil y ergonómico. Ideal para inventarios móviles y lecturas en campo.',
      image: 'https://nwzimg.wezhan.net/contents/sitefiles3609/18047387/images/11199455.jpg',
      features: ['Portátil', 'Batería recargable', 'Pantalla integrada', 'Bluetooth/WiFi']
    },
    {
      name: 'Lector HF Bluetooth',
      description: 'Lector de alta frecuencia con antena circular central. Perfecto para puntos fijos de lectura.',
      image: 'https://www.srkinnovations.com/cdn/shop/files/SRK-UBR90H_UHF_Bluetooth_reader_2048x.jpg?v=1755162757',
      features: ['Antena circular', 'Lectura precisa', 'Montaje fijo', 'Conexión USB/Ethernet']
    },
    {
      name: 'Lector Plug & Play',
      description: 'Instalación simple, conexión directa. Listo para usar sin configuración compleja.',
      image: 'https://m.media-amazon.com/images/I/41K5kpBoE0L.jpg',
      features: ['Instalación rápida', 'Configuración automática', 'Compatibilidad universal', 'Sin software adicional']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <GlassNavbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-[#f5f7fa] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-extrabold text-[#0b194f] mb-6 leading-tight">
                Tecnología
                <span className="text-[#007aed]"> RFID</span>
              </h1>
              
              <p className="text-xl text-[#0b194f]/70 mb-8 leading-relaxed">
                <strong>Identificación por Radiofrecuencia</strong> - La tecnología que revoluciona 
                el rastreo y gestión de activos mediante ondas electromagnéticas, 
                permitiendo identificación automática sin contacto ni línea de visión.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="https://solution.murata.com/en-global/service/rfid-solution/asset/basic/img/img-basic01.jpg" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-[#00ffd7] text-[#0b194f] font-bold rounded-full shadow-lg hover:bg-[#049bdc] transition-colors flex items-center gap-2"
                  >
                    Contáctanos
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </a>
              </div>
            </motion.div>

            {/* RFID Animated Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] lg:h-[500px] flex items-center justify-center"
            >
              <style>{`
                @keyframes rfid-wave {
                  0% { transform: scale(0.6); opacity: 0.8; }
                  100% { transform: scale(2.2); opacity: 0; }
                }
                .rfid-wave {
                  animation: rfid-wave 2.4s ease-out infinite;
                  position: absolute;
                  border-radius: 50%;
                  border: 2px solid #00ffd7;
                }
                .rfid-wave:nth-child(2) { animation-delay: 0.6s; border-color: #007aed; }
                .rfid-wave:nth-child(3) { animation-delay: 1.2s; border-color: #00ffd7; opacity: 0.5; }
                .rfid-wave:nth-child(4) { animation-delay: 1.8s; border-color: #007aed; opacity: 0.3; }

                @keyframes rfid-tag-pulse {
                  0%, 100% { box-shadow: 0 0 0 0 rgba(0,255,215,0.5); }
                  50% { box-shadow: 0 0 0 8px rgba(0,255,215,0); }
                }
                .rfid-tag { animation: rfid-tag-pulse 2s ease-in-out infinite; }
              `}</style>

              {/* Ondas */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[0,1,2,3].map(i => (
                  <div
                    key={i}
                    className="rfid-wave"
                    style={{ width: 180, height: 180, animationDelay: `${i * 0.6}s` }}
                  />
                ))}
              </div>

              {/* Lector RFID central */}
              <div className="relative z-20">
                <div className="w-44 h-60 bg-gradient-to-br from-[#0b194f] to-[#007aed] rounded-2xl shadow-2xl border-2 border-[#00ffd7]/40 p-4 flex flex-col">
                  <div className="w-full flex-1 bg-[#00ffd7]/10 rounded-xl mb-3 border border-[#00ffd7]/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-[#00ffd7] text-xs font-mono mb-1 tracking-widest">LEYENDO...</div>
                      <div className="text-white text-3xl font-bold">24</div>
                      <div className="text-white/60 text-xs">Tags detectados</div>
                    </div>
                  </div>
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-1 bg-[#00ffd7] rounded-full" />
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="w-full h-5 bg-[#0b194f]/60 rounded border border-[#007aed]/30" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Tags flotando alrededor */}
              {[
                { x: -140, y: -70, rotate: -15 },
                { x: 140, y: -55, rotate: 12 },
                { x: -150, y: 65, rotate: 5 },
                { x: 145, y: 75, rotate: -18 },
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                  className="rfid-tag absolute top-1/2 left-1/2 w-20 h-11 bg-white rounded-lg shadow-lg border-2 border-[#007aed]/30 flex items-center justify-center p-2"
                  style={{ transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotate}deg)`, animationDelay: `${i * 0.5}s` }}
                >
                  <div className="w-full">
                    <div className="w-full h-1 bg-[#007aed]/40 rounded mb-1" />
                    <div className="w-2/3 h-1 bg-[#00ffd7]/50 rounded" />
                    <div className="w-1.5 h-1.5 bg-[#00ffd7] rounded-full absolute top-1.5 right-1.5" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b194f] mb-4">
              ¿Cómo funciona?
            </h2>
            <p className="text-xl text-[#0b194f]/60 max-w-3xl mx-auto">
              El sistema RFID opera mediante la comunicación inalámbrica entre tags y lectores
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Tag RFID',
                description: 'El tag contiene un microchip con información única y una antena. Se adhiere al objeto a rastrear.',
                image: 'https://static.ticimax.cloud/54431/Uploads/UrunResimleri/buyuk/rfgate-rfid-metal-ustu-uhf-varlik-etik-7b712-.jpg'
              },
              {
                step: '02',
                title: 'Lector RFID',
                description: 'El lector emite ondas de radio que activan el tag. El tag responde transmitiendo su información.',
                image: 'https://www.srkinnovations.com/cdn/shop/files/SRK-UBR90H_UHF_Bluetooth_reader_2048x.jpg?v=1755162757'
              },
              {
                step: '03',
                title: 'Procesamiento',
                description: 'La información se procesa en tiempo real y se integra con el software de gestión (SAMM).',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  {/* Image placeholder */}
                  <div className="h-48 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="p-8">
                    <div className="inline-block px-3 py-1 bg-[#00ffd7]/10 text-[#007aed] font-bold text-sm rounded-full mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-2xl font-bold text-[#0b194f] mb-4">{item.title}</h3>
                    <p className="text-[#0b194f]/60 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-8 h-8 text-[#007aed]/30" />
                  </div>
                )}
              </motion.div>
            ))}
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
              Ventajas de RFID
            </h2>
            <p className="text-xl text-[#0b194f]/60 max-w-3xl mx-auto">
              Por qué la tecnología RFID supera a métodos tradicionales como códigos de barras
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const styles = [
                { bg: 'bg-gradient-to-br from-[#007aed] to-[#0b194f]', iconBg: 'bg-white/20', iconColor: 'text-white' },
                { bg: 'bg-white border-2 border-[#00ffd7]/30', iconBg: 'bg-[#00ffd7]/10', iconColor: 'text-[#007aed]' },
                { bg: 'bg-gradient-to-br from-[#00ffd7]/10 to-[#007aed]/10 border border-[#007aed]/20', iconBg: 'bg-[#007aed]', iconColor: 'text-white' }
              ];
              const style = styles[index % 3];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${style.bg} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className={`w-14 h-14 rounded-full ${style.iconBg} flex items-center justify-center mb-6`}>
                    <Icon className={`w-7 h-7 ${style.iconColor}`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${index % 3 === 0 ? 'text-white' : 'text-[#0b194f]'}`}>
                    {benefit.title}
                  </h3>
                  <p className={`leading-relaxed ${index % 3 === 0 ? 'text-white/80' : 'text-[#0b194f]/60'}`}>
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tipos de RFID */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b194f] mb-4">
              ¿Cuál se adapta mejor a tu empresa?
            </h2>
            <p className="text-xl text-[#0b194f]/60">
              Elige la tecnología RFID según tu necesidad específica
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {rfidTypes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${item.color} rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2`}
              >
                <h3 className="text-3xl font-bold mb-2">{item.type}</h3>
                <p className="text-white/70 text-sm mb-6">{item.frequency}</p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
                  <p className="text-sm text-white/70 mb-2">Mejor para</p>
                  <p className="text-2xl font-bold">{item.bestFor}</p>
                </div>

                <p className="text-white/90 mb-6 leading-relaxed">{item.description}</p>

                <div className="space-y-2">
                  <p className="text-sm text-white/70 mb-3">Casos de uso:</p>
                  <div className="flex flex-wrap gap-2">
                    {item.useCases.map((useCase, i) => (
                      <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20 flex justify-between items-center">
                  <div>
                    <p className="text-sm text-white/70">Alcance</p>
                    <p className="font-bold text-lg">{item.range}</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-white/40" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Lectores Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b194f] mb-4">
              Tipos de Lectores RFID
            </h2>
            <p className="text-xl text-[#0b194f]/60">
              Hardware especializado para cada necesidad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {readers.map((reader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-56 overflow-hidden">
                  <img src={reader.image} alt={reader.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#0b194f] mb-3">{reader.name}</h3>
                  <p className="text-[#0b194f]/60 mb-6 leading-relaxed">{reader.description}</p>
                  
                  <div className="space-y-2">
                    {reader.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00ffd7]" />
                        <span className="text-sm text-[#0b194f]/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Aplicaciones */}
      <section className="py-20 px-6 lg:px-8 bg-[#0b194f]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Aplicaciones de RFID
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Soluciones RFID adaptadas a diferentes industrias y necesidades
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{app.title}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{app.description}</p>
                <div className="flex flex-wrap gap-2">
                  {app.industries.map((industry, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#00ffd7]/20 text-[#00ffd7] rounded-full text-sm font-medium"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-[#007aed] to-[#0b194f] relative overflow-hidden">
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
              ¿Listo para implementar RFID?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Nuestro equipo de expertos te guiará en la implementación de la solución RFID 
              perfecta para tu negocio.
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
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

