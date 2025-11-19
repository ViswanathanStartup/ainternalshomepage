'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Values() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      icon: '🎯',
      title: 'Developer-First',
      description: 'Built by developers, for developers. Every feature solves a real problem we\'ve experienced firsthand.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '💡',
      title: 'Radical Transparency',
      description: 'Make the invisible visible. From LLM calls to costs to model behavior—everything should be observable.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '⚡',
      title: 'Zero Friction',
      description: 'Tools should feel like magic. Install in seconds, integrate effortlessly, deliver value immediately.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: '🔬',
      title: 'Data-Driven',
      description: 'Every decision backed by metrics. Build what developers actually use, not what we think they need.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🚀',
      title: 'Ship Fast, Iterate',
      description: 'Launch early, gather feedback, improve rapidly. The best product is the one in developers\' hands.',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: '🌟',
      title: 'Quality Over Quantity',
      description: 'One exceptional tool beats ten mediocre ones. Focus on making each product indispensable.',
      gradient: 'from-violet-500 to-purple-500'
    }
  ]

  return (
    <section ref={ref} className="min-h-screen flex items-center py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-blue">Values</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we build
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl blur-xl"
                   style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>
              <div className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}>
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
