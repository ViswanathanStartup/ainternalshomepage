'use client'

import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          ← Back to Home
        </Link>
        
        <h1 className="text-5xl font-bold mb-4 gradient-text">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: November 19, 2025</p>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to AInternals ("we," "our," or "us"). We are committed to protecting your personal information 
              and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard 
              your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">2.1 Information You Provide</h3>
            <p>We collect information that you voluntarily provide to us, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email address (when you join our waitlist)</li>
              <li>Name and contact information (if provided through contact forms)</li>
              <li>Communications you send to us</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect certain information, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Send you updates about our products and services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Analyze usage patterns and optimize user experience</li>
              <li>Detect, prevent, and address technical issues and security threats</li>
              <li>Comply with legal obligations and enforce our terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">4. Sharing Your Information</h2>
            <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>With Your Consent:</strong> When you explicitly agree to share your information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information. 
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive 
              to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">6. Your Privacy Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us at privacy@ainternals.com
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">7. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and store certain information. 
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, 
              if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">8. Children's Privacy</h2>
            <p>
              Our services are not directed to children under the age of 13. We do not knowingly collect personal information 
              from children under 13. If you become aware that a child has provided us with personal information, please 
              contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">9. International Data Transfers</h2>
            <p>
              Your information may be transferred to and maintained on computers located outside of your state, province, 
              country, or other governmental jurisdiction where data protection laws may differ. We will take appropriate 
              steps to ensure that your personal information receives an adequate level of protection.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">10. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy 
              Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">11. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul className="list-none space-y-2 mt-4">
              <li>Email: privacy@ainternals.com</li>
              <li>Website: www.ainternals.com</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
