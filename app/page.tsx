"use client"
import { useEffect, useState } from "react"
import GlassNavbar from "@/components/navigation/GlassNavbar"
import HeroSection from "@/components/hero/HeroSection"
import FeatureGrid from "@/components/features/FeatureGrid"
import SolutionsSection from "@/components/features/SolutionsSection"
import TechSection from "@/components/sections/TechSection"
import ClientsSection from "@/components/sections/ClientsSection"
import ProcessSection from "@/components/sections/ProcessSection"
import CTASection from "@/components/sections/CTASection"
import Footer from "@/components/footer/Footer"

export default function Page() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <GlassNavbar />
      <main>
        <HeroSection />
        <FeatureGrid />
        <SolutionsSection />
        <TechSection />
        <ClientsSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}