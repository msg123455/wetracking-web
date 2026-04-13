"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import GlassNavbar from '../components/navigation/GlassNavbar';
import Footer from '../components/footer/Footer';

const FAQ_ITEMS = [
  {
    question: '¿Qué tan rápido se puede implementar un sistema RFID?',
    answer: 'Una implementación estándar con SAMM toma entre 2 y 4 semanas, dependiendo del volumen de activos y la infraestructura existente. Nuestro equipo acompaña todo el proceso: desde el diagnóstico hasta la capacitación del equipo operativo.'
  },
  {
    question: '¿Las etiquetas RFID funcionan en ambientes industriales extremos?',
    answer: 'Sí. Contamos con etiquetas certificadas para temperaturas entre -40°C y +250°C, resistentes a humedad, aceites y vibraciones. Son ideales para industria petrolera, manufactura pesada y bodegas frigoríficas.'
  },
  {
    question: '¿Se puede integrar SAMM con nuestro ERP o sistema actual?',
    answer: 'SAMM ofrece APIs REST estándar que permiten conectarse con SAP, Oracle, Microsoft Dynamics y otros sistemas. La integración bidireccional sincroniza activos, ubicaciones y movimientos en tiempo real sin intervención manual.'
  },
  {
    question: '¿Qué pasa si una etiqueta RFID se daña o pierde?',
    answer: 'El sistema detecta automáticamente la ausencia del activo y genera una alerta. Las etiquetas de repuesto se programan en minutos y el historial del activo se mantiene íntegro en la plataforma.'
  },
  {
    question: '¿Cuántos activos puede gestionar la plataforma SAMM?',
    answer: 'SAMM está diseñado para escalar sin límites. Gestionamos desde 500 hasta más de 500.000 activos activos en múltiples sedes, con rendimiento consistente y reportes en tiempo real.'
  },
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
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 group"
      >
        <span className="text-[#0b194f] font-semibold text-base group-hover:text-[#007aed] transition-colors">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 w-7 h-7 rounded-full bg-[#007aed]/10 flex items-center justify-center"
        >
          <Plus className="w-4 h-4 text-[#007aed]" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-[#0b194f]/65 leading-relaxed text-base border-t border-gray-100 pt-4">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FaqSection() {
  return (
    <div className="mt-16 mb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <span className="inline-block bg-[#007aed]/10 text-[#007aed] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
          Preguntas frecuentes
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b194f]" style={{fontFamily:'Nunito Sans, sans-serif'}}>
          Todo lo que necesitas saber
        </h2>
        <p className="text-[#0b194f]/50 mt-2 text-base max-w-lg mx-auto">
          Resolvemos las dudas más comunes sobre la implementación de RFID en tu empresa.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-3">
        {FAQ_ITEMS.map((item, i) => (
          <FaqItem key={i} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}

// ─── DATOS DE EJEMPLO ────────────────────────────────────────────────────────
const DEMO_PAGE = {
  slug: 'gestion-de-activos-rfid',
  title: 'Gestión de Activos con Tecnología RFID: Guía Completa',
  meta_description: 'Aprende cómo la tecnología RFID transforma la gestión de activos: trazabilidad en tiempo real, reducción de pérdidas y control total de inventario.',
  cta_text: 'Contáctanos',
  content_sections: [
    { type: 'paragraph', content: 'La gestión de activos con RFID permite a las empresas rastrear, localizar y auditar cada activo físico en tiempo real, eliminando errores manuales y reduciendo pérdidas hasta un 30%.' },
    { type: 'heading2', id: 'que-es-rfid', content: '¿Qué es la Gestión de Activos con RFID?' },
    { type: 'paragraph', content: 'La tecnología RFID (Radio Frequency Identification) asigna un identificador único a cada activo mediante etiquetas electrónicas, permitiendo lecturas automáticas sin línea de visión y en múltiples objetos simultáneamente.' },
    { type: 'heading2', id: 'beneficios', content: 'Beneficios Clave de Implementar RFID en tu Empresa', section_link: { text: 'Software de Gestión de Activos SAMM', href: '/activos-software-samm', description: 'Centraliza, audita y controla todos tus activos fijos en tiempo real desde una sola plataforma.', image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80' } },
    { type: 'heading3', id: 'trazabilidad', content: 'Trazabilidad en Tiempo Real' },
    { type: 'paragraph', content: 'Conoce la ubicación exacta de cada activo en todo momento. Los lectores RFID fijos y móviles reportan automáticamente los movimientos al sistema SAMM, generando un historial completo.' },
    { type: 'heading3', id: 'reduccion-perdidas', content: 'Reducción de Pérdidas e Inventarios Fantasma' },
    { type: 'paragraph', content: 'Las auditorías con RFID son hasta 25 veces más rápidas que los conteos manuales. Detecta activos faltantes o desplazados al instante y activa alertas automáticas.' },
    { type: 'heading3', id: 'integracion-erp', content: 'Integración con Sistemas ERP y CMMS' },
    { type: 'paragraph', content: 'La plataforma SAMM se conecta con SAP, Oracle, y otros sistemas empresariales mediante APIs REST, sincronizando datos de activos sin intervención manual.' },
    { type: 'heading2', id: 'implementacion', content: 'Implementación de RFID: Paso a Paso', section_link: { text: 'Lectores RFID para Activos Fijos', href: '/lectores-rfid-activos-fijos', description: 'Hardware de última generación para lectura masiva en bodegas y plantas industriales.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' } },
    { type: 'paragraph', content: 'Una implementación exitosa de RFID requiere un diagnóstico inicial, selección del hardware adecuado, parametrización del software y capacitación del equipo operativo.' },
    { type: 'heading2', id: 'casos-uso', content: 'Casos de Uso por Industria', section_link: { text: 'Auditorías de Activos con RFID', href: '/auditorias-rfid', description: 'Realiza inventarios 25x más rápido con reportes automáticos y detección de activos faltantes.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80' } },
    { type: 'heading3', id: 'industria-petrolera', content: 'Industria Petrolera' },
    { type: 'paragraph', content: 'Control de herramientas, spools y maquinaria pesada en ambientes offshore y onshore, con etiquetas RFID resistentes a temperaturas extremas.' },
    { type: 'heading3', id: 'clubes-gimnasios', content: 'Clubes y Gimnasios' },
    { type: 'paragraph', content: 'Gestión de uniformes, equipos deportivos y lockers. Reduce pérdidas en vestuarios y automatiza el control de préstamos.' },
    { type: 'heading3', id: 'manufactura-bodegas', content: 'Manufactura y Bodegas' },
    { type: 'paragraph', content: 'Trazabilidad de materiales en proceso, WIP (Work in Progress) y productos terminados con integración directa a la línea de producción.' },
  ],
  internal_links: [
    { text: 'Software de Gestión de Activos SAMM', href: '/activos-software-samm', image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80', description: 'Plataforma cloud para centralizar, auditar y controlar todos tus activos fijos en tiempo real.' },
    { text: 'Lectores RFID para Activos Fijos', href: '/lectores-rfid-activos-fijos', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', description: 'Hardware de última generación para lectura masiva de etiquetas RFID en bodegas y plantas.' },
    { text: 'Etiquetas RFID Industriales', href: '/etiquetas-rfid-industriales', image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80', description: 'Tags resistentes a altas temperaturas, humedad y entornos agresivos para cualquier activo.' },
    { text: 'Auditorías de Activos con RFID', href: '/auditorias-rfid', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80', description: 'Realiza inventarios hasta 25 veces más rápido con lecturas automáticas y reportes al instante.' },
  ]
};



// ─── TOC (sticky sidebar) ─────────────────────────────────────────────────────
const headings = DEMO_PAGE.content_sections.filter(s => s.type === 'heading2');

function TableOfContents({ activeId }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Contenido</p>
      <nav>
        <ul className="space-y-1">
          {headings.map((s) => {
            const isActive = activeId === s.id;
            const isH3 = s.type === 'heading3';
            return (
              <li key={s.id}>
                <button
                  onClick={() => scrollTo(s.id)}
                  className={`w-full text-left text-sm transition-all duration-200 px-3 py-1.5 ${
                    isActive
                      ? 'text-[#007aed] font-semibold'
                      : 'text-gray-500 hover:text-[#0b194f]'
                  }`}
                >
                  {s.content}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

// ─── RENDER SECTION ───────────────────────────────────────────────────────────
const RenderSection = ({ section, inlineLink }) => {
  if (section.type === 'heading2') return (
    <h2 id={section.id} className="mt-10 mb-3 text-2xl md:text-3xl font-bold text-[#007aed] scroll-mt-28" style={{fontFamily:'Nunito Sans, sans-serif'}}>
      {section.content}
    </h2>
  );

  if (section.type === 'heading3') return (
    <h3 id={section.id} className="mt-6 mb-2 text-xl font-semibold text-[#0b194f]/80 scroll-mt-28">
      {section.content}
    </h3>
  );

  if (section.type === 'paragraph') return (
    <p className="text-[#0b194f]/70 leading-relaxed mb-4 text-base md:text-lg">
      {section.content}
      {inlineLink && (
        <> Conoce más sobre{' '}
          <a href={inlineLink.href} className="text-[#007aed] font-semibold hover:text-[#0b194f] hover:underline transition-colors">
            {inlineLink.text}
          </a>.
        </>
      )}
    </p>
  );

  if (section.type === 'image') return (
    <div className="my-8 rounded-2xl overflow-hidden shadow-md">
      <img src={section.content} alt={section.alt_text || ''} className="w-full object-cover max-h-80" />
    </div>
  );

  return null;
};

// ─── CTA SECTION ─────────────────────────────────────────────────────────────
function CtaSection({ ctaText }) {
  return (
    <div className="my-16 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b194f] to-[#007aed] p-10 text-white shadow-2xl">
      {/* Decorative circles */}
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/5 rounded-full" />
      <div className="absolute -bottom-14 -left-10 w-64 h-64 bg-[#00ffd7]/10 rounded-full" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#00ffd7]/20 rounded-full px-4 py-1 mb-4">
            <span className="w-2 h-2 bg-[#00ffd7] rounded-full animate-pulse" />
            <span className="text-[#00ffd7] text-xs font-bold uppercase tracking-widest">Habla con un experto</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2 leading-tight">
            ¿Listo para transformar el control<br className="hidden md:block" /> de tus activos?
          </h2>
          <p className="text-white/70 text-base max-w-md">
            Agenda una demostración personalizada y descubre cómo WeTracking reduce pérdidas hasta un 30% desde el primer mes.
          </p>
        </div>
        <div className="flex-shrink-0 flex flex-col items-center gap-3">
          <a
            href="https://wa.me/573117001527"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-[#00ffd7] text-[#0b194f] font-extrabold rounded-full text-lg hover:scale-105 transition-transform shadow-lg whitespace-nowrap"
            style={{fontFamily:'Nunito Sans, sans-serif'}}
          >
            {ctaText} →
          </a>
          <span className="text-white/40 text-xs">Hacemos un diagnóstico de tu empresa gratis</span>
        </div>
      </div>
    </div>
  );
}

// ─── PÁGINA PRINCIPAL ─────────────────────────────────────────────────────────
export default function PillarPageDemo() {
  const page = DEMO_PAGE;
  const [activeId, setActiveId] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Barra de progreso de scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver para detectar sección activa
  useEffect(() => {
    const allIds = headings.map(h => h.id).filter(Boolean);
    const observers = [];

    allIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <GlassNavbar />

      {/* ── BARRA DE PROGRESO (debajo del navbar) ── */}
      <div className="fixed top-[64px] left-0 w-full h-[3px] z-[100] bg-gray-200">
        <div
          className="h-full bg-[#007aed] transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="pt-24 pb-20 max-w-6xl mx-auto px-6">

        {/* ── HERO SECTION ── */}
        <div className="mb-12 relative overflow-hidden rounded-3xl min-h-[420px] flex items-center bg-gradient-to-br from-[#0b194f] via-[#0d2260] to-[#007aed]">
          {/* Decorative blobs */}
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#007aed]/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-[#00ffd7]/10 rounded-full blur-3xl" />

          <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-14 py-14 gap-10">
            {/* Left: text */}
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="text-white/50 text-sm mb-4 tracking-wide">Inicio › Soluciones › Gestión de Activos</div>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5"
                style={{fontFamily:'Nunito Sans, sans-serif'}}
              >
                {page.title}
              </h1>
              <p className="text-white/75 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                {page.meta_description}
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="https://wa.me/573117001527"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3.5 bg-[#00b4ff] text-[#0b194f] font-extrabold rounded-full text-base hover:scale-105 transition-transform shadow-xl"
                  style={{fontFamily:'Nunito Sans, sans-serif'}}
                >
                  {page.cta_text} →
                </a>
                <span className="text-white/40 text-sm">Sin costo · Sin compromiso</span>
              </div>
            </motion.div>


          </div>
        </div>

        {/* ── LAYOUT GRID: TOC + Contenido en fila 1, CTA full-width en fila 2 ── */}
        <div className="grid gap-x-10 grid-cols-1 lg:grid-cols-[16rem_1fr]">

          {/* ── SIDEBAR TOC - fila 1, columna 1 ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <TableOfContents activeId={activeId} />
            </div>
          </aside>

          {/* ── CONTENIDO PRINCIPAL - fila 1, columna 2 ── */}
          <main className="min-w-0">
            <div className="pl-4 border-l-2 border-gray-100">
              {page.content_sections.map((section, i) => {
                // Si el siguiente elemento es un párrafo y este H2 tiene link, pasárselo
                const nextSection = page.content_sections[i + 1];
                const inlineLink = section.type === 'heading2' && section.section_link && nextSection?.type === 'paragraph'
                  ? null // se pasa al párrafo siguiente
                  : undefined;

                // Si este párrafo viene después de un H2 con link
                const prevSection = page.content_sections[i - 1];
                const paragraphLink = section.type === 'paragraph' && prevSection?.type === 'heading2' && prevSection?.section_link
                  ? prevSection.section_link
                  : undefined;

                return <RenderSection key={i} section={section} inlineLink={paragraphLink} />;
              })}
            </div>
          </main>

          {/* ── CTA FULL WIDTH - fila 2, ambas columnas ── */}
          <div className="col-span-1 lg:col-span-2 mt-4">
            <CtaSection ctaText={page.cta_text} />
          </div>
        </div>

        {/* ── FAQ SECTION ── */}
        <FaqSection />

        {/* ── LINKS INTERNOS (full width) ── */}
        <div className="mt-10">
          <h3 className="text-lg font-bold text-[#0b194f] mb-5">Explora más sobre este tema</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {page.internal_links.slice(0, 3).map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                className="overflow-hidden bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group block no-underline border border-gray-100"
                whileHover={{ y: -4 }}
              >
                <div className="h-44 overflow-hidden relative">
                  <img src={link.image} alt={link.text} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b194f]/70 via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-extrabold text-[#0b194f] mb-1.5 group-hover:text-[#007aed] transition-colors leading-snug" style={{fontFamily:'Nunito Sans, sans-serif'}}>
                    {link.text}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{link.description}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-xs font-bold text-[#007aed] group-hover:gap-2 transition-all">
                    Leer más <span>→</span>
                  </span>
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
