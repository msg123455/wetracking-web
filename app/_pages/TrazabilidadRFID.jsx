"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import ReactMarkdown from 'react-markdown';
import GlassNavbar from '../components/navigation/GlassNavbar';
import Footer from '../components/footer/Footer';

// ─── FAQ ─────────────────────────────────────────────────────────────────────

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

function FaqSection({ items = [], faqTitle, faqSubtitle }) {
  if (items.length === 0) return null;
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
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b194f]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
          {faqTitle || 'Todo lo que necesitas saber sobre trazabilidad RFID'}
        </h2>
        <p className="text-[#0b194f]/50 mt-2 text-base max-w-lg mx-auto">
          {faqSubtitle || 'Resolvemos las dudas más comunes sobre cómo implementar trazabilidad en tu empresa.'}
        </p>
      </motion.div>
      <div className="max-w-3xl mx-auto space-y-3">
        {items.map((item, i) => (
          <FaqItem key={i} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}

// ─── TOC ─────────────────────────────────────────────────────────────────────
function TableOfContents({ headings, activeId }) {
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
            return (
              <li key={s.id}>
                <button
                  onClick={() => scrollTo(s.id)}
                  className={`w-full text-left text-sm transition-all duration-200 px-3 py-1.5 rounded-lg ${
                    isActive ? 'text-[#007aed] font-semibold bg-[#007aed]/5' : 'text-gray-500 hover:text-[#0b194f]'
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

// ─── MARKDOWN COMPONENTS ─────────────────────────────────────────────────────
const mdComponents = {
  p: ({ children }) => (
    <p className="text-[#0b194f]/70 leading-relaxed mb-4 text-base md:text-lg">{children}</p>
  ),
  strong: ({ children }) => (
    <strong className="font-bold text-[#0b194f]">{children}</strong>
  ),
  ul: ({ children }) => (
    <ul className="my-3 space-y-2 pl-2">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-3 space-y-2 pl-2 list-decimal list-inside">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="flex items-start gap-2 text-[#0b194f]/70 text-base">
      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#007aed] flex-shrink-0" />
      <span>{children}</span>
    </li>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-[#007aed] font-semibold hover:text-[#0b194f] hover:underline transition-colors"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
};

// ─── RENDER SECTION ───────────────────────────────────────────────────────────
const RenderSection = ({ section }) => {
  if (section.type === 'heading2') return (
    <h2 id={section.id} className="mt-10 mb-3 text-2xl md:text-3xl font-bold text-[#007aed] scroll-mt-28" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
      {section.content}
    </h2>
  );
  if (section.type === 'heading3') return (
    <h3 id={section.id} className="mt-6 mb-2 text-xl font-semibold text-[#0b194f]/80 scroll-mt-28">
      {section.content}
    </h3>
  );
  if (section.type === 'paragraph') return (
    <ReactMarkdown components={mdComponents}>{section.content}</ReactMarkdown>
  );
  if (section.type === 'image') return (
    <div className="my-8 rounded-2xl overflow-hidden shadow-md">
      <img src={section.content} alt={section.alt_text || ''} className="w-full object-cover max-h-80" />
    </div>
  );
  return null;
};

// ─── CTA ─────────────────────────────────────────────────────────────────────
function CtaSection({ ctaText }) {
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
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2 leading-tight">
            ¿Listo para tener trazabilidad total<br className="hidden md:block" /> en tu operación?
          </h2>
          <p className="text-white/70 text-base max-w-md">
            Agenda una reunión con nuestro equipo. Entendemos tu operación y hacemos un diagnóstico de tu empresa para ver qué solución se adapta mejor.
          </p>
        </div>
        <div className="flex-shrink-0 flex flex-col items-center gap-3">
          <a
            href="https://wa.me/573117001527"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-[#00ffd7] text-[#0b194f] font-extrabold rounded-full text-lg hover:scale-105 transition-transform shadow-lg whitespace-nowrap"
            style={{ fontFamily: 'Nunito Sans, sans-serif' }}
          >
            {ctaText} →
          </a>
          <span className="text-white/40 text-xs">Reunión para entender tu operación</span>
        </div>
      </div>
    </div>
  );
}

// ─── PÁGINA PRINCIPAL ─────────────────────────────────────────────────────────
export default function TrazabilidadRFID() {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Cargar desde BD por slug
  useEffect(() => {
    base44.entities.PillarPage.filter({ slug: 'trazabilidad', is_active: true }).then(results => {
      if (results.length > 0) setPage(results[0]);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!page) return;
    const headings = (page.content_sections || []).filter(s => s.type === 'heading2');
    const allIds = headings.map(h => h.id).filter(Boolean);
    const observers = [];
    allIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach(o => o.disconnect());
  }, [page]);

  if (loading) return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-[#007aed]/20 border-t-[#007aed] rounded-full animate-spin" />
    </div>
  );

  if (!page) return null;

  const sections = page.content_sections || [];
  const headings = sections.filter(s => s.type === 'heading2');

  return (
    <div className="bg-white min-h-screen">
      <GlassNavbar />

      {/* Barra de progreso */}
      <div className="fixed top-[64px] left-0 w-full h-[3px] z-[100] bg-gray-200">
        <div className="h-full bg-[#007aed] transition-all duration-100" style={{ width: `${scrollProgress}%` }} />
      </div>

      <div className="pt-24 pb-20 max-w-6xl mx-auto px-6">

        {/* ── HERO ── */}
        <div className="mb-12 relative overflow-hidden rounded-3xl min-h-[420px] flex items-center bg-gradient-to-br from-[#0b194f] via-[#0d2260] to-[#007aed]">
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#007aed]/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-[#00ffd7]/10 rounded-full blur-3xl" />
          <div className="relative z-10 w-full px-8 md:px-14 py-14">
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="text-white/50 text-sm mb-4 tracking-wide">Inicio › Soluciones › Trazabilidad RFID</div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
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
                  className="inline-block px-8 py-3.5 bg-[#00ffd7] text-[#0b194f] font-extrabold rounded-full text-base hover:scale-105 transition-transform shadow-xl"
                  style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                >
                  {page.cta_text} →
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── LAYOUT GRID ── */}
        <div className="grid gap-x-10 grid-cols-1 lg:grid-cols-[16rem_1fr]">

          {/* Sidebar TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <TableOfContents headings={headings} activeId={activeId} />
            </div>
          </aside>

          {/* Contenido principal */}
          <main className="min-w-0">
            <div className="pl-4 border-l-2 border-gray-100">
              {sections.map((section, i) => (
                <RenderSection key={i} section={section} />
              ))}
            </div>
          </main>

          {/* CTA full width */}
          <div className="col-span-1 lg:col-span-2 mt-4">
            <CtaSection ctaText={page.cta_text} />
          </div>
        </div>

        {/* FAQ */}
        <FaqSection items={page.faq_items || []} faqTitle={page.faq_title} faqSubtitle={page.faq_subtitle} />

        {/* Links internos — SecondaryPages del mismo cluster */}
        <InternalLinks clusterId={page.cluster_id} />

      </div>

      <Footer />
    </div>
  );
}

// ─── LINKS INTERNOS desde SecondaryPages ─────────────────────────────────────
function InternalLinks({ clusterId }) {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    if (!clusterId) return;
    base44.entities.SecondaryPage.filter({ cluster_id: clusterId, is_active: true }).then(pages => {
      setLinks(pages.slice(0, 3));
    });
  }, [clusterId]);

  if (links.length === 0) return null;

  return (
    <div className="mt-10">
      <h3 className="text-lg font-bold text-[#0b194f] mb-5">Explora más sobre trazabilidad RFID</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {links.map((link, i) => (
          <motion.a
            key={i}
            href={`/${link.slug}`}
            className="overflow-hidden bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group block no-underline border border-gray-100"
            whileHover={{ y: -4 }}
          >
            <div className="p-5">
              <h4 className="text-sm font-extrabold text-[#0b194f] mb-1.5 group-hover:text-[#007aed] transition-colors leading-snug" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                {link.title}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{link.meta_description}</p>
              <span className="inline-flex items-center gap-1 mt-3 text-xs font-bold text-[#007aed] group-hover:gap-2 transition-all">
                Leer más <span>→</span>
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
