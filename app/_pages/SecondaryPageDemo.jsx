"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowLeft, CheckCircle2, Clock, BarChart2, Zap, Shield, Users } from 'lucide-react';
import GlassNavbar from '../components/navigation/GlassNavbar';
import Footer from '../components/footer/Footer';
import { createPageUrl } from '@/utils';
import { Link } from 'react-router-dom';

// ─── DATOS DE LA PÁGINA SECUNDARIA ───────────────────────────────────────────
const DEMO_SECONDARY = {
  slug: 'auditorias-rfid',
  title: 'Auditorías de Activos con RFID: Inventarios 25x Más Rápidos',
  meta_description: 'Cómo realizar auditorías de activos físicos con tecnología RFID: reduce tiempos de inventario hasta 25 veces, elimina errores manuales y genera reportes automáticos.',
  pillar_link: {
    text: 'Gestión de Activos con Tecnología RFID',
    href: createPageUrl('PillarPageDemo'),
  },
  cta_text: 'Contáctanos',
  steps: [
    { number: '01', title: 'Instalación de lectores fijos', description: 'Se instalan antenas RFID en los puntos clave: entradas, salidas y áreas de almacenamiento.' },
    { number: '02', title: 'Etiquetado de activos', description: 'Cada activo recibe una etiqueta RFID única con la información registrada en SAMM.' },
    { number: '03', title: 'Lectura masiva automática', description: 'El lector detecta y registra cientos de activos simultáneamente en segundos.' },
    { number: '04', title: 'Reporte instantáneo', description: 'SAMM genera automáticamente el informe de auditoría con faltantes, sobrantes y ubicaciones.' },
  ],
  benefits: [
    { icon: Clock, value: '25x', label: 'Más rápido que el conteo manual' },
    { icon: BarChart2, value: '99.9%', label: 'Precisión en inventarios' },
    { icon: Zap, value: '<1 min', label: 'Para auditar 500 activos' },
    { icon: Shield, value: '0', label: 'Errores de transcripción' },
  ],
  content_sections: [
    { type: 'heading2', content: '¿Por Qué las Auditorías Manuales Están Obsoletas?' },
    { type: 'paragraph', content: 'Los inventarios tradicionales con planillas y escáneres de código de barras consumen días de trabajo operativo, generan errores de transcripción y requieren detener la operación. Con RFID, el mismo proceso se completa en minutos sin interrumpir el flujo de trabajo.' },
    { type: 'heading2', content: 'Tipos de Auditorías que Puedes Realizar con RFID' },
    { type: 'heading3', content: 'Auditoría Express (Recuento Rápido)' },
    { type: 'paragraph', content: 'Un operario recorre las instalaciones con un lector móvil RFID. El sistema registra automáticamente cada activo detectado y compara contra el inventario esperado, marcando faltantes en tiempo real.' },
    { type: 'heading3', content: 'Auditoría por Zonas (Perimetral)' },
    { type: 'paragraph', content: 'Lectores fijos instalados en puertas y accesos detectan automáticamente el ingreso y salida de activos. Ideal para bodegas grandes o plantas industriales con múltiples áreas.' },
    { type: 'heading3', content: 'Auditoría Programada (Compliance)' },
    { type: 'paragraph', content: 'SAMM permite configurar auditorías automáticas periódicas con alertas para activos que no han sido detectados en un tiempo definido. Cumplimiento normativo sin esfuerzo manual.' },
    { type: 'heading2', content: 'Reportes Automáticos Post-Auditoría' },
    { type: 'paragraph', content: 'Cada auditoría genera automáticamente un informe con activos encontrados, faltantes, ubicaciones actuales, variaciones vs. inventario anterior y responsables por área. Exportable a PDF, Excel o directo al ERP.' },
  ],
  related_links: [
    { text: 'Gestión de Activos con RFID', href: createPageUrl('PillarPageDemo'), description: 'Guía completa sobre trazabilidad y control de activos físicos.', isPillar: true, image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80' },
    { text: 'Etiquetas RFID Industriales', href: '#', description: 'Tags resistentes para cualquier entorno industrial.', image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80' },
    { text: 'Lectores RFID para Activos Fijos', href: '#', description: 'Hardware para lectura masiva en bodegas y plantas.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  ],
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  { question: '¿Necesito detener la operación para hacer una auditoría RFID?', answer: 'No. Las auditorías con RFID se realizan mientras la operación continúa normal. Los lectores detectan los activos sin interrumpir procesos productivos.' },
  { question: '¿Cuánto tiempo toma auditar 1.000 activos?', answer: 'Con RFID, un inventario de 1.000 activos toma entre 5 y 15 minutos, dependiendo de la infraestructura instalada. Comparado con 2-3 días de trabajo manual.' },
  { question: '¿El reporte cumple con normas de auditoría contable?', answer: 'Sí. SAMM genera reportes con marca de tiempo, usuario responsable y firma digital, válidos para auditorías contables y de compliance bajo normas NIIF e ISO.' },
];

function FaqItem({ item, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 group">
        <span className="text-[#0b194f] font-semibold text-base group-hover:text-[#007aed] transition-colors">{item.question}</span>
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.25 }} className="flex-shrink-0 w-7 h-7 rounded-full bg-[#007aed]/10 flex items-center justify-center">
          <Plus className="w-4 h-4 text-[#007aed]" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="answer" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }} className="overflow-hidden">
            <p className="px-6 pb-5 text-[#0b194f]/65 leading-relaxed text-base border-t border-gray-100 pt-4">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────
function CtaSection() {
  return (
    <div className="my-16 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b194f] to-[#007aed] p-10 text-white shadow-2xl">
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/5 rounded-full" />
      <div className="absolute -bottom-14 -left-10 w-64 h-64 bg-[#00ffd7]/10 rounded-full" />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#00ffd7]/20 rounded-full px-4 py-1 mb-4">
            <span className="w-2 h-2 bg-[#00ffd7] rounded-full animate-pulse" />
            <span className="text-[#00ffd7] text-xs font-bold uppercase tracking-widest">Habla con un experto</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2 leading-tight">¿Quieres auditorías 25x más rápidas<br className="hidden md:block" /> en tu empresa?</h2>
          <p className="text-white/70 text-base max-w-md">Cuéntanos tu caso y hacemos un diagnóstico gratuito de cómo optimizar tus auditorías de activos.</p>
        </div>
        <div className="flex-shrink-0 flex flex-col items-center gap-3">
          <a href="https://wa.me/573117001527" target="_blank" rel="noopener noreferrer"
            className="px-10 py-4 bg-[#00ffd7] text-[#0b194f] font-extrabold rounded-full text-lg hover:scale-105 transition-transform shadow-lg whitespace-nowrap"
            style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            {DEMO_SECONDARY.cta_text} →
          </a>
          <span className="text-white/40 text-xs">Hacemos un diagnóstico de tu empresa gratis</span>
        </div>
      </div>
    </div>
  );
}

// ─── PÁGINA PRINCIPAL ─────────────────────────────────────────────────────────
export default function SecondaryPageDemo() {
  const page = DEMO_SECONDARY;
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <GlassNavbar />

      {/* Barra de progreso */}
      <div className="fixed top-[64px] left-0 w-full h-[3px] z-[100] bg-gray-200">
        <div className="h-full bg-[#007aed] transition-all duration-100" style={{ width: `${scrollProgress}%` }} />
      </div>

      <div className="pt-24 pb-20 max-w-4xl mx-auto px-6">



        {/* ── HERO COMPACTO ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
          <span className="inline-block bg-[#007aed]/10 text-[#007aed] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Auditorías de Activos
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0b194f] leading-tight mb-4" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            {page.title}
          </h1>
          <p className="text-[#0b194f]/60 text-lg leading-relaxed max-w-2xl mb-6">{page.meta_description}</p>
          <a href="https://wa.me/573117001527" target="_blank" rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-[#00b4ff] text-[#0b194f] font-extrabold rounded-full text-base hover:scale-105 transition-transform shadow-lg"
            style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            {page.cta_text} →
          </a>
        </motion.div>

        {/* ── IMAGEN HERO ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mb-12 rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80"
            alt="Auditoría de activos con tecnología RFID en bodega industrial"
            className="w-full h-64 md:h-80 object-cover"
          />
        </motion.div>

        {/* ── MÉTRICAS ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {page.benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-gradient-to-br from-[#0b194f] to-[#007aed] rounded-2xl p-5 text-white text-center shadow-lg">
                <Icon className="w-6 h-6 mx-auto mb-2 text-[#00ffd7]" />
                <div className="text-2xl font-extrabold">{b.value}</div>
                <div className="text-white/60 text-xs mt-1 leading-tight">{b.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* ── PASOS / PROCESO ── */}
        <div className="mb-14">
          <h2 className="text-2xl font-extrabold text-[#0b194f] mb-6" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Cómo Funciona una Auditoría RFID
          </h2>
          <div className="space-y-4">
            {page.steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-5 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#007aed]/10 flex items-center justify-center">
                  <span className="text-[#007aed] font-extrabold text-sm">{step.number}</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#0b194f] mb-1">{step.title}</h3>
                  <p className="text-[#0b194f]/60 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── CONTENIDO PRINCIPAL ── */}
        <div className="border-l-2 border-gray-100 pl-6 mb-6">
          {page.content_sections.map((section, i) => {
            if (section.type === 'heading2') return (
              <h2 key={i} className="mt-10 mb-3 text-2xl font-bold text-[#007aed]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>{section.content}</h2>
            );
            if (section.type === 'heading3') return (
              <h3 key={i} className="mt-6 mb-2 text-lg font-semibold text-[#0b194f]/80">{section.content}</h3>
            );
            if (section.type === 'paragraph') return (
              <p key={i} className="text-[#0b194f]/70 leading-relaxed mb-4 text-base md:text-lg">{section.content}</p>
            );
            return null;
          })}
        </div>

        {/* ── CTA ── */}
        <CtaSection />

        {/* ── FAQ ── */}
        <div className="mb-14">
          <h2 className="text-2xl font-extrabold text-[#0b194f] mb-6 text-center" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Preguntas Frecuentes
          </h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => <FaqItem key={i} item={item} index={i} />)}
          </div>
        </div>

        {/* ── LINKS RELACIONADOS (incluyendo pilar) ── */}
        <div className="mt-10">
          <h3 className="text-lg font-bold text-[#0b194f] mb-5">Contenido relacionado</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {page.related_links.map((link, i) => (
              <motion.a
                key={i}
                href={link.isPillar ? undefined : link.href}
                as={link.isPillar ? undefined : undefined}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 group block no-underline ${link.isPillar ? 'border-[#007aed]/30 bg-[#007aed]/5 hover:shadow-lg' : 'border-gray-100 bg-white hover:shadow-md'}`}
                {...(link.isPillar ? { onClick: (e) => { e.preventDefault(); window.location.href = link.href; } } : { href: link.href })}
              >
                <div className="h-40 overflow-hidden relative">
                  <img src={link.image} alt={link.text} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b194f]/60 via-transparent to-transparent" />
                  {link.isPillar && (
                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest text-[#007aed] bg-white px-2 py-0.5 rounded-full">Página principal</span>
                  )}
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-bold text-[#0b194f] mb-1 leading-snug group-hover:text-[#007aed] transition-colors">{link.text}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{link.description}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-xs font-bold text-[#007aed] group-hover:gap-2 transition-all">Leer más →</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
