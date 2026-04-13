"use client"
import React, { useEffect } from 'react';
import Interactive3DBackground from '@/components/backgrounds/Interactive3DBackground';
import GlassNavbar from '@/components/navigation/GlassNavbar';
import HeroSection from '@/components/hero/HeroSection';
import ClientsSection from '@/components/sections/ClientsSection';
import FeatureGrid from '@/components/features/FeatureGrid';
import SolutionsSection from '@/components/features/SolutionsSection';
import TechSection from '@/components/sections/TechSection';
import ProcessSection from '@/components/sections/ProcessSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/footer/Footer';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Interactive 3D Background */}
      <Interactive3DBackground />
      
      {/* Navigation */}
      <GlassNavbar />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <FeatureGrid />
        <SolutionsSection />
        <TechSection />
        <ClientsSection />
        <ProcessSection />
        <CTASection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
