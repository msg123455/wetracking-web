"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin as LinkedinIcon } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
import { createPageUrl } from '@/utils';

const footerLinks = {
  servicios: [
    { label: 'Clubes', href: createPageUrl('Clubes') },
    { label: 'Industria Petrolera', href: createPageUrl('IndustriaPetrolera') },
    { label: 'Bodegas', href: createPageUrl('Bodegas') },
    { label: 'Manufactura', href: createPageUrl('Manufactura') }
  ],
  soluciones: [
    { label: 'Activos', href: createPageUrl ('Activos') },
    { label: 'Inventarios', href: createPageUrl ('Inventarios') },
    { label: 'Locativos', href: createPageUrl ('Locativos') }
  ],
  empresa: [
    { label: 'Nosotros', href: createPageUrl ('Nosotros') },
    { label: 'Tecnologia RFID', href: createPageUrl ('TecnologiaRFID')},
    { label: 'Estanterias Inteligentes', href: '#'},
    { label: 'Academia WeTracking', href: createPageUrl("Academia") },
  ],

  legal: [
    { label: 'Politica de Proteccion de Datos', href: '#' },
    { label: 'Cookies', href: '#' }
  ]
};

export default function Footer() {
  return (
    <footer className="relative py-20 bg-[#0b194f]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ffd7] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          {/* Brand column */}
          <div className="col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693c7294336e4d84a582bd72/5c8697f1d_Logo-WeTr-RGB_V-Original-Blanco1.png"
                alt="WeTracking"
                className="h-10 w-auto"
              />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/50 mb-6 max-w-xs leading-relaxed"
            >
              Transformando la gestión de activos con tecnología inteligente RFID. Haciendo el rastreo más inteligente, rápido y confiable.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 mb-6"
            >
              {[
                { Icon: InstagramIcon, href: 'https://www.instagram.com/wetracking_/' },
                { Icon: LinkedinIcon, href: 'https://www.linkedin.com/company/wetracking/posts/?feedView=all' },
                { Icon: FacebookIcon, href: 'https://www.facebook.com/profile.php?id=61568929877267' }
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-[#00ffd7] transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
            

          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links], columnIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (columnIndex + 1) }}
            >
              <h3 className="text-white font-semibold mb-4 capitalize">{title}</h3>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <a 
                      href={link.href}
                      className="text-white/50 hover:text-[#00ffd7] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10"
        >
          <p className="text-white/40 text-sm">
            © 2026 WeTracking. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-white/60 text-sm">Política de Privacidad</a>
            <a href="#" className="text-white/40 hover:text-white/60 text-sm">Configuración de Cookies</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
