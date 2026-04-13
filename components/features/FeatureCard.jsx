import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  gradient = 'from-[#00ffd7] to-[#007aed]',
  delay = 0,
  size = 'normal'
}) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 200 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  
  const rotateX = useTransform(springY, [-50, 50], [5, -5]);
  const rotateY = useTransform(springX, [-50, 50], [-5, 5]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const sizeClasses = {
    normal: 'col-span-1',
    wide: 'col-span-1 md:col-span-2',
    tall: 'col-span-1 row-span-2'
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX, 
        rotateY,
        transformPerspective: 1000
      }}
      className={`${sizeClasses[size]} group relative h-full`}
    >
      {/* Subtle glow effect on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.3 : 0 }}
        className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-r ${gradient} blur-md`}
      />
      
      {/* Card */}
      <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-[#e0e8f0] shadow-md overflow-hidden">
        {/* Background solid color on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.03 : 0 }}
          className={`absolute inset-0 bg-gradient-to-br ${gradient}`}
        />
        
        {/* Icon */}
        <motion.div
          animate={{ 
            scale: isHovered ? 1.05 : 1,
            rotate: isHovered ? 3 : 0
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-sm`}
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>
        
        {/* Content */}
        <h3 className="text-xl font-bold text-[#0b194f] mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-[#0b194f]/60 leading-relaxed">
          {description}
        </p>
        
        {/* Hover arrow */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
          className="absolute bottom-8 right-8"
        >
          <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${gradient} opacity-80 flex items-center justify-center`}>
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </motion.div>
        
        {/* Corner decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.02]">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <circle cx="100" cy="0" r="80" stroke="currentColor" strokeWidth="0.5" className="text-[#2d3e50]" />
            <circle cx="100" cy="0" r="60" stroke="currentColor" strokeWidth="0.5" className="text-[#2d3e50]" />
            <circle cx="100" cy="0" r="40" stroke="currentColor" strokeWidth="0.5" className="text-[#2d3e50]" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}