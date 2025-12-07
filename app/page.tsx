'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Shield, 
  Terminal, 
  Cpu, 
  Zap, 
  Server, 
  BookOpen, 
  ChevronRight, 
  Activity, 
  Lock,
  Smartphone
} from 'lucide-react';

export default function Home() {
  const [text, setText] = useState('');
  const [phase, setPhase] = useState(0);

  // Cycling Terminal Messages
  const terminalPhases = [
    "INITIALIZING MLOPS PIPELINE...",
    "CONTAINERIZING MODEL WEIGHTS...",
    "DEPLOYING TO PRODUCTION CLUSTER...",
    "SCANNING FOR PII LEAKAGE...",
    "VULNERABILITY DETECTED: PROMPT INJECTION",
    "APPLYING SECURITY PATCH...",
    "SYSTEM SECURE. DEPLOYMENT COMPLETE."
  ];

  useEffect(() => {
    let currentText = "";
    let phaseIndex = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const type = () => {
      const fullText = terminalPhases[phaseIndex];
      
      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
        setText(currentText);
      } else {
        currentText = fullText.substring(0, currentText.length + 1);
        setText(currentText);
      }

      let typeSpeed = isDeleting ? 20 : 50;

      if (!isDeleting && currentText === fullText) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentText === "") {
        isDeleting = false;
        phaseIndex = (phaseIndex + 1) % terminalPhases.length;
        setPhase(phaseIndex);
      }

      timeout = setTimeout(type, typeSpeed);
    };

    timeout = setTimeout(type, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/90 backdrop-blur-md fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <span className="text-gray-900 font-bold text-xl tracking-tight">AI Internals</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <Link href="/products" className="text-gray-600 hover:text-blue-600 transition-colors">Products</Link>
            <a href="#consulting" className="text-gray-600 hover:text-blue-600 transition-colors">Consulting</a>
            <a href="#training" className="text-gray-600 hover:text-blue-600 transition-colors">Training</a>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact Us</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[90vh] flex items-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">
          <div className="md:w-1/2 space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full text-sm text-blue-700 font-medium shadow-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span>For Everyone. From Enterprises to Individuals.</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600">
                Safe AI for All
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Empowering organizations and individuals to use AI safely and ship it confidently. From MLOps pipelines and production deployment to enterprise security, compliance, and personal privacy education — we make AI accessible, safe, and production-ready for everyone.
            </p>

            <div className="flex">
              <Link href="/products" className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl">
                <span>Explore Our Tools</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Visual Card */}
          <div className="md:w-1/2 mt-12 md:mt-0 w-full">
            <div className="relative bg-white border-2 border-gray-200 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-sm"></div>
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-sm"></div>
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-sm"></div>
                </div>
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider">AI Pipeline Status</div>
              </div>
              <div className="flex-1 font-mono text-sm mb-6">
                <p className="text-blue-600 font-semibold">▶ {text}<span className="animate-pulse">|</span></p>
              </div>
              <div className="grid grid-cols-3 gap-3 text-xs font-semibold">
                <div className={`rounded-lg p-3 text-center transition-all ${phase < 3 ? 'bg-gradient-to-br from-blue-50 to-blue-100 text-blue-700 border-2 border-blue-300' : 'bg-gray-50 text-gray-400 border border-gray-200'}`}>
                  <div className="text-lg mb-1">🔧</div>
                  <div>BUILD</div>
                </div>
                <div className={`rounded-lg p-3 text-center transition-all ${phase >= 3 && phase < 5 ? 'bg-gradient-to-br from-green-50 to-green-100 text-green-700 border-2 border-green-300' : 'bg-gray-50 text-gray-400 border border-gray-200'}`}>
                  <div className="text-lg mb-1">🛡️</div>
                  <div>SECURE</div>
                </div>
                <div className={`rounded-lg p-3 text-center transition-all ${phase >= 5 ? 'bg-gradient-to-br from-purple-50 to-purple-100 text-purple-700 border-2 border-purple-300' : 'bg-gray-50 text-gray-400 border border-gray-200'}`}>
                  <div className="text-lg mb-1">🚀</div>
                  <div>LAUNCH</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full text-sm text-blue-700 font-medium shadow-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span>In Active Development</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Tools to Use AI<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600">
                Safely & Responsibly
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're building essential infrastructure for teams deploying AI to production. Products focused on security, privacy, compliance, and operational excellence. Because shipping AI shouldn't mean compromising on safety.
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Security First</h3>
                <p className="text-sm text-gray-600">Guardrails and monitoring to prevent vulnerabilities</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border border-green-100">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Privacy Focused</h3>
                <p className="text-sm text-gray-600">Automatic PII detection and data protection</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border border-purple-100">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Always Compliant</h3>
                <p className="text-sm text-gray-600">Built-in compliance with GDPR and EU AI Act</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Consulting Section */}
      <section id="consulting" className="min-h-screen py-32 bg-gradient-to-br from-gray-50 to-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full text-sm text-blue-700 font-medium shadow-sm mb-6">
              <span>Professional Services</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Consulting</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Partner with our experts to build, secure, and scale your AI systems with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-16">
            <Link href="/consulting#engineering" className="bg-white p-10 rounded-2xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Cpu className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Engineering</h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                MLOps pipelines, performance optimization, and cloud architecture.
              </p>
              <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                <span>Learn more</span>
                <ChevronRight className="w-5 h-5" />
              </div>
            </Link>

            <Link href="/consulting#security" className="bg-white p-10 rounded-2xl border-2 border-gray-200 hover:border-green-500 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Security</h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                AI security audits, red teaming, and compliance assessments.
              </p>
              <div className="flex items-center text-green-600 font-semibold group-hover:gap-2 transition-all">
                <span>Learn more</span>
                <ChevronRight className="w-5 h-5" />
              </div>
            </Link>

            <Link href="/consulting#privacy" className="bg-white p-10 rounded-2xl border-2 border-gray-200 hover:border-purple-500 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <Lock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Privacy</h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Privacy-preserving AI, PII protection, and data governance.
              </p>
              <div className="flex items-center text-purple-600 font-semibold group-hover:gap-2 transition-all">
                <span>Learn more</span>
                <ChevronRight className="w-5 h-5" />
              </div>
            </Link>
          </div>

          <div className="text-center bg-white rounded-2xl p-10 max-w-4xl mx-auto shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-4xl mb-2">🎯</div>
                <p className="font-semibold text-gray-900 mb-2">Practical Solutions</p>
                <p className="text-gray-600 text-sm">Real-world approaches that work for your specific use case</p>
              </div>
              <div>
                <div className="text-4xl mb-2">🔍</div>
                <p className="font-semibold text-gray-900 mb-2">Transparent Process</p>
                <p className="text-gray-600 text-sm">Clear communication and honest assessments at every step</p>
              </div>
              <div>
                <div className="text-4xl mb-2">🤝</div>
                <p className="font-semibold text-gray-900 mb-2">Partnership Focused</p>
                <p className="text-gray-600 text-sm">We work alongside your team to build lasting capabilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="min-h-screen py-32 bg-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-purple-50 border border-purple-200 px-4 py-2 rounded-full text-sm text-purple-700 font-medium shadow-sm mb-6">
              <span>Education & Workshops</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Training</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Empower your team with cutting-edge AI skills through our comprehensive training programs.
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-16">
            <Link href="/training" className="bg-gradient-to-br from-purple-50 to-white p-10 rounded-2xl border-2 border-gray-200 hover:border-purple-500 hover:shadow-xl transition-all group block">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Corporate Training & Certification Programs</h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Hands-on workshops and certification programs designed to bring your team up to speed with modern AI development, deployment, and security practices.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Technical Training</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">MLOps fundamentals and best practices</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">Production AI deployment strategies</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">LLM fine-tuning and optimization</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">Model monitoring and observability</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Security & Compliance</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">AI security fundamentals</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">Privacy-preserving AI techniques</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">GDPR and EU AI Act compliance</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">Red teaming and adversarial testing</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-center text-purple-600 font-semibold group-hover:gap-2 transition-all">
                <span>Explore training programs</span>
                <ChevronRight className="w-5 h-5" />
              </div>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-gray-200 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">2-5 Days</div>
              <p className="text-gray-900 font-semibold mb-2">Workshop Duration</p>
              <p className="text-gray-600 text-sm">Flexible scheduling to fit your team</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-gray-200 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">On-site</div>
              <p className="text-gray-900 font-semibold mb-2">Training Options</p>
              <p className="text-gray-600 text-sm">Or virtual sessions available</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-gray-200 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">Certified</div>
              <p className="text-gray-900 font-semibold mb-2">Upon Completion</p>
              <p className="text-gray-600 text-sm">Industry-recognized certificates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Ready to build secure, scalable AI systems? Whether you need consulting, training, or our products — let's discuss how we can help you succeed.
          </p>
          <Link href="/contact" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
            Contact Us
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-16 border-t border-gray-200 text-center bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Terminal className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">AI Internals</span>
          </div>
          <p className="text-gray-600 mb-6">Transforming AI innovation into production reality</p>
          <p className="text-gray-500 text-sm">&copy; 2025 AI Internals, a SansqrTech Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
