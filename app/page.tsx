'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import Vision from '@/components/Vision'
import Mission from '@/components/Mission'
import Values from '@/components/Values'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-slate-50">
      <Hero />
      <Vision />
      <Mission />
      <Values />
      <CTA />
      <Footer />
    </main>
  )
}
