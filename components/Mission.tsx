'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Mission() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="min-h-screen flex items-center py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Mission</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl p-12 md:p-16 shadow-2xl border border-gray-100"
        >
          <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed text-center font-light mb-8">
            Build the essential utilities that{' '}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              millions of AI developers
            </span>{' '}
            use daily—making AI development transparent, debuggable, and delightful.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Solve Real Problems</h3>
                <p className="text-gray-600">
                  Address the daily challenges AI developers face—debugging opaque models, tracking costs, and ensuring reliability
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Instant Value</h3>
                <p className="text-gray-600">
                  Deliver tools that work immediately, requiring minimal setup and providing clear, actionable insights from day one
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Build for Scale</h3>
                <p className="text-gray-600">
                  Create infrastructure that grows from solo developers to enterprise teams, maintaining simplicity at every stage
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Foster Community</h3>
                <p className="text-gray-600">
                  Build in public, listen to developers, and create tools that become indispensable to the AI community
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
