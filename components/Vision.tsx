'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Vision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="vision" ref={ref} className="min-h-screen flex items-center py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-blue">Vision</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 md:p-16 shadow-xl"
        >
          <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed text-center font-light">
            To become the{' '}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              foundational infrastructure
            </span>{' '}
            that powers AI development worldwide—where every developer building with LLMs
            relies on our tools to{' '}
            <span className="font-semibold text-gray-900">
              inspect, understand, optimize, and deploy
            </span>{' '}
            their AI applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 hover:shadow-lg transition-shadow duration-300">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Universal</h3>
            <p className="text-gray-600">
              Essential tools that every AI developer needs, from day one to enterprise scale
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50 hover:shadow-lg transition-shadow duration-300">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Immediate</h3>
            <p className="text-gray-600">
              Value from the first minute of installation, seamlessly integrated into your workflow
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-pink-100 to-pink-50 hover:shadow-lg transition-shadow duration-300">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Foundational</h3>
            <p className="text-gray-600">
              Building blocks that enable the next generation of AI applications and innovation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
