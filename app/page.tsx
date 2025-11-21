'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { tools, categories } from '@/data/tools'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredTools = selectedCategory === 'All' 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory)

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo/Brand */}
            <motion.div
              className="inline-block mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-7xl md:text-9xl font-bold mb-4 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  AInternals
                </span>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Developer Tools That Actually Make Your Day Better
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              We build tools that solve real problems you face every day. Simple to use, easy to deploy, and genuinely useful.
              <span className="text-gray-400 text-lg block mt-2">Free forever.</span>
            </motion.p>

            {/* Vision & Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mb-16 max-w-2xl mx-auto"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
                <h3 className="text-2xl font-bold text-white mb-6">What We Believe In</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="text-gray-200 text-lg font-semibold block">Solve Real Problems</span>
                      <span className="text-gray-400 text-sm">Every tool addresses actual challenges you face daily. Practical solutions that developers genuinely need and will use.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="text-gray-200 text-lg font-semibold block">Fun to Build</span>
                      <span className="text-gray-400 text-sm">Enjoyable projects that keep us engaged and constantly learning. Great tools come from passionate creators.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="text-gray-200 text-lg font-semibold block">Easy to Launch</span>
                      <span className="text-gray-400 text-sm">Simple deployment with minimal setup. Just open the tool and start using it—no complicated installation required.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="text-gray-200 text-lg font-semibold block">Portfolio-Worthy Quality</span>
                      <span className="text-gray-400 text-sm">Well-crafted projects built with care, thoughtful UX, and professional standards that showcase attention to detail.</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mb-12"
            >
              <p className="text-gray-400 text-sm mb-4">Built by a developer who cares about solving real problems</p>
              <a 
                href="https://www.linkedin.com/in/humanxai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold text-xl hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Connect on LinkedIn
              </a>
            </motion.div>

            {/* Social Proof / Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm mb-16"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span>Built by developers, for developers</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <span>Fast, simple, powerful</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span>Free to start</span>
              </div>
            </motion.div>

            {/* Tools Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="w-full max-w-7xl mx-auto"
            >
              {/* Section Header with Gradient Background */}
              <div className="relative mb-12 text-center">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.6 }}
                  >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                      <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Developer Tools
                      </span>
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl mb-2">
                      {tools.length} tool{tools.length !== 1 ? 's' : ''} and counting
                    </p>
                    <p className="text-gray-400 text-sm md:text-base">
                      Browse by category or explore all tools to find what you need
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Category Filter - Redesigned */}
              <div className="mb-10">
                <p className="text-gray-400 text-sm text-center mb-4">Filter by Category</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 text-sm ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30 border border-blue-400/50'
                          : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10 hover:border-white/20'
                      }`}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Tools Count Indicator */}
              {selectedCategory !== 'All' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-6"
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-300 rounded-full text-sm border border-blue-500/20">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                    {filteredTools.length} tool{filteredTools.length !== 1 ? 's' : ''} in {selectedCategory}
                  </span>
                </motion.div>
              )}

              {/* Tools Grid - Enhanced Design */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTools.map((tool, index) => (
                  <motion.a
                    key={tool.id}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 + index * 0.05, duration: 0.4 }}
                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:from-white/10 hover:to-white/5 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300"></div>
                    
                    <div className="relative">
                      {/* Status Badge */}
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          {tool.status === 'live' && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/20 text-green-300 text-xs font-semibold rounded-full border border-green-500/30">
                              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                              Live
                            </span>
                          )}
                          {tool.status === 'coming-soon' && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-semibold rounded-full border border-amber-500/30">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                              </svg>
                              Coming Soon
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Tool Info */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-300">
                          {tool.name}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                          {tool.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {tool.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-lg border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Launch Button */}
                      <div className="flex items-center justify-between pt-3 border-t border-white/5 group-hover:border-white/10 transition-colors">
                        <span className="text-gray-400 text-xs font-medium group-hover:text-blue-300 transition-colors">
                          {tool.status === 'live' ? 'Launch Tool' : 'Notify Me'}
                        </span>
                        <svg className="w-5 h-5 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Coming Soon Message */}
              {filteredTools.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
                >
                  <svg className="w-16 h-16 mx-auto mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                  <p className="text-gray-400 text-lg font-medium">No tools in this category yet</p>
                  <p className="text-gray-500 text-sm mt-2">Check back soon! We're constantly adding new tools.</p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="relative mt-20 pb-8 text-center"
        >
          <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm mb-4">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            <a href="/cookies" className="hover:text-white transition-colors">Cookies</a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 AInternals. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </main>
  )
}
