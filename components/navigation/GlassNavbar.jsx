"use client"
import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Menu, X, ChevronDown, Droplet, Factory, Warehouse, Headphones, Dumbbell, Shirt, Package, Shield, MapPin, Grid3x3, Laptop, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const MagneticButton = ({ children, className, onClick }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    
    x.set(distX * 0.3);
    y.set(distY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={className}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

const NavLink = ({ children, href }) => {
  return (
    <a
      href={href}
      className="relative px-4 py-2 text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide group"
    >
      {children}
      <motion.span 
        className="absolute inset-0 border-2 border-[#00ffd7] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
      />
    </a>
  );
};

const DropdownMenu = ({ title, items, columns = 2 }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const minWidth = columns === 1 ? 'min-w-[300px]' : 'min-w-[600px]';
  const gridCols = columns === 1 ? 'grid-cols-1' : 'grid-cols-2';

  return (
    <div 
      className="relative group/menu"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="relative px-4 py-2 text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide group flex items-center gap-1">
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        <motion.span 
          className="absolute inset-0 border-2 border-[#00ffd7] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
        />
      </button>
      
      {/* Área invisible para mantener el menú abierto */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full h-2 z-40" />
      )}
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`absolute top-full left-0 mt-2 ${minWidth} bg-white rounded-3xl border border-[#0b194f]/10 shadow-2xl p-6 z-50`}
        >
          <div className={`grid ${gridCols} gap-3`}>
            {items.map((item, i) => {
              const IconComponent = item.icon;
              const isExternal = item.href.startsWith('http');
              const isHash = item.href.startsWith('#');
              const Component = (isExternal || isHash) ? 'a' : Link;
              const linkProps = (isExternal || isHash) ? { href: item.href } : { to: item.href };
              const externalProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};

              return (
                <Component
                  key={i}
                  {...linkProps}
                  {...externalProps}
                  className="group flex items-center gap-4 px-5 py-4 text-[#0b194f]/70 hover:text-[#0b194f] hover:bg-[#f5f7fa] rounded-2xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#f0f4f8] flex items-center justify-center group-hover:bg-[#e5edf5] transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-[#007aed]" />
                  </div>
                  <span className="font-semibold text-sm">{item.label}</span>
                </Component>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default function GlassNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const serviciosItems = [
    { label: 'Industria Petrolera', href: createPageUrl('IndustriaPetrolera'), icon: Droplet },
    { label: 'Clubes', href: createPageUrl('Clubes'), icon: Dumbbell },
    { label: 'Bodegas', href: createPageUrl('Bodegas'), icon: Warehouse },
    { label: 'Manufactura', href: createPageUrl('Manufactura'), icon: Factory },
  ];

  const solucionesItems = [
    { label: 'Activos', href: createPageUrl('Activos'), icon: Package },
    { label: 'Locativos', href: createPageUrl('Locativos'), icon: MapPin },
    { label: 'Inventarios', href: createPageUrl('Inventarios'), icon: Shield }
  ];

  const accesosItems = [
    { label: 'Estanterías Inteligentes', href: '#', icon: Grid3x3 },
    { label: 'Academia WeTracking', href: createPageUrl('Academia'), icon: GraduationCap }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="relative bg-[#0b194f]/90 backdrop-blur-xl px-6 py-4 border-b border-white/10 shadow-lg">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-[#00ffd7]/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
          
          <div className="max-w-7xl mx-auto flex items-center justify-between relative">
            {/* Logo */}
            <Link to={createPageUrl('Home')}>
              <motion.div 
                className="flex items-center gap-3 cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693c7294336e4d84a582bd72/5c8697f1d_Logo-WeTr-RGB_V-Original-Blanco1.png"
                  alt="WeTracking"
                  className="h-10 w-auto"
                  width="133"
                  height="40"
                  loading="eager"
                  fetchPriority="high"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              <DropdownMenu title="Servicios" items={serviciosItems} columns={2} />
              <DropdownMenu title="Soluciones" items={solucionesItems} columns={1} />
              <DropdownMenu title="Accesos" items={accesosItems} columns={1} />
              <Link to={createPageUrl('TecnologiaRFID')} className="relative px-4 py-2 text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide group">
                Tecnología RFID
                <motion.span className="absolute inset-0 border-2 border-[#00ffd7] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Link>
              <Link to={createPageUrl('Nosotros')} className="relative px-4 py-2 text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide group">
                Nosotros
                <motion.span className="absolute inset-0 border-2 border-[#00ffd7] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Link>
              <NavLink href="#blog">Blog</NavLink>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a href="https://wa.me/573117001527?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20las%20soluciones%20RFID%20de%20WeTracking" target="_blank" rel="noopener noreferrer">
                <MagneticButton
                  className="relative px-6 py-2.5 bg-[#00ffd7] text-[#0b194f] text-sm font-semibold rounded-full overflow-hidden group hover:bg-[#049bdc] transition-colors"
                >
                  <span className="relative z-10">Comenzar</span>
                </MagneticButton>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        className={`fixed top-20 left-0 right-0 z-40 ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="bg-[#0b194f]/95 backdrop-blur-xl p-6 border-b border-white/10 max-h-[80vh] overflow-y-auto">
          <div className="max-w-7xl mx-auto flex flex-col gap-4">
            <div>
              <p className="text-white/50 text-xs uppercase mb-2 px-4">Servicios</p>
              {serviciosItems.map((item, i) => {
                const isExternal = item.href.startsWith('#');
                const Component = isExternal ? 'a' : Link;
                const linkProps = isExternal ? { href: item.href } : { to: item.href };
                return (
                  <Component key={i} {...linkProps} className="block text-white/80 hover:text-white py-2 px-4 font-medium">{item.label}</Component>
                );
              })}
            </div>
            <div>
              <p className="text-white/50 text-xs uppercase mb-2 px-4">Soluciones</p>
              {solucionesItems.map((item, i) => (
                <a key={i} href={item.href} className="block text-white/80 hover:text-white py-2 px-4 font-medium">{item.label}</a>
              ))}
            </div>
            <div>
              <p className="text-white/50 text-xs uppercase mb-2 px-4">Accesos</p>
              {accesosItems.map((item, i) => (
                <a key={i} href={item.href} className="block text-white/80 hover:text-white py-2 px-4 font-medium">{item.label}</a>
              ))}
            </div>
            <Link to={createPageUrl('TecnologiaRFID')} className="text-white/80 hover:text-white py-2 px-4 font-medium">Tecnología RFID</Link>
            <Link to={createPageUrl('Nosotros')} className="text-white/80 hover:text-white py-2 px-4 font-medium">Nosotros</Link>
            <a href="#blog" className="text-white/80 hover:text-white py-2 px-4 font-medium">Blog</a>
            <a href="https://wa.me/573117001527?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20las%20soluciones%20RFID%20de%20WeTracking" target="_blank" rel="noopener noreferrer">
              <button className="mt-2 px-6 py-3 bg-[#00ffd7] text-[#0b194f] font-semibold rounded-full w-full">
                Comenzar
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
